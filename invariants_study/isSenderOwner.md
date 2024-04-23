[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/registrar/ZNSSubRegistrar.sol#L47)
require(registry.isOwnerOrOperator(domainHash,"")||accessController.isRegistrar(msg.sender),"");
[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/registrar/ZNSSubRegistrar.sol#L105)
require(parentConfig.accessType!=AccessType.LOCKED||isOwnerOrOperator,"");
[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/registrar/ZNSSubRegistrar.sol#L111)
require(mintlist[parentHash].list[mintlist[parentHash].ownerIndex][msg.sender],"");
[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/registrar/ZNSSubRegistrar.sol#L217)
require(registry.isOwnerOrOperator(domainHash,""),"");
[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/registrar/ZNSRootRegistrar.sol#L258)
require(isOwnerOf(domainHash,""),"");
[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/registry/ZNSRegistry.sol#L38)
require(isOwnerOrOperator(domainHash,""),"");
[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/registry/ZNSRegistry.sol#L50)
require(records[domainHash].owner==msg.sender,"");
[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/registry/ZNSRegistry.sol#L236)
require(msg.sender==records[domainHash].owner||accessController.isRegistrar(msg.sender),"");
[Audit File](../auditsDownloads/2023-01-rocket-pool-atlas-v1.2.md#L214)
require(withdrawalAddress==msg.sender,"");
[Audit File](../auditsDownloads/2023-01-rocket-pool-atlas-v1.2.md#L1570)
require(msg.sender==nodeAddress||msg.sender==withdrawalAddress,"");
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/RocketBase.sol#L68)
require(msg.sender==rocketStorage.getGuardian(),"");
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/RocketStorage.sol#L69)
require(msg.sender==guardian,"");
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/RocketStorage.sol#L77)
require(msg.sender==newGuardian,"");
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/RocketStorage.sol#L137)
require(pendingWithdrawalAddresses[_nodeAddress]==msg.sender,"");
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolBondReducer.sol#L38)
require(msg.sender==minipool.getNodeAddress(),"");
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketMerkleDistributorMainnet.sol#L81)
require(msg.sender==_nodeAddress||msg.sender==withdrawalAddress,"");
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/protocol/RocketDAOProtocolProposals.sol#L28)
require(msg.sender==getContractAddress("")||msg.sender==getContractAddress(""),"");
[Audit File](../auditsDownloads/2021-06-idle-finance.md#L414)
require(msg.sender==rebalancer||msg.sender==owner(),"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/GuardedLaunchUpgradable.sol#L55)
require(owner()==msg.sender,"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDO.sol#L1014)
require(msg.sender==guardian||msg.sender==owner(),"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/MerkleClaim.sol#L69)
require(msg.sender==TL_MULTISIG);
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDOTranche.sol#L23)
require(msg.sender==minter,"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/StakingRewards.sol#L84)
require(msg.sender==rewardsDistribution,"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleTokenFungible.sol#L145)
require(msg.sender==TL_MULTISIG||msg.sender==DL_MULTISIG||msg.sender==PAUSE_MULTISIG||msg.sender==owner(),"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/polygon-zk/strategies/clearpool/IdleClearpoolStrategyPolygonZK.sol#L302)
require(idleCDO==msg.sender,"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/strategies/truefi/IdleTruefiStrategy.sol#L60)
require(msg.sender==idleCDO,"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/strategies/idle/IdleStrategy.sol#L195)
require(msg.sender==whitelistedCDO||msg.sender==idleGovTimelock||msg.sender==owner(),"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/strategies/lido/IdlePoLidoStrategy.sol#L200)
require(msg.sender==whitelistedCDO,"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/strategies/lido/LidoCDOTrancheGateway.sol#L99)
require(msg.sender==wethToken,"");
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/strategies/euler/IdleLeveragedEulerStrategy.sol#L219)
require(msg.sender==owner()||msg.sender==rebalancer,"");
[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TreasuryVester.sol#L41)
require(msg.sender==recipient,"");
[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/TokenDistributor.sol#L107)
require(msg.sender==user_address,"");
[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/Timelock.sol#L43)
require(msg.sender==address(this),"");
[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/Timelock.sol#L52)
require(msg.sender==pendingAdmin,"");
[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/Timelock.sol#L67)
require(msg.sender==admin,"");
[Code File](../repos/2021-04-gitcoin-token-distribution/governance/contracts/GTC.sol#L266)
require(msg.sender==GTCDist,"");
[Code File](../repos/2021-10-gluwacoin-erc-20-wrapper/ERC-20-Wrapper-Gluwacoin/contracts/Migrations.sol#L8)
require(msg.sender==owner,"");
[Code File](../repos/2021-10-gluwacoin-erc-20-wrapper/ERC-20-Wrapper-Gluwacoin/contracts/abstracts/ERC20Reservable.sol#L234)
require(reservation._expiryBlockNum<=block.number||_msgSender()==reservation._executor,"");
[Code File](../repos/2020-11-paxos/simple-multisig/contracts/SimpleMultiSig.sol#L82)
require(recovered>lastAdd&&isOwner[recovered]);
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L160)
require(schainsInternal.isOwnerAddress(from,""),"");
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Permissions.sol#L47)
require(_isOwner(),"");
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Permissions.sol#L72)
require(contractManager.getContract(contractName)==msg.sender||_isOwner(),"");
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Permissions.sol#L87)
require(contractManager.getContract(contractName1)==msg.sender||contractManager.getContract(contractName2)==msg.sender||_isOwner(),"");
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Permissions.sol#L105)
require(contractManager.getContract(contractName1)==msg.sender||contractManager.getContract(contractName2)==msg.sender||contractManager.getContract(contractName3)==msg.sender||_isOwner(),"");
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/DelegationController.sol#L277)
require(msg.sender==delegations[delegationId].holder,"");
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/DelegationController.sol#L319)
require(delegations[delegationId].holder==msg.sender||(validatorService.validatorAddressExists(msg.sender)&&delegations[delegationId].validatorId==validatorService.getValidatorId(msg.sender)),"");
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/delegation/ValidatorService.sol#L206)
require(getValidator(validatorId).requestedAddress==msg.sender,"");
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/openzeppelin/AccessControlUpgradeableLegacy.sol#L148)
require(account==_msgSender(),"");
[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterBase.sol#L238)
require(!isActive()||owner==converterUpgrader,"");
[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterBase.sol#L341)
require(!reserves[_token].isSet||!isActive()||owner==converterUpgrader,"");
[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/ConverterRegistry.sol#L156)
require(msg.sender==owner||!isConverterValid(_converter),"");
[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquidity-pool-v2/LiquidityPoolV2Converter.sol#L110)
require(anchor.owner()==address(this),"");
[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/utility/Owned.sol#L53)
require(msg.sender==newOwner,"");
[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/utility/ContractRegistryClient.sol#L39)
require(msg.sender==addressOf(_contractName),"");
[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/utility/ContractRegistryClient.sol#L57)
require(msg.sender==owner||!onlyOwnerCanUpdateRegistry,"");
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/shutdown/fuse/RariMerkleRedeemer.sol#L154)
require(ECDSA.recover(MESSAGE_HASH,"")==msg.sender,"");
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/dao/governor/FeiDAO.sol#L83)
require(msg.sender==_guardian,"");
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/dao/governor/GovernorAlpha.sol#L269)
require(msg.sender==guardian||tribe.getPriorVotes(proposal.proposer,""))<proposalThreshold(),"");
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/timelocks/TokenTimelock.sol#L60)
require(msg.sender==beneficiary,"");
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/timelocks/TokenTimelock.sol#L112)
require(msg.sender==clawbackAdmin,"");
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/utils/OtcEscrow.sol#L41)
require(msg.sender==recipient||msg.sender==beneficiary);
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/utils/ProxyOTCEscrow.sol#L36)
require(msg.sender==otcPurchaser,"");
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/MergerBase.sol#L40)
require(msg.sender==rgtTimelock,"");
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/MergerBase.sol#L47)
require(msg.sender==tribeTimelock,"");
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/merger/ExchangerTimelock.sol#L48)
require(msg.sender==guardian);
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/peg/PSMRouter.sol#L120)
require(msg.sender==address(Constants.WETH),"");
[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/refs/CoreRef.sol#L157)
require(msg.sender==address(_fei),"");
[Audit File](../auditsDownloads/2022-03-fuji-protocol.md#L199)
require(msg.sender==_fujiAdmin.getController()||msg.sender==_fujiAdmin.getFliquidator()||msg.sender==owner(),Errors.VL_NOT_AUTHORIZED);
[Audit File](../auditsDownloads/2022-03-fuji-protocol.md#L262)
require(msg.sender==crToken&&address(this)==sender,Errors.VL_NOT_AUTHORIZED);
[Audit File](../auditsDownloads/2022-03-fuji-protocol.md#L475)
require(addrPermit[_msgSender()]||msg.sender==owner(),Errors.VL_NOT_AUTHORIZED);
[Audit File](../auditsDownloads/2022-03-fuji-protocol.md#L521)
require(msg.sender==owner()||msg.sender==_fujiAdmin.getController(),Errors.VL_NOT_AUTHORIZED);
[Audit File](../auditsDownloads/2022-03-fuji-protocol.md#L571)
require(msg.sender==owner(),Errors.VL_NOT_AUTHORIZED);
[Audit File](../auditsDownloads/2022-03-fuji-protocol.md#L581)
require(_msgSender()==owner(),"");
[Audit File](../auditsDownloads/2022-03-fuji-protocol.md#L1670)
require(msg.sender==_dydxSoloMargin&&sender==address(this),Errors.VL_NOT_AUTHORIZED);
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/Controller.sol#L47)
require(msg.sender==owner()||isExecutor[msg.sender],"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/F2FujiVault.sol#L66)
require(msg.sender==owner()||msg.sender==_fujiAdmin.getController(),"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/F2FujiVault.sol#L77)
require(msg.sender==_fujiAdmin.getFlasher(),"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/F2FujiVault.sol#L85)
require(msg.sender==_fujiAdmin.getFliquidator(),"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/F2Fliquidator.sol#L83)
require(msg.sender==owner(),"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/arbitrum/flashloans/FlasherArbitrum.sol#L45)
require(msg.sender==_fujiAdmin.getController()||msg.sender==_fujiAdmin.getFliquidator()||msg.sender==owner(),"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/PreTokenBonds.sol#L302)
require(ownerOf(_tokenId)==msg.sender,"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/utils/LockSVG.sol#L41)
require(msg.sender==nftGame.ownerOfLockNFT(tokenId_),"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/utils/VNFTCoreV2.sol#L124)
require(_isApprovedOrOwner(_msgSender(),""),"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/utils/VNFTCoreV2.sol#L207)
require(_msgSender()==ownerOf(tokenId_),"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/flashloans/FlasherFTM.sol#L185)
require(msg.sender==crToken&&address(this)==sender,"");
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/abstracts/claimable/Claimable.sol#L55)
require(_msgSender()==pendingOwner);
[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/abstracts/fujiERC1155/F1155Manager.sol#L34)
require(addrPermit[_msgSender()]||msg.sender==owner(),"");
[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/utils/BaseRewards.sol#L53)
require(msg.sender==tokenRewards[i].rewardDistribution,"");
[Code File](../repos/2020-12-1inch-liquidity-protocol/1inch-liquidity-protocol/contracts/governance/BaseGovernanceModule.sol#L11)
require(msg.sender==mothership,"");
[Audit File](../auditsDownloads/2021-03-defi-saver.md#L141)
require(msg.sender==AAVE_LENDING_POOL,ERR_ONLY_AAVE_CALLER);
[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/utils/LSVProxyRegistry.sol#L33)
require(DSProxy(payable(_proxyAddr)).owner()==msg.sender);
[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/utils/DFSProxyRegistry.sol#L26)
require(msg.sender==dfsProxyRegistryController);
[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/utils/FeeReceiver.sol#L14)
require(msg.sender==FEE_RECEIVER_ADMIN_ADDR,"");
[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/actions/flashloan/FLBalancer.sol#L75)
require(msg.sender==VAULT_ADDR,"");
[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/actions/flashloan/FLEuler.sol#L84)
require(msg.sender==address(EULER_ADDR),"");
[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/actions/flashloan/FLMaker.sol#L81)
require(msg.sender==address(DSS_FLASH_ADDR),"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L467)
require(strategyManager.owner()==executorMultisig,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L469)
require(slasher.owner()==executorMultisig,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L472)
require(eigenLayerProxyAdmin.owner()==executorMultisig,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/M1_Deploy.s.sol#L474)
require(delayedWithdrawalRouter.owner()==executorMultisig,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/testing/M2_Deploy_From_Scratch.s.sol#L477)
require(eigenPodManager.owner()==executorMultisig,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L41)
require(msg.sender==address(strategyManager)||msg.sender==address(eigenPodManager),"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L215)
require(msg.sender==staker||msg.sender==operator||msg.sender==_operatorDetails[operator].delegationApprover,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L573)
require(msg.sender==withdrawal.withdrawer,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/StrategyManager.sol#L37)
require(msg.sender==strategyWhitelister,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/StrategyManager.sol#L53)
require(msg.sender==address(delegation),"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/AVSDirectory.sol#L110)
require(avsOperatorStatus[msg.sender][operator]==OperatorAVSRegistrationStatus.REGISTERED,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/strategies/StrategyBase.sol#L59)
require(msg.sender==address(strategyManager),"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/permissions/PauserRegistry.sol#L18)
require(msg.sender==unpauser,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/permissions/Pausable.sol#L39)
require(msg.sender==pauserRegistry.unpauser(),"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPodManager.sol#L34)
require(address(ownerToPod[podOwner])==msg.sender,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPodManager.sol#L39)
require(msg.sender==address(delegationManager),"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/DelayedWithdrawalRouter.sol#L36)
require(address(eigenPodManager.getPod(podOwner))==msg.sender,"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L97)
require(msg.sender==address(eigenPodManager),"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L102)
require(msg.sender==podOwner,"");
[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/token/ControlledToken.sol#L84)
require(_msgSender()==address(controller),"");
[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L668)
require(_msgSender()==owner()||_msgSender()==address(periodicPrizeStrategyListener)||_msgSender()==address(beforeAwardListener),"");
[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-strategy/PeriodicPrizeStrategy.sol#L693)
require(_msgSender()==address(prizePool),"");
[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-pool/PrizePool.sol#L920)
require(_msgSender()==address(prizeStrategy),"");
[Code File](../repos/2021-02-pooltogether/pooltogether-pool-contracts/contracts/prize-pool/PrizePool.sol#L932)
require(address(reserve)==msg.sender,"");
[Audit File](../auditsDownloads/2020-05-balancer-finance.md#L646)
require(msg.sender==_controller,"");
[Audit File](../auditsDownloads/2020-05-balancer-finance.md#L899)
require(msg.sender==_blabs,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/mocks/BaseStrategyVault.sol#L65)
require(msg.sender==address(NOTIONAL));
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L261)
require(msg.sender==vaultConfig.vault,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultConfiguration.sol#L264)
require(account==msg.sender,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/PauseRouter.sol#L42)
require(owner==msg.sender||(msg.sender==pauseGuardian&&isRollbackCheck),"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/PauseRouter.sol#L61)
require(owner==msg.sender||msg.sender==pauseGuardian);
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/Router.sol#L83)
require(msg.sender==DEPLOYER&&!hasInitialized);
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/liquidators/NotionalV2FlashLiquidatorBase.sol#L84)
require(msg.sender==LENDING_POOL);
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/liquidators/NotionalV2ManualLiquidator.sol#L50)
require(msg.sender==DEPLOYER);
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/liquidators/NotionalV2ManualLiquidator.sol#L88)
require(hasRole(USER_ROLE,"")||msg.sender==owner,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/liquidators/NotionalV2BaseLiquidator.sol#L79)
require(owner==msg.sender,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/adapters/nwToken.sol#L30)
require(msg.sender==NOTIONAL);
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/adapters/nwToken.sol#L35)
require(msg.sender==NotionalProxy(NOTIONAL).owner());
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/adapters/CompoundToNotionalV2.sol#L80)
require(msg.sender==address(NotionalV2)&&sender==address(this),"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L357)
require(msg.sender==vault,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L359)
require(msg.sender==liquidator,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/GovernanceAction.sol#L52)
require(msg.sender==_pendingOwner,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/GovernanceAction.sol#L63)
require(owner==msg.sender||(msg.sender==pauseGuardian&&newImplementation==pauseRouter),"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/TreasuryAction.sol#L27)
require(treasuryManagerContract==msg.sender,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/AccountAction.sol#L183)
require(msg.sender==redeemer||msg.sender==address(this),"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/ERC1155Action.sol#L182)
require(IERC1155TokenReceiver(to).onERC1155Received(msg.sender,"")==ERC1155_ACCEPTED,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/ERC1155Action.sol#L226)
require(IERC1155TokenReceiver(to).onERC1155BatchReceived(msg.sender,"")==ERC1155_BATCH_ACCEPTED,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/ERC1155Action.sol#L244)
require(msg.sender==from||isApprovedForAll(from,""),"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/nTokenAction.sol#L97)
require(msg.sender==nTokenAddress,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/BatchAction.sol#L35)
require(account==msg.sender||msg.sender==address(this),"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/patchfix/BasePatchFixRouter.sol#L28)
require(msg.sender==OWNER);
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/patchfix/BasePatchFixRouter.sol#L54)
require(msg.sender==SELF&&(newImplementation==FINAL_ROUTER||newImplementation==CURRENT_ROUTER));
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/patchfix/BasePatchFixRouter.sol#L62)
require(msg.sender==SELF);
[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/dispatch/Dispatch_0_1_4.sol#L2352)
require(_msgSender()==owner||isApprovedForAll(owner,"")),"");
[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/agents/AgentRegistry_0_1_1.sol#L2283)
require(_msgSender()==ownerOf(agentId),"");
[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/staking/FortaStaking_0_1_1.sol#L2785)
require(from==_msgSender()||isApprovedForAll(from,"")),"");
[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/scanners/ScannerRegistry_0_1_0.sol#L2240)
require(_msgSender()==ownerOf(scannerId),"");
[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/vesting/_old/vesting_wallet/VestingWalletV0.sol#L25)
require(beneficiary()==_msgSender(),"");
[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/bridge/OVM_CrossDomainEnabled.sol#L36)
require(msg.sender==address(getCrossDomainMessenger()),"");
[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/bridge/messaging/OVM_L1MultiMessageRelayer.sol#L37)
require(msg.sender==resolve(""),"");
[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/bridge/messaging/OVM_L1CrossDomainMessenger.sol#L65)
require(msg.sender==relayer,"");
[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_ChainStorageContainer.sol#L64)
require(msg.sender==resolve(owner),"");
[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/verification/OVM_BondManager.sol#L80)
require(transitioner==msg.sender,"");
[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/execution/OVM_StateManager.sol#L70)
require(msg.sender==owner||msg.sender==ovmExecutionManager,"");
[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/predeploys/ERC1820Registry.sol#L74)
require(getManager(addr)==msg.sender,"");
[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/predeploys/ERC1820Registry.sol#L93)
require(getManager(_addr)==msg.sender,"");
[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/exercises/exercise2/token.sol#L11)
require(owner==msg.sender);
[Code File](../repos/2021-01-erlc-iexec/eRLC/contracts/ERLCTokenSwap.sol#L89)
require(_msgSender()==address(underlyingToken),"");
[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/DelegateBase.sol#L28)
require(_msgSender()==m_deals[m_tasks[_taskid].dealid].workerpool.owner);
[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecOrderManagementDelegate.sol#L44)
require(owner==_msgSender()||_checkSignature(owner,""),""),""),"");
[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco1Delegate.sol#L125)
require(_isAuthorized(ids.appOwner),"");
[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco1Delegate.sol#L136)
require(_isAuthorized(ids.datasetOwner),"");
[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco1Delegate.sol#L146)
require(_isAuthorized(ids.workerpoolOwner),"");
[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/seller1.sol#L47)
require(msg.sender==owner_);
[Code File](../repos/2020-12-orchid-multisend/orchid/pac-ethereum/lot-ethereum/seller1.sol#L65)
require(msg.sender==manager_);
[Audit File](../auditsDownloads/2021-03-pooltogether-pods.md#L269)
require(msg.sender==factory||msg.sender==owner(),"");
[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zsale.sol#L84)
require(nftcontract.ownerOf(tokenid)==msg.sender,"");
[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zauction.sol#L140)
require(msg.sender==hub.ownerOf(domainTokenId),"");
[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zauction.sol#L435)
require(msg.sender==account,"");
[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/Zauction.sol#L470)
require(msg.sender==hub.ownerOf(id),"");
[Audit File](../auditsDownloads/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol.md#L702)
require(msg.sender==txData.user||recoverSignature(txData.transactionId,relayerFee,"",signature)==txData.user,"");
[Audit File](../auditsDownloads/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol.md#L1730)
require(msg.sender==_transactionManager,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/xreceivers/Unwrapper.sol#L78)
require(msg.sender==CONNEXT,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/LibDiamond.sol#L72)
require(msg.sender==diamondStorage().contractOwner,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/MerkleTreeManager.sol#L69)
require(arborist==msg.sender,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/Connector.sol#L79)
require(msg.sender==AMB,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/Connector.sol#L89)
require(msg.sender==ROOT_MANAGER,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/optimism-v0/BaseOptimismV0.sol#L13)
require(msg.sender==_amb,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/arbitrum/ArbitrumHubConnector.sol#L252)
require(_msg.l2Sender==mirrorConnector,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/arbitrum/ArbitrumSpokeConnector.sol#L31)
require(msg.sender==aliasedSender,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/multichain/BaseMultichain.sol#L79)
require(msg.sender==EXECUTOR,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/tunnel/FxBaseChildTunnel.sol#L47)
require(msg.sender==fxChild,"");
[Audit File](../auditsDownloads/2021-04-rocketpool.md#L2747)
require(msg.sender==rocketDAOProtocolSettingsNetworkInterface.getSystemWithdrawalContractAddress(),"");
[Code File](../repos/2020-06-shell-protocol/shell-solidity-v1/src/ShellFactory.sol#L87)
require(msg.sender==cowri,"");
[Code File](../repos/2021-03-umbra-smart-contracts/umbra-protocol/contracts-core/contracts/Umbra.sol#L90)
require(msg.sender==tollCollector,"");
[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/converter/ConverterRegistry.sol#L144)
require(msg.sender==owner()||!isConverterValid(converter),"");
[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/utility/Owned.sol#L33)
require(msg.sender==_owner,"");
[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/utility/Owned.sol#L55)
require(msg.sender==_newOwner,"");
[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/utility/ContractRegistryClient.sol#L43)
require(msg.sender==_addressOf(contractName),"");
[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/utility/ContractRegistryClient.sol#L59)
require(msg.sender==owner()||!_onlyOwnerCanUpdateRegistry,"");
[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L129)
require(msg.sender==owner||(msg.sender==pauseGuardian&&_paused),"");
[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L783)
require(msg.sender==_iToken,"");
[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/RewardDistributor.sol#L74)
require(address(controller)==msg.sender,"");
[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/StatusOracle.sol#L94)
require(pauser==msg.sender||owner==msg.sender,"");
[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/library/Ownable.sol#L71)
require(msg.sender==pendingOwner,"");
[Code File](../repos/2021-05-zer0-zdao-token/zDAO-Token/contracts/ZeroToken.sol#L78)
require(authorizedToSnapshot[_msgSender()]||_msgSender()==owner(),"");
[Audit File](../auditsDownloads/2020-11-pooltogether-lootbox-and-multiplewinners-strategy.md#L589)
require(_msgSender()==owner()||_msgSender()==address(periodicPrizeStrategyListener),"");
[Audit File](../auditsDownloads/2022-02-gamma.md#L578)
require(msg.sender==address(pool));
[Code File](../repos/2022-02-gamma/hypervisor/contracts/mocks/MockUniswapV3Pool.sol#L91)
require(msg.sender==address(currentPool));
[Code File](../repos/2022-02-gamma/hypervisor/contracts/proxy/AutoRebal.sol#L24)
require(msg.sender==advisor,"");
[Code File](../repos/2022-02-gamma/hypervisor/contracts/adapters/tokemak/TokeHypervisor.sol#L234)
require(msg.sender==whitelistedAddress,"");
[Code File](../repos/2022-02-gamma/hypervisor/contracts/adapters/tokemak/BaseController.sol#L19)
require(msg.sender==manager,"");
[Audit File](../auditsDownloads/2020-06-amp.md#L643)
require(msg.sender==amp,"");
[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/Ownable.sol#L69)
require(msg.sender==_authorizedNewOwner,"");
[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/partitions/CollateralPoolPartitionValidator.sol#L43)
require(msg.sender==address(amp),"");
[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/partitions/HolderCollateralPartitionValidator.sol#L166)
require(IAmp(amp).isCollateralManager(toPartitionOwner),"");
[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L1054)
require(msg.sender==owner()||msg.sender==partitionManager,"");
[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L1089)
require(msg.sender==owner()||msg.sender==withdrawalLimitPublisher,"");
[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L1114)
require(msg.sender==owner()||msg.sender==withdrawalPublisher,"");
[Code File](../repos/2020-06-amp/flexa-collateral-manager/contracts/FlexaCollateralManager.sol#L1169)
require(msg.sender==owner()||msg.sender==fallbackPublisher,"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/misc/WETHGateway.sol#L179)
require(msg.sender==address(WETH),"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/dependencies/openzeppelin/contracts/Ownable.sol#L43)
require(_owner==_msgSender(),"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/logic/ValidationLogic.sol#L244)
require(amountSent!=uint256(-1)||msg.sender==onBehalfOf,"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/tokenization/DelegationAwareAToken.sol#L15)
require(_msgSender()==ILendingPool(_pool).getAddressesProvider().getPoolAdmin(),"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/tokenization/AToken.sol#L45)
require(_msgSender()==address(_pool),"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/tokenization/base/DebtTokenBase.sol#L28)
require(_msgSender()==address(_getLendingPool()),"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/lendingpool/LendingPool.sol#L68)
require(_addressesProvider.getLendingPoolConfigurator()==msg.sender,"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/lendingpool/LendingPool.sol#L746)
require(msg.sender==_reserves[asset].aTokenAddress,"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/lendingpool/LendingPoolConfigurator.sol#L36)
require(addressesProvider.getPoolAdmin()==msg.sender,"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/lendingpool/LendingPoolConfigurator.sol#L41)
require(addressesProvider.getEmergencyAdmin()==msg.sender,"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/adapters/UniswapLiquiditySwapAdapter.sol#L63)
require(msg.sender==address(LENDING_POOL),"");
[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/migrations/InitialMigration.sol#L59)
require(msg.sender==initializeCaller,"");
[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/migrations/InitialMigration.sol#L110)
require(msg.sender==_implementation,"");
[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/UniswapV3Feature.sol#L199)
require(msg.sender==address(_toPool(token0,"")),"");
[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/nft_orders/ERC1155OrdersFeature.sol#L289)
require(order.maker==msg.sender,"");
[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/governance/src/SecurityCouncil.sol#L82)
require(msg.sender==securityCouncil,"");
[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/governance/src/ZeroExVotes.sol#L333)
require(msg.sender==token,"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L899)
require(msg.sender==_governor(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L908)
require(msg.sender==_governor()||msg.sender==_governance(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L919)
require(msg.sender==_proxyAdmin(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L927)
require(msg.sender==_manager(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L1369)
require(msg.sender==_savingsManager(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/legacy-upgraded/imusd-mainnet-22.sol#L1723)
require(msg.sender==poker,"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/savings/SavingsManager.sol#L105)
require(msg.sender==_liquidator(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L180)
require(!_paused||msg.sender==_recollateraliser(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/feeders/NonPeggedFeederPool.sol#L187)
require(nexus.getModule(KEY_INTEREST_VALIDATOR)==msg.sender,"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/buy-and-make/GaugeBriber.sol#L45)
require(msg.sender==keeper||msg.sender==_governor(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/rewards/InitializableRewardsDistributionRecipient.sol#L32)
require(msg.sender==rewardsDistributor,"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/shared/ImmutableModule.sol#L45)
require(msg.sender==_keeper()||msg.sender==_governor(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/ClaimableGovernor.sol#L25)
require(msg.sender==proposedGovernor,"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/GamifiedToken.sol#L84)
require(_msgSender()==address(questManager),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/QuestManager.sol#L65)
require(_msgSender()==questMaster||_msgSender()==_governor(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/governance/staking/StakedToken.sol#L106)
require(_msgSender()==_recollateraliser(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/peripheral/dydx/DyDxFlashLoan.sol#L35)
require(msg.sender==address(pool),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/savings/connectors/MockErroneousConnector1.sol#L21)
require(save==msg.sender,"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/Masset.sol#L153)
require(_savingsManager()==msg.sender,"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/Masset.sol#L867)
require(msg.sender==_governor()||msg.sender==_proxyAdmin(),"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/peripheral/DudPlatform.sol#L30)
require(msg.sender==integration,"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/masset/peripheral/AbstractIntegration.sol#L69)
require(msg.sender==lpAddress,"");
