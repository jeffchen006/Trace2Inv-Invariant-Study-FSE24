[ ![Consensys Diligence](/diligence/images/logo/logo.svg) ](/diligence "Home")

[Audits](/diligence/audits/ "Audits") [Fuzzing](/diligence/fuzzing/ "Fuzzing")
[Scribble](/diligence/scribble/ "Scribble") [Blog](/diligence/blog/ "Blog")
[Tools](/diligence/tools/ "Tools") [Research](/diligence/research/ "Research")
[About](/diligence/about/ "About") [Contact](/diligence/contact/ "Contact")

# Bridge Mutual

  * 1 Executive Summary
  * 2 Scope
  * 3 Re-audit
  * 4 Recommendations
    * 4.1 Follow Solidity best practices
    * 4.2 Fully implement standards you plan to support
  * 5 Issues
    * 5.1 Anyone is able to mint NFTs by calling `mintNFTsForLM` Critical ✓ Fixed
    * 5.2 Liquidity providers can create deficit of DAI tokens Critical ✓ Fixed
    * 5.3 Profit and loss distribution mechanism is not working Critical ✓ Fixed
    * 5.4 A liquidity provider can withdraw all his funds anytime Critical ✓ Fixed
    * 5.5 Re-entrancy issue for ERC1155 Critical ✓ Fixed
    * 5.6 The `buyPolicyFor`/`addLiquidityFor` should transfer funds from `msg.sender` Critical ✓ Fixed
    * 5.7 LiquidityMining can't accept single ERC1155 tokens Major ✓ Fixed
    * 5.8 DAI is assumed to have the same price as DAIx in the staking contract Major ✓ Fixed
    * 5.9 `_updateWithdrawalQueue` can run out of gas Major ✓ Fixed
    * 5.10 The `PolicyBook` should make DAI transfers inside the contract Medium ✓ Fixed
    * 5.11 Premium is payed instantly to the liquidity providers Medium ✓ Fixed
    * 5.12 The `totalCoverTokens` is only updated when the policy is bought Medium ✓ Fixed
    * 5.13 Unbounded loops in LiquidityMining Medium ✓ Fixed
    * 5.14 The `_removeFromQueue` is very gas greedy Medium ✓ Fixed
    * 5.15 Withdrawal with zero amount is possible Medium ✓ Fixed
    * 5.16 The withdrawal queue is only updated when the liquidity is added Medium ✓ Fixed
    * 5.17 Optimize gas usage when checking max length of arrays Minor ✓ Fixed
    * 5.18 Methods return values that are never used Minor ✓ Fixed
    * 5.19 Save some gas when looping over state arrays Minor ✓ Fixed
    * 5.20 Optimize gas costs when handling liquidity start and end times Minor
    * 5.21 Computing the quote should be done for a positive amount of tokens Minor ✓ Fixed
  * 6 Re-audit issues
    * 6.1 Anyone can win all the funds from the `LiquidityMining` without investing any DAI Critical
    * 6.2 Liquidity withdrawal can be blocked Major
    * 6.3 The `totalCoverTokens` can be decreased before the claim is committed Major
    * 6.4 The `totalCoverTokens` is not decreased after the claim happened Major
    * 6.5 The Queue `remove` function does not remove the item completely Major
    * 6.6 Optimization issue Medium
    * 6.7 Proper usage of the `transfer` and the `transferFrom` functions Medium
    * 6.8 The price and the duration of a policy may be unpredictable Medium
    * 6.9 The `aggregatedQueueAmount ` value is used inconsistently Medium
    * 6.10 The claim can only be done once Medium
    * 6.11 Users are incentivised to invest right before the `getEndLMTime` to join the winning team Medium
  * Appendix 1 - Disclosure

Date | March 2021  
---|---  
Lead Auditor | Sergii Kravchenko  
Co-auditors | Daniel Luca  
  
## 1 Executive Summary

This report presents the results of our engagement with **Bridge Mutual** to
review their system.

The review was conducted over two weeks, from **March 8, 2021** to **March 19,
2021** by **Sergii Kravchenko** and **Daniel Luca**. A total of 15 person-days
were spent.

## 2 Scope

Our review focused on the commit hash
[`5ebe8d59eecd00bc5c10d4de0bf86eb6b5478036`](https://github.com/Bridge-Mutual/bridgemutual-core/commit/5ebe8d59eecd00bc5c10d4de0bf86eb6b5478036).
Allocated time was not enough to cover the whole codebase sufficiently. In
discussion with the client, we determined the priorities that we were focusing
on during this audit. The main priority was given to the `PolicyBook` contract
as the primary endpoint for the users and to the `LiquidityMining` module. The
modules that are dealing with claims and voting were not covered in this
report. In addition to that, the following list of contracts was excluded from
the scope:

  * [BMIDAIStaking](https://github.com/Bridge-Mutual/bridgemutual-core/blob/master/contracts/BMIDAIStaking.sol)
  * [BMIStaking](https://github.com/Bridge-Mutual/bridgemutual-core/blob/master/contracts/BMIStaking.sol)
  * [LiquidityMiningStaking](https://github.com/Bridge-Mutual/bridgemutual-core/blob/master/contracts/LiquidityMiningStaking.sol)
  * [BMIToken](https://github.com/Bridge-Mutual/bridgemutual-core/blob/master/contracts/BMIToken.sol)
  * [BMITokenVesting](https://github.com/Bridge-Mutual/bridgemutual-core/blob/master/contracts/BMITokenVesting.sol)
  * [BMITokenVestingV2](https://github.com/Bridge-Mutual/bridgemutual-core/blob/master/contracts/BMITokenVestingV2.sol)
  * [BMIVesting](https://github.com/Bridge-Mutual/bridgemutual-core/blob/master/contracts/BMIVesting.sol)

Individual issues and recommendations are listed below, but it's important to
note that the contract system is quite large, with complex interactions
between contracts and insufficient testing. The contracts that we reviewed had
a lot of issues and require significant changes. It means that **there are
likely vulnerabilities that our team did not find**. After fixing the issues
and following the recommendations, we recommend doing a re-audit of the full
system.

## 3 Re-audit

After the initial audit, the Bridge Mutual team provided the fixes, and we did
a second round of the review. The main goal was to review the changes and look
deeper into the same code again. This review was conducted over two weeks from
**April 12, 2021** to **April 23, 2021** by **Sergii Kravchenko**. Only 10
person-days weeks were allocated for that round. The review is based on the
following commit hash:
[ac70fb7a88be7240c1f489aee4f5f815adb1c5f7](https://github.com/Bridge-Mutual/bridgemutual-core/tree/ac70fb7a88be7240c1f489aee4f5f815adb1c5f7)

During the re-audit, more issues were found. Some of them were introduced by
the fixes and changes in the code. The other issues were in the code before
the first review. Because of the increasing complexity of the code, the scope
of the second review remains the same. The main focus was on the `PolicyBook`
contract and interactions with it. A lot of attention was also dedicated to
the `LiquidityMining` and `LiquidityMiningStaking` modules.

## 4 Recommendations

### 4.1 Follow Solidity best practices

#### Description

It's good to follow industry-accepted best practices describing how to develop
smart contracts.

I will add some links with very good documentation and guides on how to write
code and think about dos and don'ts in the blockchain environment.

  * One of the best resources is Diligence's very own [Ethereum Smart Contract Security Best Practices](https://consensys.github.io/smart-contract-best-practices/). An article that is related to an uncovered issue describes [push vs pull mechanisms](https://consensys.github.io/smart-contract-best-practices/recommendations/#favor-pull-over-push-for-external-calls) and how to implement them.
  * Another very useful guide is [Solidity's Common Patterns](https://docs.soliditylang.org/en/latest/common-patterns.html)
  * The [Smart Contract Weakness Classification](https://swcregistry.io/) is also a great tool to understand the different security issues, check examples, references and recommendations for remediation.

#### Recommendation

We recommend you go through the links we shared and internalize the
information described on each platform.

### 4.2 Fully implement standards you plan to support

#### Description

It is extremely important to fully implement standards before deploying the
contracts to the blockchain.

Because of the native immutability of the contracts, having a full
implementation of the contracts is important because other platforms need to
be able to interact with your system.

This why Ethereum Improvement Proposals have an evolving process described in
[EIP-1](https://eips.ethereum.org/EIPS/eip-1), section "EIP Process". When the
proposal arrives to the `Final` stage, it will not be changed anymore and all
smart contract systems can interact relatively safely with other contracts as
long as they correctly implement the accepted standard.

However, the standards are relatively strict and might create problems if they
are not implemented correctly.

Also because of the relative life-span of Ethereum, implementing all standards
fully and correctly requires a fair amount of effort and knowledge.

It is important to make sure you fully understand the standards before
implementing them, because of their specific details, security considerations
and concerns each has.

For example, a concern that comes with
[EIP-1155](https://eips.ethereum.org/EIPS/eip-1155) is the ability to re-enter
an execution path because of the [callback
functions](https://eips.ethereum.org/EIPS/eip-1155#erc-1155-token-receiver) it
defines.

#### Recommendation

Make sure to fully understand the standards before implementing them. There is
some value in reading the comments from the initial pull request to see how
the standard evolved, what the concerns were and what decisions were made
along the way.

Completely read these standards, but not be limited to:

  * [EIP-1155](https://eips.ethereum.org/EIPS/eip-1155)
  * [EIP-165](https://eips.ethereum.org/EIPS/eip-165)
  * [EIP-20](https://eips.ethereum.org/EIPS/eip-20)
  * [EIP-721](https://eips.ethereum.org/EIPS/eip-721)

## 5 Issues

Each issue has an assigned severity:

  * Minor issues are subjective in nature. They are typically suggestions around best practices or readability. Code maintainers should use their own judgment as to whether to address such issues.
  * Medium issues are objective in nature but are not security vulnerabilities. These should be addressed unless there is a clear reason not to.
  * Major issues are security vulnerabilities that may not be directly exploitable or may require certain conditions in order to be exploited. All major issues should be addressed.
  * Critical issues are directly exploitable security vulnerabilities that need to be fixed.

### 5.1 Anyone is able to mint NFTs by calling `mintNFTsForLM` Critical ✓
Fixed

#### Resolution

Fixed. Not an issue, as the contract is meant to be used as a mock.

#### Description

The contract `LiquidityMiningNFT` has the method `mintNFTsForLM`.

**code/contracts/LiquidityMiningNFT.sol:L12-L29**

    
    
    function mintNFTsForLM(address _liquidiyMiningAddr) external {
        uint256[] memory _ids = new uint256[](NFT_TYPES_COUNT);
        uint256[] memory _amounts = new uint256[](NFT_TYPES_COUNT);
    
        _ids[0] = 1;
        _amounts[0] = 5;
    
        _ids[1] = 2;
        _amounts[1] = 1 * LEADERBOARD_SIZE;
    
        _ids[2] = 3;
        _amounts[2] = 3 * LEADERBOARD_SIZE;
    
        _ids[3] = 4;
        _amounts[3] = 6 * LEADERBOARD_SIZE;
    
        _mintBatch(_liquidiyMiningAddr, _ids, _amounts, "");
    }
    

However, this contract does not have any kind of special permissions to limit
who is able to mint tokens.

An attacker could call `LiquidityMiningNFT.mintNFTsForLM(0xhackerAddress)` to
mint tokens for their address and sell them on the marketplace. They are also
allowed to mint as many tokens as they want by calling the method multiple
times.

#### Recommendation

Add some permissions to limit only some actors to mint tokens.

### 5.2 Liquidity providers can create deficit of DAI tokens Critical ✓ Fixed

#### Resolution

Fixed by keeping all the DAI inside the PolicyBook.

#### Description

The current staking system is built in a way that a liquidity provider can
stake DAIx tokens to the staking contract. By doing so, DAI tokens are getting
withdrawn from the PolicyBook and there may be not enough funds to fulfill
claims.

#### Recommendation

This issue requires major changes in the logic of the system.

### 5.3 Profit and loss distribution mechanism is not working Critical ✓ Fixed

#### Resolution

Fixed by updating the `totalLiquidity` during claims and premium distribution.

#### Description

Liquidity providers should deposit DAI and receive DAIx in return; the initial
rate of DAI to DAIx is 1. If claims are happening, the price of DAIx should
decrease, and the loss should be distributed proportionally across the
liquidity providers. If the policy is bought, the DAIx price should increase.
Currently, it seems like the `getDAIToDAIxRatio` will always be zero because
it's based on the `totalLiquidity` to the `totalSupply()` ratio. While the
`totalSupply()` remains correct, the `totalLiquidity` is only modified when
adding/removing liquidity. The `totalLiquidity` should represent the amount of
DAI in the smart contract, which is the added liquidity + premium - claims.
But the claims and premiums are not changing the `totalLiquidity` value.

That error may also lead to the deficit of funds during withdrawals or claims.

#### Recommendation

Properly keep track of the `totalLiquidity`.

### 5.4 A liquidity provider can withdraw all his funds anytime Critical ✓
Fixed

#### Resolution

The funds are now locked when the withdrawal is requested, so funds cannot be
transferred after the request, and this bug cannot be exploited anymore.

#### Description

Since some users provide liquidity to sell the insurance policies, it is
important that these providers cannot withdraw their funds when the security
breach happens and the policyholders are submitting claims. The liquidity
providers can only request their funds first and withdraw them later (in a
week).

**code/contracts/PolicyBook.sol:L358-L382**

    
    
    function requestWithdrawal(uint256 _tokensToWithdraw) external override {
      WithdrawalStatus _status = getWithdrawalStatus(msg.sender);
    
      require(_status == WithdrawalStatus.NONE || _status == WithdrawalStatus.EXPIRED,
        "PB: Can't request withdrawal");
    
      uint256 _daiTokensToWithdraw = _tokensToWithdraw.mul(getDAIToDAIxRatio()).div(PERCENTAGE_100);
      uint256 _availableDaiBalance = balanceOf(msg.sender).mul(getDAIToDAIxRatio()).div(PERCENTAGE_100);
    
      if (block.timestamp < liquidityMining.getEndLMTime().add(neededTimeAfterLM)) {
        _availableDaiBalance = _availableDaiBalance.sub(liquidityFromLM[msg.sender]);
      }
    
      require(totalLiquidity >= totalCoverTokens.add(_daiTokensToWithdraw),
        "PB: Not enough liquidity");
    
      require(_availableDaiBalance >= _daiTokensToWithdraw, "PB: Wrong announced amount");
    
      WithdrawalInfo memory _newWithdrawalInfo;
      _newWithdrawalInfo.amount = _tokensToWithdraw;
      _newWithdrawalInfo.readyToWithdrawDate = block.timestamp.add(withdrawalPeriod);
    
      withdrawalsInfo[msg.sender] = _newWithdrawalInfo;
      emit RequestWithdraw(msg.sender, _tokensToWithdraw, _newWithdrawalInfo.readyToWithdrawDate);
    }
    

**code/contracts/PolicyBook.sol:L384-L396**

    
    
    function withdrawLiquidity() external override {
      require(getWithdrawalStatus(msg.sender) == WithdrawalStatus.READY,
        "PB: Withdrawal is not ready");
    
      uint256 _tokensToWithdraw = withdrawalsInfo[msg.sender].amount;
      uint256 _daiTokensToWithdraw = _tokensToWithdraw.mul(getDAIToDAIxRatio()).div(PERCENTAGE_100);
    
      if (withdrawalQueue.length != 0 || totalLiquidity.sub(_daiTokensToWithdraw) < totalCoverTokens) {
        withdrawalQueue.push(msg.sender);
      } else {
        _withdrawLiquidity(msg.sender, _tokensToWithdraw);
      }
    }
    

There is a restriction in `requestWithdrawal` that requires the liquidity
provider to have enough funds at the moment of request:

**code/contracts/PolicyBook.sol:L371-L374**

    
    
    require(totalLiquidity >= totalCoverTokens.add(_daiTokensToWithdraw),
      "PB: Not enough liquidity");
    
    require(_availableDaiBalance >= _daiTokensToWithdraw, "PB: Wrong announced amount");
    

But after the request is created, these funds can then be transferred to
another address. When the request is created, the provider should wait for 7
days, and then there will be 2 days to withdraw the requested amount:

**code/contracts/PolicyBook.sol:L113-L114**

    
    
    withdrawalPeriod = 1 weeks;
    withdrawalExpirePeriod = 2 days;
    

The attacker would have 4 addresses that will send the pool tokens to each
other and request withdrawal of the full amount one by one every 2 days. So at
least one of the addresses can withdraw all of the funds at any point in time.
If the liquidity provider needs to withdraw funds immediately, he should
transfer all funds to that address and execute the withdrawal.

#### Recommendation

One of the solutions would be to block the DAIx tokens from being transferred
after the withdrawal request.

### 5.5 Re-entrancy issue for ERC1155 Critical ✓ Fixed

#### Resolution

Addressed by moving `isNFTDistributed = true;` before the token transfers and
only transferring tokens to the message sender.

#### Description

ERC1155 tokens have callback functions on some of the transfers, like
`safeTransferFrom`, `safeBatchTransferFrom`. During these transfers, the
`IERC1155ReceiverUpgradeable(to).onERC1155Received` function is called in the
`to` address.

For example, `safeTransferFrom` is used in the `LiquidityMining` contract:

**code/contracts/LiquidityMining.sol:L204-L224**

    
    
    function distributeAllNFT() external {
        require(block.timestamp > getEndLMTime(),
            "2 weeks after liquidity mining time has not expired");
        require(!isNFTDistributed, "NFT is already distributed");
    
        for (uint256 i = 0; i < leaderboard.length; i++) {
            address[] memory _groupLeaders = groupsLeaders[leaderboard[i]];
    
            for (uint256 j = 0; j < _groupLeaders.length; j++) {
                _sendNFT(j, _groupLeaders[j]);
            }
        }
    
        for (uint256 i = 0; i < topUsers.length; i++) {
            address _currentAddress = topUsers[i];
            LMNFT.safeTransferFrom(address(this), _currentAddress, 1, 1, "");
            emit NFTSent(_currentAddress, 1);
        }
    
        isNFTDistributed = true;
    }
    

During that transfer, the `distributeAllNFT ` function can be called again and
again. So multiple transfers will be done for each user.

In addition to that, any receiver of the tokens can revert the transfer. If
that happens, nobody will be able to receive their tokens.

#### Recommendation

  * Add a reentrancy guard.
  * Avoid transferring tokens for different receivers in a single transaction.

### 5.6 The `buyPolicyFor`/`addLiquidityFor` should transfer funds from
`msg.sender` Critical ✓ Fixed

#### Resolution

Addressed by removing the `buyPolicyFor` function. And the `addLiquidityFor`
function can only be called by the `LiquidityMining` contract.

#### Description

When calling the `buyPolicyFor`/`addLiquidityFor` functions, are called with
the parameter `_policyHolderAddr`/`_liquidityHolderAddr` who is going to be
the beneficiary in buying policy/adding liquidity:

**code/contracts/PolicyBook.sol:L183-L189**

    
    
    function buyPolicyFor(
      address _policyHolderAddr,
      uint256 _epochsNumber,
      uint256 _coverTokens   
    ) external override {
      _buyPolicyFor(_policyHolderAddr, _epochsNumber, _coverTokens);
    }
    

**code/contracts/PolicyBook.sol:L264-L266**

    
    
    function addLiquidityFor(address _liquidityHolderAddr, uint256 _liquidityAmount) external override {
      _addLiquidityFor(_liquidityHolderAddr, _liquidityAmount, false);
    }
    

During the execution, the funds for the policy/liquidity are transferred from
the `_policyHolderAddr`/`_liquidityHolderAddr`, while it's usually expected
that they should be transferred from `msg.sender`. Because of that, anyone can
call a function on behalf of a user that gave the allowance to the
`PolicyBook`.

For example, a user(victim) wants to add some DAI to the liquidity pool and
gives allowance to the `PolicyBook`. After that, the user should call
`addLiquidity`, but the attacker can front-run this transaction and buy a
policy on behalf of the victim instead.

Also, there is a curious edge case that makes this issue **`Critical`** :
`_policyHolderAddr`/`_liquidityHolderAddr` parameters can be equal to the
address of the `PolicyBook` contract. That may lead to multiple different
dangerous attack vectors.

#### Recommendation

Make sure that nobody can transfer funds on behalf of the users if it's not
intended.

### 5.7 LiquidityMining can't accept single ERC1155 tokens Major ✓ Fixed

#### Resolution

Fixed by properly implementing the `ERC1155TokenReceiver ` interface.

#### Description

The contract `LiquidityMining` is also defined as an `ERC1155Receiver`

**code/contracts/LiquidityMining.sol:L19**

    
    
    contract LiquidityMining is ILiquidityMining, ERC1155Receiver, Ownable {
    

The [finalized EIP-1155
standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md)
states that a contract which acts as an [EIP-1155
Receiver](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md#erc-1155-token-receiver) must implement all the functions in the `ERC1155TokenReceiver`
interface to be able to accept transfers.

These are indeed implemented here:

**code/contracts/LiquidityMining.sol:L502**

    
    
    function onERC1155Received(
    

**code/contracts/LiquidityMining.sol:L517**

    
    
    function onERC1155BatchReceived(
    

The standard states that they will be called and they MUST return a specific
`byte4` value, otherwise the transfer will fail.

However one of the methods returns an incorrect value. This seems to an error
generated by a copy/paste action.

**code/contracts/LiquidityMining.sol:L502-L515**

    
    
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes memory data
    )
        external
        pure
        override
        returns(bytes4)
    {
        return bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"));
    }
    

The value returned is equal to

`bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"));`

But it should be

`bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`.

On top of this, the contract MUST implement the ERC-165 standard to correctly
respond to `supportsInterface`.

#### Recommendation

Change the return value of `onERC1155Received` to be equal to `0xf23a6e61`
which represents
`bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`.

Also, make sure to implement `supportsInterface` to signify support of
`ERC1155TokenReceiver` to accept transfers.

Add tests to check the functionality is correct and make sure these kinds of
bugs do not exist in the future.

Make sure to read the
[EIP-1155](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md) and
[EIP-165](https://eips.ethereum.org/EIPS/eip-165) standards in detail and
implement them correctly.

### 5.8 DAI is assumed to have the same price as DAIx in the staking contract
Major ✓ Fixed

#### Resolution

Fixed by not transferring DAI anymore.

#### Description

When a liquidity provider stakes tokens to the `BMIDAIStaking` contract, the
equal amount of DAI and DAIx are transferred from the pool contract.

**code/contracts/BMIDAIStaking.sol:L113-L124**

    
    
    function _stakeDAIx(address _user, uint256 _amount, address _policyBookAddr) internal {
        require (_amount > 0, "BMIDAIStaking: Can't stake zero tokens");
    
        PolicyBook _policyBook = PolicyBook(_policyBookAddr);
        // transfer DAI from PolicyBook to yield generator
        daiToken.transferFrom(_policyBookAddr, address(defiYieldGenerator), _amount);            
    
        // transfer bmiDAIx from user to staking
        _policyBook.transferFrom(_user, address(this), _amount);       
    
        _mintNFT(_user, _amount, _policyBook);
    }
    

#### Recommendation

Only the corresponding amount of DAI should be transferred to the pool.

### 5.9 `_updateWithdrawalQueue` can run out of gas Major ✓ Fixed

#### Resolution

The `updateWithdrawalQueue`function is now limiting the number of processed
withdrawals.

#### Description

When there's not enough collateral to withdraw liquidity from a policy book,
the withdrawal request is added to a queue. The queue is supposed to be
processed and cleared once there are enough funds for that. The only way to do
so is the `_updateWithdrawalQueue` function that is caller when new liquidity
is added:

**code/contracts/PolicyBook.sol:L315-L338**

    
    
    function _updateWithdrawalQueue() internal {
      uint256 _availableLiquidity = totalLiquidity.sub(totalCoverTokens);
      uint256 _countToRemoveFromQueue;
    
      for (uint256 i = 0; i < withdrawalQueue.length; i++) {     
        uint256 _tokensToWithdraw = withdrawalsInfo[withdrawalQueue[i]].amount;
        uint256 _amountInDai = _tokensToWithdraw.mul(getDAIToDAIxRatio()).div(PERCENTAGE_100);
    
        if (balanceOf(withdrawalQueue[i]) < _tokensToWithdraw) {
          _countToRemoveFromQueue++;
          continue;
        }
    
        if (_availableLiquidity >= _amountInDai) {
          _withdrawLiquidity(withdrawalQueue[i], _tokensToWithdraw);
          _availableLiquidity = _availableLiquidity.sub(_amountInDai);
          _countToRemoveFromQueue++;
        } else {
          break;
        }
      }
    
      _removeFromQueue(_countToRemoveFromQueue);
    }
    

The problem is that this function can only process all queue until the pool
run out of available funds or the whole queue is going to be processed. If the
queue is big enough, this process can be stuck.

#### Recommendation

Pass the parameter to the `_updateWithdrawalQueue` that defines how many
requests to process in the queue per one call.

### 5.10 The `PolicyBook` should make DAI transfers inside the contract Medium
✓ Fixed

#### Resolution

The `PolicyBook` contract does not give the DAI allowance to anyone and token
transfers are now done from the `PolicyBook` contract.

#### Description

The `PolicyBook` contract gives full allowance over DAI tokens to the other
contracts:

**code/contracts/PolicyBook.sol:L120-L125**

    
    
    function approveAllDaiTokensForStakingAndVotingAndTransferOwnership() internal {
      daiToken.approve(address(bmiDaiStaking), MAX_INT);   
      daiToken.approve(address(claimVoting), MAX_INT);    
    
      transferOwnership(address(bmiDaiStaking));
    }
    

That behavior is dangerous because it's hard to keep track of and control the
contract's DAI balance. And it's also hard to track in the code where the
balance of the `PolicyBook` can be changed from.

#### Recommendation

It's better to perform all the transfers inside the `PolicyBook` contract. So
if the `bmiDaiStaking` and the `claimVoting` contracts need DAI tokens from
the `PolicyBook`, they should call some function of the `PolicyBook` to
perform transfers.

### 5.11 Premium is payed instantly to the liquidity providers Medium ✓ Fixed

#### Resolution

The premium is now distributed on a daily basis.

#### Description

When the policy is bought, the premium is transferred to the PolicyBook
instantly. Currently, these funds are not going to the liquidity providers as
a reward due to the issue 5.3. But when the issue is fixed, it seems like the
premium is paid and distributed as a reward instantly when the policy is
purchased.

The problem is that if someone buys the policy for a long period of time,
every liquidity provider instantly gets the premium from the full period. If
there's enough liquidity, any provider can withdraw the funds after that
without taking a risk for this period.

#### Recommendation

Distribute the premium over time. For example, increase the reward after each
epoch.

### 5.12 The `totalCoverTokens` is only updated when the policy is bought
Medium ✓ Fixed

#### Resolution

The `updateEpochsInfo` function is now public and can be called by anyone.

#### Description

The `totalCoverTokens` value represents the amount of collateral that needs to
be locked in the policy book. It should be changed either by buying a new
policy or when an old policy expires. The problem is that when the old policy
expires, this value is not updated; it is only updated when someone buys a
policy by calling the `_updateEpochsInfo ` function:

**code/contracts/PolicyBook.sol:L240-L251**

    
    
    function _updateEpochsInfo() internal {
      uint256 _totalEpochTime = block.timestamp.sub(epochStartTime);
      uint256 _countOfPassedEpoch = _totalEpochTime.div(epochDuration);
    
      uint256 _lastEpochUpdate = currentEpochNumber;
      currentEpochNumber = _countOfPassedEpoch.add(1);
    
      for (uint256 i = _lastEpochUpdate; i < currentEpochNumber; i++) {
        totalCoverTokens = totalCoverTokens.sub(epochAmounts[i]);
        delete epochAmounts[i];
      }
    }
    

Users waiting to withdraw liquidity should wait for someone to buy the policy
to update the `totalCoverTokens`.

#### Recommendation

Make sure it's possible to call the `_updateEpochsInfo` function without
buying a new policy.

### 5.13 Unbounded loops in LiquidityMining Medium ✓ Fixed

#### Resolution

Fixed by adding the limits.

#### Description

There are some methods that have unbounded loops and will fail when enough
items exist in the arrays.

**code/contracts/LiquidityMining.sol:L83**

    
    
    for (uint256 i = 0; i < _teamsNumber; i++) {
    

**code/contracts/LiquidityMining.sol:L97**

    
    
    for (uint256 i = 0; i < _membersNumber; i++) {
    

**code/contracts/LiquidityMining.sol:L110**

    
    
    for (uint256 i = 0; i < _usersNumber; i++) {
    

These methods will fail when lots of items will be added to them.

#### Recommendation

Consider adding limits (from, to) when requesting the items.

### 5.14 The `_removeFromQueue` is very gas greedy Medium ✓ Fixed

#### Resolution

The queue structure has changed significantly and became more optimized. On
the other hand, the new structure has some overhead and can be simplified to
optimize more gas.

#### Description

The `_removeFromQueue` function is supposed to remove `_countToRemove`
elements from the queue:

**code/contracts/PolicyBook.sol:L296-L313**

    
    
    function _removeFromQueue(uint256 _countToRemove) internal {
      for (uint256 i = 0; i < _countToRemove; i++) {
        delete withdrawalsInfo[withdrawalQueue[i]];
      }   
    
      if (_countToRemove == withdrawalQueue.length) {
        delete withdrawalQueue;
      } else {
        uint256 _remainingArrLength = withdrawalQueue.length.sub(_countToRemove);
        address[] memory _remainingArr = new address[](_remainingArrLength);
    
        for (uint256 i = 0; i < _remainingArrLength; i++) {
          _remainingArr[i] = withdrawalQueue[i.add(_countToRemove)];
        }
    
        withdrawalQueue = _remainingArr;
      }
    }
    

This function uses too much gas, which makes it easier to make attacks on the
system. Even if only one request is removed and executed, this function
rewrites all the requests to the storage.

#### Recommendation

The data structure should be changed so this function shouldn't rewrite the
requests that did not change. For example, it can be a mapping `(unit =>
address)` with 2 indexes `(start, end)` that are only increasing.

### 5.15 Withdrawal with zero amount is possible Medium ✓ Fixed

#### Resolution

The `_tokensToWithdraw ` can now only be >0\.

#### Description

When creating a withdrawal request, the amount of tokens to withdraw is passed
as a parameter:

**code/contracts/PolicyBook.sol:L358**

    
    
    function requestWithdrawal(uint256 _tokensToWithdraw) external override {
    

The problem is that this parameter can be zero, and the function will be
successfully executed. Moreover, this request can then be added to the queue,
and the actual withdrawal will also be executed with zero value. Addresses
that never added any liquidity could spam the system with these requests.

#### Recommendation

Do not allow withdrawals of zero tokens.

### 5.16 The withdrawal queue is only updated when the liquidity is added
Medium ✓ Fixed

#### Resolution

The queue is now updated via the `external` function `updateWithdrawalQueue`
but can only be called separately.

#### Description

Sometimes when the amount of liquidity is not much higher than the number of
tokens locked for the collateral, it's impossible to withdraw liquidity. For a
user that wants to withdraw liquidity, a withdrawal request is created. If the
request can't be executed, it's added to the withdrawal queue, and the user
needs to wait until there's enough collateral for withdrawal. There are
potentially 2 ways to achieve that: either someone adds more liquidity or some
existing policies expire.

Currently, the queue can only be cleared when the internal
`_updateWithdrawalQueue ` function is called. And it is only called in one
place while adding liquidity:

**code/contracts/PolicyBook.sol:L276-L290**

    
    
    function _addLiquidityFor(address _liquidityHolderAddr, uint256 _liquidityAmount, bool _isLM) internal {
      daiToken.transferFrom(_liquidityHolderAddr, address(this), _liquidityAmount);   
      
      uint256 _amountToMint = _liquidityAmount.mul(PERCENTAGE_100).div(getDAIToDAIxRatio());
      totalLiquidity = totalLiquidity.add(_liquidityAmount);
      _mintERC20(_liquidityHolderAddr, _amountToMint);
    
      if (_isLM) {
        liquidityFromLM[_liquidityHolderAddr] = liquidityFromLM[_liquidityHolderAddr].add(_liquidityAmount);
      }
    
      _updateWithdrawalQueue();
    
      emit AddLiquidity(_liquidityHolderAddr, _liquidityAmount, totalLiquidity);
    }
    

#### Recommendation

It would be better if the queue could be processed when some policies expire
without adding new liquidity. For example, there may be an external function
that allows users to process the queue.

### 5.17 Optimize gas usage when checking max length of arrays Minor ✓ Fixed

#### Description

There are a few cases where some arrays have to be limited to a number of
items.

And the max size is enforced by removing the last item if the array reached
max size + 1.

**code/contracts/LiquidityMining.sol:L386-L388**

    
    
    if (leaderboard.length == MAX_LEADERBOARD_SIZE.add(1)) {
        leaderboard.pop();
    }
    

**code/contracts/LiquidityMining.sol:L439-L441**

    
    
    if (topUsers.length == MAX_TOP_USERS_SIZE.add(1)) {
        topUsers.pop();
    }
    

**code/contracts/LiquidityMining.sol:L495-L497**

    
    
    if (_addresses.length == MAX_GROUP_LEADERS_SIZE.add(1)) {
        groupsLeaders[_referralLink].pop();
    }
    

A simpler and cheaper way to check if an item should be removed is to change
the condition to

    
    
    if (limitedSizedArray.length > MAX_DEFINED_SIZE_FOR_ARRAY) {
        limitedSizedArray.pop();
    }
    

This check does not need or do a SafeMath call (which is more expensive), and
because of the limited number of items, as well as a practical impossibility
to add enough items to overflow the limit, makes it a preferred way to check
the maximum limit.

#### Recommendation

Rewrite the checks and remove SafeMath operations, as well as the addition by
1 and change the check to a "greater than" verification.

### 5.18 Methods return values that are never used Minor ✓ Fixed

#### Description

When a user calls `investDAI` these 3 methods are called internally:

**code/contracts/LiquidityMining.sol:L196-L198**

    
    
    _updateTopUsers();
    _updateLeaderboard(_userTeamInfo.teamAddr);
    _updateGroupLeaders(_userTeamInfo.teamAddr);
    

Each method returns a boolean, but the value is never used. It is also unclear
what the value should represent.

#### Recommendation

Remove the returned variable or use it in method `investDAI`.

### 5.19 Save some gas when looping over state arrays Minor ✓ Fixed

#### Resolution

Fixed by caching array state length in a local variable.

#### Description

There are a few loops over state arrays in `LiquidutyMining`.

**code/contracts/LiquidityMining.sol:L209**

    
    
    for (uint256 i = 0; i < leaderboard.length; i++) {
    

**code/contracts/LiquidityMining.sol:L217**

    
    
    for (uint256 i = 0; i < topUsers.length; i++) {
    

Consider caching the length in a local variable to reduce gas costs.

#### Examples

Similar to

**code/contracts/LiquidityMining.sol:L107**

    
    
    uint256 _usersNumber = allUsers.length;
    

**code/contracts/LiquidityMining.sol:L110**

    
    
    for (uint256 i = 0; i < _usersNumber; i++) {
    

#### Recommendation

Reduce gas cost by caching array state length in a local variable.

### 5.20 Optimize gas costs when handling liquidity start and end times Minor

#### Description

When the `LiquidityMining` contract is deployed, `startLiquidityMiningTime`
saves the current block timestamp.

**code/contracts/LiquidityMining.sol:L46**

    
    
    startLiquidityMiningTime = block.timestamp;       
    

This value is never changed.

There also exists an end limit calculated by `getEndLMTime`.

**code/contracts/LiquidityMining.sol:L271-L273**

    
    
    function getEndLMTime() public view override returns (uint256) {
        return startLiquidityMiningTime.add(2 weeks);
    }
    

This value is also fixed, once the start was defined.

None of the values change after the contract was deployed. This is why you can
use the [immutable feature provided by
Solidity](https://docs.soliditylang.org/en/latest/contracts.html#constant-and-immutable-state-variables).

It will reduce costs significantly.

#### Examples

    
    
    contract A {
        uint public immutable start;
        uint public immutable end;
       
        constructor() {
            start = block.timestamp;
            end = block.timestamp + 2 weeks;
        }
    }
    

This contract defines 2 variables: `start` and `end` and their value is fixed
on deploy and cannot be changed.

It does not need to use `SafeMath` because there's no risk of overflowing.

Setting `public` on both variables creates getters, and calling `A.start()`
and `A.end()` returns the respective values.

Having set as immutable does not request EVM storage and makes them very cheap
to access.

#### Recommendation

Use Solidity's immutable feature to reduce gas costs and rename variables for
consistency.

Use the example for inspiration.

### 5.21 Computing the quote should be done for a positive amount of tokens
Minor ✓ Fixed

#### Description

When a policy is bought, a quote is requested from the `PolicyQuote` contract.

**code/contracts/PolicyBook.sol:L191-L195**

    
    
    function _buyPolicyFor(
      address _policyHolderAddr,
      uint256 _epochsNumber,
      uint256 _coverTokens
    ) internal {
    

**code/contracts/PolicyBook.sol:L213**

    
    
    uint256 _totalPrice = policyQuote.getQuote(_totalSeconds, _coverTokens, address(this));
    

The `getQuote` call is then forwarded to an internal function

**code/contracts/PolicyQuote.sol:L39-L43**

    
    
    function getQuote(uint256 _durationSeconds, uint256 _tokens, address _policyBookAddr)
      external view override returns (uint256 _daiTokens)
    {
      _daiTokens = _getQuote(_durationSeconds, _tokens, _policyBookAddr);
    }
    

**code/contracts/PolicyQuote.sol:L45-L47**

    
    
    function _getQuote(uint256 _durationSeconds, uint256 _tokens, address _policyBookAddr)
      internal view returns (uint256)
    {
    

There are some basic checks that make sure the total covered tokens with the
requested quote do not exceed the total liquidity. On top of that check, it
makes sure the total liquidity is positive.

**code/contracts/PolicyQuote.sol:L52-L53**

    
    
    require(_totalCoverTokens.add(_tokens) <= _totalLiquidity, "PolicyBook: Requiring more than there exists");
    require(_totalLiquidity > 0, "PolicyBook: The pool is empty");
    

But there is no check for the number of quoted tokens. It should also be
positive.

#### Recommendation

Add an additional check for the number of quoted tokens to be positive. The
check could fail or return 0, depending on your use case.

If you add a check for the number of quoted tokens to be positive, the check
for `_totalLiquidity` to be positive becomes obsolete and can be removed.

## 6 Re-audit issues

This section lists the issues found in the re-audit phase. The audit team,
reviewed the code fixes after the initial report was delivered.

### 6.1 Anyone can win all the funds from the `LiquidityMining` without
investing any DAI Critical

#### Description

When a user decides to `investDAI` in the `LiquidityMining` contract, the
policy book address is passed as a parameter:

**code_new/contracts/LiquidityMining.sol:L198**

    
    
    function investDAI(uint256 _tokensAmount, address _policyBookAddr) external override {
    

But this parameter is never checked and only used at the end of the function:

**code_new/contracts/LiquidityMining.sol:L223**

    
    
    IPolicyBook(_policyBookAddr).addLiquidityFromLM(msg.sender, _tokensAmount);
    

The attacker can pass the address of a simple multisig that will process this
transaction successfully without doing anything. And pretend to invest a lot
of DAI without actually doing that to win all the rewards in the
`LiquidityMining` contract.

#### Recommendation

Check that the pool address is valid.

### 6.2 Liquidity withdrawal can be blocked Major

#### Description

The main problem in that issue is that the liquidity provider may face many
potential issues when withdrawing the liquidity. Under some circumstances, a
normal user will never be able to withdraw the liquidity. This issue consists
of multiple factors that are interconnected and share the same solution.

  * **There are no partial withdrawals when in the queue**. When the withdrawal request is added to the queue, it can only be processed fully:

**code_new/contracts/PolicyBook.sol:L444-L451**

    
        address _currentAddr = withdrawalQueue.head();
    uint256 _tokensToWithdraw = withdrawalsInfo[_currentAddr].withdrawalAmount;
    
    uint256 _amountInDAI = convertDAIXtoDAI(_tokensToWithdraw);
    
    if (_availableLiquidity < _amountInDAI) {
      break;
    }
    

But when the request is not in the queue, it can still be processed partially,
and the rest of the locked tokens will wait in the queue.

**code_new/contracts/PolicyBook.sol:L581-L590**

    
        } else if (_availableLiquidity < convertDAIXtoDAI(_tokensToWithdraw)) {
      uint256 _availableDAIxTokens = convertDAIToDAIx(_availableLiquidity);
      uint256 _currentWithdrawalAmount = _tokensToWithdraw.sub(_availableDAIxTokens);
      withdrawalsInfo[_msgSender()].withdrawalAmount = _currentWithdrawalAmount;
    
      aggregatedQueueAmount = aggregatedQueueAmount.add(_currentWithdrawalAmount);
      withdrawalQueue.push(_msgSender());
    
      _withdrawLiquidity(_msgSender(), _availableDAIxTokens);
    } else {
    

If there's a huge request in the queue, it can become a bottleneck that does
not allow others to withdraw even if there is enough free liquidity.

  * **Withdrawals can be blocked forever by the bots**.

The withdrawal can only be requested if there are enough free funds in the
contract. But once these funds appear, the bots can instantly buy a policy,
and for the normal users, it will be impossible to request the withdrawal.
Even when a withdrawal is requested and then in the queue, the same problem
appears at that stage.

  * **The policy can be bought even if there are pending withdrawals in the queue**.

#### Recommendation

One of the solutions would be to implement the following changes, but the team
should thoroughly consider them:

  * Allow people to request the withdrawal even if there is not enough liquidity at the moment.
  * Do not allow people to buy policies if there are pending withdrawals in the queue and cannot be executed.
  * (Optional) Even when the queue is empty, do not allow people to buy policies if there is not enough liquidity for the pending requests (that are not yet in the queue).
  * (Optional if the points above are implemented) Allow partial executions of the withdrawals in the queue.

### 6.3 The `totalCoverTokens` can be decreased before the claim is committed
Major

#### Description

The `totalCoverTokens` is decreased right after the policy duration ends
(`_endEpochNumber`). When that happens, the liquidity providers can withdraw
their funds:

**code_new/contracts/PolicyBook.sol:L262-L265**

    
    
    policyHolders[_msgSender()] = PolicyHolder(_coverTokens, currentEpochNumber,
      _endEpochNumber, _totalPrice, _reinsurancePrice);
    
    epochAmounts[_endEpochNumber] = epochAmounts[_endEpochNumber].add(_coverTokens);
    

**code_new/contracts/PolicyBook.sol:L343-L351**

    
    
    uint256 _countOfPassedEpoch = block.timestamp.sub(epochStartTime).div(EPOCH_DURATION);
    
    newTotalCoverTokens = totalCoverTokens;
    lastEpochUpdate = currentEpochNumber;
    newEpochNumber = _countOfPassedEpoch.add(1);
    
    for (uint256 i = lastEpochUpdate; i < newEpochNumber; i++) {
      newTotalCoverTokens = newTotalCoverTokens.sub(epochAmounts[i]);     
    }
    

On the other hand, the claim can be created while the policy is still
"active". And is considered active until one week after the policy expired:

**code_new/contracts/PolicyRegistry.sol:L50-L58**

    
    
    function isPolicyActive(address _userAddr, address _policyBookAddr) public override view returns (bool) {
      PolicyInfo storage _currentInfo = policyInfos[_userAddr][_policyBookAddr];
    
      if (_currentInfo.endTime == 0) {
        return false;
      }
    
      return _currentInfo.endTime.add(STILL_CLAIMABLE_FOR) > block.timestamp;
    }
    

By the time when the claim is created + voted, the liquidity provider can
potentially withdraw all of their funds already, and the claim will fail.

#### Recommendation

Make sure that there will always be enough funds for the claim.

### 6.4 The `totalCoverTokens` is not decreased after the claim happened Major

#### Description

When the claim happens and the policy is removed, the `totalCoverTokens`
should be decreased instantly, that's why the scheduled reduction value is
removed:

**code_new/contracts/PolicyBook.sol:L228-L236**

    
    
    PolicyHolder storage holder = policyHolders[claimer];
    
    epochAmounts[holder.endEpochNumber] = epochAmounts[holder.endEpochNumber].sub(holder.coverTokens);
    totalLiquidity = totalLiquidity.sub(claimAmount);
    
    daiToken.transfer(claimer, claimAmount);
                   
    delete policyHolders[claimer];
    policyRegistry.removePolicy(claimer);
    

But the `totalCoverTokens` is not changed and will have the coverage from the
removed policy forever.

#### Recommendation

Decrease the `totalCoverTokens` inside the `commitClaim` function.

### 6.5 The Queue `remove` function does not remove the item completely Major

#### Description

When removing an item in a queue, the following function is used:

**code_new/contracts/helpers/Queue.sol:L78-L98**

    
    
    function remove(UniqueAddressQueue storage baseQueue, address addrToRemove) internal returns (bool) {
        if (!contains(baseQueue, addrToRemove)) {
            return false;
        }
    
        if (baseQueue.HEAD == addrToRemove) {
            return removeFirst(baseQueue);
        }
    
        if (baseQueue.TAIL == addrToRemove) {
            return removeLast(baseQueue);
        }
    
        address prevAddr = baseQueue.queue[addrToRemove].prev;
        address nextAddr = baseQueue.queue[addrToRemove].next;
        baseQueue.queue[prevAddr].next = nextAddr;
        baseQueue.queue[nextAddr].prev = prevAddr;
        baseQueue.queueLength--;
    
        return true;
    }
    

As the result, the `baseQueue.queue[addrToRemove]` is not deleted, so the
`contains` function will still return `True` after the removal.

#### Recommendation

Remove the element from the queue completely.

### 6.6 Optimization issue Medium

#### Description

The codebase is huge, and there are still a lot of places where these
complications and gas efficiency can be improved.

#### Examples

  * `_updateTopUsers`, `_updateGroupLeaders`, `_updateLeaderboard` are having a similar mechanism of adding users to a sorted set which makes more storage operations than needed:

**code_new/contracts/LiquidityMining.sol:L473-L486**

    
        uint256 _tmpIndex = _currentIndex - 1;
    uint256 _currentUserAmount = usersTeamInfo[msg.sender].stakedAmount;
    
    while (_currentUserAmount > usersTeamInfo[topUsers[_tmpIndex]].stakedAmount) {
        address _tmpAddr = topUsers[_tmpIndex];
        topUsers[_tmpIndex] = msg.sender;
        topUsers[_tmpIndex + 1] = _tmpAddr;
    
        if (_tmpIndex == 0) {
            break;
        }
    
        _tmpIndex--;
    }
    

Instead of doing 2 operations per item that is lower than the new_item, same
can be done with one operation: while `topUsers[_tmpIndex]` is lower than the
new item`topUsers[_tmpIndex + 1] = topUsers[_tmpIndex]`.

  * creating the Queue library looks like overkill for the intended task. It is only used for the withdrawal queue in the PolicyBook. The structure stores and processes extra data, which is unnecessary and more expensive. A larger codebase also has a higher chance of introducing a bug (and it happened here <https://github.com/ConsenSys/bridge-mutual-audit-2021-03/issues/25)>. It's usually better to have a simpler and optimized version like described here issue 5.14.

  * There are a few `for` loops that are using `uint8` iterators. It's unnecessary and can be even more expensive because, under the hood, it's additionally converted to `uint256` all the time. In general, shrinking data to `uint8` makes sense to optimize storage slots, but that's not the case here.

  * The value that is calculated in a loop can be obtained simpler by just having a 1-line formula:

**code_new/contracts/LiquidityMining.sol:L351-L367**

    
        function _getAvailableMonthForReward(address _userAddr) internal view returns (uint256) {
        uint256 _oneMonth = 30 days;
        uint256 _startRewardTime = getEndLMTime();
    
        uint256 _countOfRewardedMonth = countsOfRewardedMonth[usersTeamInfo[_userAddr].teamAddr][_userAddr];
        uint256 _numberOfMonthForReward;
    
        for (uint256 i = _countOfRewardedMonth; i < MAX_MONTH_TO_GET_REWARD; i++) {
            if (block.timestamp > _startRewardTime.add(_oneMonth.mul(i))) {
            _numberOfMonthForReward++;
            } else {
                break;
            }
        }
    
        return _numberOfMonthForReward;
    }
    

  * The mapping is using 2 keys, but the first key is strictly defined by the second one, so there's no need for it:

**code_new/contracts/LiquidityMining.sol:L60-L61**

    
        // Referral link => Address => count of rewarded month
    mapping (address => mapping (address => uint256)) public countsOfRewardedMonth;
    

  * There are a lot of structures in the code with duplicated and unnecessary data, for example:

**code_new/contracts/LiquidityMining.sol:L42-L48**

    
        struct UserTeamInfo {
        string teamName;
        address teamAddr;
    
        uint256 stakedAmount;
        bool isNFTDistributed;
    }
    

Here the structure is created for every team member, duplicating the team name
for each member.

#### Recommendation

Optimize and simplify the code.

### 6.7 Proper usage of the `transfer` and the `transferFrom` functions Medium

#### Description

Many ERC-20 transfers in the code are just called without checking the return
values:

**code_new/contracts/PolicyBook.sol:L269-L270**

    
    
    daiToken.transferFrom(_msgSender(), reinsurancePoolAddress, _reinsurancePrice);
    daiToken.transferFrom(_msgSender(), address(this), _price);   
    

**code_new/contracts/PolicyBook.sol:L556-L559**

    
    
    function _unlockTokens(uint256 _amountToUnlock) internal {
      this.transfer(_msgSender(), _amountToUnlock);
      delete withdrawalsInfo[_msgSender()];
    }
    

**code_new/contracts/LiquidityMining.sol:L278**

    
    
    bmiToken.transfer(msg.sender, _userReward);
    

Even though the tokens in these calls are not arbitrary (DAI, BMI, DAIx,
stkBMIToken) and probably always return `True` or call `revert`, it's still
better to comply with the ERC-20 standard and make sure that the transfer went
well.

#### Recommendation

The best solution would be better to always use the safe version of the
transfers from `openzeppelin/contracts/token/ERC20/SafeERC20.sol`.

### 6.8 The price and the duration of a policy may be unpredictable Medium

#### Description

When the user is buying a policy, the price is calculated based on the current
liquidity/coverage ratio, and the duration is calculated based on the current
timestamp. A malicious actor can front-run the buyer (e.g., buy short-term
insurance with a huge coverage) and increase the policy's price. Or the
transaction can be executed much later for some reason, and the number of the
`totalSeconds` may be larger, the coverage period can be between
`_epochsNumber - 1` and `_epochsNumber`.

#### Recommendation

Given the unpredictability of the price, it's better to pass the hard limit
for the insurance price as a parameter. Also, as an opinion, you can add a
deadline for the transaction as a parameter.

### 6.9 The `aggregatedQueueAmount ` value is used inconsistently Medium

#### Description

The `aggregatedQueueAmount` variable represents the cumulative DAIx amount in
the queue that is waiting for the withdrawal. When requesting the withdrawal,
this value is used as the amount of DAI that needs to be withdrawn, which may
be significantly different:

**code_new/contracts/PolicyBook.sol:L539-L540**

    
    
    require(totalLiquidity >= totalCoverTokens.add(aggregatedQueueAmount).add(_daiTokensToWithdraw),
      "PB: Not enough available liquidity");
    

That may lead to allowing the withdrawal request even if it shouldn't be
allowed and the opposite.

#### Recommendation

Convert `aggregatedQueueAmount` to DAI in the `_requestWithdrawal`.

### 6.10 The claim can only be done once Medium

#### Description

When the claim happens, the policy is removed afterward:

**code_new/contracts/PolicyBook.sol:L222-L237**

    
    
    function commitClaim(address claimer, uint256 claimAmount)
      external 
      override
      onlyClaimVoting
      updateBMIDAIXStakingReward
    {
      PolicyHolder storage holder = policyHolders[claimer];
    
      epochAmounts[holder.endEpochNumber] = epochAmounts[holder.endEpochNumber].sub(holder.coverTokens);
      totalLiquidity = totalLiquidity.sub(claimAmount);
     
      daiToken.transfer(claimer, claimAmount);
                     
      delete policyHolders[claimer];
      policyRegistry.removePolicy(claimer);
    }
    

If the claim amount is much lower than the coverage, the users are
incentivized not to submit it and wait until the end of the coverage period to
accumulate all the claims into one.

#### Recommendation

Allow the policyholders to submit multiple claims until the `coverTokens` is
not reached.

### 6.11 Users are incentivised to invest right before the `getEndLMTime` to
join the winning team Medium

#### Description

When investing, there are 3 types of rewards in the `LiquidityMining`
contracts: for the top users, for the top teams, for the group leaders in the
top teams. EVERY member from the top teams is getting a reward proportional to
the provided stake. Only the final snapshot of the stakes is used to determine
the leaderboard which is right after the `getEndLMTime`.

Everyone can join any team, and everyone's goal is to go to the winning teams.
The best way to do so is to wait right until the end of the period and join
the most beneficial team.

#### Recommendation

It's better to avoid extra incentives that create race conditions.

## Appendix 1 - Disclosure

ConsenSys Diligence ("CD") typically receives compensation from one or more
clients (the "Clients") for performing the analysis contained in these reports
(the "Reports"). The Reports may be distributed through other means, including
via ConsenSys publications and other distributions.

The Reports are not an endorsement or indictment of any particular project or
team, and the Reports do not guarantee the security of any particular project.
This Report does not consider, and should not be interpreted as considering or
having any bearing on, the potential economics of a token, token sale or any
other product, service or other asset. Cryptographic tokens are emergent
technologies and carry with them high levels of technical risk and
uncertainty. No Report provides any warranty or representation to any Third-Party in any respect, including regarding the bugfree nature of code, the
business model or proprietors of any such business model, and the legal
compliance of any such business. No third party should rely on the Reports in
any way, including for the purpose of making any decisions to buy or sell any
token, product, service or other asset. Specifically, for the avoidance of
doubt, this Report does not constitute investment advice, is not intended to
be relied upon as investment advice, is not an endorsement of this project or
team, and it is not a guarantee as to the absolute security of the project. CD
owes no duty to any Third-Party by virtue of publishing these Reports.

PURPOSE OF REPORTS The Reports and the analysis described therein are created
solely for Clients and published with their consent. The scope of our review
is limited to a review of Solidity code and only the Solidity code we note as
being within the scope of our review within this report. The Solidity language
itself remains under development and is subject to unknown risks and flaws.
The review does not extend to the compiler layer, or any other areas beyond
Solidity that could present security risks. Cryptographic tokens are emergent
technologies and carry with them high levels of technical risk and
uncertainty.

CD makes the Reports available to parties other than the Clients (i.e., "third
parties") - on its website. CD hopes that by making these analyses publicly
available, it can help the blockchain ecosystem develop technical best
practices in this rapidly evolving area of innovation.

LINKS TO OTHER WEB SITES FROM THIS WEB SITE You may, through hypertext or
other computer links, gain access to web sites operated by persons other than
ConsenSys and CD. Such hyperlinks are provided for your reference and
convenience only, and are the exclusive responsibility of such web sites'
owners. You agree that ConsenSys and CD are not responsible for the content or
operation of such Web sites, and that ConsenSys and CD shall have no liability
to you or any other person or entity for the use of third party Web sites.
Except as described below, a hyperlink from this web Site to another web site
does not imply or mean that ConsenSys and CD endorses the content on that Web
site or the operator or operations of that site. You are solely responsible
for determining the extent to which you may use any content at any other web
sites to which you link from the Reports. ConsenSys and CD assumes no
responsibility for the use of third party software on the Web Site and shall
have no liability whatsoever to any person or entity for the accuracy or
completeness of any outcome generated by such software.

TIMELINESS OF CONTENT The content contained in the Reports is current as of
the date appearing on the Report and is subject to change without notice.
Unless indicated otherwise, by ConsenSys and CD.

![](/diligence/images/home/icon-ili-xs.png)

Request a Security Review Today

Get in touch with our team to request a quote for a smart contract audit.

[Contact Us](/diligence/contact/)

![](/diligence/images/home/icon-ili-outline-white.svg)

[Audits](/diligence/audits/ "Audits") [Fuzzing](/diligence/fuzzing/ "Fuzzing")
[Scribble](/diligence/scribble/ "Scribble") [Blog](/diligence/blog/ "Blog")
[Tools](/diligence/tools/ "Tools") [Research](/diligence/research/ "Research")
[About](/diligence/about/ "About") [Contact](/diligence/contact/ "Contact")
[Careers](https://consensys.io/open-roles/?discipline=32525 "Careers")
[Privacy Policy](/diligence/privacy-policy/ "Privacy Policy")

Subscribe to Our Newsletter

Stay up-to-date on our latest offerings, tools, and the world of blockchain
security.

[ ![](/diligence/images/home/powered-by.svg) ](https://consensys.io)

