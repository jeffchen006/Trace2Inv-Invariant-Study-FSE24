// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.6.11;

interface IHypervisorFactory {
  function getHypervisor(
    address token0,
    address token1,
    uint24 fee
  ) external returns (address hypervisor);
}
