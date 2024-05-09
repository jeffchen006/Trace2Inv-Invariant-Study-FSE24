
[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L1403)
require(_currentBalance>=launchAmount,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/RocketVault.sol#L70)
require(etherBalances[contractName]>=_amount,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/token/RocketTokenRETH.sol#L113)
require(ethBalance>=ethAmount,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBondReducer.sol#L52)
require(_newBondAmount<existing,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/deposit/RocketDepositPool.sol#L324)
require(_amount<=getExcessBalance(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketMerkleDistributorMainnet.sol#L90)
require(_stakeAmount<=totalAmountRPL,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedProposals.sol#L118)
require(_rplFine<=rplBondAmount,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeStaking.sol#L265)
require(rplStake>=_amount,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeStaking.sol#L267)
require(rplStake.sub(_amount)>=getNodeMaximumRPLStake(msg.sender),"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/GuardedLaunchUpgradable.sol#L50)
require(getContractValue()+_amount<=_limit,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDO.sol#L591)
require(_redeemedTokens+_tolerance>=_amount,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/strategies/BaseStrategy.sol#L191)
require(amountWithdrawn>=_minUnderlying,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/polygon/IdleCDOPolygon.sol#L487)
require(_redeemedTokens+100>=_amount,"");

[Audit File](../audits/2021-10-gluwacoin-erc-20-wrapper.md#L291)
require(_unreservedBalance(from)>=amount,"");

[Code File](../repos/2021-10-gluwacoin-erc-20-wrapper/ERC-20-Wrapper-Gluwacoin/contracts/abstracts/ERC20ETHlessTransfer.sol#L63)
require(senderBalance>=(amount+fee),"");

[Code File](../repos/2021-10-gluwacoin-erc-20-wrapper/ERC-20-Wrapper-Gluwacoin/contracts/abstracts/ERC20Wrapper.sol#L159)
require(burnerBalance>=amount,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Wallets.sol#L227)
require(amount<=_validatorWallets[validatorId],"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L411)
require(validators[validatorId].minimumDelegationAmount<=amount,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/BancorNetwork.sol#L425)
require(toAmount>=_minReturn,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquidity-pool-v2/LiquidityPoolV2Converter.sol#L492)
require(poolTokenAmount>=_minReturn,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquidity-pool-v2/LiquidityPoolV2Converter.sol#L539)
require(reserveAmount>=_minReturn,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquidity-pool-v1/LiquidityPoolV1Converter.sol#L292)
require(amount>=_minReturn,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquidity-pool-v1/LiquidityPoolV1Converter.sol#L669)
require(reserveAmount>=_reserveMinReturnAmounts[i],"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L313)
require(_amount>=minLimit&&_amount<=currentLockLimit,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L482)
require(_amount>=minLimit&&_amount<=currentReleaseLimit,"");

[Code File](../repos/2022-04-tribe-dao-flywheel-v2-xtribe-xerc4626/ERC4626-Contracts/src/external/PeripheryPayments.sol#L35)
require(balanceWETH9>=amountMinimum,"");

[Code File](../repos/2022-04-tribe-dao-flywheel-v2-xtribe-xerc4626/ERC4626-Contracts/src/external/PeripheryPayments.sol#L57)
require(balanceToken>=amountMinimum,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/mock/MockAngleStableMaster.sol#L30)
require(amountAfterFee>=minStableAmount,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/mock/MockAngleStableMaster.sol#L45)
require(amountAfterFee>=minCollatAmount,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/mock/MockStEthStableSwap.sol#L35)
require(output>=min_out,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/mock/MockEthPCVDeposit.sol#L25)
require(address(this).balance>=amount,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/mock/MockTokemakEthPool.sol#L34)
require(requestedWithdrawal[msg.sender]>=requestedAmount,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/timelocks/TokenTimelock.sol#L70)
require(amount<=available,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/timelocks/QuadraticTimelockedSubdelegator.sol#L67)
require(amount<=_tribeBalance(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/PegStabilityModule.sol#L218)
require(amountOut>=minAmountOut,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/PegStabilityModule.sol#L236)
require(amountFeiOut>=minAmountOut,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/NonCustodialPSM.sol#L246)
require(amountFeiOut>=minFeiAmountOut,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/uniswap/UniswapPCVDeposit.sol#L75)
require(amountUnderlying<=totalUnderlying,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/lido/EthLidoPCVDeposit.sol#L157)
require(amountReceived>=minimumAcceptedAmountOut,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerPCVDepositWeightedPool.sol#L232)
require(valueOut>minValueOut,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/NFTGame.sol#L374)
require(userdata[user].accruedPoints>=amount,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/Mooniswap.sol#L188)
require(amount>=minAmounts[i],"");

[Audit File](../audits/2021-03-defi-saver.md#L524)
require(amountBought>=exData.destAmount,ERR_SLIPPAGE_HIT);

[Audit File](../audits/2021-03-defi-saver.md#L786)
require(_exData.srcAddr.getBalance(address(this))>=_exData.srcAmount,ERR_SRC_AMOUNT);

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/exchangeV3/offchainWrappersV3/ParaswapWrapper.sol#L35)
require(_exData.srcAddr.getBalance(address(this))>=_exData.srcAmount,"");

[Audit File](../audits/2023-03-eigenlabs-eigenlayer.md#L161)
require(amountShares<=priorTotalShares,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/StrategyManager.sol#L362)
require(shareAmount<=userShares,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L351)
require(amountToWithdraw<=nonBeaconChainETHBalanceWei,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L423)
require(amountGwei<=withdrawableRestakedExecutionLayerGwei,"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-pool/PrizePool.sol#L399)
require(amount<=_currentAwardBalance,"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-pool/PrizePool.sol#L746)
require(controlledTokenBalance>=amount,"");

[Audit File](../audits/2020-05-balancer-finance.md#L333)
require(poolAmountOut>=minPoolAmountOut,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BPool.sol#L461)
require(tokenAmountOut>=minAmountOut,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/manticore/contracts/TBPoolJoinExitPoolNoFee.sol#L52)
require(_records_t_balance>=tokenAmountOut);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L681)
require(amountTransferred>=underlyingExternalToRepay,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/balances/BalanceHandler.sol#L276)
require(amountToSettleAsset<=cashBalance.neg(),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/AccountAction.sol#L159)
require(amountWithdrawnExternal<=0);

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/staking/FortaStaking_0_1_1.sol#L2837)
require(fromBalance>=amount,"");

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/example/PopsicleFixed.sol#L157)
require(balances[sender]>=amount);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/seller1.sol#L150)
require(escrow<=amount);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery0.sol#L141)
require(pot.amount_>=amount);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery1.sol#L147)
require(transfer<=amount);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery1.sol#L161)
require(retrieve<=amount);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery1.sol#L173)
require(amount<1<<128);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery1.sol#L348)
require(uint128(cache)+amount<1<<128);

[Code File](../repos/2021-03-pooltogether-pods/pods-v3-contracts/contracts/Pod.sol#L529)
require(amount.sub(actualAmount)<=maxFee,"");

[Audit File](../audits/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol.md#L230)
require(relayerFee<=txData.amount,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L916)
require(amounts[i]>=minAmounts[i],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L956)
require(dy>=minAmount,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L1010)
require(v.balances[i]>=amounts[i],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L1041)
require(tokenAmount<=maxBurnAmount,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/helpers/OZERC20.sol#L284)
require(fromBalance>=_amount,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/helpers/OZERC20.sol#L338)
require(accountBalance>=_amount,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Shell.sol#L223)
require(targetAmount_>_minTargetAmount,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Shell.sol#L281)
require(originAmount_<_maxOriginAmount,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/PartitionedLiquidity.sol#L89)
require(totalSuppliesTicket.claims[_assim.ix]>=_withdrawals[i],"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/PartitionedLiquidity.sol#L91)
require(ticket.claims[_assim.ix]>=_withdrawals[i],"");

[Code File](../repos/2021-03-umbra-smart-contracts/umbra-protocol/contracts-core/contracts/Umbra.sol#L262)
require(_amount>_sponsorFee,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/BancorNetwork.sol#L272)
require(targetAmount>=minReturn,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L797)
require(amount>=minReturn,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L861)
require(reserveAmount>=minReturnAmounts[i],"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L429)
require(_minLimit<=amount&&amount<=currentLockLimit,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L454)
require(amount>=_minLimit&&amount<=currentLockLimit,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L585)
require(amount>=_minLimit&&amount<=currentReleaseLimit,"");

[Audit File](../audits/2021-03-dforce-lending-protocol-review.md#L796)
require(_equity>=_amount,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L925)
require(_repayAmount<=_maxRepay,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/TokenBase/TokenAdmin.sol#L148)
require(_withdrawAmount<=totalReserves&&_withdrawAmount<=_getCurrentCash(),"");

[Code File](../repos/2021-05-zer0-zdao-token/zDAO-Token/contracts/upgrade-mocks/ERC20UpgradeableOld.sol#L270)
require(senderBalance>=amount,"");

[Code File](../repos/2021-05-zer0-zdao-token/zDAO-Token/contracts/upgrade-mocks/ERC20UpgradeableOld.sol#L316)
require(accountBalance>=amount,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/Hypervisor.sol#L405)
require(amount0>=amount0Min&&amount1>=amount1Min,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/Hypervisor.sol#L429)
require(owed0>=amount0Min&&owed1>=amount1Min,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/mocks/MockUniswapV3Pool.sol#L130)
require(balanceBefore>=amount,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/mocks/MockUniswapV3Pool.sol#L134)
require(balanceRecipient+amount>=balanceRecipient,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/mocks/MockUniswapV3Pool.sol#L161)
require(balanceSender>=amount,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/mocks/MockUniswapV3Pool.sol#L170)
require(balanceNext>=amount,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/adapters/tokemak/GammaController.sol#L49)
require(balance0>=amount0&&balance1>=amount1,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/mocks/swap/MockParaSwapAugustus.sol#L51)
require(_receivedAmount>=toAmount,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/logic/ValidationLogic.sol#L179)
require(vars.amountOfCollateralNeededETH<=vars.userCollateralBalanceETH,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/logic/ValidationLogic.sol#L210)
require(amount<=maxLoanSizeStable,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/BaseParaSwapSellAdapter.sol#L65)
require(expectedMinAmountOut<=minAmountToReceive,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/BaseParaSwapSellAdapter.sol#L69)
require(balanceBeforeAssetFrom>=amountToSwap,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/BaseParaSwapSellAdapter.sol#L99)
require(amountReceived>=minAmountToReceive,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/UniswapRepayAdapter.sol#L119)
require(amounts[0]<=maxCollateralToSwap,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/ParaSwapLiquiditySwapAdapter.sol#L118)
require(balance<=amountToSwap,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/ParaSwapLiquiditySwapAdapter.sol#L177)
require(balanceToSwap<=amountToSwap,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/ParaSwapLiquiditySwapAdapter.sol#L180)
require(balance>=amountToSwap.add(premium),"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/BaseUniswapAdapter.sol#L150)
require(expectedMinAmountOut<minAmountOut,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/BaseUniswapAdapter.sol#L209)
require(maxAmountToSwap<expectedMaxAmountToSwap,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/UniswapV3Feature.sol#L263)
require(minBuyAmount<=buyAmount,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/UniswapFeature.sol#L394)
require(buyAmount>=minBuyAmount,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/multiplex/MultiplexFeature.sol#L220)
require(boughtAmount>=minBuyAmount,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/emissions/VotiumBribeForwarder.sol#L51)
require(rewardBal>=amount,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederLogic.sol#L63)
require(mintOutput>=_minOutputQuantity,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederLogic.sol#L272)
require(amountOut>1,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederLogic.sol#L274)
require(amountOut>=_minOutputQuantities[i],"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederLogic.sol#L442)
require(swapOutput>=_minOutputQuantity,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederLogic.sol#L479)
require(outputQuantity>=_minOutputQuantity,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/GamifiedToken.sol#L405)
require(oldBalance.cooldownUnits>=_rawAmount,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedToken.sol#L300)
require(totalWithdraw<=maxWithdrawal,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/buy-and-make/MockBPool.sol#L36)
require(poolAmountOut>minPoolAmountOut,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/buy-and-make/MockBPool.sol#L59)
require(tokenAmountOut>minAmountOut,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/shared/MockUniswapV3.sol#L47)
require(amountOut>=params.amountOutMinimum,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/shared/MockUniswap.sol#L33)
require(output>=amountOutMin,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/masset/MockMasset.sol#L61)
require(out_amt>=_minOutputQuantity,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/masset/migrate2/MusdV2Rebalance.sol#L178)
require(flashAmount>=swapInputs[0]+swapInputs[1],"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/MassetLogic.sol#L215)
require(bAssetQuantity>=_minOutputQuantity,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/MassetLogic.sol#L596)
require(newOutputReserve<x[_o],"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/peripheral/RenWrapper.sol#L65)
require(mintedAmount>_minOutputAmount,"");

In total 128