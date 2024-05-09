
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/token/temp/RocketTokenDummyRPL.sol#L45)
require(totalSupply().add(_amount)<=totalSupplyCap);

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/GTC.sol#L134)
require(amount<=SafeMath.div(SafeMath.mul(totalSupply,""),""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleToken.sol#L80)
require(amount<=CAP.sub(totalSupply()),"");

[Audit File](../audits/2020-12-1inch-liquidity-protocol.md#L1078)
require(balanceOf(address(this))>=_BASE_SUPPLY,"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/token-faucet/TokenFaucet.sol#L118)
require(amount<=availableTotalSupply,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/adapters/nwToken.sol#L136)
require(totalSupplyInUnderlying<=balanceOfUnderlying,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/BatchAction.sol#L363)
require(balanceState.storedNTokenBalance.add(balanceState.netNTokenTransfer).add(balanceState.netNTokenSupplyChange)>=depositActionAmount,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/staking/FortaStaking_0_1_1.sol#L3244)
require(supply>=amount,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L612)
require(amount<=totalSupply,"");

[Audit File](../audits/2021-04-rocketpool.md#L863)
require(rplFixedSupplyContract.balanceOf(address(msg.sender))>=_amount,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L1145)
require(amount<=supply,"");

[Audit File](../audits/2021-03-dforce-lending-protocol-review.md#L432)
require(_totalSupplyUnderlying.add(_mintAmount)<=_market.supplyCapacity,"");

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/mocks/ExampleCollateralManager.sol#L322)
require(_supplyOf[supplier]>=_value,"");

[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L1179)
require(_maxSupplyNonce<=supplyNonce,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/governance/MockBVault.sol#L25)
require(supply>1000e18,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/Masset.sol#L871)
require(k>config.supply,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/Masset.sol#L884)
require(config.supply>k,"");

In total 17