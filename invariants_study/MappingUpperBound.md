
[Code File](../repos/2021-06-idle-finance/idle-tranches/contracts/IdleCDO.sol#L261)
require(IERC20(STK_IDLE).balanceOf(msg.sender)>=bal*_stkIDLEPerUnderlying/oneToken,"");

[Code File](../repos/2020-10-skale-network/skale-manager/contracts/SkaleToken.sol#L124)
require(balanceOf(from)>=locked.add(tokenId),"");

[Code File](../repos/2021-05-zer0-zbanc/zBanc/solidity/contracts/converter/types/liquid-token/LiquidTokenConverter.sol#L242)
require(_amount<=IDSToken(address(anchor)).balanceOf(address(this)),"");

[Code File](../repos/2022-04-tribe-dao-flywheel-v2-xtribe-xerc4626/flywheel-v2/src/rewards/FlywheelGaugeRewards.sol#L152)
require(rewardToken.balanceOf(address(this))-balanceBefore>=newRewards);

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/core/Core.sol#L46)
require(_tribe.balanceOf(address(this))>=amount,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/shutdown/fuse/MerkleRedeemerDripper.sol#L21)
require(IERC20(token).balanceOf(target)<amountToDrip,"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/shutdown/fuse/RariMerkleRedeemer.sol#L205)
require(redemptions[msg.sender][cToken]+cTokenAmount<=claims[msg.sender][cToken],"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/shutdown/fuse/RariMerkleRedeemer.sol#L236)
require(redemptions[msg.sender][cTokens[i]]+cTokenAmounts[i]<=claims[msg.sender][cTokens[i]],"");

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/external/WETH9.sol#L50)
require(balanceOf[msg.sender]>=wad);

[Code File](../repos/2021-01-fei-protocol/fei-protocol-core/contracts/external/WETH9.sol#L75)
require(balanceOf[src]>=wad);

[Audit File](../audits/2022-03-fuji-protocol.md#L714)
require(erc20token.balanceOf(address(this))>=_amount,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/fantom/nft-bonds/NFTInteractions.sol#L282)
require(nftGame.balanceOf(msg.sender,"")>=amount,"");

[Code File](../repos/2022-03-fuji-protocol/fuji-protocol/contracts/mainnet/flashloans/Flasher.sol#L269)
require(IERC20(token).balanceOf(address(this))>=amount,"");

[Audit File](../audits/2020-12-1inch-liquidity-protocol.md#L1076)
require(token0.uniBalanceOf(address(this))>=balance0,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/mocks/MockERC20.sol#L206)
require(_balances[sender]>=amount,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/mocks/MockERC20.sol#L252)
require(_balances[account]>=amount,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/mocks/MockWETH.sol#L39)
require(balanceOf[msg.sender]>=wad,"");

[Code File](../repos/2022-07-notional-finance/contracts-v2/contracts/mocks/MockWETH.sol#L66)
require(balanceOf[src]>=wad,"");

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/example/PopsicleBroken.sol#L120)
require(balances[msg.sender]>=amount);

[Code File](../repos/2020-12-growth-defi-v1/building-secure-contracts/program-analysis/echidna/example/PopsicleBroken.sol#L128)
require(totalFeesEarned>=accounts[msg.sender].latestUpdate);

[Code File](../repos/2021-03-pooltogether-pods/pods-v3-contracts/contracts/Pod.sol#L257)
require(balanceOf(msg.sender)>=shareAmount,"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts_forge/utils/TestWeth.sol#L26)
require(balanceOf(msg.sender)>=wad);

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L717)
require(dx<=tokenFrom.balanceOf(msg.sender),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L905)
require(amount<=lpToken.balanceOf(msg.sender),"");

[Code File](../repos/2021-07-connext-nxtp-noncustodial-xchain-transfer-protocol/nxtp/packages/deployments/contracts/contracts/core/connext/libraries/SwapUtilsExternal.sol#L948)
require(tokenAmount<=lpToken.balanceOf(msg.sender),"");

[Audit File](../audits/2021-04-rocketpool.md#L613)
require(tokenContract.balanceOf(address(this))>=_amount,"");

[Audit File](../audits/2021-04-rocketpool.md#L704)
require(tokenContract.balanceOf(msg.sender)>=_amount,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/mock/MockFlashloanExecutor.sol#L20)
require(token.balanceOf(address(this))>=amount,"");

[Code File](../repos/2021-03-dforce-lending-protocol-review/LendingContractsV2/contracts/mock/FlashloanTest.sol#L81)
require(_token.balanceOf(address(this))>=_amount,"");

[Audit File](../audits/2021-05-zer0-zdao-token.md#L324)
require(_balances[sender]>=total,"");

[Audit File](../audits/2020-06-amp.md#L453)
require(_balanceOfByPartition[_from][_fromPartition]>=_value,EC_52_INSUFFICIENT_BALANCE);

[Code File](../repos/2020-06-amp/amp-token-contracts/contracts/Amp.sol#L1103)
require(_balanceOfByPartition[_from][_fromPartition]>=_value,"");

[Code File](../repos/2020-09-aave-protocol-v2/protocol-v2/contracts/mocks/flashloan/MockFlashLoanReceiver.sol#L65)
require(amounts[i]<=IERC20(assets[i]).balanceOf(address(this)),"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/savings/SavingsManager.sol#L357)
require(IERC20(_mAsset).balanceOf(address(this))>=interestCollected+newReward,"");

[Code File](../repos/2020-07-mstable-1.1/mStable-contracts/contracts/rewards/staking/StakingTokenWrapper.sol#L94)
require(_balances[msg.sender]>=_amount,"");

In total 35