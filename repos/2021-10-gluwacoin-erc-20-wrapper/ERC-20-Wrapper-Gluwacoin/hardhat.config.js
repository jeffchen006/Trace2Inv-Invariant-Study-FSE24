require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require('deployment-tool');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const publicNetworks = {}
if (process.env.OWNER_01_PK && process.env.SEPOLIA_JSON_RPC) publicNetworks['sepolia'] = {
  chainId: 11155111,
  url: process.env.SEPOLIA_JSON_RPC,
  accounts: [process.env.OWNER_01_PK, process.env.OWNER_02_PK, process.env.OWNER_03_PK],
}
if (process.env.OWNER_01_PK && process.env.ZHEJIANG_JSON_RPC) publicNetworks['zhejiang'] = {
  chainId: 1337803,
  url: process.env.ZHEJIANG_JSON_RPC,
  accounts: [process.env.OWNER_01_PK, process.env.OWNER_02_PK, process.env.OWNER_03_PK],
}
if (process.env.PRIVATE_KEY_GOERLI && process.env.RPC_GOERLI) publicNetworks['goerli'] = {
  url: `${RPC_GOERLI}`,
  chainId: 5,
  accounts: [`${PRIVATE_KEY_GOERLI || DUMMY_PRIVATE_KEY}`]
}
if (process.env.PRIVATE_KEY_BSC_TESTNET && process.env.RPC_BSC_TESTNET) publicNetworks['bscTestnet'] = {
  url: `${RPC_BSC_TESTNET}`,
  chainId: 97,
  accounts: [`${PRIVATE_KEY_BSC_TESTNET || DUMMY_PRIVATE_KEY}`]
}

module.exports = {
  networks:{
    hardhat: {
      // forking: {
      //   url: process.env.RPC_RINKEBY,
      //   blockNumber: 10802792
      // },
      // allowUnlimitedContractSize: true,
      gas: 72_000_000,
      blockGasLimit: 72_000_000,
      gasPrice: 2000,
      initialBaseFeePerGas: 1
    },
    ...publicNetworks,
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY,
      zhejiang: process.env.BLOCKSCOUT_API_KEY,
    },
    customChains: [
      {
        network: "zhejiang",
        chainId: 1337803,
        urls: {
          apiURL: "https://blockscout.com/eth/zhejiang-testnet/api",
          browserURL: "https://blockscout.com/eth/zhejiang-testnet"
        }
      }
    ]
  },
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        runs: 200,
        enabled: true
      }
    }
  },
  mocha: {
    timeout: 20000000
  },
};
