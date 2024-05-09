
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/token/RocketTokenRETH.sol#L166)
require(blocksPassed>depositDelay,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L323)
require(block.timestamp>statusTime+scrubPeriod,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L575)
require(block.timestamp.sub(statusTime)>=rocketDAOProtocolSettingsMinipool.getLaunchTimeout(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBondReducer.sol#L56)
require(block.timestamp>=lastReduction.add(rewardInterval),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/auction/RocketAuctionManager.sol#L233)
require(block.number>=getLotEndBlock(_lotIndex)||bidPrice>=blockPrice,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/auction/RocketAuctionManager.sol#L264)
require(block.number>=getLotEndBlock(_lotIndex),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/network/RocketNetworkBalances.sol#L75)
require(_block<block.number,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L161)
require(_startTime>block.timestamp,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/protocol/settings/RocketDAOProtocolSettingsInflation.sol#L38)
require(_value>block.timestamp,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/protocol/settings/RocketDAOProtocolSettingsInflation.sol#L41)
require(getInflationIntervalStartTime()>block.timestamp,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedProposals.sol#L48)
require(daoNodeTrusted.getMemberLastProposalTime(msg.sender).add(rocketDAONodeTrustedSettingsProposals.getCooldownTime())<=block.timestamp,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedActions.sol#L97)
require(memberInvitedTime.add(rocketDAONodeTrustedSettingsProposals.getActionTime())>block.timestamp,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedActions.sol#L138)
require(leaveAcceptedTime.add(rocketDAONodeTrustedSettingsProposals.getActionTime())>block.timestamp,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedActions.sol#L194)
require(getUint(keccak256(abi.encodePacked(daoNameSpace,""))).add(rocketDAONodeTrustedSettingsMembers.getChallengeCooldown())<block.timestamp,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedActions.sol#L226)
require(challengeTime.add(rocketDAONodeTrustedSettingsMembers.getChallengeWindow())<block.timestamp,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeStaking.sol#L262)
require(block.timestamp.sub(getNodeRPLStakedTime(msg.sender))>=rocketDAOProtocolSettingsRewards.getRewardsClaimIntervalTime(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeManager.sol#L276)
require(block.timestamp>=lastChange.add(rewardInterval),"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/MerkleClaim.sol#L71)
require(block.timestamp>deployTime+60days);

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/StakingRewards.sol#L162)
require(block.timestamp>periodFinish,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TreasuryVester.sol#L25)
require(vestingBegin_>=block.timestamp,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TreasuryVester.sol#L46)
require(block.timestamp>=vestingCliff,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TokenDistributor.sol#L165)
require(block.timestamp>=deployTime+CONTRACT_ACTIVE,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/Timelock.sol#L31)
require(delay_>=MINIMUM_DELAY,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/Timelock.sol#L45)
require(delay_<=MAXIMUM_DELAY,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/Timelock.sol#L92)
require(getBlockTimestamp()<=eta.add(GRACE_PERIOD),"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/GTC.sol#L308)
require(blockNumber<block.number,"");

[Code File](../repos/2021-10-gluwacoin-erc-20-wrapper/ERC-20-Wrapper-Gluwacoin/contracts/abstracts/ERC20Reservable.sol#L128)
require(expiryBlockNum>block.number,"");

[Code File](../repos/2021-10-gluwacoin-erc-20-wrapper/ERC-20-Wrapper-Gluwacoin/contracts/abstracts/ERC20Reservable.sol#L191)
require(reservation._expiryBlockNum>block.number,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/ConstantsHolder.sol#L223)
require(block.timestamp<launchTimestamp,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/BountyV2.sol#L95)
require(_getNextRewardTimestamp(nodeIndex,"")<=block.timestamp,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Pricing.sol#L63)
require(block.timestamp>lastUpdated+constantsHolder.COOLDOWN_TIME(),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L89)
require(block.timestamp>=schainCreationTimeStamp,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgResponse.sol#L60)
require(complaints[schainHash].startComplaintBlockTimestamp+_getComplaintTimeLimit(contractManager)>block.timestamp,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/Distributor.sol#L89)
require(block.timestamp>=timeHelpers.addMonths(constantsHolder.launchTimestamp(),"")),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/DelegationController.sol#L330)
require(block.timestamp+UNDELEGATION_PROHIBITION_WINDOW_SECONDS<_getTimeHelpers().monthToTimestamp(delegations[delegationId].finished),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/BokkyPooBahsDateTimeLibrary.sol#L218)
require(newTimestamp>=timestamp);

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/BokkyPooBahsDateTimeLibrary.sol#L263)
require(newTimestamp<=timestamp);

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/BokkyPooBahsDateTimeLibrary.sol#L298)
require(fromTimestamp<=toTimestamp);

[Audit File](../audits/2022-04-tribe-dao-flywheel-v2-xtribe-xerc4626.md#L351)
require(block.timestamp<=expiry,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/tribe/Tribe.sol#L189)
require(block.timestamp<=deadline,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/dao/timelock/FeiDAOTimelock.sol#L67)
require(block.timestamp<=ROLLBACK_DEADLINE,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/dao/timelock/Timelock.sol#L54)
require(delay_>=minDelay_,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/dao/governor/FeiDAO.sol#L98)
require(_eta<=block.timestamp,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/PSMRouter.sol#L29)
require(deadline>=block.timestamp,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/utils/DelayedPCVMover.sol#L52)
require(block.timestamp>=deadline,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerLBPSwapper.sol#L280)
require(lastChangeBlock<block.number,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerLBPSwapper.sol#L289)
require(swapEndTime()<block.timestamp,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pods/PodFactory.sol#L206)
require(_config.minDelay>=MIN_TIMELOCK_DELAY,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/staking/TribalChief.sol#L157)
require(newBlockReward<tribalChiefTribePerBlock,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/staking/TribalChief.sol#L536)
require(poolDeposit.unlockBlock<=block.number||pool.unlocked==true,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/FujiPriceAware.sol#L108)
require(delay<maxDelay,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/NFTGame.sol#L170)
require(newPhasesTimestamps[index]>temp,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/PreTokenBonds.sol#L305)
require(block.timestamp>=vestingTypeToTimestamp(slot),"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/utils/BaseRewards.sol#L137)
require(block.timestamp>=tr.periodFinish,"");

[Audit File](../audits/2023-03-eigenlabs-eigenlayer.md#L330)
require(expiry>=block.timestamp,"");

[Audit File](../audits/2023-03-eigenlabs-eigenlayer.md#L933)
require(queuedWithdrawal.withdrawalStartBlock+withdrawalDelayBlocks<=block.number||queuedWithdrawal.strategies[0]==beaconChainETHStrategy,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L468)
require(eigenPod.mostRecentWithdrawalTimestamp()>mostRecentWithdrawalBlock,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L181)
require(stakerSignatureAndExpiry.expiry>=block.timestamp,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L467)
require(newOperatorDetails.stakerOptOutWindowBlocks>=_operatorDetails[operator].stakerOptOutWindowBlocks,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L504)
require(approverSignatureAndExpiry.expiry>=block.timestamp,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L568)
require(withdrawal.startBlock+minWithdrawalDelayBlocks<=block.number,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L592)
require(withdrawal.startBlock+strategyWithdrawalDelayBlocks[withdrawal.strategies[i]]<=block.number,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L761)
require(_minWithdrawalDelayBlocks<=MAX_WITHDRAWAL_DELAY_BLOCKS,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L786)
require(newStrategyWithdrawalDelayBlocks<=MAX_WITHDRAWAL_DELAY_BLOCKS,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/AVSDirectory.sol#L65)
require(operatorSignature.expiry>=block.timestamp,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/DelayedWithdrawalRouter.sol#L223)
require(newValue<=MAX_WITHDRAWAL_DELAY_BLOCKS,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L119)
require(timestamp>mostRecentWithdrawalTimestamp,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L197)
require(oracleTimestamp+VERIFY_BALANCE_UPDATE_WINDOW_SECONDS>=block.timestamp,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L510)
require(validatorInfo.mostRecentBalanceUpdateTimestamp<oracleTimestamp,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L770)
require(timestamp>=GENESIS_TIME,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultAccount.sol#L228)
require(blockTime<vaultAccount.maturity);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/markets/DateTime.sol#L12)
require(blockTime>=Constants.QUARTER);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/balances/BalanceHandler.sol#L459)
require(lastClaimTime==balanceStorage.lastClaimTime);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/CalculationViews.sol#L87)
require(market.maturity>blockTime,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/nTokenRedeemAction.sol#L81)
require(nToken.getNextSettleTime()>blockTime,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L190)
require(vaultAccount.lastEntryBlockHeight+Constants.VAULT_ACCOUNT_MIN_BLOCKS<=block.number,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L284)
require(block.timestamp<vaultAccount.maturity);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/InitializeMarketsAction.sol#L461)
require(blockTime>minSweepCashTime,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAction.sol#L407)
require(maturity<=block.timestamp&&vaultState.isSettled==false,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/nTokenMintAction.sol#L74)
require(nextSettleTime>blockTime,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/TradingAction.sol#L503)
require(maturity>blockTime,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/TradingAction.sol#L527)
require(blockTime>lastInitializedTime.add(uint256(uint8(parameters[Constants.RESIDUAL_PURCHASE_TIME_BUFFER]))*1hours),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/patchfix/MigrateIncentivesFix.sol#L109)
require(blockTime>=lastSupplyChangeTime);

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/staking/rewards/Accumulators.sol#L85)
require(epochNumber<getCurrentEpochNumber(),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/mockOVM/bridge/mockOVM_CrossDomainMessenger.sol#L137)
require(nextMessage.timestamp+delay<block.timestamp,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L948)
require(_firstContext.blockNumber>=lastBlockNumber,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L953)
require(_firstContext.timestamp>=lastTimestamp,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L960)
require(_firstContext.timestamp+forceInclusionPeriodSeconds>=block.timestamp,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L965)
require(_firstContext.blockNumber+forceInclusionPeriodBlocks>=block.number,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L991)
require(block.timestamp<nextQueueElement.timestamp+forceInclusionPeriodSeconds,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L998)
require(_context.timestamp<=nextQueueElement.timestamp,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L1003)
require(_context.blockNumber<=nextQueueElement.blockNumber,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L1026)
require(_nextContext.timestamp>=_prevContext.timestamp,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L1031)
require(_nextContext.blockNumber>=_prevContext.blockNumber,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L1071)
require(_finalContext.timestamp<=block.timestamp,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_StateCommitmentChain.sol#L330)
require(lastSequencerTimestamp+SEQUENCER_PUBLISH_WINDOW<block.timestamp,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_BondManager.sol#L155)
require(block.timestamp>=uint256(bond.withdrawalTimestamp)+disputePeriodSeconds,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_BondManager.sol#L175)
require(block.timestamp>=bond.firstDisputeAt+multiFraudProofPeriod,"");

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery0.sol#L243)
require(until>block.timestamp);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery0.sol#L292)
require(pot.unlock_-1<block.timestamp);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery1.sol#L133)
require(unlock-1<block.timestamp);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery1.sol#L220)
require(marked<=block.timestamp);

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/ZAuctionV1.sol#L829)
require(startblock<=block.number,"");

[Audit File](../audits/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol.md#L1096)
require((block.timestamp-_proposedTimestamp)>_delay,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts_forge/utils/ExecutionForkHelper.sol#L151)
require(block.timestamp>=acceptance,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts_forge/utils/MotherForker.sol#L177)
require(pre<timestamp,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/AmplificationUtils.sol#L67)
require(block.timestamp>=self.initialATime+Constants.MIN_RAMP_DELAY,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/AmplificationUtils.sol#L95)
require(self.futureATime>block.timestamp,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/helpers/OZERC20.sol#L461)
require(block.timestamp<=_deadline,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/helpers/ConnextPriceOracle.sol#L159)
require(block.timestamp-_timestamp<Constants.ORACLE_VALID_PERIOD,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/helpers/ConnextPriceOracle.sol#L162)
require(_timestamp-block.timestamp<Constants.FUTURE_TIME_BUFFER,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/SpokeConnector.sol#L794)
require(block.number-_aggregateRootCommitBlock>=delayBlocks,"");

[Audit File](../audits/2021-04-rocketpool.md#L1309)
require(blocksPassed>rocketDAOProtocolSettingsNetwork.getRethDepositDelay(),"");

[Audit File](../audits/2021-04-rocketpool.md#L1615)
require(_startBlock>block.number,"");

[Audit File](../audits/2021-04-rocketpool.md#L1751)
require(block.number.sub(getNodeRPLStakedBlock(msg.sender))>=rocketDAOProtocolSettingsRewards.getRewardsClaimIntervalBlocks(),"");

[Audit File](../audits/2021-04-rocketpool.md#L3396)
require(_block>getPricesBlock(),"");

[Code File](../repos/2021-04-rocketpool/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedProposals.sol#L48)
require(daoNodeTrusted.getMemberLastProposalTime(msg.sender).add(rocketDAONodeTrustedSettingsProposals.getCooldownTime())<=block.timestamp,"");

[Code File](../repos/2021-04-rocketpool/rocketpool/contracts/contract/node/RocketNodeStaking.sol#L262)
require(block.timestamp.sub(getNodeRPLStakedTime(msg.sender))>=rocketDAOProtocolSettingsRewards.getRewardsClaimIntervalTime(),"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Shell.sol#L105)
require(block.timestamp<_deadline,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtectionSettings.sol#L353)
require(minDelay<maxDelay,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtection.sol#L958)
require(pos.timestamp<_time(),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/utility/CheckpointStore.sol#L102)
require(data[target]<=timestamp,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/TokenBase/Base.sol#L520)
require(_deadline>=block.timestamp,"");

[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L1171)
require(SafeMath.add(fallbackSetDate,"")>block.timestamp,"");

[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L1208)
require(_newFallbackDelaySeconds<10*365days,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/treasury/contracts/src/ZrxTreasury.sol#L66)
require(params.votingPeriod<stakingProxy_.epochDurationInSeconds(),"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/treasury/contracts/src/ZrxTreasury.sol#L126)
require(executionEpoch>=currentEpoch+2,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L1818)
require(_ignoreCadence||timeSinceLastPoke>POKE_CADENCE,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/emissions/EmissionsController.sol#L214)
require(epochs.startEpoch<epoch&&epoch<=epochs.startEpoch+EPOCHS,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/emissions/EmissionsController.sol#L426)
require(epoch>epochs.lastEpoch,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/savings/SavingsManager.sol#L230)
require(timeSincePreviousBatch>6hours,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/savings/SavingsManager.sol#L301)
require(lastCollection[_mAsset]==currentTime,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/InterestValidator.sol#L48)
require(timeSincePreviousBatch>12hours,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederManager.sol#L181)
require(block.timestamp>=(_ampData.rampStartTime+MIN_RAMP_TIME),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederManager.sol#L209)
require(block.timestamp<_ampData.rampEndTime,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/rewards/boosted-staking/BoostedDualVault.sol#L657)
require(lastClaim>=userRewards[_account][_first-1].finish,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/rewards/boosted-staking/BoostedDualVault.sol#L668)
require(currentTime>=rwd.start&&lastClaim<=rwd.finish,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/polygon/PLiquidator.sol#L176)
require(block.timestamp>liquidation.lastTriggered+22hours,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/nexus/Nexus.sol#L162)
require(_isDelayOver(p.timestamp),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/nexus/Nexus.sol#L225)
require(_isDelayOver(proposedLockModules[_key]),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/DelayedClaimableGovernor.sol#L49)
require(block.timestamp>=(requestTime+delay),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/IncentivisedVotingLockup.sol#L434)
require(unlock_time>block.timestamp,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/IncentivisedVotingLockup.sol#L458)
require(locked_.end>block.timestamp,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/IncentivisedVotingLockup.sol#L482)
require(unlock_time>locked_.end,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/IncentivisedVotingLockup.sol#L504)
require(block.timestamp>=oldLock.end||expired,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/IncentivisedVotingLockup.sol#L646)
require(_blockNumber<=block.number,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedTokenBPT.sol#L202)
require(block.timestamp>lastPriceUpdateTime+14days,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/QuestManager.sol#L144)
require(_expiry>block.timestamp+1days,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/QuestManager.sol#L191)
require(block.timestamp>(startTime+39weeks),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/QuestManager.sol#L198)
require(quest.status==QuestStatus.EXPIRED||block.timestamp>quest.expiry,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedToken.sol#L275)
require(block.timestamp>oldBalance.cooldownTimestamp+COOLDOWN_SECONDS,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/shared/MockStakedAave.sol#L41)
require(block.timestamp>stakersCooldowns[msg.sender]+COOLDOWN_SECONDS,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/upgradability/DelayedProxyAdmin.sol#L84)
require(_isDelayOver(request.timestamp),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/liquidator/Liquidator.sol#L322)
require(block.timestamp>liquidation.lastTriggered+7days,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/liquidator/Liquidator.sol#L407)
require(block.timestamp>cooldownStartTime+cooldownPeriod,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/liquidator/Liquidator.sol#L412)
require(block.timestamp>cooldownStartTime+cooldownPeriod+unstakeWindow,"");
