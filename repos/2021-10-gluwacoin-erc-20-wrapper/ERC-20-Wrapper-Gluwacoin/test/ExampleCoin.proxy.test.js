// Load dependencies
const { expect } = require('chai');
const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

// Load compiled artifacts
const ExampleCoin = artifacts.require('ExampleCoin');

// Start test block
contract('ExampleCoin Proxy', accounts => {
    const deployer = accounts[0];
    const name = 'ExampleCoin';
    const symbol = 'EC';
    const decimals = 6;
    const baseTokenAddress = '0xfB0aaA0432112779d9AC483D9d5E3961ecE18eec';

    beforeEach(async function () {
        // Deploy a new ERC20WrapperGluwacoin contract for each test
        this.token = await deployProxy(
                ExampleCoin,
                [name, symbol, decimals, baseTokenAddress],
                { from: deployer, initializer: 'initialize' }
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
            this.token.address, ExampleCoin, { from: deployer });

        expect(await newToken.name()).to.equal(name);
        expect(await newToken.symbol()).to.equal(symbol);
        expect((await newToken.decimals()).toString()).to.equal(decimals.toString());
        expect(await newToken.token()).to.equal(baseTokenAddress);
    });
});