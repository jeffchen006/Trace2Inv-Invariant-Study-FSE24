// Load dependencies
const { accounts, privateKeys, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, expectRevert, time } = require('@openzeppelin/test-helpers');

var sign = require('./signature');

// Load compiled artifacts
const ERC20PresetMinterPauser = contract.fromArtifact('ERC20PresetMinterPauserMockUpgradeSafe');
const ERC20WrapperGluwacoin = contract.fromArtifact('ERC20WrapperGluwacoinMock');

// Start test block
describe('ERC20WrapperGluwacoin', function () {
    const [ deployer, other, another, user1 ] = accounts;

    const name = 'ERC20WrapperGluwacoin';
    const symbol = 'WG';
    const decimals = new BN('6');
   

    beforeEach(async function () {
        // Deploy a new ControlledGluwacoin contract for each test
        this.baseToken = await ERC20PresetMinterPauser.new('Gluwacoin', 'GC', { from: deployer });
        // Deploy a new ERC20WrapperGluwacoin contract for each test
        this.token = await ERC20WrapperGluwacoin.new(name, symbol, decimals, this.baseToken.address, { from: deployer });       
    });

    /* ERC20
    */
    describe('mint test', async function () {
        

        it('token name is ERC20WrapperGluwacoin', async function () {
            expect(await this.token.name()).to.equal(name);
        });

        it('token symbol is WG', async function () {
            expect(await this.token.symbol()).to.equal(symbol);
        });

        it('token decimals are 6', async function () {
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
    });

    /* Gluwacoin
    */
    describe('mint test', async function () {
        it('token() returns baseToken address', async function () {
            expect(await this.token.token()).to.equal(this.baseToken.address);
        });
    });

    describe('beforeTokenTransfer verification', async function () {
        const amount = new BN('5000');
        const amountHalfAndOne = new BN('2501');
        const fee = new BN('1');
        const [ deployer_privateKey, other_privateKey ] = privateKeys;
      
        it('validation before transfer', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.approve(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal(amount);

            expect(await this.token.balanceOf(user1)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);

            await expectRevert(
                this.token.methods['transfer(address,uint256)'](user1, amountHalfAndOne, { from: other }),
                "ERC20Reservable: transfer amount exceeds unreserved balance"
            );

           
            expect(await this.token.balanceOf(user1)).to.be.bignumber.equal('0');
            await this.baseToken.mint(other, amountHalfAndOne, { from: deployer });
            await this.baseToken.approve(this.token.address, amountHalfAndOne, { from: other });
            await this.token.mint(amountHalfAndOne, { from: other });

            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.add(amountHalfAndOne));
            await this.token.methods['transfer(address,uint256)'](user1, amountHalfAndOne, { from: other });
            expect(await this.token.balanceOf(user1)).to.be.bignumber.equal(amountHalfAndOne);
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);
        });


        it('validation before burn', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.approve(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal(amount);
            expect(await this.token.balanceOf(user1)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);

            var original_amount = await this.token.totalSupply();       

            await expectRevert(
                this.token.methods['burn(uint256)'](amountHalfAndOne, { from: other }),
                "ERC20Reservable: transfer amount exceeds unreserved balance"
            );

            expect(await this.token.totalSupply()).to.be.bignumber.equal(original_amount);
           
            await this.baseToken.mint(other, amountHalfAndOne, { from: deployer });
            await this.baseToken.approve(this.token.address, amountHalfAndOne, { from: other });
            await this.token.mint(amountHalfAndOne, { from: other });           

            original_amount = await this.token.totalSupply(); 
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.add(amountHalfAndOne));
            await this.token.methods['burn(uint256)'](amountHalfAndOne, { from: other });
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(original_amount.sub(amountHalfAndOne));
        });

        it('validation before ethless transfer', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.approve(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, user1, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
            await this.token.reserve(other, user1, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal(amount);

            expect(await this.token.balanceOf(user1)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);

            var nonce = Date.now();
    
            var signature = sign.signTransfer(3,1,this.token.address, other, other_privateKey, user1, amountHalfAndOne.sub(fee), fee, nonce);   
     
            await expectRevert(
                this.token.transfer(other, user1, amountHalfAndOne.sub(fee), fee, nonce, signature, { from: deployer }),
                "ERC20Reservable: transfer amount exceeds unreserved balance"
            );

           
            expect(await this.token.balanceOf(user1)).to.be.bignumber.equal('0');
            await this.baseToken.mint(other, amountHalfAndOne, { from: deployer });
            await this.baseToken.approve(this.token.address, amountHalfAndOne, { from: other });
            await this.token.mint(amountHalfAndOne, { from: other });

            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.add(amountHalfAndOne));
            await this.token.transfer(other, user1, amountHalfAndOne.sub(fee), fee, nonce, signature, { from: deployer }),
            expect(await this.token.balanceOf(user1)).to.be.bignumber.equal(amountHalfAndOne.sub(fee));
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);
        });


        it('validation before ethless burn', async function () {
            await this.baseToken.mint(other, amount, { from: deployer });
            await this.baseToken.approve(this.token.address, amount, { from: other });
            await this.token.mint(amount, { from: other });
    
            expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);
    
            var executor = deployer;
            var reserve_amount = amount.sub(fee);
            var reserve_fee = fee;
            var latestBlock = await time.latestBlock();
            var expiryBlockNum = latestBlock.add(new BN('100'));
            var nonce = Date.now();
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal(amount);
            expect(await this.token.balanceOf(user1)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);

            var burn_fee = fee;
            var nonce = Date.now();
            var signature = sign.signWrapper(1,1, this.token.address, other, other_privateKey, amountHalfAndOne, burn_fee, nonce);
            var burner = another;       
           
            var original_amount = await this.token.totalSupply();       
            await expectRevert(
                this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, amountHalfAndOne, burn_fee, nonce, signature, { from: burner }),
                "ERC20Reservable: transfer amount exceeds unreserved balance"
            );
           
            expect(await this.token.totalSupply()).to.be.bignumber.equal(original_amount);
            await this.baseToken.mint(other, amountHalfAndOne, { from: deployer });
            await this.baseToken.approve(this.token.address, amountHalfAndOne, { from: other });
            await this.token.mint(amountHalfAndOne, { from: other });           

            original_amount = await this.token.totalSupply(); 
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount.add(amountHalfAndOne));
            await this.token.methods['burn(address,uint256,uint256,uint256,bytes)'](other, amountHalfAndOne, burn_fee, nonce, signature, { from: burner });
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);
            expect(await this.token.totalSupply()).to.be.bignumber.equal(original_amount.sub(amountHalfAndOne).add(burn_fee));
        });

    });
});