
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L276)
require(address(this).balance>=depositAmount,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/deposit/RocketDepositPool.sol#L111)
require(capacityNeeded<=maxDepositPoolSize.add(rocketMinipoolQueue.getEffectiveCapacity()),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/network/RocketNetworkFees.sol#L33)
require(demand<=depositPoolBalance);

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeDeposit.sol#L124)
require(preLaunchValue.sub(msg.value)<=rocketDepositPool.getBalance(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/lido/EthLidoPCVDeposit.sol#L170)
require(balance()>=amountIn,"");

[Audit File](../audits/2021-09-fei-protocol-v2-phase-1.md#L442)
require(_balanceDeposited>=_minLpOut,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/strategies/StrategyBaseTVLLimits.sol#L58)
require(newMaxPerDeposit<=newMaxTotalDeposits,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/strategies/StrategyBaseTVLLimits.sol#L79)
require(amount<=maxPerDeposit,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BPool.sol#L523)
require(tokenAmountIn<=maxAmountIn,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/manticore/contracts/TBPoolJoinExitPoolNoFee.sol#L50)
require(poolTotal>=poolAmountIn);

[Code File](../repos/2020-05-balancer-finance/balancer-core/manticore/contracts/TBPoolJoinExitPoolNoFee.sol#L55)
require(poolAmountOut>poolAmountIn);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/InitializeMarketsAction.sol#L269)
require(netAssetCashAvailable>int256(Constants.DEPOSIT_PERCENT_BASIS),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/AccountAction.sol#L147)
require(balanceState.storedCashBalance>=amountInternalPrecision,"");

[Audit File](../audits/2021-04-rocketpool.md#L1373)
require(getBalance().add(msg.value)<=rocketDAOProtocolSettingsDeposit.getMaximumDepositPoolSize(),"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/UniProxy.sol#L116)
require(deposit1>=test1Min&&deposit1<=test1Max,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/UniProxy.sol#L121)
require(deposit0>=test0Min&&deposit0<=test0Max,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/UniProxy.sol#L136)
require(deposit0<=p.deposit0Max,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/UniProxy.sol#L139)
require(deposit1<=p.deposit1Max,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/shared/MockUniswapV3.sol#L81)
require(amountIn<=params.amountInMaximum,"");

In total 19