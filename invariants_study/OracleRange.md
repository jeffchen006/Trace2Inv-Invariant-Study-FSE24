
[Code File](../repos/2021-05-zer0-zns/ZNS/contracts/price/ZNSCurvePricer.sol#L339)
require(priceConfigs[domainHash].minPrice<=prevToMinPrice,"");

[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/polygon/IdleCDOPolygon.sol#L469)
require(lastStrategyPrice<=currPrice,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/Schains.sol#L94)
require(getSchainPrice(schainParameters.typeOfSchain,"")<=deposit,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/shutdown/fuse/RariMerkleRedeemer.sol#L128)
require(_exchangeRates[i]>1e10,"");

[Audit File](../audits/2021-03-defi-saver.md#L479)
require(amountBought>=wmul(exData.minPrice,exData.srcAmount),ERR_SLIPPAGE_HIT);

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BPool.sol#L451)
require(spotPriceBefore<=maxPrice,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BPool.sol#L473)
require(spotPriceAfter>=spotPriceBefore,"");

[Code File](../repos/2020-05-balancer-finance/balancer-core/contracts/BPool.sol#L475)
require(spotPriceBefore<=bdiv(tokenAmountIn,""),"");

[Code File](../repos/2021-01-erlc-iexec/PoCo/contracts/modules/delegates/IexecPoco1Delegate.sol#L93)
require(_requestorder.datasetmaxprice>=_datasetorder.datasetprice,"");

[Code File](../repos/2021-05-zer0-zauction/zAuction/contracts/ZAuctionV1.sol#L849)
require(bid>cancelprice[bidder][auctionid],"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/messaging/connectors/zksync/ZkSyncHubConnector.sol#L67)
require(fee>=IZkSync(AMB).l2TransactionBaseCost(tx.gasprice,""),"");

In total 11