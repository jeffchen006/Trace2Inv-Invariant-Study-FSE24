// Load dependencies
const { accounts, privateKeys, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, constants, expectRevert, time } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;

// Load compiled artifacts
const ERC20PresetMinterPauser = contract.fromArtifact('ERC20PresetMinterPauserMockUpgradeSafe');
const ERC20WrapperGluwacoin = contract.fromArtifact('ERC20WrapperGluwacoinMock');

var sign = require('./signature');

// Start test block
describe('ERC20WrapperGluwacoin_Reservable', function () {
    const [ deployer, other, another ] = accounts;
    // `deployer_privateKey` is unused but required to get correct keys for other and another
    const [ deployer_privateKey, other_privateKey ] = privateKeys;

    const name = 'ERC20WrapperGluwacoin';
    const symbol = 'WG';
    const decimals = new BN('6');

    const amount = new BN('5000');
    const fee = new BN('1');

    beforeEach(async function () {
        // Deploy a new ControlledGluwacoin contract for each test
        this.baseToken = await ERC20PresetMinterPauser.new('Gluwacoin', 'GC', { from: deployer });
        // Deploy a new ERC20WrapperGluwacoin contract for each test
        this.token = await ERC20WrapperGluwacoin.new(name, symbol, decimals, this.baseToken.address, { from: deployer });
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, send_amount, fee, nonce, expiryBlockNum);
    
            await this.token.reserve(other, another, executor, send_amount, fee, nonce, expiryBlockNum, signature, { from: deployer });
    
            send_amount = send_amount2;
            nonce = Date.now();
    
            signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, send_amount, fee, nonce, expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, dummy_amount, reserve_fee, nonce, expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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
    
            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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

            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);

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

            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);
    
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

            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);

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

            var signature = sign.signReserve(4, 1, this.token.address, other, other_privateKey, another, executor, reserve_amount, reserve_fee, nonce,expiryBlockNum);

            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal('0');
            await this.token.reserve(other, another, executor, reserve_amount, reserve_fee, nonce, expiryBlockNum, signature, { from: deployer });
            expect(await this.token.reservedBalanceOf(other)).to.be.bignumber.equal(amount.toString());

            await this.token.execute(other, nonce, { from: deployer });
            expect(await this.token.unreservedBalanceOf(other)).to.be.bignumber.equal('0');
        });
    });
});