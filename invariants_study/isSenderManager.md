[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/upgrade-test-mocks/distribution/ZNSSubRegistrarMock.sol#L92)
require(mintlist[parentHash][msg.sender],"");
[Audit File](../auditsDownloads/2023-01-rocket-pool-atlas-v1.2.md#L1916)
require(rocketNodeManager.getFeeDistributorInitialised(msg.sender),"");
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/minipool/RocketMinipoolDelegate.sol#L608)
require(!memberScrubVotes[msg.sender],"");
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Nodes.sol#L926)
require(isNodeExist(sender,"")||hasRole(NODE_MANAGER_ROLE,"")||getValidatorId(nodeIndex)==validatorService.getValidatorId(sender),"");
[Code File](../repos/2020-10-skale-network/skale-manager/contracts/thirdparty/openzeppelin/ERC777.sol#L242)
require(isOperatorFor(_msgSender(),""),"");
[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquidity-pool-v2/LiquidityPoolV2Converter.sol#L114)
require(oracleWhitelist.isWhitelisted(address(_primaryReserveOracle))&&oracleWhitelist.isWhitelisted(address(_secondaryReserveOracle)),"");
[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/bancorx/BancorX.sol#L185)
require(reporters[msg.sender],"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/script/whitelist/delegationFaucet/DelegationFaucet.sol#L58)
require(delegation.isOperator(_operator),"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/DelegationManager.sol#L121)
require(isOperator(msg.sender),"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/AVSDirectory.sol#L73)
require(!operatorSaltIsSpent[operator][operatorSignature.salt],"");
[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/core/AVSDirectory.sol#L134)
require(!operatorSaltIsSpent[msg.sender][salt],"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/BatchAction.sol#L205)
require(authorizedCallbackContract[msg.sender],"");
[Code File](../repos/2022-11-forta-delegated-staking/forta-contracts/contracts/components/_old/scanners/ScannerRegistry_0_1_0.sol#L2294)
require(_managers[scannerId].contains(_msgSender()),"");
[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/chain/OVM_StateCommitmentChain.sol#L140)
require(iOVM_BondManager(resolve("")).isCollateralized(msg.sender),"");
[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/OVM/execution/OVM_ExecutionManager.sol#L180)
require(ovmStateManager.isAuthenticated(msg.sender),"");
[Code File](../repos/2021-03-pooltogether-pods/pods-v3-contracts/contracts/Pod.sol#L122)
require(manager==_sender||owner()==_sender,"");
[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/WatcherClient.sol#L38)
require(watcherManager.isWatcher(msg.sender),"");
[Code File](../repos/2020-06-bancor-v2-amm-security-audit/contracts-solidity/contracts/bancorx/BancorX.sol#L148)
require(_reporters[msg.sender],"");
[Audit File](../auditsDownloads/2020-06-amp.md#L512)
require(_isOperator(msg.sender,_from),EC_58_INVALID_OPERATOR);
[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/Amp.sol#L988)
require(!_isCollateralManager[msg.sender],"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/rewards/RewardsDistributor.sol#L33)
require(fundManagers[msg.sender],"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/governance/MockEmissionController.sol#L33)
require(stakingContracts[msg.sender],"");
[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/z_mocks/masset/MockPlatformIntegration.sol#L42)
require(whitelist[msg.sender],"");

In total 23