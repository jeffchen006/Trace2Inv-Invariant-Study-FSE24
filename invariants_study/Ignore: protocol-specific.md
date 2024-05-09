
[Audit File](../audits/2021-05-zer0-zns.md#L277)
require(registrar.domainExists(domain),"");

[Audit File](../audits/2021-05-zer0-zns.md#L332)
require(!initialized);

[Audit File](../audits/2021-05-zer0-zns.md#L538)
require(bidder==recoveredbidder,"");

[Audit File](../audits/2021-05-zer0-zns.md#L565)
require(recipient==recoveredBidder,"");

[Audit File](../audits/2021-05-zer0-zns.md#L567)
require(approvedBids[hashOfSig]==true,"");

[Audit File](../audits/2021-05-zer0-zns.md#L676)
require(_exists(parentId),"");

[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/registrar/ZNSSubRegistrar.sol#L97)
require(!registry.exists(domainHash),"");

[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/price/ZNSFixedPricer.sol#L62)
require(priceConfigs[parentHash].isSet,"");

[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/upgrade-test-mocks/distribution/ZNSSubRegistrarMock.sol#L111)
require(!registry.exists(coreRegisterArgs.domainHash),"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L313)
require(status==MinipoolStatus.Withdrawable,"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L332)
require(!finalised,"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L614)
require(status==MinipoolStatus.Dissolved,"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L619)
require(rocketMinipoolManager.getMinipoolExists(address(this)),"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L668)
require(rocketNodeDeposit.isValidDepositAmount(newBondAmount),"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L1252)
require(!getReduceBondCancelled(_minipoolAddress),"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L1397)
require(status==MinipoolStatus.Initialised,"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L1596)
require(_nodeAddress==nodeAddress,"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L1602)
require(_nodeAddress==nodeAddress||_nodeAddress==rocketStorage.getNodeWithdrawalAddress(nodeAddress),"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L1779)
require(_assignDeposits(rocketDAOProtocolSettingsDeposit),"");

[Audit File](../audits/2023-01-rocket-pool-atlas-v1.2.md#L1852)
require(rocketDAOProtocolSettingsNode.getVacantMinipoolsEnabled(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/RocketBase.sol#L27)
require(getBool(keccak256(abi.encodePacked("",""))),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/RocketBase.sol#L35)
require(_contractAddress==getAddress(keccak256(abi.encodePacked("",""))),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/RocketStorage.sol#L43)
require(booleanStorage[keccak256(abi.encodePacked("",""))],"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/RocketVault.sol#L88)
require(_tokenContract.transferFrom(msg.sender,""),""),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/RocketVault.sol#L107)
require(tokenContract.transfer(_withdrawalAddress,""),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/token/RocketTokenRPL.sol#L186)
require(rplInflationContract.approve(rocketVaultAddress,"")),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/token/RocketTokenRPL.sol#L204)
require(rplFixedSupplyContract.transferFrom(msg.sender,""),""),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/token/RocketTokenRPL.sol#L206)
require(this.transfer(msg.sender,""),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolQueue.sol#L135)
require(false,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L84)
require(storageState==StorageState.Initialised,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L90)
require(storageState==StorageState.Uninitialised,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L108)
require(_contractAddress==getContractAddress(_contractName),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L257)
require(status==MinipoolStatus.Prelaunch,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L259)
require(!vacant,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L370)
require(ownerCalling,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L375)
require(status==MinipoolStatus.Staking,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L380)
require(!_rewardsOnly,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L426)
require(rocketDAOProtocolSettingsMinipool.hasUserDistributeWindowPassed(timeElapsed),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L442)
require(userDistributed,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L606)
require(rocketDAONode.getMemberIsValid(msg.sender),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L696)
require(vacant==false,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolManager.sol#L358)
require(rocketNodeManager.getFeeDistributorInitialised(_nodeAddress),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolManager.sol#L369)
require(!getBool(finalisedKey),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBondReducer.sol#L44)
require(daoSettingsMinipool.getBondReductionEnabled(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBondReducer.sol#L47)
require(!reductionCancelled,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBondReducer.sol#L50)
require(rocketNodeDeposit.isValidDepositAmount(_newBondAmount),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBondReducer.sol#L99)
require(!memberVoted,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBondReducer.sol#L132)
require(canReduceBondAmount(msg.sender),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBase.sol#L24)
require(address(this)!=self);

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBase.sol#L49)
require(contractExists(delegateAddress),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBase.sol#L68)
require(rocketMinipoolDelegate!=rocketMinipoolDelegatePrev,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBase.sol#L117)
require(contractExists(delegateContract),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/auction/RocketAuctionManager.sol#L174)
require(rocketAuctionSettings.getCreateLotEnabled(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/auction/RocketAuctionManager.sol#L203)
require(getLotExists(_lotIndex),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/auction/RocketAuctionManager.sol#L205)
require(rocketAuctionSettings.getBidOnLotEnabled(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/deposit/RocketDepositPool.sol#L46)
require(address(this)==getAddress(keccak256("")),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/deposit/RocketDepositPool.sol#L92)
require(rocketDAOProtocolSettingsDeposit.getDepositEnabled(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketSmoothingPool.sol#L43)
require(result,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketMerkleDistributorMainnet.sol#L139)
require(claimedWord&mask!=mask,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketMerkleDistributorMainnet.sol#L141)
require(_verifyProof(_rewardIndex[i],""),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketRewardsPool.sol#L142)
require(rocketDAOProtocolSettingsNetwork.getSubmitRewardsEnabled(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketRewardsPool.sol#L144)
require(_submission.rewardIndex==getRewardIndex(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketRewardsPool.sol#L171)
require(!getBool(nodeSubmissionKey),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketRewardsPool.sol#L200)
require(calcBase.mul(submissionCount).div(rocketDAONodeTrusted.getMemberCount())>=rocketDAOProtocolSettingsNetwork.getNodeConsensusThreshold(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/network/RocketNetworkBalances.sol#L73)
require(rocketDAOProtocolSettingsNetwork.getSubmitBalancesEnabled(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/network/RocketNetworkPenalties.sol#L61)
require(!getBool(executedKey),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/network/RocketNetworkPenalties.sol#L66)
require(calcBase.mul(submissionCount).div(rocketDAONodeTrusted.getMemberCount())>=rocketDAOProtocolSettingsNetwork.getNodePenaltyThreshold(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/network/RocketNetworkPrices.sol#L57)
require(rocketDAOProtocolSettingsNetwork.getSubmitPricesEnabled(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L28)
require(keccak256(abi.encodePacked(getContractName(msg.sender)))==keccak256(abi.encodePacked(_daoName)),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L94)
returngetUint(keccak256(abi.encodePacked(daoProposalNameSpace,"")));

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L181)
setUint(keccak256(abi.encodePacked(daoProposalNameSpace,"")),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L197)
require(getState(_proposalID)!=ProposalState.Succeeded,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L199)
require(getState(_proposalID)==ProposalState.Active,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L201)
require(!getReceiptHasVoted(_proposalID,""),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L220)
require(getState(_proposalID)==ProposalState.Succeeded,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L234)
require(getState(_proposalID)==ProposalState.Pending||getState(_proposalID)==ProposalState.Active,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L236)
require(getProposer(_proposalID)==_member,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/protocol/RocketDAOProtocol.sol#L19)
require(getBootstrapModeDisabled()==false,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/protocol/RocketDAOProtocol.sol#L78)
require(_confirmDisableBootstrapMode==true,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/protocol/settings/RocketDAOProtocolSettings.sol#L19)
if(getBool(keccak256(abi.encodePacked(settingNameSpace,""))))require(getContractAddress("")==msg.sender,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedProposals.sol#L163)
require(!daoNodeTrusted.getMemberIsValid(_nodeAddress),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedActions.sol#L49)
require(rocketDAONode.getMemberIsValid(_nodeAddress)!=true,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedActions.sol#L101)
require(rplInflationContract.transferFrom(_nodeAddress,""),""),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedActions.sol#L103)
require(rplInflationContract.approve(rocketVaultAddress,""),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedActions.sol#L192)
require(!rocketDAONode.getMemberIsChallenged(_nodeAddress),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrusted.sol#L36)
require(getMemberCount()<daoMemberMinCount,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedUpgrade.sol#L43)
require(nameHash!=keccak256(abi.encodePacked("")),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedUpgrade.sol#L55)
require(!getBool(keccak256(abi.encodePacked("",""))),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/settings/RocketDAONodeTrustedSettings.sol#L19)
if(getBool(keccak256(abi.encodePacked(settingNameSpace,""))))require(getContractAddress("")==msg.sender,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeStaking.sol#L241)
require(rplToken.transferFrom(msg.sender,""),""),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeStaking.sol#L243)
require(rplToken.approve(rocketVaultAddress,""),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeManager.sol#L120)
require(rocketDAOProtocolSettingsNode.getRegistrationEnabled(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeManager.sol#L169)
require(!getFeeDistributorInitialised(msg.sender),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeManager.sol#L251)
require(rocketDAONodeTrustedSettingsRewards.getNetworkEnabled(_network),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeManager.sol#L267)
require(daoSettingsNode.getSmoothingPoolRegistrationEnabled(),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeManager.sol#L278)
require(getBool(stateKey)!=_state,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeDeposit.sol#L47)
require(getBool(keccak256(abi.encodePacked("","")))||getBool(keccak256(abi.encodePacked("",""))),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeDeposit.sol#L112)
require(isValidDepositAmount(_bondAmount),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeDeposit.sol#L221)
require(!rocketMinipoolManager.getMinipoolExists(_expectedMinipoolAddress)&&!rocketMinipoolManager.getMinipoolDestroyed(_expectedMinipoolAddress),"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeDeposit.sol#L225)
require(address(minipool)==_expectedMinipoolAddress,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeDeposit.sol#L264)
require(rocketDAOProtocolSettingsNode.getDepositEnabled(),"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDO.sol#L331)
require(skipDefaultCheck,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDO.sol#L910)
require((unlentPerc=_unlentPerc)<=FULL_ALLOC,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDO.sol#L939)
require(_tranche==BBTranche||_tranche==aa,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/TrancheWrapper.sol#L54)
require(isOriginal,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/DefaultDistributor.sol#L35)
require(isActive,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDOBestYieldVariant.sol#L30)
require(BBTranche==_tranche,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/StakingRewards.sol#L156)
require(tokenAddress!=address(stakingToken),"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleTokenFungible.sol#L223)
require((maxUnlentPerc=_perc)<=100000,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleTokenFungible.sol#L268)
require(total==FULL_ALLOC,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/strategies/convex/ConvexBaseStrategy.sol#L161)
require(!shutdown,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/strategies/convex/ConvexBaseStrategy.sol#L459)
require(_curveDeposit!=WETH,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/utils/ReentrancyGuardInitialize.sol#L53)
require(_status!=_ENTERED,"");

[Audit File](../audits/2021-04-gitcoin-token-distribution.md#L191)
require(_hashLeaf(user_id,user_amount,leaf),"");

[Audit File](../audits/2021-04-gitcoin-token-distribution.md#L265)
require(keccak256(packed1)==keccak256(packed2),"");

[Audit File](../audits/2021-04-gitcoin-token-distribution.md#L311)
require(hashMatch(user_id,user_address,user_amount,delegate_address,leaf,eth_signed_message_hash_hex),"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TokenDistributor.sol#L110)
require(!isClaimed(user_id),"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TokenDistributor.sol#L113)
require(isSigned(eth_signed_message_hash_hex,""),"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TokenDistributor.sol#L131)
require(digest==eth_signed_message_hash_hex,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TokenDistributor.sol#L135)
require(leaf==leaf_hash,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TokenDistributor.sol#L138)
require(MerkleProof.verify(merkleProof,""),"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TokenDistributor.sol#L144)
require(IERC20(token).transfer(user_address,""),"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TokenDistributor.sol#L168)
require(IERC20(token).transfer(timeLockContract,""),"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/GovernorAlpha.sol#L146)
require(proposersLatestProposalState!=ProposalState.Active,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/GovernorAlpha.sol#L178)
require(state(proposalId)==ProposalState.Succeeded,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/GovernorAlpha.sol#L194)
require(state(proposalId)==ProposalState.Queued,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/GovernorAlpha.sol#L205)
require(state!=ProposalState.Executed,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/GovernorAlpha.sol#L263)
require(state(proposalId)==ProposalState.Active,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/GovernorAlpha.sol#L266)
require(receipt.hasVoted==false,"");

[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/Timelock.sol#L90)
require(queuedTransactions[txHash],"");

[Code File](../repos/2022-08-1inch-exchange-aggregationrouter-v5/limit-order-protocol/contracts/libraries/MakerTraitsLib.sol#L15)
*252bit`PRE_INTERACTION_CALL_FLAG`-ifset,"")

[Code File](../repos/2022-08-1inch-exchange-aggregationrouter-v5/limit-order-protocol/contracts/libraries/MakerTraitsLib.sol#L20)
*247bit`UNWRAP_WETH_FLAG`-ifset,"")

[Code File](../repos/2021-10-gluwacoin-erc-20-wrapper/ERC-20-Wrapper-Gluwacoin/contracts/abstracts/ERC20ETHlessTransfer.sol#L93)
require(!_usedNonces[signer][nonce],"");

[Code File](../repos/2021-10-gluwacoin-erc-20-wrapper/ERC-20-Wrapper-Gluwacoin/contracts/abstracts/Validate.sol#L18)
require(signer==sender,"");

[Code File](../repos/2020-11-paxos/simple-multisig/contracts/SimpleMultiSig.sol#L65)
require(msg.sender==address(this));

[Audit File](../audits/2020-10-skale-network.md#L206)
require(skaleDKG.isLastDKGSuccessful(keccak256(abi.encodePacked(schainName))),dkgRevert.strConcat(schainName));

[Audit File](../audits/2020-10-skale-network.md#L489)
require(nodes.removeSpaceFromNode(node,space),"");

[Audit File](../audits/2020-10-skale-network.md#L545)
require(isNodeLeaving(nodeIndex),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/ConstantsHolder.sol#L135)
require(hasRole(CONSTANTS_HOLDER_MANAGER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/BountyV2.sol#L69)
require(hasRole(BOUNTY_REDUCTION_MANAGER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SyncManager.sol#L41)
require(hasRole(SYNC_MANAGER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SyncManager.sol#L52)
require(_ipRangeNames.add(ipRangeNameHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SyncManager.sol#L59)
require(_ipRangeNames.remove(ipRangeNameHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Pricing.sol#L117)
require(totalNodes!=numberOfActiveNodes,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/ContractManager.sol#L79)
require(contracts[contractId]!=newContractsAddress,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SchainsInternal.sol#L93)
require(hasRole(SCHAIN_TYPE_MANAGER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SchainsInternal.sol#L98)
require(hasRole(DEBUGGER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SchainsInternal.sol#L103)
require(hasRole(GENERATION_MANAGER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SchainsInternal.sol#L108)
require(isSchainExist(schainHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SchainsInternal.sol#L284)
require(_removeAddressFromSchain(schainHash,"")),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SchainsInternal.sol#L381)
require(_keysOfSchainTypes.add(numberOfSchainTypes+1),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SchainsInternal.sol#L392)
require(_keysOfSchainTypes.remove(typeOfSchain),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SchainsInternal.sol#L825)
require(_keysOfSchainTypes.contains(typeOfSchain),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SchainsInternal.sol#L875)
require(_addAddressToSchain(schainHash,"")),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SchainsInternal.sol#L995)
require(nodes.removeSpaceFromNode(node,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L65)
require(schainsInternal.isSchainExist(schainHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L124)
require(hasRole(SCHAIN_CREATOR_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L198)
require(!skaleDKG.isLastDKGSuccessful(schainHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L201)
require(schainsInternal.isAnyFreeNode(schainHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L323)
require(schainsInternal.isSchainNameAvailable(name),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L431)
require(schainsInternal.checkSchainOnNode(nodesInGroup[i],""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L457)
require(_optionsIndex[schainHash].add(optionHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L470)
require(_optionsIndex[schainHash].remove(optionHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L484)
require(_optionsIndex[schainHash].contains(optionHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Permissions.sol#L59)
require(_isAdmin(msg.sender),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleVerifier.sol#L67)
require(G1Operations.checkRange(signature),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleVerifier.sol#L80)
require(G1Operations.isG1Point(signature.a,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleVerifier.sol#L84)
require(G2Operations.isG2(publicKey),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Wallets.sol#L257)
require(validatorService.validatorExists(validatorId),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Wallets.sol#L272)
require(schainsInternal.isSchainActive(schainHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/KeyStorage.sol#L68)
require(value.isG2(),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SlashingTable.sol#L46)
require(hasRole(PENALTY_SETTER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/NodeRotation.sol#L184)
require(_rotations[schainHash].newNodeIndexes.contains(nodeIndex),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/NodeRotation.sol#L238)
require(nodes.removeSpaceFromNode(nodeIndex,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/NodeRotation.sol#L298)
require(_rotations[schainHash].newNodeIndexes.add(newNodeIndex),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/NodeRotation.sol#L308)
require(ISkaleDKG(contractManager.getContract("")).isLastDKGSuccessful(schainHash),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/NodeRotation.sol#L315)
require(_rotations[schainHash].nodeIndex==nodeIndex,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Nodes.sol#L43)
*spaceavailability,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Nodes.sol#L107)
require(hasRole(COMPLIANCE_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Nodes.sol#L216)
require(!nodesNameCheck[keccak256(abi.encodePacked(params.name))],"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Nodes.sol#L218)
require(from==_publicKeyToAddress(params.publicKey),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Nodes.sol#L272)
require(hasRole(NODE_MANAGER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Nodes.sol#L353)
require(validatorService.isAuthorizedValidator(validatorId),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Nodes.sol#L396)
require(nodes[nodeIndex].status==NodeStatus.Active,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Nodes.sol#L410)
require(nodes[nodeIndex].status==NodeStatus.In_Maintenance,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Nodes.sol#L467)
require(newIP==newPublicIP,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleDKG.sol#L74)
require(channels[schainHash].active,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleDKG.sol#L643)
require(_isNodeOwnedByMessageSender(nodeIndex,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleManager.sol#L79)
require(to==address(this),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleManager.sol#L125)
require(permitted,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleManager.sol#L132)
require(nodes.completeExit(nodeIndex),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleManager.sol#L153)
require(hasRole(SCHAIN_REMOVAL_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleManager.sol#L161)
require(nodes.isNodeExist(msg.sender,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleManager.sol#L163)
require(!nodes.isNodeLeft(nodeIndex),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleManager.sol#L196)
require(IMintableToken(address(skaleToken)).mint(address(distributor),""),""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgComplaint.sol#L70)
require(skaleDKG.isNodeBroadcasted(schainHash,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgComplaint.sol#L99)
require(!skaleDKG.isAllDataReceived(schainHash,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgPreResponse.sol#L99)
require(complaints[schainHash].nodeToComplaint==fromNodeIndex,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgPreResponse.sol#L101)
require(hashedData[schainHash][indexOnSchain]==skaleDKG.hashData(secretKeyContribution,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgPreResponse.sol#L110)
require(_checkCorrectVectorMultiplication(index,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgPreResponse.sol#L157)
require(G1Operations.checkRange(g1Mul),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgResponse.sol#L58)
require(index<channels[schainHash].n,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgResponse.sol#L127)
require(G1Operations.checkRange(share),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgResponse.sol#L130)
require(G1Operations.isG1(share),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgBroadcast.sol#L79)
require(schainRotationCounter==rotationCounter,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgBroadcast.sol#L92)
require(!dkgProcess[schainHash].broadcasted[index],"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/dkg/SkaleDkgAlright.sol#L57)
require(numberOfParticipant==dkgProcess[schainHash].numberOfBroadcasted,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/utils/SegmentTree.sol#L88)
require(_correctPlace(self,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/utils/SegmentTree.sol#L151)
require(_correctPlace(self,"")&&_correctPlace(self,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/Punisher.sol#L76)
require(hasRole(FORGIVER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/Punisher.sol#L80)
require(!delegationController.hasUnprocessedSlashes(holder),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/DelegationPeriodManager.sol#L58)
require(hasRole(DELEGATION_PERIOD_SETTER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/TokenState.sol#L55)
require(hasRole(LOCKER_MANAGER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/Distributor.sol#L101)
require(skaleToken.transfer(to,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/DelegationController.sol#L300)
require(_getValidatorService().checkValidatorAddressToId(msg.sender,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/DelegationController.sol#L317)
require(getState(delegationId)==State.DELEGATED,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/DelegationController.sol#L902)
require(currentState==State.PROPOSED,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L62)
require(hasRole(VALIDATOR_MANAGER_ROLE,""),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L67)
require(validatorExists(validatorId),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L97)
require(!validatorAddressExists(msg.sender),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L131)
require(!_trustedValidators[validatorId],"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L153)
require(_trustedValidators[validatorId],"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L228)
require(keccak256(abi.encodePacked(validatorId)).toEthSignedMessageHash().recover(sig)==nodeAddress,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L298)
require(!isAcceptingNewRequests(validatorId),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L314)
require(isAcceptingNewRequests(validatorId),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L325)
require(_nodeAddressToValidatorId[nodeAddress]==validatorId,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L409)
require(isAuthorizedValidator(validatorId),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L442)
require(validatorAddressExists(validatorAddress),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/openzeppelin/AccessControlUpgradeableLegacy.sol#L25)
*require(hasRole(MY_ROLE,"")));

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/openzeppelin/AccessControlUpgradeableLegacy.sol#L113)
require(hasRole(_roles[role].adminRole,"")),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/openzeppelin/ERC777.sol#L195)
require(_msgSender()!=operator,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/openzeppelin/ERC777.sol#L210)
require(operator!=_msgSender(),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/openzeppelin/ERC777.sol#L351)
*@paramrequireReceptionAckiftrue,"")

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/openzeppelin/ERC777.sol#L372)
_callTokensReceived(operator,"");

[Audit File](../audits/2021-05-zer0-zbanc.md#L751)
require(owner==addressOf(CONVERTER_UPGRADER),"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/BancorNetwork.sol#L324)
require(targetToken==IERC20Token(addressOf(BNT_TOKEN)),"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/BancorNetwork.sol#L357)
require(IERC20Token(_path[0])==_bancorX.token(),"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/BancorNetwork.sol#L416)
require(stepData.targetToken.transfer(_affiliateAccount,""),"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterRegistryData.sol#L10)
*ishardertoupgradeasitrequiresmigratingallregistrydataintoanewcontract,"")table;

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterRegistryData.sol#L281)
require(!item.valid,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterRegistryData.sol#L296)
require(item.valid,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterBase.sol#L152)
require(isActive(),"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterBase.sol#L163)
require(!isActive(),"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterBase.sol#L174)
require(reserves[_address].isSet,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterBase.sol#L215)
require(reserves[ETH_RESERVE_ADDRESS].isSet,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterBase.sol#L393)
require(address(_token)!=address(anchor)&&!reserves[_token].isSet,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterBase.sol#L470)
require(_sourceToken!=_targetToken,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterRegistry.sol#L144)
require(isConverterValid(_converter),"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquidity-pool-v1/LiquidityPoolV1Converter.sol#L204)
require(isStandardPool,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquidity-pool-v1/LiquidityPoolV1Converter.sol#L278)
require(_reserveAmounts[i]==msg.value,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquidity-pool-v1/LiquidityPoolV1Converter.sol#L511)
require(reserves[_reserveTokens[i]].isSet,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/XTransferRerouter.sol#L39)
require(reroutingEnabled,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L196)
require(xTransfersEnabled,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L207)
require(reportingEnabled,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L373)
require(!reportedTxs[_txId][msg.sender],"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L397)
require(transactionIds[_xTransferId]==_txId,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L407)
require(!transactions[_txId].completed,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L431)
require(transaction.to==_for,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/utility/PriceOracle.sol#L63)
require(_address1!=_address2,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/utility/Owned.sol#L45)
require(_newOwner!=owner,"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/utility/Utils.sol#L37)
require(_address!=address(this),"");

[Audit File](../audits/2022-04-tribe-dao-flywheel-v2-xtribe-xerc4626.md#L364)
require(nonce==nonces[signer]++,"");

[Code File](../repos/2022-04-tribe-dao-flywheel-v2-xtribe-xerc4626/flywheel-v2/src/token/ERC20Gauges.sol#L344)
require(_userGauges[user].remove(gauge));

[Code File](../repos/2022-04-tribe-dao-flywheel-v2-xtribe-xerc4626/flywheel-v2/src/token/ERC20MultiVotes.sol#L265)
require(_delegates[delegator].remove(delegatee));

[Code File](../repos/2022-04-tribe-dao-flywheel-v2-xtribe-xerc4626/flywheel-v2/src/token/ERC20MultiVotes.sol#L351)
require(_delegates[user].remove(delegatee));

[Code File](../repos/2022-04-tribe-dao-flywheel-v2-xtribe-xerc4626/flywheel-v2/src/rewards/FlywheelGaugeRewards.sol#L113)
require(rewardToken.balanceOf(address(this))-balanceBefore>=totalQueuedForCycle);

[Code File](../repos/2022-04-tribe-dao-flywheel-v2-xtribe-xerc4626/flywheel-v2/src/rewards/FlywheelGaugeRewards.sol#L194)
require(queuedRewards.storedCycle<currentCycle);

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/core/Permissions.sol#L27)
require(isGovernor(msg.sender),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/core/Permissions.sol#L32)
require(isGuardian(msg.sender),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/core/Permissions.sol#L108)
require(role!=GOVERN_ROLE,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/shutdown/fuse/RariMerkleRedeemer.sol#L18)
require(keccak256(userSignatures[msg.sender])!=keccak256(userSignatures[address(0)]),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/shutdown/fuse/RariMerkleRedeemer.sol#L23)
require(keccak256(userSignatures[msg.sender])==keccak256(userSignatures[address(0)]),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/shutdown/fuse/RariMerkleRedeemer.sol#L174)
require(MerkleProof.verifyCalldata(_merkleProof,""),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/mock/MockCore.sol#L21)
require(!_initialized,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/mock/MockCore.sol#L28)
require(id!=1,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/mock/MockRariMerkleRedeemerNoSigs.sol#L18)
require(keccak256(userSignatures[msg.sender])==keccak256(userSignatures[address(0)]),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/fuse/rewards/AutoRewardsDistributorV2.sol#L109)
require(updateNeeded,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/oracle/collateralization/CollateralizationOracle.sol#L319)
require(_valid,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/oracle/collateralization/CollateralizationOracleWrapper.sol#L137)
require(_update(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/oracle/collateralization/CollateralizationOracleWrapper.sol#L158)
require(_validityStatus,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/oracle/collateralization/CollateralizationOracleWrapper.sol#L276)
require(!isOutdated(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/tribe/TribeMinter.sol#L78)
require(newBufferCap!=oldBufferCap,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/tribe/stabilizer/TribeReserveStabilizer.sol#L63)
require(isCollateralizationBelowThreshold(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/tribe/stabilizer/TribeReserveStabilizer.sol#L89)
require(!isCollateralizationBelowThreshold(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/dao/governor/GovernorAlpha.sol#L263)
require(state==ProposalState.Active||state==ProposalState.Pending,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/timelocks/TokenTimelock.sol#L77)
require(passedCliff(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/timelocks/TokenTimelock.sol#L130)
require(newBeneficiary==pendingBeneficiary,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/metagov/BalancerGaugeStaker.sol#L44)
require(currentMinter!=newMinter,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/metagov/utils/LiquidityGaugeManager.sol#L70)
require(gaugeController!=_gaugeController,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/metagov/utils/LiquidityGaugeManager.sol#L90)
require(_tokenStakedInGauge(gaugeAddress)==token,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/utils/Timed.sol#L21)
require(isTimeStarted(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/utils/Timed.sol#L27)
require(isTimeEnded(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/MergerBase.sol#L54)
require(!bothPartiesAccepted,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/MergerBase.sol#L56)
require(tribeAccepted,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/PegExchanger.sol#L32)
require(!isExpired(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/PegExchanger.sol#L53)
require(bothPartiesAccepted==true,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/PegExchangerDripper.sol#L13)
require(!PegExchanger(PEG_EXCHANGER).isExpired(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/PegExchangerDripper.sol#L23)
require(PegExchanger(PEG_EXCHANGER).isExpired(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/TribeRagequit.sol#L68)
require(bothPartiesAccepted,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/TribeRagequit.sol#L70)
require(verifyClaim(msg.sender,""),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/MergerGate.sol#L22)
require(rgtGovernor.state(PROPOSAL_NUMBER)==GovernorAlpha.ProposalState.Executed,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/sentinel/PCVSentinel.sol#L85)
require(guards.contains(guard),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/sentinel/PCVSentinel.sol#L92)
require(targets[i]!=address(this),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/PegStabilityModule.sol#L96)
require(!redeemPaused,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/PegStabilityModule.sol#L102)
require(!mintPaused,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/PSMRouter.sol#L131)
require(_ethAmountIn==msg.value,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/NonCustodialPSM.sol#L369)
require(newPCVDeposit.balanceReportedIn()==address(underlyingToken),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/PriceBoundPSM.sol#L112)
require(_validPrice(price),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/ERC20HoldingPCVDeposit.sol#L21)
require(address(_token)!=FEI,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/PCVGuardian.sol#L99)
require(isSafeAddress(safeAddress),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/PCVGuardian.sol#L180)
require(safeAddresses.add(anAddress),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/PCVGuardian.sol#L185)
require(safeAddresses.remove(anAddress),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/angle/AngleEuroRedeemer.sol#L54)
require(oracleValid,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/angle/AngleEuroRedeemer.sol#L93)
require(usdcBalance/1e6==redeemedDai/1e18,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/angle/AngleUniswapPCVDeposit.sol#L42)
require(_poolManager.token()==address(fei()),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/angle/AngleUniswapPCVDeposit.sol#L44)
require(_stakingRewards.stakingToken()==_pair,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/utils/PCVSplitter.sol#L38)
require(total==Constants.BASIS_POINTS_GRANULARITY,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/utils/PCVDripController.sol#L55)
require(dripEligible(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerPCVDepositWeightedPool.sol#L77)
require(tokenFound,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerPCVDepositWeightedPool.sol#L80)
require(_token!=_fei,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerPCVDepositWeightedPool.sol#L291)
require(decimals<=18,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/IVault.sol#L556)
*`batchSwap`canbeusedtomakeasingleswap,"")externalpayablereturns(int256[]memory);

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerLBPSwapper.sol#L134)
require(_pool.getOwner()==address(this),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerLBPSwapper.sol#L145)
require(tokenReceived==address(tokens[0])||tokenReceived==address(tokens[1]),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerPool2Lens.sol#L71)
require(address(tokens[0])==_token||address(tokens[1])==_token);

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/balancer/BalancerPool2Lens.sol#L103)
require(reportedValid&&otherValid,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pcv/compound/CompoundPCVDepositBase.sol#L31)
require(cToken.isCToken(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pods/GovernanceMetadataRegistry.sol#L45)
require(registration[proposalHash]==false,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pods/PodFactory.sol#L144)
require(!tribalCouncilDeployed,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/staking/TribalChief.sol#L261)
require(rewardData[i].rewardMultiplier==SCALE_FACTOR,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/staking/TribalChiefSyncV2.sol#L93)
require(isRewardDecreaseAvailable(),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/staking/StakingTokenWrapper.sol#L30)
require(address(tribalChief.stakedToken(_pid))==address(this),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L35)
require(_core.isMinter(msg.sender),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L40)
require(_core.isBurner(msg.sender),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L45)
require(_core.isPCVController(msg.sender),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L50)
require(_core.isGovernor(msg.sender)||isContractAdmin(msg.sender),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L58)
require(_core.isGovernor(msg.sender),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L63)
require(_core.isGovernor(msg.sender)||_core.isGuardian(msg.sender),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L71)
require(_core.isGovernor(msg.sender)||_core.isGuardian(msg.sender)||isContractAdmin(msg.sender),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L80)
require(_core.hasRole(role,""),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L86)
require(_core.hasRole(role1,"")||_core.hasRole(role2,""),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L95)
require(_core.hasRole(role1,"")||_core.hasRole(role2,"")||_core.hasRole(role3,""),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L108)
require(_core.hasRole(role1,"")||_core.hasRole(role2,"")||_core.hasRole(role3,"")||_core.hasRole(role4,""),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L125)
require(_core.hasRole(role1,"")||_core.hasRole(role2,"")||_core.hasRole(role3,"")||_core.hasRole(role4,"")||_core.hasRole(role5,""),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L144)
require(_core.hasRole(role1,"")||_core.hasRole(role2,"")||_core.hasRole(role3,"")||_core.hasRole(role4,"")||_core.hasRole(role5,"")||_core.hasRole(role6,""),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/OracleRef.sol#L92)
require(valid,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/external/gyro/abdk/ABDKMath64x64.sol#L289)
require(x!=MIN_64x64);

[Audit File](../audits/2021-09-fei-protocol-v2-phase-1.md#L534)
require(_pool.getOwner()==address(this),"");

[Code File](../repos/2021-09-fei-protocol-v2-phase-1/fei-protocol-core/contracts/shutdown/fuse/RariMerkleRedeemer.sol#L18)
require(keccak256(userSignatures[msg.sender])!=keccak256(userSignatures[address(0)]),"");

[Code File](../repos/2021-09-fei-protocol-v2-phase-1/fei-protocol-core/contracts/shutdown/fuse/RariMerkleRedeemer.sol#L23)
require(keccak256(userSignatures[msg.sender])==keccak256(userSignatures[address(0)]),"");

[Code File](../repos/2021-09-fei-protocol-v2-phase-1/fei-protocol-core/contracts/mock/MockRariMerkleRedeemerNoSigs.sol#L18)
require(keccak256(userSignatures[msg.sender])==keccak256(userSignatures[address(0)]),"");

[Code File](../repos/2021-09-fei-protocol-v2-phase-1/fei-protocol-core/contracts/pcv/balancer/BalancerLBPSwapper.sol#L134)
require(_pool.getOwner()==address(this),"");

[Audit File](../audits/2022-03-fuji-protocol.md#L343)
require(sent,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/Controller.sol#L39)
require(_fujiAdmin.validVault(_vaultAddr),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/Controller.sol#L78)
require(vault.activeProvider()!=_newProvider,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/F2Swapper.sol#L41)
require(assetFrom!=assetTo,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/arbitrum/flashloans/FlasherArbitrum.sol#L74)
require(_paramsHash=="","");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/arbitrum/flashloans/FlasherArbitrum.sol#L201)
require(_paramsHash==keccak256(abi.encode(_info)),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/FujiPriceAware.sol#L93)
require(isSignerAuthorized(signer),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/NFTGame.sol#L161)
require(hasRole(GAME_ADMIN,""),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/NFTGame.sol#L294)
require(hasRole(GAME_INTERACTOR,""),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/NFTGame.sol#L397)
require(!isClaimed[msg.sender],"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/NFTGame.sol#L631)
require(!_isCrateOrCardId(ids),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/PreTokenBonds.sol#L129)
require(_exists(tokenId),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/PreTokenBonds.sol#L147)
require(_checkIfSlotExists(slotID),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/PreTokenBonds.sol#L167)
require(nftGame.hasRole(_nftgame_GAME_ADMIN,""),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/PreTokenBonds.sol#L269)
require(nftGame.hasRole(_nftgame_GAME_INTERACTOR,"")||isGameAdmin,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/PreTokenBonds.sol#L275)
require(_slot!=_bondSlotTimes[0],"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/NFTInteractions.sol#L234)
require(_isLocked(msg.sender),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/NFTInteractions.sol#L253)
require(crateId==CRATE_COMMON_ID||crateId==CRATE_EPIC_ID||crateId==CRATE_LEGENDARY_ID,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/utils/VNFTCoreV2.sol#L55)
require(_checkOnVNFTReceived(from_,""),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/utils/VNFTCoreV2.sol#L74)
require(from_==ownerOf(tokenId_),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/utils/VNFTCoreV2.sol#L103)
require(ownerOf(targetTokenId_)==to_,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/utils/VNFTCoreV2.sol#L129)
require(_slotOf(tokenId_)==_slotOf(targetTokenId_),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/utils/VNFTCoreV2.sol#L132)
require(owner==ownerOf(targetTokenId_),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/utils/VoucherCore.sol#L86)
require(_exists(targetTokenId_),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/libraries/LibUniversalERC20FTM.sol#L45)
require(!isFTM(token),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/libraries/AssetLibrary.sol#L20)
require(self.slot==slot,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/libraries/AssetLibrary.sol#L26)
require(self.isValid&&target.isValid,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/libraries/AssetLibrary.sol#L38)
require(self.isValid,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/libraries/AssetLibrary.sol#L41)
require(self.slot==target.slot,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/libraries/WadRayMath.sol#L131)
require(result/_WAD_RAY_RATIO==a,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/libraries/LibUniversalERC20Upgradeable.sol#L47)
require(!isNative(token),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/abstracts/vault/VaultBaseUpgradeable.sol#L110)
require(_target.isContract(),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/abstracts/fujiERC1155/F1155Manager.sol#L44)
require((_address).isContract(),"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/mainnet/providers/ProviderDYDX.sol#L56)
require(check,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/mainnet/libraries/LibUniversalERC20Upgradeable.sol#L47)
require(!isETH(token),"");

[Audit File](../audits/2020-12-1inch-liquidity-protocol.md#L236)
*requireastaketobelockedformultipleblocksbeforeitcanbeunstaked(rejectflash-loans)

[Audit File](../audits/2020-12-1inch-liquidity-protocol.md#L533)
require(token.firstUnprocessedEpoch==currentEpoch,"");

[Audit File](../audits/2020-12-1inch-liquidity-protocol.md#L988)
require(_modules.add(module),"");

[Audit File](../audits/2020-12-1inch-liquidity-protocol.md#L1027)
require(_modules.remove(module),"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/MooniswapFactory.sol#L42)
require(tokenA!=tokenB,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/MooniswapFactory.sol#L44)
require(_pools[token1][token2]==Mooniswap(0),"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/ReferralFeeReceiver.sol#L64)
require(token.firstUnprocessedEpoch==currentEpoch,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/ReferralFeeReceiver.sol#L81)
require(firstUnprocessedEpoch.add(1)==token.currentEpoch,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/ReferralFeeReceiver.sol#L97)
require(availableBalance==amount,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/ReferralFeeReceiver.sol#L100)
require(_validateSpread(_mooniswap),"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/ReferralFeeReceiver.sol#L161)
require(firstUnprocessedEpoch.add(1)==currentEpoch,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/Mooniswap.sol#L83)
require(mooniswapFactoryGovernance.isActive(),"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/Mooniswap.sol#L100)
require(_token0!=_token1,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/inch/farming/FarmingRewards.sol#L191)
require(token!=tokenRewards[i].gift,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/inch/farming/FarmingRewards.sol#L196)
require(token.uniBalanceOf(address(this))==totalSupply(),"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/utils/BaseRewards.sol#L158)
require(gift!=tokenRewards[i].gift,"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/utils/Converter.sol#L38)
require(_validateSpread(mooniswap),"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/utils/Converter.sol#L44)
require(mooniswapFactory.isPool(mooniswap),"");

[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/utils/Converter.sol#L55)
require(pathWhitelist[path[i]],"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/DS/DSAuth.sol#L31)
require(isAuthorized(msg.sender,""),"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/exchangeV3/offchainWrappersV3/ZeroxWrapper.sol#L15)
errorInsufficientFunds(uint256available,"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/exchangeV3/offchainWrappersV3/ZeroxWrapper.sol#L17)
errorInsufficientFeeFunds(uint256available,"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/utils/LSVProxyRegistry.sol#L36)
require(proxies[_oldOwner][_indexNumInOldOwnerProxiesArr]==_proxyAddr);

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/utils/SafeERC20.sol#L77)
require(abi.decode(returndata,"")),"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/utils/Address.sol#L6)
errorInsufficientBalance(uint256available,"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/utils/Address.sol#L10)
errorInsufficientBalanceForCall(uint256available,"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/actions/fee/helpers/GasFeeHelper.sol#L40)
require(tokenDecimals<=18,"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/actions/flashloan/FLSpark.sol#L134)
require(correctAmount,"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/actions/flashloan/FLBalancer.sol#L94)
require(_tokens[i].getBalance(address(this))==paybackAmount+balancesBefore[i],"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/actions/flashloan/FLEuler.sol#L102)
require(isCorrectAmount,"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/actions/flashloan/FLMaker.sol#L97)
require(_token.getBalance(address(this))==paybackAmount+balanceBefore,"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/actions/flashloan/dydx/FLDyDx.sol#L128)
require(tokenAddr.getBalance(address(this))==amount+balanceBefore,"");

[Audit File](../audits/2023-03-eigenlabs-eigenlayer.md#L158)
require(token==underlyingToken,"");

[Audit File](../audits/2023-03-eigenlabs-eigenlayer.md#L350)
require(IERC1271(staker).isValidSignature(digestHash,signature)==ERC1271_MAGICVALUE,"");

[Audit File](../audits/2023-03-eigenlabs-eigenlayer.md#L353)
require(ECDSA.recover(digestHash,signature)==staker,"");

[Audit File](../audits/2023-03-eigenlabs-eigenlayer.md#L966)
require(address(eigenPodManager.getPod(podOwner))==pod,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L379)
require(delegationContract.slasher()==slasher,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L385)
require(strategyManagerContract.slasher()==slasher,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L390)
require(strategyManagerContract.eigenPodManager()==eigenPodManager,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L395)
require(slasherContract.strategyManager()==strategyManager,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L398)
require(eigenPodManagerContract.ethPOS()==ethPOSDeposit,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L406)
require(eigenPodManagerContract.strategyManager()==strategyManager,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L415)
require(delayedWithdrawalRouterContract.eigenPodManager()==eigenPodManager,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L422)
require(eigenLayerProxyAdmin.getProxyImplementation(TransparentUpgradeableProxy(payable(address(delegation))))==address(delegationImplementation),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L433)
require(eigenLayerProxyAdmin.getProxyImplementation(TransparentUpgradeableProxy(payable(address(slasher))))==address(slasherImplementation),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L444)
require(eigenLayerProxyAdmin.getProxyImplementation(TransparentUpgradeableProxy(payable(address(delayedWithdrawalRouter))))==address(delayedWithdrawalRouterImplementation),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L452)
require(eigenLayerProxyAdmin.getProxyImplementation(TransparentUpgradeableProxy(payable(address(deployedStrategyArray[i]))))==address(baseStrategyImplementation),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L460)
require(eigenPodBeacon.implementation()==address(eigenPodImplementation),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L481)
require(delegation.pauserRegistry()==eigenLayerPauserReg,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L486)
require(slasher.pauserRegistry()==eigenLayerPauserReg,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L491)
require(delayedWithdrawalRouter.pauserRegistry()==eigenLayerPauserReg,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L496)
require(eigenLayerPauserReg.isPauser(operationsMultisig),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L498)
require(eigenLayerPauserReg.isPauser(pauserMultisig),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L502)
require(deployedStrategyArray[i].pauserRegistry()==eigenLayerPauserReg,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L539)
require(strategyManager.strategyWhitelister()==operationsMultisig,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L544)
require(eigenPodManager.beaconChainOracle()==IBeaconChainOracle(address(0)),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L549)
require(delayedWithdrawalRouter.eigenPodManager()==eigenPodManager,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L554)
require(baseStrategyImplementation.strategyManager()==strategyManager,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L559)
require(eigenPodImplementation.ethPOS()==ethPOSDeposit,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L567)
require(eigenPodImplementation.delayedWithdrawalRouter()==delayedWithdrawalRouter,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L583)
require(setMaxPerDeposit==maxPerDeposit,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/whitelist/ERC20PresetMinterPauser.sol#L53)
require(hasRole(MINTER_ROLE,"")),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/whitelist/ERC20PresetMinterPauser.sol#L67)
require(hasRole(PAUSER_ROLE,"")),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L284)
require(strategyManager.delegation()==delegation,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L286)
require(strategyManager.slasher()==slasher,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L291)
require(cheats.load(address(strategyManager),"")==bytes32(withdrawalDelayBlocks),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L296)
require(DelegationManagerStorage(address(delegation)).strategyManager()==strategyManager,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L301)
require(DelegationManagerStorage(address(delegation)).slasher()==slasher,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L304)
require(eigenPodManager.ethPOS()==ethPOS,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L306)
require(eigenPodManager.strategyManager()==strategyManager,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L308)
require(address(eigenPodManager.beaconChainOracle())==beaconChainOracle,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L358)
require(stakerStrategyListAfter[i]==stakerStrategyList[i],"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L369)
require(withdrawalRootBeforeUpgrade==strategyManager.calculateWithdrawalRoot(queuedWithdrawalLst),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L379)
require(lstDepositorNonceBefore==StrategyManagerStorage(address(strategyManager)).nonces(lstDepositor),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L384)
require(lstDepositorNumWithdrawalsQueued==uint256(cheats.load(address(strategyManager),"")),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L421)
require(lstDepositorBalancePostUpgrade==lstDepositorBalancePreUpgrade,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L433)
require(address(eigenPodManager.ownerToPod(eigenPodDepositor))==address(eigenPod),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L438)
require(eigenPod.podOwner()==eigenPodOwner,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L443)
require(!eigenPod.hasRestaked(),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L461)
require(eigenPod.hasRestaked(),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/milestone/M2Deploy.s.sol#L480)
require(delayedWithdrawal.amount==podBalanceBefore,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/utils/ExistingDeploymentParser.sol#L64)
require(configChainId==currentChainId,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/testing/M2_Deploy_From_Scratch.s.sol#L421)
require(delayedWithdrawalRouterContract.eigenPodManager()==eigenPodManager,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/testing/M2_Deploy_From_Scratch.s.sol#L450)
require(eigenLayerProxyAdmin.getProxyImplementation(TransparentUpgradeableProxy(payable(address(delayedWithdrawalRouter))))==address(delayedWithdrawalRouterImplementation),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/testing/M2_Deploy_From_Scratch.s.sol#L495)
require(eigenPodManager.pauserRegistry()==eigenLayerPauserReg,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/testing/M2_Deploy_From_Scratch.s.sol#L561)
require(delayedWithdrawalRouter.eigenPodManager()==eigenPodManager,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/testing/M2_Deploy_From_Scratch.s.sol#L579)
require(eigenPodImplementation.delayedWithdrawalRouter()==delayedWithdrawalRouter,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/certora/harnesses/StructuredLinkedListHarness.sol#L30)
require(listStorage.insertAfter(_node,""),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/certora/harnesses/StructuredLinkedListHarness.sol#L32)
require(listStorage.insertBefore(_node,""),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L211)
require(isDelegated(staker),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L360)
require(!pendingWithdrawals[newRoot],"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L492)
require(!isDelegated(staker),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L509)
require(!delegationApproverSaltIsSpent[_delegationApprover][approverSalt],"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L563)
require(pendingWithdrawals[withdrawalRoot],"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L710)
require(staker==withdrawer||!strategyManager.thirdPartyTransfersForbidden(strategies[i]),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/StrategyManager.sol#L45)
require(strategyIsWhitelistedForDeposit[strategy],"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/StrategyManager.sol#L141)
require(!thirdPartyTransfersForbidden[strategy],"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BeaconChainProofs.sol#L135)
require(Merkle.verifyInclusionSha256({proof:validatorFieldsProof,""),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BeaconChainProofs.sol#L163)
require(Merkle.verifyInclusionSha256({proof:stateRootProof,""),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BeaconChainProofs.sol#L245)
require(Merkle.verifyInclusionSha256({proof:withdrawalProof.historicalSummaryBlockRootProof,""),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BeaconChainProofs.sol#L256)
require(Merkle.verifyInclusionSha256({proof:withdrawalProof.slotProof,""),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BeaconChainProofs.sol#L270)
require(Merkle.verifyInclusionSha256({proof:withdrawalProof.executionPayloadProof,""),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BeaconChainProofs.sol#L282)
require(Merkle.verifyInclusionSha256({proof:withdrawalProof.timestampProof,""),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BeaconChainProofs.sol#L304)
require(Merkle.verifyInclusionSha256({proof:withdrawalProof.withdrawalProof,""),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/EIP1271SignatureUtils.sol#L29)
require(IERC1271(signer).isValidSignature(digestHash,"")==EIP1271_MAGICVALUE,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/EIP1271SignatureUtils.sol#L34)
require(ECDSA.recover(digestHash,"")==signer,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/permissions/Pausable.sol#L34)
require(pauserRegistry.isPauser(msg.sender),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/permissions/Pausable.sol#L51)
require(!paused(index),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/permissions/Pausable.sol#L74)
require((_paused&newPausedStatus)==_paused,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/permissions/Pausable.sol#L95)
require(((~_paused)&(~newPausedStatus))==(~_paused),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPodManager.sol#L75)
require(!hasPod(msg.sender),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L107)
require(!hasRestaked,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L113)
require(hasRestaked,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L132)
require(!IPausable(address(eigenPodManager)).paused(index),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L451)
require(validatorInfo.status==VALIDATOR_STATUS.INACTIVE,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L516)
require(validatorInfo.status==VALIDATOR_STATUS.ACTIVE,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L592)
require(_validatorPubkeyHashToInfo[validatorPubkeyHash].status!=VALIDATOR_STATUS.INACTIVE,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L598)
require(!provenWithdrawal[validatorPubkeyHash][withdrawalTimestamp],"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L344)
require(from!=to,"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L347)
_requireAwardNotInProgress();

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L405)
require(isRngTimedOut(),"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L561)
require(address(_externalErc20).isContract(),"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L564)
require(succeeded,"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L605)
require(address(_externalErc721).supportsInterface(Constants.ERC165_INTERFACE_ID_ERC721),"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L619)
require(IERC721Upgradeable(_externalErc721).ownerOf(_tokenId)==address(prizePool),"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L639)
requireAwardNotInProgress{externalErc721s.removeAddress(address(_prevExternalErc721),""));

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L682)
require(!isRngRequested(),"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L688)
require(isRngCompleted(),"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-pool/PrizePool.sol#L454)
require(_canAwardExternal(externalToken),"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-pool/PrizePool.sol#L787)
require(_controlledToken.controller()==this,"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-pool/PrizePool.sol#L914)
require(_isControlled(ControlledTokenInterface(controlledToken)),"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-pool/PrizePool.sol#L926)
require(_canAddLiquidity(_amount),"");

[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-pool/yield-source/YieldSourcePrizePool.sol#L34)
require(address(_yieldSource).isContract(),"");

[Audit File](../audits/2020-05-balancer-finance.md#L166)
require(_records[token].bound,"");

[Audit File](../audits/2020-05-balancer-finance.md#L648)
require(!_finalized,"");

[Audit File](../audits/2020-05-balancer-finance.md#L850)
require(xfer,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BNum.sol#L47)
require(!flag,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BPool.sol#L133)
require(_finalized,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BPool.sol#L347)
require(_records[tokenIn].bound,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BPool.sol#L437)
require(_publicSwap,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/manticore/contracts/BNum.sol#L47)
require(!flag);

[Code File](../repos/2020-05-balancer-finance/balancer-core/echidna/TBTokenERC20.sol#L44)
require(approve_return);

[Audit File](../audits/2022-07-notional-finance.md#L116)
require(!assetToken.hasTransferFee&&!underlyingToken.hasTransferFee);

[Audit File](../audits/2022-07-notional-finance.md#L812)
require(!mustLiquidateFull,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/mocks/MockMaliciousETH.sol#L19)
require(status,""));

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/mocks/MockNTokenRedeem.sol#L42)
require(!DateTime.isValidMarketMaturity(maxMarketIndex,""));

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/mocks/valuation/MockLiquidation.sol#L469)
require(!accountContext.mustSettleAssets(),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/proxy/utils/StorageSlot.sol#L22)
*require(Address.isContract(newImplementation),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/proxy/ERC1967/ERC1967Upgrade.sol#L43)
require(Address.isContract(newImplementation),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/proxy/ERC1967/ERC1967Upgrade.sol#L102)
require(oldImplementation==_getImplementation(),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/proxy/ERC1967/ERC1967Upgrade.sol#L167)
require(Address.isContract(newBeacon),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/AccountContextHandler.sol#L44)
require(!isBitmapEnabled(accountContext),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/AccountContextHandler.sol#L221)
require(mustSettleAssets(accountContext)==false);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/nToken/nTokenHandler.sol#L75)
require(liquidationHaircutPercentage<=Constants.PERCENTAGE_DECIMALS,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/nToken/nTokenHandler.sol#L172)
require(shareSum==uint256(Constants.DEPOSIT_PERCENT_BASIS),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/settlement/SettleBitmapAssets.sol#L65)
require(isValid);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/liquidation/LiquidationHelpers.sol#L43)
require(collateralCurrency!=localCurrency);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultAccount.sol#L252)
require(assetCashCostToLend<=0);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultAccount.sol#L266)
require(depositAmountExternal==msg.value,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultAccount.sol#L367)
require(vaultState.isSettled,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultState.sol#L80)
require(vaultState.isSettled==false);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultState.sol#L109)
require(s.isSettled==false);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultState.sol#L171)
require(vaultAccount.maturity==vaultState.maturity);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L187)
require(Constants.PERCENTAGE_DECIMALS<=vaultConfig.liquidationRate);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L210)
require(vaultConfig.reserveFeeShare<=Constants.PERCENTAGE_DECIMALS);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L224)
require(vaultConfig.borrowCurrencyId!=vaultConfig.secondaryBorrowCurrencies[0]);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L228)
require(vaultConfig.secondaryBorrowCurrencies[0]!=vaultConfig.secondaryBorrowCurrencies[1]);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L480)
require(!underlyingToken.hasTransferFee);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L756)
require(account!=vaultConfig.vault);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L763)
require(!balance.hasSnapshotBeenSet,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L808)
require(!balance.hasSnapshotBeenSet||account==vaultConfig.vault,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L917)
require(currencyId!=vaultConfig.borrowCurrencyId);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L991)
require(marketIndex<=maxBorrowMarketIndex,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/markets/CashGroup.sol#L304)
require(cashGroup.liquidityTokenHaircuts[i]<=Constants.PERCENTAGE_DECIMALS,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/balances/BalanceHandler.sol#L96)
require(uint256(underlyingAmountExternal)==msg.value,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/balances/TokenHandler.sol#L85)
require(tokenStorage.tokenType!=TokenType.Ether);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/balances/TokenHandler.sol#L92)
require(tokenStorage.tokenType!=TokenType.UnderlyingToken);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/portfolio/PortfolioHandler.sol#L54)
require(asset.storageState!=AssetStorageState.Delete&&asset.storageState!=AssetStorageState.RevertIfStored);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/portfolio/PortfolioHandler.sol#L179)
require(asset.storageState!=AssetStorageState.RevertIfStored);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/portfolio/PortfolioHandler.sol#L305)
require(assetToDelete.storageState!=AssetStorageState.Delete&&assetToDelete.storageState!=AssetStorageState.RevertIfStored);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/portfolio/BitmapAssetsHandler.sol#L52)
require(accountContext.isBitmapEnabled());

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/portfolio/BitmapAssetsHandler.sol#L59)
require(asset.currencyId==currencyId);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/portfolio/BitmapAssetsHandler.sol#L91)
require(isExact);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/valuation/FreeCollateral.sol#L257)
require(currencyId!=accountContext.bitmapCurrencyId);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/valuation/FreeCollateral.sol#L473)
require(tempId!=accountContext.bitmapCurrencyId);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/valuation/AssetHandler.sol#L132)
require(token.currencyId==cashGroup.currencyId);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/valuation/AssetHandler.sol#L174)
require(!idiosyncratic);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/math/SafeInt256.sol#L35)
require(!(b==-1&&a==_INT256_MIN));

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/math/Bitmap.sol#L16)
require(index>=1&&index<=256);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/Router.sol#L105)
require(status);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/SettleAssetsExternal.sol#L23)
require(accountContext.mustSettleAssets());

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/FreeCollateralExternal.sol#L82)
require(localCurrencyId==accountContext.bitmapCurrencyId);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/liquidators/NotionalV2FlashLiquidatorBase.sol#L153)
require(tradeData.dexAddress==DEX_1||tradeData.dexAddress==DEX_2,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/adapters/nwToken.sol#L69)
require(UNDERLYING_TOKEN==ETH_ADDRESS);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/adapters/nwToken.sol#L84)
require(UNDERLYING_TOKEN!=ETH_ADDRESS);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/nTokenRedeemAction.sol#L41)
require(!hasResidual,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L43)
requireValidAccount(account);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L55)
require(vaultConfig.getFlag(VaultConfiguration.ENABLED),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L276)
requireValidAccount(liquidator);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L348)
require(vaultConfig.getFlag(VaultConfiguration.DISABLE_DELEVERAGE)==false);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L364)
require(account!=msg.sender&&account!=liquidator,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/InitializeMarketsAction.sol#L152)
require(asset.assetType==Constants.FCASH_ASSET_TYPE);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/ActionGuards.sol#L22)
require(reentrancyStatus!=_ENTERED,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/ActionGuards.sol#L38)
require(account!=address(this));

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/GovernanceAction.sol#L356)
require(Address.isContract(operator),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/GovernanceAction.sol#L375)
require(Address.isContract(operator),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/GovernanceAction.sol#L393)
require(Address.isContract(address(rewarder)),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/GovernanceAction.sol#L419)
require(assetToken.tokenType==TokenType.NonMintable,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/GovernanceAction.sol#L423)
require(assetToken.tokenAddress==token,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/GovernanceAction.sol#L433)
require(underlyingTokenAddress==underlyingToken.tokenAddress,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/GovernanceAction.sol#L466)
require(buffer>=Constants.PERCENTAGE_DECIMALS,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/GovernanceAction.sol#L468)
require(liquidationDiscount>Constants.PERCENTAGE_DECIMALS,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAction.sol#L81)
require(secondaryCurrencyId==vaultConfig.secondaryBorrowCurrencies[0]||secondaryCurrencyId==vaultConfig.secondaryBorrowCurrencies[1],"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/nTokenMintAction.sol#L246)
require(asset.maturity==market.maturity&&asset.assetType==index+Constants.MIN_LIQUIDITY_TOKEN_INDEX&&asset.storageState==AssetStorageState.NoChange,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/ERC1155Action.sol#L166)
_requireValidMaturity(asset.currencyId,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/ERC1155Action.sol#L213)
if(toTransferNegative)require(isApprovedForAll(to,""),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/ERC1155Action.sol#L250)
requireValidAccount(from);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/ERC1155Action.sol#L385)
require(transactedAccount==from||(transactedAccount==to&&isApprovedForAll(to,"")),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/TradingAction.sol#L399)
require(account!=counterparty,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/nTokenAction.sol#L120)
requireValidAccount(to);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/BatchAction.sol#L436)
require(accountContext.bitmapCurrencyId==currencyId,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/governance/NoteERC20.sol#L111)
require(totalGrants==totalSupply);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/governance/NoteERC20.sol#L247)
require(nonce==nonces[signatory]++,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/governance/GovernorAlpha.sol#L284)
require(computedOperationHash==proposal.operationHash,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/governance/GovernorAlpha.sol#L353)
require(proposalState!=ProposalState.Executed,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/patchfix/BasePatchFixRouter.sol#L48)
require(NOTIONAL.owner()==OWNER);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/patchfix/MigrateCTokens.sol#L62)
require(assetToken.tokenType==TokenType.cETH);

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/patchfix/MigrateCTokens.sol#L64)
require(assetToken.tokenType==TokenType.cToken);

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/utils/ReentrancyGuardHandler.sol#L61)
require(_getStatus()!=_ENTERED,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L529)
require(isContract(target),"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L1044)
require(_initializing,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L1055)
require(!_initializing,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L1106)
require(AddressUpgradeable.isContract(newImplementation),"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L1153)
require(slot==_IMPLEMENTATION_SLOT,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L1220)
require(AddressUpgradeable.isContract(newBeacon),"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L1253)
require(AddressUpgradeable.isContract(target),"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L1300)
require(address(this)!=__self,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L1310)
require(address(this)==__self,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L2330)
_requireMinted(tokenId);

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L2350)
require(to!=owner,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L2446)
require(_checkOnERC721Received(from,""),"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L2497)
require(_checkOnERC721Received(address(0),""),"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L2571)
require(ERC721Upgradeable.ownerOf(tokenId)==from,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L2608)
require(owner!=operator,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/agents/AgentRegistry_0_1_2.sol#L601)
require(_initializing||!_initialized,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/agents/AgentRegistry_0_1_1.sol#L2372)
require(!_agentMetadataUniqueness[newHash],"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/agents/AgentRegistry_0_1_1.sol#L2456)
require(_hasPermission(agentId,""),"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/staking/FortaStaking_0_1_1.sol#L459)
require(nonceAfter==nonceBefore+1,"");

[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/scanners/ScannerRegistry_0_1_0.sol#L2348)
require(_hasPermission(scannerId,""),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/mockOVM/bridge/mockOVM_CrossDomainMessenger.sol#L135)
require(hasNextMessage(),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/bridge/OVM_CrossDomainEnabled.sol#L41)
require(getCrossDomainMessenger().xDomainMessageSender()==_sourceDomainAccount,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/utils/Lib_RingBuffer.sol#L131)
require(_index<ctx.globalIndex,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/utils/Lib_RingBuffer.sol#L157)
require(ctx.currResetIndex>ctx.prevResetIndex,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/utils/Lib_RingBuffer.sol#L187)
require(_index<ctx.globalIndex&&_index>=ctx.prevResetIndex,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/utils/Lib_MerkleTree.sol#L138)
require(_index<_totalLeaves,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/rlp/Lib_RLPReader.sol#L85)
require(itemType==RLPItemType.LIST_ITEM,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/rlp/Lib_RLPReader.sol#L168)
require(itemType==RLPItemType.DATA_ITEM,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/trie/Lib_MerkleTrie.sol#L182)
require(exists||isFinalNode,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/trie/Lib_MerkleTrie.sol#L263)
require(keccak256(currentNode.encoded)==currentNodeID,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/bridge/messaging/Abs_BaseCrossDomainMessenger.sol#L46)
require(xDomainMsgSender!=DEFAULT_XDOMAIN_SENDER,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/bridge/messaging/OVM_L1CrossDomainMessenger.sol#L101)
require(_verifyXDomainMessage(xDomainCalldata,"")==true,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/bridge/messaging/OVM_L1CrossDomainMessenger.sol#L160)
require(sentMessages[keccak256(xDomainCalldata)]==true,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/bridge/messaging/OVM_L1CrossDomainMessenger.sol#L258)
require(exists==true,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/bridge/messaging/OVM_L2CrossDomainMessenger.sol#L58)
require(_verifyXDomainMessage()==true,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/bridge/tokens/OVM_L1ETHGateway.sol#L60)
require(libAddressManager==Lib_AddressManager(0),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L405)
require(shouldStartAtElement==getTotalElements(),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L524)
require(leafIndex==totalElementsToAppend,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L1124)
require(_verifyElement(leafHash,""),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L1215)
require(Lib_OVMCodec.hashBatchHeader(_batchHeader)==batches().get(uint32(_batchHeader.batchIndex)),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_CanonicalTransactionChain.sol#L1220)
require(Lib_MerkleTree.verify(_batchHeader.batchRoot,""),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_StateCommitmentChain.sol#L134)
require(_shouldStartAtElement==getTotalElements(),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_StateCommitmentChain.sol#L177)
require(_isValidBatchHeader(_batchHeader),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_StateCommitmentChain.sol#L182)
require(insideFraudProofWindow(_batchHeader),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_StateTransitioner.sol#L116)
require(phase==_phase,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_StateTransitioner.sol#L195)
require((ovmStateManager.hasAccount(_ovmContractAddress)==false&&ovmStateManager.hasEmptyAccount(_ovmContractAddress)==false),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_StateTransitioner.sol#L227)
require(Lib_EthUtils.getCodeHash(ethContractAddress)==account.codeHash,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_StateTransitioner.sol#L267)
require(ovmStateManager.hasContractStorage(_ovmContractAddress,"")==false,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_StateTransitioner.sol#L272)
require(ovmStateManager.hasAccount(_ovmContractAddress)==true,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_StateTransitioner.sol#L330)
require(Lib_OVMCodec.hashTransaction(_transaction)==transactionHash,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_StateTransitioner.sol#L385)
require(ovmStateManager.commitAccount(_ovmContractAddress)==true,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_StateTransitioner.sol#L423)
require(ovmStateManager.commitContractStorage(_ovmContractAddress,"")==true,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_FraudVerifier.sol#L113)
require(ovmStateCommitmentChain.verifyStateCommitment(_preStateRoot,""),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_FraudVerifier.sol#L122)
require(ovmCanonicalTransactionChain.verifyTransaction(_transaction,""),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_FraudVerifier.sol#L132)
require(_preStateRootBatchHeader.prevTotalElements+_preStateRootProof.index+1==_transactionBatchHeader.prevTotalElements+_transactionProof.index,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_FraudVerifier.sol#L173)
require(transitioner.isComplete()==true,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_FraudVerifier.sol#L178)
require(_postStateRootBatchHeader.prevTotalElements+_postStateRootProof.index==_preStateRootBatchHeader.prevTotalElements+_preStateRootProof.index+1,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_FraudVerifier.sol#L192)
require(ovmStateCommitmentChain.verifyStateCommitment(_postStateRoot,""),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_FraudVerifier.sol#L202)
require(_postStateRoot!=transitioner.getPostStateRoot(),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_BondManager.sol#L132)
require(token.transferFrom(msg.sender,""),""),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_BondManager.sol#L165)
require(token.transfer(msg.sender,""),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_BondManager.sol#L185)
require(rewards.canClaim,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/predeploys/ERC1820Registry.sol#L76)
require(!isERC165Interface(_interfaceHash),"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/predeploys/ERC1820Registry.sol#L78)
require(ERC1820ImplementerInterface(_implementer).canImplementInterfaceForAddress(_interfaceHash,"")==ERC1820_ACCEPT_MAGIC,"");

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/example/multi.sol#L10)
require(x==12);

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/example/multi.sol#L15)
require(state1);

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/example/multi.sol#L21)
require(state2);

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/example/multi.sol#L27)
require(state3);

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/example/magic.sol#L7)
require(magic_1==42);

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/example/magic.sol#L9)
require(magic_3==magic_4+333);

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/exercises/exercise2/token.sol#L32)
require(!_paused,"");

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/KYC.sol#L31)
require(hasRole(role,""),"");

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/ERC677.sol#L31)
require(IERC677Receiver(spender).receiveApproval(_msgSender(),""),""),"");

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/ERC677.sol#L39)
require(IERC677Receiver(receiver).onTokenTransfer(_msgSender(),""),"");

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/ERLCTokenSwap.sol#L70)
require(token!=address(underlyingToken),"");

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/ERLCTokenSwap.sol#L80)
require(token==address(underlyingToken),"");

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/ERLCTokenSwap.sol#L100)
require(underlyingToken.transferFrom(from,""),""),"");

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/ERLCTokenSwap.sol#L106)
require(underlyingToken.transfer(to,""),"");

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/wip/ERLCBridge.sol#L48)
require(super.transfer(recipient,""));

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/wip/ERLCBridge.sol#L51)
require(IERC677Receiver(recipient).onTokenTransfer(_msgSender(),"")),"");

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/wip/ERLCBridge.sol#L59)
require(super.transferFrom(sender,""));

[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/wip/ERLCBridge.sol#L62)
require(IERC677Receiver(recipient).onTokenTransfer(sender,"")),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/tools/TimelockController.sol#L85)
require(hasRole(role,""))||hasRole(role,"")),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/tools/TimelockController.sol#L200)
require(isOperationPending(id),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/tools/TimelockController.sol#L254)
require(isOperationReady(id),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecEscrowTokenDelegate.sol#L102)
require(token==address(m_baseToken),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecEscrowTokenDelegate.sol#L111)
require(m_baseToken.transferFrom(from,""),""),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecMaintenanceDelegate.sol#L71)
require(!m_v3_scoreImported[_worker],"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco2Delegate.sol#L105)
require(task.status==IexecLibCore_v5.TaskStatusEnum.UNSET);

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco2Delegate.sol#L131)
require(_isAuthorized(_msgSender()));

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco2Delegate.sol#L137)
require(task.status==IexecLibCore_v5.TaskStatusEnum.ACTIVE);

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco2Delegate.sol#L139)
require(contribution.status==IexecLibCore_v5.ContributionStatusEnum.UNSET);

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco2Delegate.sol#L282)
require(task.status==IexecLibCore_v5.TaskStatusEnum.REVEALING);

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco2Delegate.sol#L284)
require(contribution.status==IexecLibCore_v5.ContributionStatusEnum.CONTRIBUTED);

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco2Delegate.sol#L286)
require(contribution.resultHash==keccak256(abi.encodePacked(_taskid,"")));

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco2Delegate.sol#L364)
require(task.status==IexecLibCore_v5.TaskStatusEnum.ACTIVE||task.status==IexecLibCore_v5.TaskStatusEnum.REVEALING);

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecERC20Delegate.sol#L47)
require(IexecTokenSpender(spender).receiveApproval(_msgSender(),""),""),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecAccessorsDelegate.sol#L122)
require(task.status==IexecLibCore_v5.TaskStatusEnum.COMPLETED,"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco1Delegate.sol#L89)
require(_requestorder.category==_workerpoolorder.category,"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco1Delegate.sol#L99)
require(_requestorder.app==_apporder.app,"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco1Delegate.sol#L123)
require(m_appregistry.isRegistered(_apporder.app),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco1Delegate.sol#L134)
require(m_datasetregistry.isRegistered(_datasetorder.dataset),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco1Delegate.sol#L144)
require(m_workerpoolregistry.isRegistered(_workerpoolorder.workerpool),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco1Delegate.sol#L151)
require(_checkPresignatureOrSignature(_requestorder.requester,""),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/SignatureVerifier.sol#L78)
require(v==27||v==28,"");

[Code File](../repos/2020-12-orchid-multisend/orchid/eth-sender/sender.sol#L37)
require(_s&&abi.decode(_d,"")));

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/seller1.sol#L117)
require(signer==ecrecover(digest,""));

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/seller1.sol#L121)
require(uint192(refill)==refill);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/seller1.sol#L159)
require(gift_(IERC20(0),""));

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery0.sol#L135)
require(token_.transferFrom(funder,""),""));

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery0.sol#L206)
require(token_.transfer(recipient,""));

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery0.sol#L226)
require(keccak256(abi.encode(reveal))==commit);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery0.sol#L300)
require(token_.transfer(target,""));

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery1.sol#L62)
require(token!=IERC20(0));

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery1.sol#L136)
require(int256(recover)!=adjust);

[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/lottery1.sol#L154)
require(int256(decrease)!=warn);

[Audit File](../audits/2021-03-pooltogether-pods.md#L107)
require(!IPrizeStrategyMinimal(_prizePool.prizeStrategy()).isRngRequested(),"");

[Audit File](../audits/2021-03-pooltogether-pods.md#L275)
require(drops[_token]==TokenDrop(0),"");

[Code File](../repos/2021-03-pooltogether-pods/pods-v3-contracts/contracts/Pod.sol#L193)
require(address(_ticket)==address(tickets[0])||address(_ticket)==address(tickets[1]),"");

[Audit File](../audits/2021-05-zer0-zauction.md#L989)
withtheauctionId(requirethat`consumed[bidder][auctionId]==false`)

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zsale.sol#L46)
require(seller!=msg.sender,"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zsale.sol#L61)
require(seller==recover(toEthSignedMessageHash(data),""),"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zsale.sol#L66)
require(!cancelled[data],"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/ZAuctionV1.sol#L844)
require(bidder==recover(toEthSignedMessageHash(data),""),"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zauction.sol#L216)
require(paymentToken==bidToken,"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zauction.sol#L278)
require(networkPaymentToken[domainNetworkId]!=domainNetworkToken,"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zauction.sol#L288)
require(token!=wildToken,"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zauction.sol#L295)
require(newDefaultToken!=IERC20(address(0)),"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zauction.sol#L315)
require(priceInfo[domainTokenId].price!=amount,"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zauction.sol#L387)
require(domainPaymentToken==listingPaymentToken,"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zauction.sol#L475)
require(amount!=topLevelDomainFee[id],"");

[Audit File](../audits/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol.md#L251)
require(keccak256(callData)==txData.callDataHash,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts_forge/utils/Mock.sol#L135)
require(!fails,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts_forge/utils/Mock.sol#L137)
require(_originSender==originSender,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/AmplificationUtils.sol#L73)
require(initialAPrecise!=futureAPrecise,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L215)
require(tokenAmount<=xp[tokenIndex],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L270)
require(tokenIndex<numTokens,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L442)
require(tokenIndexFrom!=tokenIndexTo,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L761)
require(dy<=self.balances[tokenIndexTo],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L1000)
require(numAmounts==numTokens,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/LibDiamond.sol#L186)
require(oldFacetAddress!=_facetAddress,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/LibDiamond.sol#L208)
require(selector!=proposeSelector&&selector!=cutSelector,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/LibDiamond.sol#L242)
require(_facetAddress!=address(this),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/BridgeMessage.sol#L85)
require(isValidAction(_action),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtils.sol#L698)
require(!self.disabled,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/helpers/OZERC20.sol#L470)
require(_signer==_owner,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/helpers/LPToken.sol#L68)
require(to!=address(this),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/helpers/StableSwap.sol#L113)
require(lpToken.initialize(lpTokenName,""),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/helpers/StableSwap.sol#L180)
require(address(getToken(index))==tokenAddress,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/shared/upgrade/UpgradeBeaconController.sol#L42)
require(Address.isContract(_beacon),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/shared/upgrade/UpgradeBeaconProxy.sol#L41)
require(Address.isContract(_upgradeBeacon),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/shared/upgrade/UpgradeBeaconProxy.sol#L46)
require(Address.isContract(_implementation),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/shared/upgrade/UpgradeBeaconProxy.sol#L148)
require(_ok,""));

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/shared/upgrade/UpgradeBeacon.sol#L87)
require(implementation!=_newImplementation,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/shared/upgrade/UpgradeBeacon.sol#L89)
require(Address.isContract(_newImplementation),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/shared/libraries/TypedMemView.sol#L234)
require(len_==_len&&loc_==_loc,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/WatcherClient.sol#L47)
require(_watcherManager!=address(watcherManager),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/MerkleTreeManager.sol#L163)
require(leaves[_leaf]==LeafStatus.None,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/MerkleTreeManager.sol#L172)
require(leaves[_leaf]==LeafStatus.Proven,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/WatcherManager.sol#L31)
require(!isWatcher[_watcher],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/WatcherManager.sol#L40)
require(isWatcher[_watcher],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/RootManager.sol#L371)
require(_delayBlocks!=delayBlocks,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/SpokeConnector.sol#L457)
require(_delayBlocks!=delayBlocks,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/SpokeConnector.sol#L542)
require(sentMessageRoots[root]==false,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/SpokeConnector.sol#L709)
require(_calculatedRoot==_messageRoot,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/SpokeConnector.sol#L766)
require(!provenAggregateRoots[_newRoot],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/SpokeConnector.sol#L821)
require(MERKLE.leaves(_messageHash)==MerkleTreeManager.LeafStatus.None,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/SpokeConnector.sol#L858)
require(_calculatedAggregateRoot==_aggregateRoot,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/SpokeConnector.sol#L877)
require(_m.destination()==DOMAIN,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/optimism-v0/OptimismV0SpokeConnector.sol#L49)
require(_verifySender(mirrorConnector),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/optimism-v0/OptimismV0HubConnector.sol#L82)
require(_sender==mirrorConnector,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/optimism-v0/OptimismV0HubConnector.sol#L85)
require(_target==address(this),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/optimism-v0/OptimismV0HubConnector.sol#L90)
require(_verifyXDomainMessage(xDomainData,""),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/optimism-v0/OptimismV0HubConnector.sol#L96)
require(!processed[root],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygonzk/BasePolygonZk.sol#L36)
require(originNetwork==MIRROR_NETWORK_ID,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygonzk/PolygonZkHubConnector.sol#L30)
require(_verifySender(sender),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/arbitrum/ArbitrumHubConnector.sol#L234)
require(node.confirmData==confirmData,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/arbitrum/ArbitrumHubConnector.sol#L288)
require(!processed[_index],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/arbitrum/ArbitrumHubConnector.sol#L296)
require(calcRoot==_sendRoot,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/tunnel/FxBaseChildTunnel.sol#L32)
require(sender==fxRootTunnel,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/tunnel/FxBaseRootTunnel.sol#L91)
require(processedExits[exitHash]==false,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/tunnel/FxBaseRootTunnel.sol#L98)
require(fxChildTunnel==log.getEmitter(),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/tunnel/FxBaseRootTunnel.sol#L139)
require(keccak256(abi.encodePacked(blockNumber,"")).checkMembership(blockNumber-startBlock,""),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/lib/RLPReader.sol#L27)
require(hasNext(self));

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/lib/RLPReader.sol#L64)
require(isList(self));

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/lib/RLPReader.sol#L88)
require(isList(item));

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/lib/RLPReader.sol#L174)
require(item.len==1);

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/lib/RLPReader.sol#L186)
require(item.len==21);

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/lib/RLPReader.sol#L214)
require(item.len==33);

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/wormhole/WormholeHubConnector.sol#L54)
require(_verifySender(_sender),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/wormhole/BaseWormhole.sol#L60)
require(_updated!=refundAddress,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/wormhole/BaseWormhole.sol#L84)
require(_sourceChain==MIRROR_WORMHOLE_ID,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/wormhole/BaseWormhole.sol#L88)
require(!processedWhMessages[_deliveryHash],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/wormhole/BaseWormhole.sol#L115)
require(deliveryCost==msg.value,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/zksync/ZkSyncHubConnector.sol#L130)
require(!processed[_root],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/gnosis/GnosisBase.sol#L37)
require(floorMem!=_floor,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/gnosis/GnosisSpokeConnector.sol#L46)
GnosisAmb(AMB).requireToPassMessage(mirrorConnector,""),""));

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/gnosis/GnosisSpokeConnector.sol#L62)
require(GnosisAmb(AMB).sourceChainId()==block.chainid,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/gnosis/GnosisHubConnector.sol#L58)
require(GnosisAmb(AMB).sourceChainId()==block.chainid,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/libraries/RateLimited.sol#L54)
require(_newRateLimit!=rateLimitBlocks,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/libraries/Queue.sol#L166)
require(!queue.removed[item],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/libraries/DomainIndexer.sol#L109)
require(keccak256(abi.encode(_domains))==domainsHash,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/libraries/DomainIndexer.sol#L111)
require(keccak256(abi.encode(_connectors))==connectorsHash,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/libraries/DomainIndexer.sol#L134)
require(!isDomainSupported(_domain),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/scripts/Initialize.s.sol#L385)
require(writeSuccess);

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/scripts/Deployer.sol#L90)
require(chainId==block.chainid,"");

[Audit File](../audits/2021-04-rocketpool.md#L519)
require(_depositType!=MinipoolDeposit.None,"");

[Audit File](../audits/2021-04-rocketpool.md#L615)
require(tokenContract.transfer(_withdrawalAddress,_amount),"");

[Audit File](../audits/2021-04-rocketpool.md#L661)
require(tokenContract.transferFrom(msg.sender,address(this),_amount),"");

[Audit File](../audits/2021-04-rocketpool.md#L732)
require(!getBool(keccak256(abi.encodePacked("",msg.sender))),"");

[Audit File](../audits/2021-04-rocketpool.md#L841)
require(depositType!=MinipoolDeposit.None,"");

[Audit File](../audits/2021-04-rocketpool.md#L962)
require(rplInflationContract.transfer(msg.sender,_amount),"");

[Audit File](../audits/2021-04-rocketpool.md#L1520)
if(getBool(keccak256(abi.encodePacked(settingNameSpace,""))))require(getContractAddress("")==msg.sender,"");

[Audit File](../audits/2021-04-rocketpool.md#L1531)
if(getBool(keccak256(abi.encodePacked(settingNameSpace,""))))require(getContractAddress("")==msg.sender,"");

[Audit File](../audits/2021-04-rocketpool.md#L1583)
require(boolStorage[keccak256(abi.encodePacked("",msg.sender))],"");

[Audit File](../audits/2021-04-rocketpool.md#L2807)
require(rocketTokenNETH.transfer(nodeWithdrawalAddress,nethBalance),"");

[Audit File](../audits/2021-04-rocketpool.md#L3241)
require(getState(_proposalID)!=ProposalState.Executed,"");

[Code File](../repos/2021-04-rocketpool/rocketpool/contracts/contract/dao/RocketDAOProposal.sol#L28)
require(keccak256(abi.encodePacked(getContractName(msg.sender)))==keccak256(abi.encodePacked(_daoName)),"");

[Code File](../repos/2021-04-rocketpool/rocketpool/contracts/contract/dao/protocol/settings/RocketDAOProtocolSettings.sol#L19)
if(getBool(keccak256(abi.encodePacked(settingNameSpace,""))))require(getContractAddress("")==msg.sender,"");

[Code File](../repos/2021-04-rocketpool/rocketpool/contracts/contract/dao/node/settings/RocketDAONodeTrustedSettings.sol#L19)
if(getBool(keccak256(abi.encodePacked(settingNameSpace,""))))require(getContractAddress("")==msg.sender,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Shell.sol#L75)
require(notEntered,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Shell.sol#L84)
require(!frozen,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Shell.sol#L91)
require(!partitioned,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Shell.sol#L98)
require(partitioned,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Shell.sol#L451)
require(frozen,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Shell.sol#L500)
require(!partitionTickets[msg.sender].initialized,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/Shell.sol#L519)
require(!partitionTickets[_sender].initialized,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/ProportionalLiquidity.sol#L64)
requireLiquidityInvariant(shell,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/ProportionalLiquidity.sol#L163)
requireLiquidityInvariant(shell,""),"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/assimilators/mainnet/sbtcReserves/mainnetSBTCToSBTCAssimilator.sol#L34)
require(_success,"");

[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/assimilators/mainnet/daiReserves/mainnetCDaiToDaiAssimilator.sol#L38)
require(_transferSuccess,"");

[Audit File](../audits/2021-03-umbra-smart-contracts.md#L175)
require((spendingPubKeyPrefix==2||spendingPubKeyPrefix==3)&&(viewingPubKeyPrefix==2||viewingPubKeyPrefix==3),"");

[Code File](../repos/2021-03-umbra-smart-contracts/umbra-protocol/contracts-core/contracts/StealthKeyRegistry.sol#L121)
require(_recovered==_registrant,"");

[Code File](../repos/2021-03-umbra-smart-contracts/umbra-protocol/contracts-core/contracts/StealthKeyRegistry.sol#L138)
require((_spendingPubKeyPrefix==2||_spendingPubKeyPrefix==3)&&(_viewingPubKeyPrefix==2||_viewingPubKeyPrefix==3),"");

[Code File](../repos/2021-03-umbra-smart-contracts/umbra-protocol/contracts-core/contracts/Umbra.sol#L111)
require(_tollCommitment==toll,"");

[Code File](../repos/2021-03-umbra-smart-contracts/umbra-protocol/contracts-periphery/script/DeployBatchSend.s.sol#L62)
require(address(umbraBatchSend)==expectedContractAddress,"");

[Audit File](../audits/2020-06-bancor-v2-amm-security-audit.md#L593)
require(_sourceReserveWeight+_targetReserveWeight==MAX_WEIGHT);

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/BancorNetwork.sol#L168)
require(targetToken==IReserveToken(_addressOf(BNT_TOKEN)),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/BancorNetwork.sol#L198)
require(path[0]==address(bancorX.token()),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/BancorNetwork.sol#L291)
require(isNewerConverter,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/BancorNetwork.sol#L293)
require(!sourceToken.isNativeToken(),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/ConverterFactory.sol#L66)
require(_converterFactories[converterType]==factory,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/ConverterFactory.sol#L79)
require(_anchorFactories[converterType]==factory,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/ConverterRegistry.sol#L96)
require(getLiquidityPoolByConfig(converterType,"")==IConverterAnchor(0),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/ConverterRegistry.sol#L129)
require(isConverterValid(converter),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L144)
require(weight==PPM_RESOLUTION/2,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L441)
require(sourceToken!=targetToken,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L471)
require((sourceId==1&&targetId==2)||(sourceId==2&&targetId==1),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L724)
require((!reserves[0].isNativeToken()||reserveAmounts[0]==msg.value)&&(!reserves[1].isNativeToken()||reserveAmounts[1]==msg.value),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L892)
*@devgiventheamountofoneofthereservetokenstoaddliquidityof,"")

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/types/standard-pool/StandardPoolConverter.sol#L976)
require(reserve0Id==1&&reserve1Id==2,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtectionStore.sol#L337)
require(endIndex>startIndex,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtectionSettings.sol#L133)
require(hasRole(ROLE_OWNER,""),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtectionSettings.sol#L223)
require(_poolWhitelist.add(address(poolAnchor)),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtectionSettings.sol#L236)
require(_poolWhitelist.remove(address(poolAnchor)),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtectionSettings.sol#L272)
require(_subscribers.add(address(subscriber)),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtectionSettings.sol#L285)
require(_subscribers.remove(address(subscriber)),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtectionSettings.sol#L428)
require(converterRegistry.isAnchor(address(poolAnchor)),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtection.sol#L158)
require(_settings.isPoolSupported(poolAnchor),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtection.sol#L163)
require(_settings.isPoolWhitelisted(poolAnchor),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtection.sol#L168)
require(_addingEnabled&&!_settings.addLiquidityDisabled(poolAnchor,""),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtection.sol#L176)
require(_removingEnabled);

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtection.sol#L541)
require(portion==PPM_RESOLUTION,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/liquidity-protection/LiquidityProtection.sol#L1147)
require(pos.provider==provider,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/staking-rewards/StakingRewardsStore.sol#L220)
require(_pools.add(address(poolToken)),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/staking-rewards/StakingRewardsStore.sol#L233)
require((address(converter.connectorTokens(0))==address(reserveTokens[0])&&address(converter.connectorTokens(1))==address(reserveTokens[1]))||(address(converter.connectorTokens(0))==address(reserveTokens[1])&&address(converter.connectorTokens(1))==address(reserveTokens[0])),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/staking-rewards/StakingRewardsStore.sol#L251)
require(_pools.remove(address(poolToken)),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/staking-rewards/StakingRewardsStore.sol#L267)
require(isPoolParticipating(poolToken),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/staking-rewards/StakingRewards.sol#L102)
require(hasRole(ROLE_PUBLISHER,""),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/staking-rewards/StakingRewards.sol#L111)
require(hasRole(ROLE_UPDATER,""),"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L160)
require(_xTransfersEnabled,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L172)
require(_reportingEnabled,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L481)
require(!_reportedTxs[txId][msg.sender],"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L504)
require(_transactionIds[xTransferId]==txId,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L515)
require(!_transactions[txId].completed,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L534)
require(transaction.to==receiver,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/helpers/TestBancorNetworkV3.sol#L37)
require(sourceToken!=targetToken);

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/utility/Owned.sol#L46)
require(newOwner!=_owner,"");

[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/utility/CheckpointStore.sol#L57)
require(hasRole(ROLE_SEEDER,""),"");

[Audit File](../audits/2021-03-dforce-lending-protocol-review.md#L672)
require(_newInterestRateModel.isInterestRateModel(),"");

[Audit File](../audits/2021-03-dforce-lending-protocol-review.md#L956)
require(msg.sender.isContract(),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/PriceOracle.sol#L1096)
require(_oldMaxSwingRate!=_newMaxSwingRate,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/PriceOracle.sol#L1142)
require(_readAsset!=_asset,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/PriceOracle.sol#L1181)
require(_maxSwing!=_oldMaxSwing,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/PriceOracle.sol#L1271)
require(_aggregator!=_oldAssetAggregator,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L177)
require(IiToken(_iToken).isSupported(),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L180)
require(iTokens.add(_iToken),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L667)
require(!_market.mintPaused,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L726)
require(!markets[_iToken].redeemPaused,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L778)
require(!_market.borrowPaused,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L910)
require(iTokens.contains(_iTokenBorrowed)&&iTokens.contains(_iTokenCollateral),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L976)
require(!seizePaused,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L986)
require(IiToken(_iTokenBorrowed).controller()==IiToken(_iTokenCollateral).controller(),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L1053)
require(!transferPaused,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L1107)
require(!markets[_iToken].borrowPaused,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L1164)
require(iTokens.contains(_iToken),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L1406)
require(_enterMarket(msg.sender,""),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/RewardDistributor.sol#L184)
require(!paused,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/RewardDistributor.sol#L284)
require(controller.hasiToken(_iToken),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/PriceOracleBand.sol#L1239)
require(_aggregator!=_oldAggregator,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/StatusOracle.sol#L137)
require(_timeZone>=-11hours&&_timeZone<=11hours&&_timeZone!=_oldTimeZone,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/StatusOracle.sol#L158)
require(_marketOpeningTime!=_oldMarketOpeningTime,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/StatusOracle.sol#L179)
require(_duration!=_oldDuration,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/StatusOracle.sol#L203)
require(_marketOpeningTime!=_marketclosingTime,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/library/ERC20.sol#L23)
*theseevents,"")publicbalanceOf;

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/TokenBase/TokenERC20.sol#L21)
require(_sender!=_recipient,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/TokenBase/Base.sol#L429)
require(_borrower!=_liquidator,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/TokenBase/TokenAdmin.sol#L34)
require(_newController.isController(),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/InterestRateModel/FixedInterestRateModel.sol#L101)
require(_rate<=ratePerBlockMax,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/InterestRateModel/FixedInterestRateModel.sol#L115)
require(_rate<=ratePerBlockMax,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/msd/MSD.sol#L65)
require(minters.contains(msg.sender),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/msd/MSDS.sol#L146)
require(_newMSDController.isMSDController(),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/msd/MSDController.sol#L104)
require(hasMSD(_token),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/msd/MSDController.sol#L121)
require(msdMinters[_token].contains(caller),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/msd/iMSD.sol#L207)
require(_assetCollateral!=address(this),"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/msd/iMSD.sol#L216)
*@deviMSDdoesnotsupportseize(),"")

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/helper/LendingDataV2.sol#L444)
require(!initialized,"");

[Audit File](../audits/2021-05-zer0-zdao-token.md#L342)
require(!paused(),"");

[Audit File](../audits/2021-05-zer0-zdao-token.md#L455)
require(award.revocable,"");

[Code File](../repos/2021-05-zer0-zdao-token/zDAO-Token/contracts/ZeroToken.sol#L90)
require(!authorizedToSnapshot[account],"");

[Code File](../repos/2021-05-zer0-zdao-token/zDAO-Token/contracts/ZeroToken.sol#L104)
require(authorizedToSnapshot[account],"");

[Code File](../repos/2021-05-zer0-zdao-token/zDAO-Token/contracts/legacy/MerkleTokenVesting.sol#L34)
require(!isClaimed(index),"");

[Code File](../repos/2021-05-zer0-zdao-token/zDAO-Token/contracts/legacy/MerkleTokenVestingV2.sol#L62)
require(_merkleRoot!=merkleRoot,"");

[Code File](../repos/2021-05-zer0-zdao-token/zDAO-Token/contracts/legacy/MerkleDistributor.sol#L44)
require(MerkleProofUpgradeable.verify(merkleProof,""),"");

[Code File](../repos/2021-05-zer0-zdao-token/zDAO-Token/contracts/upgrade-mocks/ERC20UpgradeableOld.sol#L26)
*theseevents,"");

[Audit File](../audits/2020-11-pooltogether-lootbox-and-multiplewinners-strategy.md#L406)
_requireNotLocked();

[Audit File](../audits/2020-11-pooltogether-lootbox-and-multiplewinners-strategy.md#L854)
require(prizePool.canAwardExternal(_externalErc721),"");

[Audit File](../audits/2020-11-pooltogether-lootbox-and-multiplewinners-strategy.md#L862)
require(IERC721(_externalErc721).ownerOf(tokenId)==address(prizePool),"");

[Audit File](../audits/2020-11-pooltogether-lootbox-and-multiplewinners-strategy.md#L1005)
require(prizePool.canAwardExternal(_externalErc20),"");

[Audit File](../audits/2020-11-pooltogether-lootbox-and-multiplewinners-strategy.md#L1195)
require(!isRngRequested()||isRngTimedOut(),"");

[Audit File](../audits/2020-11-pooltogether-lootbox-and-multiplewinners-strategy.md#L1217)
require(isRngRequested(),"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/Hypervisor.sol#L257)
require(from==msg.sender,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/Hypervisor.sol#L289)
require(_limitUpper!=_baseUpper||_limitLower!=_baseLower);

[Code File](../repos/2022-02-gamma/hypervisor/contracts/UniProxy.sol#L158)
require(token==address(IHypervisor(pos).token0())||token==address(IHypervisor(pos).token1()),"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/adapters/tokemak/GammaController.sol#L60)
require(lpTokenBalanceBefore+lpTokenReceived==lpTokenBalanceAfter,"");

[Code File](../repos/2022-02-gamma/hypervisor/contracts/adapters/tokemak/GammaController.sol#L90)
require(lpTokenBalanceBefore-amount==lpTokenBalanceAfter,"");

[Code File](../repos/2021-05-pooltogether-sushi-and-yearn-v2-yield-sources/sushi-pooltogether/contracts/SushiYieldSource.sol#L136)
emitRedeemedToken(msg.sender,"");

[Code File](../repos/2021-05-pooltogether-sushi-and-yearn-v2-yield-sources/pooltogether-yearnv2-yield-source/contracts/yield-source/YearnV2YieldSource.sol#L96)
require(!_areEqualStrings(_vaultAPIVersion,""),"");

[Code File](../repos/2021-05-pooltogether-sushi-and-yearn-v2-yield-sources/pooltogether-yearnv2-yield-source/contracts/yield-source/YearnV2YieldSource.sol#L107)
require(_vaultToken==address(_token),"");

[Audit File](../audits/2020-06-amp.md#L271)
require(swapToken.transferFrom(_from,swapTokenGraveyard,amount));

[Audit File](../audits/2020-06-amp.md#L521)
require(_operator!=msg.sender);

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/Amp.sol#L626)
require(swapToken.transferFrom(_from,""),"");

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/Amp.sol#L718)
require(_operator!=msg.sender,"");

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/Amp.sol#L1020)
require(_prefix!=ZERO_PREFIX,"");

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/Amp.sol#L1379)
require(toPartitionPrefix==ZERO_PREFIX,"");

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/mocks/MockAmpTokensSender.sol#L41)
require(_canTransfer(from,""),"");

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/mocks/MockAmpTokensRecipient.sol#L41)
require(_canReceive(from,""),"");

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/mocks/ExampleCollateralManager.sol#L186)
require(_canReceive(_functionSig,""),"");

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/mocks/ExampleCollateralManager.sol#L333)
require(proof==VALID_DATA,"");

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/partitions/CollateralPoolPartitionValidator.sol#L77)
require(_to==toPartitionOwner,"");

[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L469)
require(partitions[_destinationPartition],"");

[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L621)
require(_validateWithdrawalData(_partition,""),"");

[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L783)
require(_validateFallbackWithdrawalData(_operator,""),"");

[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L922)
require(_verifyRefundData(_partition,""),"");

[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L1018)
require(_validateDirectTransfer(_operator,""),"");

[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L1059)
require(prefix==PARTITION_PREFIX,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/specs/harness/LendingPoolHarnessForVariableDebtToken.sol#L152)
require(reserveNormalizedIncome[block.timestamp]==1e27);

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/specs/harness/LendingPoolHarnessForVariableDebtToken.sol#L164)
require(reserveNormalizedVariableDebt[block.timestamp]==1e27);

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/mocks/swap/MockParaSwapAugustus.sol#L47)
require(_expectingSwap,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/mocks/swap/MockParaSwapAugustus.sol#L49)
require(toToken==_expectedToToken,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/dependencies/openzeppelin/contracts/ERC20.sol#L27)
*theseevents,"")private_balances;

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/dependencies/openzeppelin/contracts/SafeERC20.sol#L51)
require(address(token).isContract(),"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/dependencies/openzeppelin/upgradeability/Initializable.sol#L30)
require(initializing||isConstructor()||!initialized,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/configuration/UserConfiguration.sol#L26)
require(reserveIndex<128,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/configuration/ReserveConfiguration.sol#L125)
require(decimals<=MAX_VALID_DECIMALS,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/logic/ValidationLogic.sol#L45)
require(!isFrozen,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/logic/ValidationLogic.sol#L139)
require(vars.isActive,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/logic/ValidationLogic.sol#L143)
require(vars.borrowingEnabled,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/logic/ValidationLogic.sol#L146)
require(uint256(DataTypes.InterestRateMode.VARIABLE)==interestRateMode||uint256(DataTypes.InterestRateMode.STABLE)==interestRateMode,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/logic/ValidationLogic.sol#L195)
require(vars.stableRateBorrowingEnabled,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/logic/ValidationLogic.sol#L281)
require(stableRateEnabled,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/math/WadRayMath.sol#L131)
require(result/WAD_RAY_RATIO==a,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/tokenization/AToken.sol#L356)
require(owner==ecrecover(digest,""),"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/lendingpool/LendingPool.sol#L508)
require(vars.receiver.executeOperation(assets,""),"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/lendingpool/LendingPool.sol#L791)
require(Address.isContract(asset),"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/BaseParaSwapSellAdapter.sol#L26)
require(!augustusRegistry.isValidAugustus(address(0)));

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/BaseParaSwapSellAdapter.sol#L50)
require(AUGUSTUS_REGISTRY.isValidAugustus(address(augustus)),"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/BaseParaSwapSellAdapter.sol#L97)
require(assetToSwapFrom.balanceOf(address(this))==balanceBeforeAssetFrom-amountToSwap,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/BaseParaSwapAdapter.sol#L63)
require(decimals<=77,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/BaseParaSwapAdapter.sol#L107)
require(LENDING_POOL.withdraw(reserve,""))==amount,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/fixins/FixinTokenSpender.sol#L72)
require(address(token)!=address(this),"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/OtcOrdersFeature.sol#L113)
require(order.makerToken==WETH,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/OtcOrdersFeature.sol#L152)
require(address(order.takerToken)==ETH_TOKEN_ADDRESS,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/nft_orders/NFTOrders.sol#L110)
require(params.taker!=address(this),"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/nft_orders/NFTOrders.sol#L216)
require(sellOrder.direction==LibNFTOrder.TradeDirection.SELL_NFT,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/nft_orders/NFTOrders.sol#L244)
require(buyOrder.direction==LibNFTOrder.TradeDirection.BUY_NFT,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/nft_orders/NFTOrders.sol#L249)
require(address(buyOrder.erc20Token)!=NATIVE_TOKEN_ADDRESS,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/nft_orders/NFTOrders.sol#L303)
require(fee.recipient!=address(this),"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/nft_orders/NFTOrders.sol#L353)
require(order.direction==LibNFTOrder.TradeDirection.BUY_NFT,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/multiplex/MultiplexRfq.sol#L46)
require(order.takerToken==params.inputToken&&order.makerToken==params.outputToken,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/multiplex/MultiplexFeature.sol#L240)
require(tokens[0]==address(WETH),"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/multiplex/MultiplexFeature.sol#L411)
require(state.soldAmount==params.sellAmount,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/multiplex/MultiplexLiquidityProvider.sol#L55)
require(address(this)!=_implementation,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/multiplex/MultiplexOtc.sol#L79)
require(address(order.takerToken)==params.tokens[state.hopIndex]&&address(order.makerToken)==params.tokens[state.hopIndex+1],"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/transformers/FillQuoteTransformer.sol#L274)
require(transferSuccess,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/transformers/bridges/mixins/MixinCompound.sol#L79)
require(cToken.mint(sellAmount)==COMPOUND_SUCCESS_CODE,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/transformers/bridges/mixins/MixinCompound.sol#L86)
require(cETH.redeem(sellAmount)==COMPOUND_SUCCESS_CODE,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/transformers/bridges/mixins/MixinCompound.sol#L92)
require(cToken.redeem(sellAmount)==COMPOUND_SUCCESS_CODE,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/liquidity-providers/MooniswapLiquidityProvider.sol#L57)
require(!LibERC20Transformer.isTokenETH(inputToken)&&!LibERC20Transformer.isTokenETH(outputToken)&&inputToken!=outputToken,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/liquidity-providers/MooniswapLiquidityProvider.sol#L87)
require(!LibERC20Transformer.isTokenETH(outputToken),"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/liquidity-providers/MooniswapLiquidityProvider.sol#L111)
require(!LibERC20Transformer.isTokenETH(inputToken),"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/liquidity-providers/MooniswapLiquidityProvider.sol#L145)
require(!_isTokenEthLike(outputToken),"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/liquidity-providers/MooniswapLiquidityProvider.sol#L154)
require(inputToken!=outputToken,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/liquidity-providers/CurveLiquidityProvider.sol#L56)
require(!LibERC20Transformer.isTokenETH(inputToken)&&!LibERC20Transformer.isTokenETH(outputToken),"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/governance/src/ZRXWrappedToken.sol#L136)
require(nonce==_useNonce(signer),"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/treasury/contracts/src/ZrxTreasury.sol#L195)
require(didSucceed,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/treasury/contracts/src/ZrxTreasury.sol#L236)
require(operatedPoolIds[i]!=operatedPoolIds[j],"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/treasury/contracts/src/ZrxTreasury.sol#L239)
require(pool.operator==account,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/treasury/contracts/src/ZrxTreasury.sol#L254)
require(keccak256(abi.encode(actions))==proposal.actionsHash,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/treasury/contracts/src/ZrxTreasury.sol#L256)
require(!proposal.executed,"");

[Audit File](../audits/2020-07-mstable-1.1.md#L703)
require(decimals>=4&&decimals<=18,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L1426)
require(underlying.transferFrom(msg.sender,""),""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L1462)
require(exchangeRate==startingRate,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L1578)
require(massetReturned==_underlying,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L1630)
require(_isCreditAmt?creditsBurned==_amount:massetReturned==_amount,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L2240)
require(mAsset.transferFrom(msg.sender,""),""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L2277)
require(underlying.transfer(receiver,""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/emissions/BasicRewardsForwarder.sol#L80)
require(endRecipient!=_endRecipient,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/emissions/EmissionsController.sol#L317)
require(len<254,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/emissions/EmissionsController.sol#L319)
require(dials[i].recipient!=_recipient,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/emissions/EmissionsController.sol#L371)
require(address(stakingContracts[i])!=_stakingContract,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/savings/SavingsManager.sol#L110)
require(!streamsFrozen,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/savings/peripheral/Unwrapper.sol#L106)
require(IERC20(_input).transferFrom(msg.sender,""),""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederManager.sol#L98)
require(!_bAssetPersonal[index].hasTxFee,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederManager.sol#L102)
require(oldAddress!=_newIntegration,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederManager.sol#L138)
require(newLendingBal>=lendingBal.mulTruncate(lowerMargin)&&newLendingBal<=lendingBal.mulTruncate(upperMargin),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L144)
require(_mAsset.addr==mAsset,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L347)
require(_pathIsValid(input,""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L382)
require(_input!=_output,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L686)
require(asset.exists,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L734)
require(input_.exists,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L737)
require(_assets[i]!=_assets[j],"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederLogic.sol#L540)
require(quantityDeposited==_quantity,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/FeederLogic.sol#L654)
require(_inBounds(x,""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/buy-and-make/RevenueBuyBack.sol#L233)
require(_validUniswapPath(_bAsset,""),""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/buy-and-make/RevenueBuyBack.sol#L264)
require(stakingDialIds[i]!=_stakingDialId,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/buy-and-make/RevenueForwarder.sol#L44)
require(_mAsset==address(mAsset),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/buy-and-make/GaugeBriber.sol#L55)
require(_mAsset==address(musd),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/buy-and-make/RevenueSplitBuyBack.sol#L171)
require(_validUniswapPath(bAsset,""),""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/rewards/BoostDirectorV2.sol#L61)
require(address(stakedTokenContracts[i])!=_stakedToken,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/rewards/BoostDirectorV2.sol#L88)
require(_newDivisor!=balanceDivisor,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/rewards/BoostDirectorV2.sol#L180)
require(isWhitelisted&&count>=6,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/rewards/BoostDirector.sol#L126)
require(isWhitelisted&&count>=3,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/polygon/PLiquidator.sol#L116)
require(_validUniswapPath(liquidation.sellToken,""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/shared/PausableModule.sol#L36)
require(_paused,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/shared/GovernedMinterRole.sol#L27)
require(isMinter(msg.sender),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/nexus/Nexus.sol#L201)
require(moduleExists(_key),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/IncentivisedVotingLockup.sol#L133)
require(!expired,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/Governable.sol#L38)
require(isGovernor(),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedTokenBPT.sol#L147)
require(tokens[0]==address(REWARDS_TOKEN),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedTokenBPT.sol#L171)
require(stakingBalAfter==(stakingBalBefore-pendingBPT+1),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedTokenMTA.sol#L55)
require(address(STAKED_TOKEN)==address(REWARDS_TOKEN),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/GamifiedToken.sol#L325)
require(newTimeMultiplier!=oldBalance.timeMultiplier,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/QuestManager.sol#L233)
require(_validQuest(_ids[i]),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/QuestManager.sol#L235)
require(SignatureVerifier.verify(_questSigner,""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/QuestManager.sol#L273)
require(_validQuest(_questId),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/QuestManager.sol#L285)
require(!hasCompleted(_accounts[i],""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedToken.sol#L119)
require(safetyData.collateralisationRatio==1e18,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedToken.sol#L133)
require(whitelistedWrappers[_msgSender()],"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/emissions/MockDisperse.sol#L14)
require(token.transferFrom(msg.sender,""));

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/savings/MockSavingsContract.sol#L74)
require(underlying.transfer(msg.sender,""),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/savings/MockSavingsContract.sol#L109)
require(_isCreditAmt?creditsBurned==_amount:massetRedeemed==_amount,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/buy-and-make/MockBPool.sol#L33)
require(_tokenIsValid[tokenIn],"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/rewards/MockRootChainManager.sol#L16)
require(rootToken!=ETHER_ADDRESS,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/governance/MockEmissionController.sol#L45)
require(!stakingContracts[_stakingContract],"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/governance/MockEmissionController.sol#L88)
require(data.count<4,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/masset/MockPlatformIntegration.sol#L192)
require(_amount==_totalAmount,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/masset/migrate2/MusdV2Rebalance.sol#L145)
require(balanceAfter-balanceBefore==swapInputs[0]+swapInputs[1],"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/upgradability/DelayedProxyAdmin.sol#L124)
require(_newImpl!=currentImpl,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/upgradability/DelayedProxyAdmin.sol#L128)
require(admin==address(this),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/Masset.sol#L167)
require(!basket_.undergoingRecol&&!basket_.failed,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/Masset.sol#L181)
require(!basket_.undergoingRecol,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/Masset.sol#L595)
require(personal.addr==_bAsset,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/Masset.sol#L647)
require(_bAssets[i]!=_bAssets[j],"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/MassetManager.sol#L77)
require(bAssetDecimals>=4&&bAssetDecimals<=18,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/MassetManager.sol#L266)
require(!_basket.failed,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/MassetManager.sol#L370)
require(_bAssetPersonal[idx].addr==_asset,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/peripheral/DudPlatform.sol#L77)
require(_bAsset==bAsset,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/peripheral/DudIntegration.sol#L82)
require(!cleared,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/peripheral/DudIntegration.sol#L108)
require(_isTokenFeeCharged==false,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/peripheral/AlchemixIntegration.sol#L82)
require(offsetPoolId>=1,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/liquidator/Liquidator.sol#L170)
require(_validUniswapPath(_bAsset,""),"");

In total, 1098