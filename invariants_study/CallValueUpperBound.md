
[Audit File](../audits/2022-03-fuji-protocol.md#L904)
require(msg.value>=debtTotal,Errors.VL_AMOUNT_ERROR);

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/F2FujiVault.sol#L749)
require(msg.value>=amountToPayback,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/F2Fliquidator.sol#L144)
require(msg.value>=debtTotal,"");

[Audit File](../audits/2020-12-1inch-liquidity-protocol.md#L741)
require(msg.value>=amount,"");

[Code File](../repos/2021-03-umbra-smart-contracts/umbra-protocol/contracts-core/contracts/Umbra.sol#L114)
require(msg.value>toll,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/misc/WETHGateway.sol#L101)
require(msg.value>=paybackAmount,"");

In total 6