
[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/rewards/RocketMerkleDistributorMainnet.sol#L52)
require(getBytes32(key)==bytes32(0));

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedProposals.sol#L165)
require(bytes(_id).length>=3,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/dao/node/RocketDAONodeTrustedProposals.sol#L167)
require(bytes(_url).length>=6,"");

[Code File](../repos/2023-01-rocket-pool-atlas-v1.2/rocketpool/contracts/contract/node/RocketNodeManager.sol#L122)
require(bytes(_timezoneLocation).length>=4,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SyncManager.sol#L50)
require(startIP<=endIP&&startIP!=bytes4(0)&&endIP!=bytes4(0),"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Wallets.sol#L192)
require(schainHash!=bytes32(0),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/shutdown/fuse/RariMerkleRedeemer.sol#L141)
require(_roots[i]!=bytes32(0),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pods/RoleBastion.sol#L22)
require(role!=bytes32(0),"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/pods/RoleBastion.sol#L25)
require(roleAdmin==bytes32(0),"");

[Code File](../repos/2021-03-defi-saver/defisaver-v3-contracts/contracts/utils/KyberInputScalingHelperL2.sol#L730)
require(length+startByte<=data.length,"");

[Audit File](../audits/2023-03-eigenlabs-eigenlayer.md#L801)
require(validatorFields[BeaconChainProofs.VALIDATOR_WITHDRAWAL_CREDENTIALS_INDEX]==_podWithdrawalCredentials().toBytes32(0),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BytesLib.sol#L282)
require(_bytes.length>=_start+20,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BytesLib.sol#L293)
require(_bytes.length>=_start+1,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BytesLib.sol#L304)
require(_bytes.length>=_start+2,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BytesLib.sol#L315)
require(_bytes.length>=_start+4,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BytesLib.sol#L326)
require(_bytes.length>=_start+8,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BytesLib.sol#L337)
require(_bytes.length>=_start+12,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BytesLib.sol#L348)
require(_bytes.length>=_start+16,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/libraries/BytesLib.sol#L359)
require(_bytes.length>=_start+32,"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPodManager.sol#L338)
require(stateRoot!=bytes32(0),"");

[Code File](../repos/2023-03-eigenlabs-eigenlayer/eigenlayer-contracts/src/contracts/pods/EigenPod.sol#L457)
require(validatorFields.getWithdrawalCredentials()==bytes32(_podWithdrawalCredentials()),"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/BatchAction.sol#L126)
require(uint8(bytes1(action.trades[j]))==uint8(TradeActionType.Lend));

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/governance/GovernorAlpha.sol#L159)
require(keccak256(bytes(note_.symbol()))==keccak256(bytes("")));

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/utils/Lib_BytesUtils.sol#L23)
require(_bytes.length>=_start+_length,"");

[Code File](../repos/2021-03-optimism-safetychecker/contracts/contracts/optimistic-ethereum/libraries/trie/Lib_MerkleTrie.sol#L275)
require(Lib_BytesUtils.toBytes32(currentNode.encoded)==currentNodeID,"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/tools/TimelockController.sol#L247)
require(predecessor==bytes32(0)||isOperationDone(predecessor),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecMaintenanceDelegate.sol#L41)
require(EIP712DOMAIN_SEPARATOR==bytes32(0),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecMaintenanceDelegate.sol#L64)
require(EIP712DOMAIN_SEPARATOR!=bytes32(0),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/SpokeConnector.sol#L764)
require(_newRoot!=bytes32(""),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/SpokeConnector.sol#L782)
require(_aggregateRoot!=bytes32(""),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/optimism-v0/lib/MerkleTrie.sol#L148)
require(BytesUtils.toBytes32(currentNode.encoded)==currentNodeID,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/optimism/OptimismHubConnector.sol#L119)
require(selector==bytes4(keccak256("")),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/admin/AdminHubConnector.sol#L34)
require(_data!=bytes32(0),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/PolygonHubConnector.sol#L51)
require(!processedMessageRoots[bytes32(message)],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/tunnel/FxBaseRootTunnel.sol#L102)
require(MerklePatriciaProof.verify(receipt.toBytes(),""),""),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/polygon/tunnel/FxBaseRootTunnel.sol#L119)
require(bytes32(topics.getField(0).toUint())==SEND_MESSAGE_EVENT_SIG,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/interfaces/ambs/GnosisAmb.sol#L23)
functionrequireToPassMessage(address_contract,"")externalreturns(bytes32);

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/interfaces/ambs/GnosisAmb.sol#L29)
functionrequireToConfirmMessage(address_contract,"")externalreturns(bytes32);

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/interfaces/ambs/GnosisAmb.sol#L35)
functionrequireToGetInformation(bytes32_requestSelector,"")externalreturns(bytes32);

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/nft_orders/NFTOrders.sol#L117)
require(callbackResult==TAKER_CALLBACK_MAGIC_BYTES,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/zero-ex/contracts/src/features/nft_orders/NFTOrders.sol#L335)
require(callbackResult==FEE_CALLBACK_MAGIC_BYTES,"");

[Code File](../repos/2020-12-0x-exchange-v4/protocol/contracts/governance/src/ZeroExTimelock.sol#L63)
require(bytes4(payload)==bytes4(0x9db64a40),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/nexus/Nexus.sol#L111)
require(_key!=bytes32(0x0),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/nexus/Nexus.sol#L179)
require(addressToModule[_addr]==bytes32(0x0),"");

In total 44