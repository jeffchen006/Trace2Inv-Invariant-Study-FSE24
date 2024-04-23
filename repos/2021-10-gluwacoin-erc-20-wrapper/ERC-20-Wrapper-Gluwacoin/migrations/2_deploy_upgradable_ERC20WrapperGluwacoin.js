const { web3 } = require('@openzeppelin/test-helpers/src/setup');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const ERC20WrapperGluwacoin = artifacts.require('ERC20WrapperGluwacoin');

module.exports = async function (deployer, network) {
    const name = 'USDC Gluwacoin';
    const symbol = 'USDC-G';
    const decimals = 6;
    var baseTokenAddress;
    var admin;
    var skip = false;

    switch (network) {
        case "goerli":
            {
                baseTokenAddress = '0x07865c6E87B9F70255377e024ace6630C1Eaa37F'; // USDC Goerli
                admin = "0xfd91d059f0d0d5f6adee0f4aa1fdf31da2557bc9";
                break;
            }
        case "rinkeby":
            {
                baseTokenAddress = '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b';
                admin = "0xfd91d059f0d0d5f6adee0f4aa1fdf31da2557bc9";
                break;
            }

        case "mainnet":
            {
                baseTokenAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
                admin = "0x8cDFCaAD5df8A24f983882BaF461F33e1bC24000";
                break;
            }

        default: {
            skip = true;
            break;
        }
    }

    if (!skip) {
        const instance = await deployProxy(
            ERC20WrapperGluwacoin,
            [name, symbol, decimals, admin, baseTokenAddress],
            { deployer, initializer: 'initialize' }
        );

        console.log('Deployed ', instance.address);
        console.log('token ' + (await instance.token()));
    }
};