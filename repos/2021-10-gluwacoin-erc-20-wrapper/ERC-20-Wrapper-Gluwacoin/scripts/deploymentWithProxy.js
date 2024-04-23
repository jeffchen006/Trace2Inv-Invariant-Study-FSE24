const hre = require("hardhat");

const NAME_ERC20 = 'USDC Gluwacoin';
const SYMBOL_ERC20 = 'USDC-G';
const DECIMALS = 6; 
let baseTokenAddress;
let admin;
let skip = false;


async function main() {
  const [deployer] = await hre.ethers.getSigners();

  switch (hre.network.name) {
    case "hardhat":
    {
      baseTokenAddress = '0x07865c6E87B9F70255377e024ace6630C1Eaa37F'; // USDC Goerli
      admin = deployer.address;
      break;
    }
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
    // We get the contract to deploy
    const ERC20WrapperGluwacoin = await hre.ethers.getContractFactory('ERC20WrapperGluwacoin');
    const eRC20WrapperGluwacoin = await hre.upgrades.deployProxy(ERC20WrapperGluwacoin, [
        NAME_ERC20, 
        SYMBOL_ERC20, 
        DECIMALS,
        admin,
        baseTokenAddress
    ]);
    const eRC20WrapperGluwacoinTnx = await eRC20WrapperGluwacoin.deployTransaction.wait();
    hre.addressBook.saveContract(
        'ERC20WrapperGluwacoin',
        eRC20WrapperGluwacoin.address,
        network.name,
        deployer.address,
        eRC20WrapperGluwacoinTnx.blockHash,
        eRC20WrapperGluwacoinTnx.blockNumber
    );

    await eRC20WrapperGluwacoin.deployed();

    console.log("ERC20WrapperGluwacoin deployed to:", eRC20WrapperGluwacoin.address);

    console.log(' ')

    // Get ProxyAdmin address from .openzeppelin/
    const ProxyAdmin_Address = await hre.addressBook.retrieveOZAdminProxyContract(network.config.chainId);
    console.log('Deployed using Proxy Admin contract address: ', ProxyAdmin_Address);
    addressBook.saveContract('ProxyAdmin', ProxyAdmin_Address, network.name, deployer.address);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
