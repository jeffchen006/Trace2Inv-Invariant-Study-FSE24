const { ethers, contractDeployment } = require('hardhat');

const USDC_ADDRESS_BOOK = {
    // 'ethereum-prod': '0x8bd4be20d07d76d7eeef79a349727702b5f671f7',
    // 'ethereum-staging': '0xe23bCe06837F70584475957c7B6fbb6b0C8735Ac',
    // 'goerli': '0x2f6033bD9bF8F15e3fEdAaf0Efe6F3584aEaEC69',
    // 'bscTestnet': '0x3979BF2767A97dFf24823138494Ad690a18f112F',
    'sepolia': '0xdE9c2540efA08918BA212596AfBcA5B4ADcfF591',
    'zhejiang': '0xcB9fc50b3D1b61CFe8555487795e8B4C8c8De15e'
}

const NAME_ERC20 = 'USDC Gluwacoin';
const SYMBOL_ERC20 = 'USDC-G';
const DECIMALS = 6; 

async function main() {
    const [deployer] = await ethers.getSigners();

    const USDC_ADDRESS = (network.name !== 'hardhat' && network.name !== 'localhost') ? USDC_ADDRESS_BOOK[network.name] : deployer.address;

    await contractDeployment.deployContract(
        'ERC20WrapperGluwacoin',
        [
            NAME_ERC20, 
            SYMBOL_ERC20, 
            DECIMALS,
            deployer.address,
            USDC_ADDRESS
        ],
        'initialize',
        undefined,
        (network.name !== 'hardhat' && network.name !== 'localhost') ? false : true,
        (network.name !== 'hardhat' && network.name !== 'localhost') ? true : false
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
