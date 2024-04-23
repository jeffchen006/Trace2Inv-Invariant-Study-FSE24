// Load dependencies
const { accounts, privateKeys, contract, web3 } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const ERC20PresetMinterPauser = contract.fromArtifact('ERC20PresetMinterPauserMockUpgradeSafe');
const ERC20WrapperGluwacoin = contract.fromArtifact('ERC20WrapperGluwacoinMock');

var sign = require('./signature');

// Start test block
describe('ERC20WrapperGluwacoin_Reservable', function () {
    const [ deployer, other, another ] = accounts;
    // `deployer_privateKey` is unused but required to get correct keys for other and another
    const [ deployer_privateKey, other_privateKey, another_privateKey ] = privateKeys;

    const name = 'ERC20WrapperGluwacoin';
    const symbol = 'WG';
    const decimals = new BN('6');

    const amount = new BN('5000');
    const amountHalf = new BN('2500');
    const fee = new BN('1');

    const RELAYER_ROLE = web3.utils.soliditySha3('RELAYER_ROLE');

    beforeEach(async function () {
        // Deploy a new ControlledGluwacoin contract for each test
        this.baseToken = await ERC20PresetMinterPauser.new('Gluwacoin', 'GC', { from: deployer });
        // Deploy a new ERC20WrapperGluwacoin contract for each test
        this.token = await ERC20WrapperGluwacoin.new(name, symbol, decimals, this.baseToken.address, { from: deployer });
        // Prepare Gluwacoins
        await this.baseToken.mint(other, amount, { from: deployer });
        await this.baseToken.increaseAllowance(this.token.address, amount, { from: other });
        await this.token.mint(amount, { from: other });
        expect(await this.baseToken.balanceOf(other)).to.be.bignumber.equal('0');
        expect(await this.token.balanceOf(other)).to.be.bignumber.equal(amount);
        expect(await this.token.balanceOf(another)).to.be.bignumber.equal('0');
    });

    /* ETHless related
    */
    describe('ETHless test', async function () {
        // relayer role-related
        it('deployer has the default relayer role', async function () {
            expect(await this.token.getRoleMemberCount(RELAYER_ROLE)).to.be.bignumber.equal('1');
            expect(await this.token.getRoleMember(RELAYER_ROLE, 0)).to.equal(deployer);
        });

        it('relayer can send ETHless transfer', async function () {
            var nonce = Date.now();
            var signature = sign.signTransfer(3,1,this.token.address, other, other_privateKey, another, amount.sub(fee), fee, nonce);

            await this.token.transfer(other, another, amount.sub(fee), fee, nonce, signature, { from: deployer });

            expect(await this.token.balanceOf(deployer)).to.be.bignumber.equal(fee);
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(another)).to.be.bignumber.equal(amount.sub(fee));
        });

        it('non-relayer can send ETHless transfer', async function () {
            var nonce = Date.now();
            var signature = sign.signTransfer(3,1,this.token.address, other, other_privateKey, another, amount.sub(fee), fee, nonce);

            await this.token.transfer(other, another, amount.sub(fee), fee, nonce, signature, { from: other });

            expect(await this.token.balanceOf(deployer)).to.be.bignumber.equal(fee);
            expect(await this.token.balanceOf(other)).to.be.bignumber.equal('0');
            expect(await this.token.balanceOf(another)).to.be.bignumber.equal(amount.sub(fee));
        });

        // signature
        it('cannot use another user\'s signature', async function () {
            var nonce = Date.now();

            
            var signature = sign.signTransfer(3,1,this.token.address, other, another_privateKey, another, amount.sub(fee), fee, nonce);

            await expectRevert(
                 this.token.transfer(other, another, amount.sub(fee), fee, nonce, signature, { from: deployer }),
                'Validate: invalid signature'
            );
        });

        it('cannot use signature again', async function () {
            var nonce = Date.now();

            var signature = sign.signTransfer(3,1,this.token.address, other, other_privateKey, another, amountHalf.sub(fee), fee, nonce);


            await this.token.transfer(other, another, amountHalf.sub(fee), fee, nonce, signature, { from: deployer });

            await expectRevert(
                 this.token.transfer(other, another, amountHalf.sub(fee), fee, nonce, signature, { from: deployer }),
                'ERC20ETHless: the nonce has already been used for this address'
            );
        });

        // event
        it('Two Transfer events are emitted', async function () {
            var nonce = Date.now();
            var signature = sign.signTransfer(3,1,this.token.address, other, other_privateKey, another, amount.sub(fee), fee, nonce);

            const receipt = await this.token.transfer(other, another, amount.sub(fee), fee, nonce, signature, { from: deployer });

            expectEvent(receipt, 'Transfer', { from: other, to: another, value: amount.sub(fee) });
            expectEvent(receipt, 'Transfer', { from: other, to: deployer, value: fee });
        });

        // balance
        it('cannot send ETHless transfer more than balance', async function () {
            var nonce = Date.now();
            var signature = sign.signTransfer(3,1,this.token.address, other, other_privateKey, another, amount, fee, nonce);

            await expectRevert(
                this.token.transfer(other, another, amount, fee, nonce, signature, { from: deployer }),
                'ERC20ETHless: the balance is not sufficient -- Reason given: ERC20ETHless: the balance is not sufficient.'
            );
        });
    });
});