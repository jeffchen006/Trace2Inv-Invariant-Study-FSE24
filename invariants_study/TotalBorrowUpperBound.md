[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/internal/vaults/VaultAccount.sol#L203)
require(vaultConfig.minAccountBorrowSize<=vaultAccount.fCash.neg(),"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/adapters/CompoundToNotionalV2.sol#L63)
require(cTokenRepayAmount<=borrowBalance,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/adapters/cTokenAggregator.sol#L61)
require(borrowRateMantissa<=0.0005e16,"");
[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/external/actions/VaultAccountAction.sol#L399)
require(depositAmountExternal<assetToken.convertToExternal(debtOutstandingAboveMinBorrow),"");
[Audit File](../auditsDownloads/2021-03-dforce-lending-protocol-review.md#L643)
require(_vars.borrowRate<=maxBorrowRate,"");
[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/Controller.sol#L797)
require(_totalBorrows.add(_borrowAmount)<=_market.borrowCapacity,"");
[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/protocol/libraries/logic/ValidationLogic.sol#L326)
require(usageRatio>=REBALANCE_UP_USAGE_RATIO_THRESHOLD&&currentLiquidityRate<=maxVariableBorrowRate.percentMul(REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD),"");

In total 7