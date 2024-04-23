[![license](https://img.shields.io/github/license/jamesisaac/react-native-background-task.svg)](https://opensource.org/licenses/MIT)

# ERC-20 Wrapper Gluwacoin

ERC-20 to Gluwacoin Adapter

## What is Gluwacoin?

Gluwacoin is an interoperable stablecoin standard. The standard has built-in functions to enable exchange with other cryptocurrencies, which connects its ecosystem to other blockchains. We have implemented the system to support the ERC20 standard on the Ethereum network. The implementation includes security features, compliance features, and upgrade features that provide the desired level of security and elasticity.

The Gluwacoin Trust proposed the standard. This repository is the official implementations of the Gluwacoin standard by Gluwa.

For more information, see [Gluwacoin](/Gluwacoin.md), [gluwacoin.com](https://gluwacoin.com), or the [original whitepaper](https://gluwacoin.com/white-paper).

## ERC-20 Wrapper Gluwacoin

Gluwacoin backed by another [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token

Read [ERC-20 Wrapper Gluwacoin](ERC-20%20Wrapper%20Gluwacoin.md) for details.

## Setup

### Installing Dependencies

```commandline
$ npm install
```

#### Testing

Run a local development network
```commandline
$ npx ganache-cli --deterministic
```

Run test scripts
```commandline
$ npx truffle test
```

#### Usage
Refer to `contracts/ExampleCoin.sol` for example.

#### Deployment
Create a copy of the file `2_deploy_wrapper_gluwacoin.js.example` under `migrations/` folder,
and name it `2_deploy_wrapper_gluwacoin.EXAMPLE.js`.
Fill-in `name`, `symbol`, `decimals`, and `baseToken`.
Run `truffle migrate` with a name of the network you want to use.

```commandline
$ npx truffle migrate  --network [NETWORK NAME]
```

Replace the number of decimals in ERC20WrapperGluwacoin.sol to match the decimals of your target (wrapped) token:
```commandline
function decimals() public pure override returns (uint8) {
        return 6;
    }
```

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
