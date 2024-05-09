
[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/price/ZNSFixedPricer.sol#L163)
require(feePercentage<=PERCENTAGE_BASIS,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L422)
require(totalBalance>=8ether,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L645)
require(totalBalance<8ether,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolManager.sol#L397)
require(totalMinipoolCount.add(1)<=rocketDAOProtocolSettingsMinipool.getMaximumCount(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketRewardsPool.sol#L156)
require(totalRewardsRPL<=getPendingRPLRewards(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketRewardsPool.sol#L164)
require(totalRewardsETH<=getPendingETHRewards(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/protocol/settings/RocketDAOProtocolSettingsMinipool.sol#L41)
require(_value>=(rocketDAONodeTrustedSettingsMinipool.getScrubPeriod().add(1hours)),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/settings/RocketDAONodeTrustedSettingsMinipool.sol#L42)
require(_value<=(rocketDAOProtocolSettingsMinipool.getLaunchTimeout().sub(1hours)),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeDeposit.sol#L256)
require(nodeFee>=_minimumNodeFee,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDO.sol#L830)
require(_maxDecreaseDefault<FULL_ALLOC,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDO.sol#L897)
require((minAprSplitAYS=_aprSplit)<=FULL_ALLOC,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDO.sol#L904)
require((fee=_fee)<=MAX_FEE,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/StakingRewards.sol#L146)
require(rewardRate<=balance/rewardsDuration,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleTokenFungible.sol#L203)
require((fee=_fee)<=FULL_ALLOC/5,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/polygon/IdleCDOPolygon.sol#L859)
require((feeSplit=_feeSplit)<=FULL_ALLOC,"");

[Code File](../repos/2021-10-gluwacoin-erc-20-wrapper/ERC-20-Wrapper-Gluwacoin/contracts/abstracts/ERC20Reservable.sol#L138)
require(_unreservedBalance(sender)>=total,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/PartialDifferences.sol#L275)
require(reducingCoefficient.numerator<=reducingCoefficient.denominator,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/DelegationController.sol#L245)
require(holderBalance>=forbiddenForDelegation,"");

[Audit File](../audits/2021-05-zer0-zbanc.md#L253)
require(newWeight>=minimumWeight,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/BancorNetwork.sol#L95)
require(_maxAffiliateFee<=PPM_RESOLUTION,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/BancorNetwork.sol#L241)
require(0<_affiliateFee&&_affiliateFee<=maxAffiliateFee,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/BancorFormula.sol#L460)
require(_reserveRatio>1&&_reserveRatio<=MAX_WEIGHT*2,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/BancorFormula.sol#L649)
require(_baseN<MAX_NUM);

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterBase.sol#L185)
require(_conversionFee<=PPM_RESOLUTION,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterBase.sol#L316)
require(_conversionFee<=maxConversionFee,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquidity-pool-v2/LiquidityPoolV2Converter.sol#L163)
require(_oracleDeviationFee<=PPM_RESOLUTION,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L159)
require(_minLimit<=_maxLockLimit&&_minLimit<=_maxReleaseLimit,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L235)
require(_minLimit<=maxLockLimit&&_minLimit<=maxReleaseLimit,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/utils/RateLimited.sol#L42)
require(_rateLimitPerSecond<=_maxRateLimitPerSecond,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/utils/RateLimited.sol#L51)
require(newRateLimitPerSecond<=MAX_RATE_LIMIT_PER_SECOND,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/utils/MultiRateLimited.sol#L48)
require(_individualMaxBufferCap<_globalBufferCap,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/utils/MultiRateLimited.sol#L116)
require(_rateLimitPerSecond<=individualMaxRateLimitPerSecond,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/utils/MultiRateLimited.sol#L238)
require(_rateLimitPerSecond<=MAX_RATE_LIMIT_PER_SECOND,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/utils/FuseFixer.sol#L105)
require(getTotalDebt(underlying)<maximum,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/PegStabilityModule.sol#L157)
require(newMintFeeBasisPoints<=MAX_FEE,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/PegStabilityModule.sol#L166)
require(newRedeemFeeBasisPoints<=MAX_FEE,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/uniswap/UniswapPCVDeposit.sol#L97)
require(_maxBasisPointsFromPegLP<=Constants.BASIS_POINTS_GRANULARITY,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/lido/EthLidoPCVDeposit.sol#L216)
require(_maximumSlippageBasisPoints<=Constants.BASIS_POINTS_GRANULARITY,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerLBPSwapper.sol#L300)
require(spentTokenBalance>minTokenSpentBalance,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerLBPSwapper.sol#L355)
require(spentTokenBalance>=minTokenSpentBalance,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/fei/minter/FeiTimedMinter.sol#L80)
require(newFrequency>=MIN_MINT_FREQUENCY,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/fei/minter/PCVEquityMinter.sol#L79)
require(newAprBasisPoints<=MAX_APR_BASIS_POINTS,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/external/gyro/abdk/ABDKMath64x64.sol#L109)
require(result>=MIN_64x64&&result<=MAX_64x64);

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/external/gyro/abdk/ABDKMath64x64.sol#L278)
require(result<=uint128(MAX_64x64));

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/external/gyro/abdk/ABDKMath64x64.sol#L525)
require(result<=int128toUint256(MAX_64x64));

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/inch/farming/FarmingRewards.sol#L104)
require(vote<=MooniswapConstants._MAX_FEE,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/inch/farming/FarmingRewards.sol#L112)
require(vote<=MooniswapConstants._MAX_SLIPPAGE_FEE,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/inch/farming/FarmingRewards.sol#L120)
require(vote<=MooniswapConstants._MAX_DECAY_PERIOD,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/utils/BaseRewards.sol#L119)
require(rewardRate<=balance.mul(scale).div(duration),"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/governance/MooniswapFactoryGovernance.sol#L190)
require(vote<=MooniswapConstants._MAX_SHARE,"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/utils/FullMath.sol#L42)
require(denominator>prod1);

[Audit File](../audits/2023-03-eigenlabs-eigenlayer.md#L257)
require(updatedTotalShares>=MIN_NONZERO_TOTAL_SHARES,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPodManager.sol#L259)
require(numPods+1<=maxPods,"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-pool/PrizePool.sol#L278)
require(exitFee<=maximumExitFee,"");

[Audit File](../audits/2020-05-balancer-finance.md#L202)
require(_totalWeight<=MAX_TOTAL_WEIGHT,"");

[Audit File](../audits/2020-05-balancer-finance.md#L650)
require(denorm>=MIN_WEIGHT,"");

[Audit File](../audits/2020-05-balancer-finance.md#L652)
require(balance>=MIN_BALANCE,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BToken.sol#L50)
require(_balance[address(this)]>=amt,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BToken.sol#L57)
require(_balance[src]>=amt,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BNum.sol#L111)
require(base>=MIN_BPOW_BASE,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BPool.sol#L199)
require(swapFee>=MIN_FEE,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/manticore/contracts/TBPoolJoinExitPoolNoFee.sol#L42)
require(_records_t_balance<=10ether);

[Code File](../repos/2020-05-balancer-finance/balancer-core/echidna/TBPoolExitSwap.sol#L14)
require(balanceOut<=10ether);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/mocks/MockSettleAssets.sol#L42)
require(id<=maxCurrencyId,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L197)
require(liquidationRate<vaultConfig.minCollateralRatioBPS);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L457)
require(vaultConfig.minCollateralRatio<=collateralRatio,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L576)
require(vaultAccount.tempCashBalance<=0);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/balances/BalanceHandler.sol#L269)
require(cashBalance<0,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/math/ABDKMath64x64.sol#L598)
require(result<=uint256(MAX_64x64));

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/Views.sol#L30)
require(0<currencyId&&currencyId<=maxCurrencyId,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L290)
require(collateralRatio<vaultConfig.minCollateralRatio,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAction.sol#L360)
require(balanceTransferred>=underlyingExternalToRepay,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/AccountAction.sol#L191)
require(balance.storedNTokenBalance>=tokensToRedeem,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/TradingAction.sol#L294)
require(market.lastImpliedRate>=minImpliedRate,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/TradingAction.sol#L296)
require(market.lastImpliedRate<=maxImpliedRate,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/BatchAction.sol#L139)
require(balanceState.netCashChange<=0);

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L501)
require(address(this).balance>=value,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L268)
require(_gasLimit<=maxTransactionGasLimit,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L273)
require(_gasLimit>=MIN_ROLLUP_TX_GAS,"");

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/slither/exercises/exercise2/coin.sol#L29)
require(balances[addr]>=value);

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/exercises/exercise3/mintable.sol#L14)
require(int256(value)+totalMinted<totalMintable);

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/ZAuctionV1.sol#L831)
require(minbid<=bid,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L726)
require(dy>=minDy,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L767)
require(dx<=maxDx,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L880)
require(toMint>=minToMint,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/helpers/StableSwap.sol#L82)
require(numPooledTokens>Constants.MINIMUM_POOLED_TOKENS-1,"");

[Audit File](../audits/2021-04-rocketpool.md#L823)
require(rocketDaoNodeTrusted.getMemberUnbondedValidatorCount(msg.sender)<rocketDaoNodeTrustedSettingsMembers.getMinipoolUnbondedMax(),"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/SelectiveLiquidity.sol#L40)
require(_minShells<shells_,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/SelectiveLiquidity.sol#L85)
require(shells_<_maxShells,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/ShellMath.sol#L165)
require(0<_diff||_diff>=MAX_DIFF,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Orchestrator.sol#L49)
require(_feeAtHalt<=.5e18,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L132)
require(fee<=PPM_RESOLUTION,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L247)
require(fee<=_maxConversionFee,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L480)
require(balance<=MAX_UINT128,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L495)
require(sourceBalance<=MAX_UINT128&&targetBalance<=MAX_UINT128,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtection.sol#L375)
require(reserveBalanceNetwork>=_settings.minNetworkTokenLiquidityForMinting(),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtection.sol#L384)
require(newNetworkTokensMinted<=mintingLimit,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtection.sol#L1083)
require(min<=mid&&mid<=max,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/staking-rewards/StakingRewardsStore.sol#L217)
require(rewardRate<=MAX_REWARD_RATE,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/staking-rewards/StakingRewards.sol#L1077)
require(baseReward<=(program.rewardRate*REWARDS_HALVING_FACTOR).mul(effectiveStakingEndTime.sub(effectiveStakingStartTime)).mul(_rewardShare(reserveToken,"")).div(PPM_RESOLUTION),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/staking-rewards/StakingRewards.sol#L1106)
require(fullReward<=maxClaimableReward,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L118)
require(initialMinLimit<=initialMaxLockLimit&&initialMinLimit<=initialMaxReleaseLimit,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L219)
require(newMinLimit<=_maxLockLimit&&newMinLimit<=_maxReleaseLimit,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/utility/MathEx.sol#L196)
require(w<MAX_UINT256,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/PriceOracle.sol#L1186)
require(_maxSwing>=MINIMUM_SWING&&_maxSwing<=MAXIMUM_SWING,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L182)
require(_collateralFactor<=collateralFactorMaxMantissa,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L249)
require(_newCloseFactorMantissa>=closeFactorMinMantissa&&_newCloseFactorMantissa<=closeFactorMaxMantissa,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L270)
require(_newLiquidationIncentiveMantissa>=liquidationIncentiveMinMantissa&&_newLiquidationIncentiveMantissa<=liquidationIncentiveMaxMantissa,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L299)
require(_newCollateralFactorMantissa<=collateralFactorMaxMantissa,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/TokenBase/TokenAdmin.sol#L76)
require(_newReserveRatio<=maxReserveRatio,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/TokenBase/TokenAdmin.sol#L99)
require(_newFlashloanFeeRatio<=BASE,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/TokenBase/TokenAdmin.sol#L123)
require(_newProtocolFeeRatio<=BASE,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/adapters/tokemak/GammaController.sol#L102)
require(balancesBefore[i]<balancesAfter[i],"");

[Code File](../repos/2021-05-pooltogether-sushi-and-yearn-v2-yield-sources/pooltogether-yearnv2-yield-source/contracts/yield-source/YearnV2YieldSource.sol#L149)
require(_maxLosses<=10_000,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#L44)
require(ltv<=MAX_VALID_LTV,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#L67)
require(threshold<=MAX_VALID_LIQUIDATION_THRESHOLD,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#L96)
require(bonus<=MAX_VALID_LIQUIDATION_BONUS,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#L246)
require(reserveFactor<=MAX_VALID_RESERVE_FACTOR,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/lendingpool/LendingPool.sol#L934)
require(reservesCount<_maxNumberOfReserves,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/MetaTransactionsFeature.sol#L107)
require(initialBalance<=address(this).balance,"");

[Audit File](../audits/2020-07-mstable-1.1.md#L601)
require(extrapolatedAPY<MAX_APY,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L1828)
require(connectorBalance>=lastBalance_,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L1858)
require(connector_.checkBalance()>=ideal,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-polygon-22.sol#L1120)
require(extrapolatedAPY<_maxApy,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L875)
require(_swapFee<=MAX_FEE,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L877)
require(_govFee<=5e17,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L892)
require(_min<=3e17&&_max>=7e17,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederLogic.sol#L326)
require(fpTokenQuantity<=_maxInputQuantity,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederLogic.sol#L752)
require(_netRedeemInput>1e6,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederLogic.sol#L800)
require(redeemInput>1e6,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/buy-and-make/GaugeBriber.sol#L92)
require(_feeSplit<=5e17,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/buy-and-make/RevenueSplitBuyBack.sol#L280)
require(_treasuryFee<=CONFIG_SCALE,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedTokenBPT.sol#L178)
require(received>=minOut[0],"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedTokenBPT.sol#L189)
require(_fees<1e24,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/governance/MockBVault.sol#L75)
require(returnUnits>minOut,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/masset/migrate2/MusdV2Rebalance.sol#L277)
require(funderBalance>flashLoanShortfall,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/masset/migrate2/MusdV2Rebalance.sol#L284)
require(flashLoanShortfall<=maxShortfall,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/MassetLogic.sol#L345)
require(mAssetQuantity<=_maxMassetQuantity,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/Masset.sol#L98)
require(_recolFee<=5e13,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/versions/MV1Migrator.sol#L57)
require(scaledVaultBalances[i]<maxScaledVaultBalance,"");

In total 140