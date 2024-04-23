// Load dependencies
const { expect } = require('chai');
const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

// Load compiled artifacts
const ERC20WrapperGluwacoin = artifacts.require('ERC20WrapperGluwacoin');
const ERC20WrapperGluwacoinV2 = artifacts.require('ERC20WrapperGluwacoinV2');

// Start test block
contract('ERC20WrapperGluwacoin Proxy', accounts => {
    const deployer = accounts[0];
    const name = 'ERC20WrapperGluwacoin';
    const symbol = 'WG';
    const decimals = 6;
    const newDecimal = 10;
    const beforeUpgrade = "New function is updgared";
    const UPGRADED_CONTEXT = "Variable is upgraded";
    const baseTokenAddress = '0xfB0aaA0432112779d9AC483D9d5E3961ecE18eec';

    beforeEach(async function () {
        // Deploy a new ERC20WrapperGluwacoin contract for each test
        this.token = await deployProxy(
                ERC20WrapperGluwacoin,
                [name, symbol, decimals, deployer, baseTokenAddress],
                { from: deployer,  initializer: 'initialize' }
            );
    });

    it('retrieve returns a value previously initialized', async function () {
        expect(await this.token.name()).to.equal(name);
        expect(await this.token.symbol()).to.equal(symbol);
        expect((await this.token.decimals()).toString()).to.equal(decimals.toString());
        expect(await this.token.token()).to.equal(baseTokenAddress);
    });

    it('retrieve returns a value previously initialized after an upgrade', async function () {
        const newToken = await upgradeProxy(
            this.token.address, ERC20WrapperGluwacoin, { from: deployer });

        expect(await newToken.name()).to.equal(name);
        expect(await newToken.symbol()).to.equal(symbol);
        expect((await newToken.decimals()).toString()).to.equal(decimals.toString());
        expect(await newToken.token()).to.equal(baseTokenAddress);
    });
    
    it('retrieve returns a value after upgrade with ERC20WrapperGluwacoin', async function () {
        const newToken = await upgradeProxy(
            this.token.address, ERC20WrapperGluwacoinV2, { from: deployer });

        expect(await newToken.UPGRADED_CONTEXT()).to.equal(UPGRADED_CONTEXT);
        expect((await newToken.decimals()).toString()).to.equal(newDecimal.toString());
        expect(await newToken.__beforeUpgrade()).to.equal(beforeUpgrade);
    });
});