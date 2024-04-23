//IMPORTANT: THIS FILE IS FOR TESTNET ONLY
//SKIP THIS FILE IF DEPLOY ON MAINNET

const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const New_ERC20WrapperGluwacoin = artifacts.require('ERC20WrapperGluwacoin');
const ERC20WrapperGluwacoin = artifacts.require('ERC20WrapperGluwacoin');

module.exports = async function (deployer, network) {
  if (network == 'goerli') {
    console.info("adres " + instance.address);
  }
  if (network == 'rinkeby') {
    const existing_address = "0x0aD1439A0e0bFdcD49939f9722866651a4AA9B3C";

    const instance = await upgradeProxy(existing_address, New_ERC20WrapperGluwacoin, { deployer, unsafeAllowCustomTypes: true });
    
    console.info("adres " + instance.address);
    console.log('token ' + (await instance.token()));
    console.log('token ' + (await instance.setValS()));
    console.log('token ' + (await instance._newDecimals1));
  }
};