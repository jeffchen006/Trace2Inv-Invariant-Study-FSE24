// Load dependencies
const { accounts, privateKeys, contract, web3 } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, constants, expectEvent, expectRevert, time } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS, MAX_UINT256 } = constants;

// Load compiled artifacts
const ERC20PresetMinterPauser = contract.fromArtifact('ERC20PresetMinterPauserMockUpgradeSafe');
const ExampleCoin = contract.fromArtifact('ExampleCoinMock');

var sign = require('./signature');

// Start test block
describe('ExampleCoin', function () {
    const [ deployer, other, another ] = accounts;

    const name = 'ExampleCoin';
    const symbol = 'WG';
    const decimals = new BN('6');

    beforeEach(async function () {
        // Deploy a new ControlledGluwacoin contract for each test
        this.baseToken = await ERC20PresetMinterPauser.new('Gluwacoin', 'GC', { from: deployer });
        // Deploy a new ExampleCoin contract for each test
        this.token = await ExampleCoin.new(name, symbol, this.baseToken.address, { from: deployer });
    });

    /* ERC20
    */
    it('token name is ' + name, async function () {
        expect(await this.token.name()).to.equal(name);
    });

    it('token symbol is ' + symbol, async function () {
        expect(await this.token.symbol()).to.equal(symbol);
    });

    it('token decimals are ' + decimals.toString(), async function () {
        expect(await this.token.decimals()).to.be.bignumber.equal(decimals.toString());
    });

    it('initial balance is 0', async function () {
        expect(await this.token.balanceOf(deployer)).to.be.bignumber.equal('0');
        expect(await this.token.balanceOf(other)).to.be.bignumber.equal('0');
        expect(await this.token.balanceOf(another)).to.be.bignumber.equal('0');
    });

    it('initial totalSupply is 0', async function () {
        expect(await this.token.totalSupply()).to.be.bignumber.equal('0');
    });

    it('token() returns baseToken address', async function () {
        expect(await this.token.token()).to.equal(this.baseToken.address);
    });
});

describe('ExampleCoin_Wrapper', function () {
    const [ deployer, other, another ] = accounts;
    const [ deployer_privateKey, other_privateKey, another_privateKey ] = privateKeys;

    const name = 'ExampleCoin';
    const symbol = 'WG';
    const decimals = new BN('18');

    const amount = new BN('5000');
    const fee = new BN('1');

    const WRAPPER_ROLE = web3.utils.soliditySha3('WRAPPER_ROLE');
    const RELAYER_ROLE = web3.utils.soliditySha3('RELAYER_ROLE');

    beforeEach(async function () {
        // Deploy a new ControlledGluwacoin contract for each test
        this.baseToken = await ERC20PresetMinterPauser.new('Gluwacoin', 'GC', { from: deployer });
        // Deploy a new ExampleCoin contract for each test
        this.token = await ExampleCoin.new(name, symbol, this.baseToken.address, { from: deployer });
    });

    /* Wrapper related
    */
    describe('mint test', async function () {
        // minter
        it('another can mint', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: minter });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.baseToken.balanceOf(this.token.address)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });

        // amount
        it('can mint MAX_UINT256', async function () {
            var baseToken_amount = MAX_UINT256;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: minter });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });
    
        it('can mint 0', async function () {
            var mint_amount = new BN('0');
            var minter = other;

            await this.token.mint(mint_amount, { from: minter });

            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });

        // allowance
        it('can mint less than allowance', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount.sub(new BN('1'));
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: minter });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });
    
        it('cannot mint more than allowance', async function () {
            var baseToken_amount = MAX_UINT256;
            var allowance_amount = amount;
            var mint_amount = allowance_amount.add(new BN('1'));
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await expectRevert(
                this.token.mint(mint_amount, { from: minter }),
                'ERC20: insufficient allowance'
            );
        });

        // balance
        it('mint decreases the balance of baseToken of the user by the minted amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: minter });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
        });

        it('mint increases the balance of baseToken of the contract by the minted amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: minter });

            expect(await this.baseToken.balanceOf(this.token.address)).to.be.bignumber.equal(mint_amount);
        });

        it('mint increases the balance of token for the user by the minted amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: minter });

            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
        });

        it('mint increases the totalSupply of token by the minted amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: minter });

            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });

        // event
        it('mint emits a Mint event', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });

            const receipt = await this.token.mint(mint_amount, { from: minter });

            expectEvent(receipt, 'Mint', { _mintTo: other, _value: mint_amount });
        });

        it('mint emits a Transfer event', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });

            const receipt = await this.token.mint(mint_amount, { from: minter });

            expectEvent(receipt, 'Transfer', { from: ZERO_ADDRESS, to: other, value: mint_amount });
        });
    });

    describe('ETHless mint test', async function () {
        // minter
        it('wrapper can ETHless mint', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = wrapper;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.baseToken.balanceOf(this.token.address)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(mint_fee));
            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(mint_fee);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });

        it('non-wrapper can ETHless mint', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(mint_fee));
            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(mint_fee);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });

        // amount
        it('can ETHless mint MAX_UINT256', async function () {
            var baseToken_amount = MAX_UINT256;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(mint_fee));
            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(mint_fee);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });

        it('can ETHless mint 0', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = new BN('0');
            var mint_fee = new BN('0');
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(mint_fee));
            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(mint_fee);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });

        // allowance
        it('can ETHless mint less than allowance', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount.sub(new BN('1'));
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(mint_fee));
            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(mint_fee);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });

        it('cannot ETHless mint more than allowance', async function () {
            var baseToken_amount = MAX_UINT256;
            var allowance_amount = amount;
            var mint_amount = allowance_amount.add(new BN('1'));
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await expectRevert(
                this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: deployer }),
                'ERC20: insufficient allowance'
            );
        });

        // balance
        it('ETHless mint decreases the balance of baseToken of the user by the minted amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
        });

        it('ETHless mint increases the balance of baseToken of the contract by the minted amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });

            expect(await this.baseToken.balanceOf(this.token.address)).to.be.bignumber.equal(mint_amount);
        });

        it('ETHless mint increases the balance of token for the user by the minted amount deducted by fee', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });

            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(mint_fee));
        });

        it('ETHless mint increases the balance of token for the wrapper by fee', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = wrapper;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });

            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(mint_fee);
        });

        it('ETHless mint increases the totalSupply of token by the minted amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = wrapper;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });

            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
        });

        // signature
        it('cannot ETHless mint with a signature with used nonce', async function () {
            var baseToken_amount = MAX_UINT256;
            var allowance_amount = MAX_UINT256;
            var mint_amount = amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter });
            await expectRevert(
                this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter }),
                'ERC20Wrapper: the nonce has already been used for this address'
            );
        });

        it('cannot ETHless mint with invalid signature', async function () {
            var baseToken_amount = MAX_UINT256;
            var allowance_amount = MAX_UINT256;
            var mint_amount = amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, another, another_privateKey, mint_amount, mint_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var minter = other;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await expectRevert(
                this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: minter }),
                'Validate: invalid signature'
            );
        });

        // event
        it('ETHless mint emits a Mint event', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });

            const receipt = await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: deployer });

            expectEvent(receipt, 'Mint', { _mintTo: other, _value: mint_amount });
        });

        it('ETHless mint emits a Transfer event', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var mint_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(2, 1, this.token.address, other, other_privateKey, mint_amount, mint_fee, nonce);

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });

            const receipt = await this.token.methods['mint(address,uint256,uint256,uint256,bytes)'](other, mint_amount, mint_fee, nonce, signature, { from: deployer });

            expectEvent(receipt, 'Transfer', { from: ZERO_ADDRESS, to: other, value: mint_amount });
        });
    });

    describe('burn test', async function () {
        // amount
        it('can burn', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);
    
            await this.token.burn(burn_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount).add(burn_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(burn_amount));
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount.sub(burn_amount));
        });

        it('can burn MAX_UINT256', async function () {
            var baseToken_amount = MAX_UINT256;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            await this.token.burn(burn_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount).add(burn_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(burn_amount));
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount.sub(burn_amount));
        });

        it('can burn 0', async function () {
            await this.token.burn(0, { from: other });
        });

        it('can burn less than its balance', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount.sub(new BN('1'));

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            await this.token.burn(burn_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount).add(burn_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(burn_amount));
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount.sub(burn_amount));
        });

        it('cannot burn more than its balance', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount.add(new BN('1'));

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            await expectRevert(
                this.token.burn(burn_amount, { from: other }),
                'ERC20: transfer amount exceeds balance'
            );
        });

        // balance
        it('burn increases the bakeToken balance of user by burn amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            var original_amount = await this.baseToken.balanceOf(other);

            await this.token.burn(burn_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(original_amount.add(burn_amount));
        });

        it('burn decreases the bakeToken balance of the contract by burn amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            var original_amount = await this.baseToken.balanceOf(this.token.address);

            await this.token.burn(burn_amount, { from: other });

            expect(await this.baseToken.balanceOf(this.token.address)).to.be.bignumber.equal(original_amount.sub(burn_amount));
        });

        it('burn decreases the balance of user by burn amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            var original_amount = await this.token.balanceOf(other);

            await this.token.burn(burn_amount, { from: other });

            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(original_amount.sub(burn_amount));
        });

        it('burn decreases the totalSupply of the token by burn amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            var original_amount = await this.baseToken.balanceOf(this.token.address);

            await this.token.burn(burn_amount, { from: other });

            expect(await this.baseToken.balanceOf(this.token.address)).to.be.bignumber.equal(original_amount.sub(burn_amount));
        });

        // event
        it('burn emits a Burnt event', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            const receipt = await this.token.burn(burn_amount, { from: other });

            expectEvent(receipt, 'Burnt', { _burnFrom: other, _value: burn_amount });
        });

        it('burn emits a Transfer event', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            const receipt = await this.token.burn(burn_amount, { from: other });

            expectEvent(receipt, 'Transfer', { from: other, to: ZERO_ADDRESS, value: burn_amount });
        });
    });

    describe('ETHlessburn test', async function () {
        // burner
        it('wrapper can ETHless burn', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = wrapper;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount).add(burn_amount).sub(burn_fee));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(burn_amount));
            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(burn_fee);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount.sub(burn_amount).add(burn_fee));
        });

        it('non-wrapper can ETHless burn', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount).add(burn_amount).sub(burn_fee));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(burn_amount));
            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(burn_fee);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount.sub(burn_amount).add(burn_fee));
        });

        // amount
        it('can ETHless burn MAX_UINT256', async function () {
            var baseToken_amount = MAX_UINT256;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount).add(burn_amount).sub(burn_fee));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(burn_amount));
            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(burn_fee);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount.sub(burn_amount).add(burn_fee));
        });

        it('can ETHless burn 0', async function () {
            var burn_amount = 0;
            var burn_fee = 0;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var burner = another;

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, 0, 0, nonce, signature, { from: burner });
        });

        it('can ETHless burn less than its balance', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount.sub(new BN('1'));
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount).add(burn_amount).sub(burn_fee));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount.sub(burn_amount));
            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(burn_fee);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount.sub(burn_amount).add(burn_fee));
        });

        it('cannot ETHless burn more than its balance', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount.add(new BN('1'));
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            await expectRevert(
                this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner }),
                'ERC20Wrapper: burn amount exceed balance -- Reason given: ERC20Wrapper: burn amount exceed balance.'
            );
        });

        // balance
        it('ETHless burn increases the bakeToken balance of user by burn amount deducted by fee', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            var original_amount = await this.baseToken.balanceOf(other);

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(original_amount.add(burn_amount).sub(burn_fee));
        });

        it('ETHless burn decreases the bakeToken balance of the contract by burn amount deducted by fee', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            var original_amount = await this.baseToken.balanceOf(this.token.address);

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expect(await this.baseToken.balanceOf(this.token.address)).to.be.bignumber.equal(original_amount.sub(burn_amount).add(burn_fee));
        });

        it('ETHless burn decreases the balance of user by burn amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            var original_amount = await this.token.balanceOf(other);

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(original_amount.sub(burn_amount));
        });

        it('ETHless burn increases the balance of wrapper by burn fee', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            var original_amount = await this.token.balanceOf(wrapper);

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expect(await this.token.balanceOf(wrapper)).to.be.bignumber.equal(original_amount.add(burn_fee));
        });

        it('ETHless burn decreases the totalSupply of the token by burn amount', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            var original_amount = await this.token.totalSupply();

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expect(await this.token.totalSupply()).to.be.bignumber.equal(original_amount.sub(burn_amount).add(burn_fee));
        });

        // signature
        it('cannot ETHless burn with a signature with used nonce', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });
            await expectRevert(
                this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner }),
                'ERC20Wrapper: burn amount exceed balance -- Reason given: ERC20Wrapper: burn amount exceed balance.'
            );
        });

        it('non-wrapper can ETHless burn', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, another, another_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            await expectRevert(
                this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner }),
                'Validate: invalid signature'
            );
        });

        // event
        it('ETHless burn emits a Burnt event', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            const receipt = await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expectEvent(receipt, 'Burnt', { _burnFrom: other, _value: burn_amount.sub(burn_fee) });
        });

        it('ETHless burn emits a Transfer event', async function () {
            var baseToken_amount = amount;
            var allowance_amount = baseToken_amount;
            var mint_amount = allowance_amount;
            var burn_amount = mint_amount;
            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1, 1, this.token.address, other, other_privateKey, burn_amount, burn_fee, nonce);
            var wrapper = await this.token.getRoleMember(WRAPPER_ROLE, 0);
            var burner = another;

            await this.baseToken.mint(other, baseToken_amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, allowance_amount, { from: other });
            await this.token.mint(mint_amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal(baseToken_amount.sub(mint_amount));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(mint_amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(mint_amount);

            const receipt = await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, burn_amount, burn_fee, nonce, signature, { from: burner });

            expectEvent(receipt, 'Transfer', { from: other, to: wrapper, value: burn_fee });
        });
    });

    describe('wrapper test', async function () {
        const total = amount.add(fee);

        it('deployer has the default wrapper role', async function () {
            expect(await this.token.getRoleMemberCount(WRAPPER_ROLE)).to.be.bignumber.equal('1');
            expect(await this.token.getRoleMember(WRAPPER_ROLE, 0)).to.equal(deployer);
        });
    });  
});

describe('ExampleCoin_Reservable', function () {
    const [ deployer, other, another ] = accounts;
    const [ deployer_privateKey, other_privateKey, another_privateKey ] = privateKeys;

    const name = 'ExampleCoin';
    const symbol = 'WG';
    const decimals = new BN('18');

    const amount = new BN('5000');
    const fee = new BN('1');

    const WRAPPER_ROLE = web3.utils.soliditySha3('WRAPPER_ROLE');
    const RELAYER_ROLE = web3.utils.soliditySha3('RELAYER_ROLE');

    beforeEach(async function () {
        // Deploy a new ControlledGluwacoin contract for each test
        this.baseToken = await ERC20PresetMinterPauser.new('Gluwacoin', 'GC', { from: deployer });
        // Deploy a new ExampleCoin contract for each test
        this.token = await ExampleCoin.new(name, symbol, this.baseToken.address, { from: deployer });
    });
    /* Reservable related
    */
    describe('reserve test', async function () {
        it('can reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal(amount.toString());
        });
    
        it('cannot reserve with outdated expiryBlockNum', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock;
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await expectRevert(
                this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer }),
                'ERC20Reservable: invalid block expiry number'
            );
        });
    
        it('cannot reserve with zero address as the executor', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = ZERO_ADDRESS;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = amount.sub(fee);
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await expectRevert(
                this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer }),
                'ERC20Reservable: cannot execute from zero address'
            );
        });
    
        it('cannot reserve if amount + fee > balance', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_fee = fee;
            var reserve_amount = amount.sub(reserve_fee).add(new BN('1'));
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await expectRevert(
                this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer }),
                'ERC20Reservable: insufficient unreserved balance'
            );
        });
    
        it('cannot reserve if amount + fee + reserved > balance', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var send_amount2 = new BN('10');
            var send_amount = amount.sub(fee).sub(send_amount2);
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, send_amount, fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, send_amount, fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            send_amount = send_amount2;
            nonce = Date.now();
    
            signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, send_amount, fee, nonce,expiryBlockNum);
    
            await expectRevert(
                this.token.reserve(other, another, executor, send_amount, fee, nonce, expiryBlockNum, signature, { from: deployer }),
                'ERC20Reservable: insufficient unreserved balance'
            );
        });

        it('cannot reserve if nonce is already used', async function () {
            await this.baseToken.mint(other, amount.add(amount), { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount.add(amount), { from: other });
            await this.token.mint(amount.add(amount), { from: other });
    
            expect(await this.token.balanceOf(deployer)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.add(amount));
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await expectRevert(
                this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer }),
                'ERC20Reservable: the sender used the nonce already'
            );
        });
    
        it('cannot reserve if signature is invalid', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.token.balanceOf(deployer)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var dummy_amount = amount.sub(fee).sub(fee); 
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, dummy_amount, reserve_fee, nonce,expiryBlockNum);
    
            await expectRevert(
                this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer }),
                'Validate: invalid signature'
            );
        });
    
        it('getReservation works', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_fee = fee;
            var reserve_amount = amount.sub(reserve_fee);
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            var reserve = await this.token.getReservation(other, nonce);
    
            expect(reserve.amount).to.be.bignumber.equal(reserve_amount);
            expect(reserve.fee).to.be.bignumber.equal(reserve_fee);
            expect(reserve.recipient).to.equal(another);
            expect(reserve.executor).to.equal(executor);
            expect(reserve.expiryBlockNum).to.be.bignumber.equal(expiryBlockNum);
        });
    });
    
    describe('execute test', async function () {
        it('executor can execute', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await this.token.execute(other, nonce, { from: deployer });
        });
    
        it('sender can execute', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await this.token.execute(other, nonce, { from: other });
        });
    
        it('receiver cannot execute', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await expectRevert(
                this.token.execute(other, nonce, { from: another }),
                'ERC20Reservable: this address is not authorized to execute this reservation'
            );
        });
    
        it('cannot execute expired reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await time.advanceBlockTo(expiryBlockNum.add(new BN('1')));
    
            await expectRevert(
                this.token.execute(other, nonce, { from: deployer }),
                'ERC20Reservable: reservation has expired and cannot be executed'
            );
        });
    
        it('cannot execute executed reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await this.token.execute(other, nonce, { from: deployer });
    
            await expectRevert(
                this.token.execute(other, nonce, { from: deployer }),
                'ERC20Reservable: invalid reservation status to execute'
            );
        });
    
        it('cannot execute reclaimed reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await this.token.reclaim(other, nonce, { from: deployer });
    
            await expectRevert(
                this.token.execute(other, nonce, { from: deployer }),
                'ERC20Reservable: invalid reservation status to execute'
            );
        });
    
        it('cannot execute non existing reserve', async function () {
            var nonce = Date.now();
            await expectRevert(
                this.token.execute(other, nonce, { from: deployer }),
                'ERC20Reservable: reservation does not exist'
            );
        });
    });

    describe('reclaim test', async function () {
        it('executor can reclaim unexpired reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await this.token.reclaim(other, nonce, { from: deployer });
        });
    
        it('executor can reclaim expired reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await time.advanceBlockTo(expiryBlockNum.add(new BN('1')));
    
            await this.token.reclaim(other, nonce, { from: deployer });
        });
    
        it('sender can reclaim expired reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await time.advanceBlockTo(expiryBlockNum.add(new BN('1')));
    
            await this.token.reclaim(other, nonce, { from: other });
        });
    
        it('sender cannot reclaim unexpired reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await expectRevert(
                 this.token.reclaim(other, nonce, { from: other }),
                'ERC20Reservable: reservation has not expired or you are not the executor and cannot be reclaimed'
            );
        });
    
        it('receiver cannot reclaim unexpired reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await expectRevert(
                 this.token.reclaim(other, nonce, { from: another }),
                'ERC20Reservable: only the sender or the executor can reclaim the reservation back to the sender'
            );
        });
    
        it('receiver cannot reclaim expired reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            await time.advanceBlockTo(expiryBlockNum.add(new BN('1')));
    
            await expectRevert(
                 this.token.reclaim(other, nonce, { from: another }),
                'ERC20Reservable: only the sender or the executor can reclaim the reservation back to the sender'
            );
        });
    
        it('executor cannot reclaim from no reservation', async function () {
            var nonce = Date.now();
            await expectRevert(
                this.token.reclaim(other, nonce, { from: deployer }),
                'ERC20Reservable: reservation does not exist'
            );
        });
    
        it('sender cannot reclaim from no reservation', async function () {
            var nonce = Date.now();
            await expectRevert(
                this.token.reclaim(other, nonce, { from: other }),
                'ERC20Reservable: reservation does not exist'
            );
        });
    
        it('receiver cannot reclaim from no reservation', async function () {
            var nonce = Date.now();
            await expectRevert(
                 this.token.reclaim(other, nonce, { from: another }),
                'ERC20Reservable: reservation does not exist'
            );
        });
    });

    describe('after reserve check', async function () {
        it('reservedBalanceOf accurate after reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());

            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();

            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);

            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal('0');
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal(amount.toString());
        });

        it('unreservedBalanceOf accurate after reserve', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());

            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();

            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
            expect(await this.token.unreservedBalanceOf(other)).to.be.bignumber.equal(await this.token.balanceOf(other));
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
            expect(await this.token.unreservedBalanceOf(other)).to.be.bignumber.equal(amount.sub(await this.token.reservedBalanceOf(other)).toString());
        });
    });

    describe('after execute check', async function () {
    
        it('reservedBalanceOf accurate after execute', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());

            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();

            var signature = sign.signReserve(4,1,this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);

            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal('0');
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal(amount.toString());

            await this.token.execute(other, nonce, { from: deployer });
            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal('0');
        });

        it('unreservedBalanceOf accurate after execute', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });

            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());

            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();

            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);

            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal('0');
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal(amount.toString());

            await this.token.execute(other, nonce, { from: deployer });
            expect(await this.token.unreservedBalanceOf(other)).to.be.bignumber.equal('0');
        });
    });

    /* ETHless related
    */
    describe('ETHless test', async function () {
        it('deployer has the default relayer role', async function () {
            expect(await this.token.getRoleMemberCount(RELAYER_ROLE)).to.be.bignumber.equal('1');
            expect(await this.token.getRoleMember(RELAYER_ROLE, 0)).to.equal(deployer);
        });
    
        it('relayer can send ETHless transfer', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
            expect(await this.token.balanceOf(another)).to.be.bignumber.equal('0');
    
            var nonce = Date.now();
    
            var signature = sign.signTransfer(3,1,this.token.address, other, other_privateKey, another, amount.sub(fee), fee, nonce);
    
            await this.token.transfer(other, another, amount.sub(fee), fee, nonce, signature, { from: deployer });
    
            expect(await this.token.balanceOf(deployer)).to.be.bignumber.equal(fee);
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(another)).to.be.bignumber.equal(amount.sub(fee));
        });
    
        it('cannot send ETHless transfer more than balance', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.toString());
            expect(await this.token.balanceOf(another)).to.be.bignumber.equal('0');
    
            var nonce = Date.now();
    
            var signature = sign.signTransfer(3,1, this.token.address, other, other_privateKey, another, amount, fee, nonce);
    
            await expectRevert(
                 this.token.transfer(other, another, amount, fee, nonce, signature, { from: deployer }),
                'ERC20ETHless: the balance is not sufficient -- Reason given: ERC20ETHless: the balance is not sufficient.'
            );
        });
    });  
});