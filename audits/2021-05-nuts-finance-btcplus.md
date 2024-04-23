[ ![Consensys Diligence](/diligence/images/logo/logo.svg) ](/diligence "Home")

[Audits](/diligence/audits/ "Audits") [Fuzzing](/diligence/fuzzing/ "Fuzzing")
[Scribble](/diligence/scribble/ "Scribble") [Blog](/diligence/blog/ "Blog")
[Tools](/diligence/tools/ "Tools") [Research](/diligence/research/ "Research")
[About](/diligence/about/ "About") [Contact](/diligence/contact/ "Contact")

# Nuts Finance BTCPlus

  * 1 Executive Summary
  * 2 Scope
  * 3 Security Specification
    * 3.1 Trust Model
  * 4 Findings
    * 4.1 Insufficient tests Medium
    * 4.2 Simplify the `harvest` method in each SinglePlus Minor ✓ Fixed
    * 4.3 Reduce complexity in modifiers related to governance and strategist Minor ✓ Fixed
    * 4.4 safeMath is integrated in Solidity 0.8.0^ Minor ✓ Fixed
    * 4.5 Lack of up to date documentation
  * Appendix 1 - Files in Scope
  * Appendix 2 - Disclosure

Date | May 2021  
---|---  
Lead Auditor | Shayan Eskandari  
Co-auditors | Daniel Luca  
  
## 1 Executive Summary

This report presents the results of our engagement with **NUTS Finance** to
review **BTCPlus and Plus assets framework**.

The review was conducted over one week, from **May 17, 2021** to **May 21,
2021** by **Shayan Eskandari** and **Daniel Luca**. A total of 10 person-days
were spent.

**Update Aug 2021** : The report was updated with the comments from the
developer team. Note that the code changes were not reviewed as part of this
audit report.

## 2 Scope

Our review focused on the commit hash
`6b405dd01507e7c6c6b4a106b7a308591eec2f01`. Due to the time constraints and
the short engagement, the codebase was prioritized as following:

  1. Main Files (`Plus.sol`, `SinglePlus.sol`, and `CompositePlus.sol`)
  2. Governance `/governance`
  3. DeFi Integrations `/single`
  4. Helper Contracts and Miscellaneous `/misc`

This is a best effort review in the time frame of the engagement. Because of
the short amount of time and great number of code that was added to the scope
of the review, we recommend a new review to be done to the code, but only
after a code freeze and new scoping.

## 3 Security Specification

This section describes, **from a security perspective** , the expected
behavior of the system under audit. It is not a substitute for documentation.
The purpose of this section is to identify specific security properties that
were validated by the audit team.

We identified a significant amount of risk because of the great number of
tokens (other systems with their own complexity) and DeFi protocols that are
integrated in the system. This isn't only limited to tokens on the Ethereum
network, but also on the Binance Smart Chain, which recently started to have
similar kind of attack pattern that swept Ethereum recently. Integrating those
tokens (along with the tokens on the Ethereum network) adds significant risk
if done all at once.

Also, the impressive amount of code added to the project since the last code
reviews, mostly to integrate other tokens and DeFi protocols, adds risk at a
staggering pace. As mentioned in the Findings section, complete test coverage
for these integrations is crucial to the security of the system.

A careful process that selects tokens to be added to the system, reviews their
capabilities and their risks and finds ways to include them as "plus" tokens
is recommended. At the moment there is a lot of code that tries to include the
tokens in the system but a clear process is not described. Each token comes
with its own capabilities and features that might affect the system in
surprising ways.

### 3.1 Trust Model

In any system, it's important to identify what trust is expected/required
between various actors. For this audit, we established the following trust
model:

  * Given that the plus assets (and specially the composite assets) are pegged with different DeFi assets (e.g. interest-bearing staked tokens), they are exposed to the risks of the underlying DeFi protocol. As an example, a composite token is a basket of other composite tokens and plus assets. If the project regarding one of the assets in this basket gets hacked, the token owner has to manually separate the hacked token from the rest of the basket. This requires deep knowledge of the plus asset system to ensure no further losses happen due to human error.

  * In addition to the above risk, there is an inherent risk in integration the DeFi protocols which have mintable tokens. Due to the way NUTS finance calculates rewards that is based on the totalSupply of the underlying tokens, this can be leveraged into getting more rewards from the system than intended. We were not able to compile an exploitable path for this issue in the time frame of the audit, however it's an issue that should be verified by the developer team.

  * Actors in the system, such as the governance and strategists are trusted and they can halt the system by setting up the variables in a way that normal functionalities fail to execute (e.g. `rebase()` which is called in most actions).

## 4 Findings

Each issue has an assigned severity:

  * Minor issues are subjective in nature. They are typically suggestions around best practices or readability. Code maintainers should use their own judgment as to whether to address such issues.
  * Medium issues are objective in nature but are not security vulnerabilities. These should be addressed unless there is a clear reason not to.
  * Major issues are security vulnerabilities that may not be directly exploitable or may require certain conditions in order to be exploited. All major issues should be addressed.
  * Critical issues are directly exploitable security vulnerabilities that need to be fixed.

### 4.1 Insufficient tests Medium

#### Resolution

Comment from NUTS Finance team:

> We have added more mainnet fork test coverage for single plus assets. We
> will continue to add more test cases on edge cases. For the test coverage
> command, it's strange that if we run all test cases with 'truffle test', the
> LiquidityGauge test case fails. However, it passes if we run it by
> ourselves. We have done some debugging but cannot figure it out yet. We
> believe that our test cases are all valid.

#### Description

It is crucial to write tests with possibly 100% coverage for smart contract
systems. Given that BTCPlus has inner complexity and also integrates many DeFi
projects, using unit testing and fuzzing in all code paths is essential to a
secure system.

Currently there are only 63 unit tests (with 1 failing) for the main
components (Plus/Composite token, Governance, Liquidity Gauge, etc) which are
only testing the predetermined code execution paths. There are also DeFi
protocol specific tests that are not well organized to be able to find the
coverage on the system.

#### Recommendation

Write proper tests for all possible code flows and specially edge cases (Price
volatility, token transfer failure, 0 amounts, etc). It is useful to have one
command to run all tests and have a code coverage report at the end. Also
using libraries like eth-gas-reporter it's possible to know the gas usage of
different functionalities in order to optimize and prevent lock ups in the
future.

### 4.2 Simplify the `harvest` method in each SinglePlus Minor ✓ Fixed

#### Resolution

Comment from NUTS Finance team:

> We have replaced all safeApprove() usage with approve() and used
> block.timestamp as the expiration date.

#### Description

The `BadgerSBTCCrvPlus` single plus contract implements a custom `harvest`
method.

**code/BTC-Plus/contracts/single/eth/BadgerSBTCCrv%2B.sol:L52-L56**

    
    
    /**
     * @dev Harvest additional yield from the investment.
     * Only governance or strategist can call this function.
     */
    function harvest(address[] calldata _tokens, uint256[] calldata _cumulativeAmounts, uint256 _index, uint256 _cycle,
    

This method can only be called by the strategist because of the
`onlyStrategist` modifier.

This method has a few steps which take one asset and transform it into another
asset a few times.

It first claims the Badger tokens:

**code/BTC-Plus/contracts/single/eth/BadgerSBTCCrv%2B.sol:L58-L59**

    
    
    // 1. Harvest from Badger Tree
    IBadgerTree(BADGER_TREE).claim(_tokens, _cumulativeAmounts, _index, _cycle, _merkleProof, _amountsToClaim);
    

Then it transforms the Badger tokens into WBTC using Uniswap.

**code/BTC-Plus/contracts/single/eth/BadgerSBTCCrv%2B.sol:L61-L72**

    
    
    // 2. Sushi: Badger --> WBTC
    uint256 _badger = IERC20Upgradeable(BADGER).balanceOf(address(this));
    if (_badger > 0) {
        IERC20Upgradeable(BADGER).safeApprove(SUSHISWAP, 0);
        IERC20Upgradeable(BADGER).safeApprove(SUSHISWAP, _badger);
    
        address[] memory _path = new address[](2);
        _path[0] = BADGER;
        _path[1] = WBTC;
    
        IUniswapRouter(SUSHISWAP).swapExactTokensForTokens(_badger, uint256(0), _path, address(this), block.timestamp.add(1800));
    }
    

This step can be simplified in two ways.

First, the `safeApprove` method isn't useful because its usage is not
recommended anymore.

The OpenZeppelin version 4 implementation states the method is deprecated and
its usage is discouraged.

**contracts/token/ERC20/utils/SafeERC20Upgradeable.sol:L29-L30**

    
    
    * @dev Deprecated. This function has issues similar to the ones found in
    * {IERC20-approve}, and its usage is discouraged.
    
    
    
         * @dev Deprecated. This function has issues similar to the ones found in
         * {IERC20-approve}, and its usage is discouraged.
    

Thus, the `SafeERC20Upgradeable.sol` is not needed anymore and the import can
be removed.

Another step is swapping the tokens on Uniswap.

**code/BTC-Plus/contracts/single/eth/BadgerSBTCCrv%2B.sol:L71**

    
    
    IUniswapRouter(SUSHISWAP).swapExactTokensForTokens(_badger, uint256(0), _path, address(this), block.timestamp.add(1800));
    

In this case, the last argument `block.timestamp.add(1800)` is the deadline.
This is useful when the transaction is sent to the network and a deadline is
needed to expire the transaction. However, the execution is right now and
there's no need for a future expiration date.

Removing the safe math addition will have the same end effect, the tokens will
be swapped and the call is not at risk to expire.

#### Recommendation

Remove `safeApprove` and favor using `approve`. This also removes the need of
having `SafeERC20Upgradeable.sol` included.

Do not use safe math when sending the expiration date. Use `block.timestamp`
for the same effect and a reduced gas cost.

Apply the same principles for other Single Plus Tokens.

### 4.3 Reduce complexity in modifiers related to governance and strategist
Minor ✓ Fixed

#### Resolution

Comment from NUTS Finance team:

> The code size seems to be an issue for us. For example, the code size of the
> CompositePlus contract is more than 21k. If you could provide more
> suggestions on how to reduce the contract code size, we'd appreciate it.

#### Description

The modifier `onlyGovernance`:

**code/BTC-Plus/contracts/Plus.sol:L101-L104**

    
    
    modifier onlyGovernance() {
        _checkGovernance();
        _;
    }
    

Calls the internal function `_checkGovernance`:

**code/BTC-Plus/contracts/Plus.sol:L97-L99**

    
    
    function _checkGovernance() internal view {
        require(msg.sender == governance, "not governance");
    }
    

There is no other case where the internal method `_checkGovernance` is called
directly.

One can reduce complexity by removing the internal function and moving its
code directly in the modifier. This will increase code size but reduce gas
used and code complexity.

There are multiple similar instances:

**code/BTC-Plus/contracts/Plus.sol:L106-L113**

    
    
    function _checkStrategist() internal view {
        require(msg.sender == governance || strategists[msg.sender], "not strategist");
    }
    
    modifier onlyStrategist {
        _checkStrategist();
        _;
    }
    

**code/BTC-Plus/contracts/governance/GaugeController.sol:L298-L305**

    
    
    function _checkGovernance() internal view {
        require(msg.sender == governance, "not governance");
    }
    
    modifier onlyGovernance() {
        _checkGovernance();
        _;
    }
    

**code/BTC-Plus/contracts/governance/LiquidityGauge.sol:L450-L457**

    
    
    function _checkGovernance() internal view {
        require(msg.sender == IGaugeController(controller).governance(), "not governance");
    }
    
    modifier onlyGovernance() {
        _checkGovernance();
        _;
    }
    

#### Recommendation

Consider removing the internal function and including its body in the modifier
directly if the code size is not an issue.

### 4.4 safeMath is integrated in Solidity 0.8.0^ Minor ✓ Fixed

#### Resolution

Comment from NUTS Finance team:

> We've replaced all SafeMath usage with native math.

#### Description

The code base is using [Solidity 0.8.0 which has safeMath integrated in the
compiler](https://docs.soliditylang.org/en/latest/080-breaking-changes.html).
In addition, the codebase also utilizes OpenZepplin SafeMath library for
arithmetic operations.

#### Recommendation

Removing safeMath from the code base results in gas usage optimization and
also clearer code.

### 4.5 Lack of up to date documentation

#### Resolution

Comment from NUTS Finance team:

> We are continuing to enhance our docs about the latest design.

#### Description

This is a complicated system with many design decisions that are resulted from
integration with other DeFi projects. In the code base there are many hard
coded values or anti-patterns that are not documented and creates an unhealthy
and hard to maintain code base.

#### Examples

`TOKENLESS_PRODUCTION = 40;` is not documented in the `LiquidityGauge.sol`.

    
    
            uint256 _balance = balanceOf(_account);
            uint256 _supply = totalSupply();
            uint256 _limit = _balance.mul(TOKENLESS_PRODUCTION).div(100);
            if (_votingTotal > 0) {
                uint256 _boosting = _supply.mul(_votingBalance).mul(100 - TOKENLESS_PRODUCTION).div(_votingTotal).div(100);
                _limit = _limit.add(_boosting);
            }
    

Based on the conversation with the NUTS finance developer, this is due to fact
that this is a fork of the way Curve's DAO contract works.

#### Recommendation

We recommend to have dedicated up to date documents on the system overview of
the system and each module. In addition, in-line documentation in the code
base helps to understand the code base and increases the readability of the
code.

## Appendix 1 - Files in Scope

This audit covered the following files:

File | SHA-1 hash  
---|---  
CompositePlus.sol | 642d85a421c8051e5f40a80db3a0913bf1be4c27  
Migrations.sol | 69b8fd36420e55cf1274bec2e70399dddcd700fc  
Plus.sol | 7f6f821b45c688deb842a95377cf25a55599b7d3  
SinglePlus.sol | 0bd3edc7098f69b5e06fad9a3ef76fba0ad7be6d  
governance/GaugeController.sol | cfab3aecd5fd66d33bcd289811f69266e9a45414  
governance/LiquidityGauge.sol | de9db1cb6a2870fba191588be01a8f3dd89fd524  
governance/Timelock.sol | 245cebe1c96db56bb707c1ee03dd5921ebd15565  
  
Due to time constraints, the codebase was prioritized and the following files
were not reviewed properly:

File | SHA-1 hash  
---|---  
single/bsc/ACoconutBTC-BSC+.sol | 4818eb854d63f0cb7cb9c8906faa16933d29ce0f  
single/bsc/ACryptoSBTC+.sol | b0383960d2135a0c5ebac0b8bac526c26b496e3d  
single/bsc/ForTubeBTCB+.sol | f30d2896a1632e6ce11bf6b11be19dbc545d0795  
single/bsc/VenusBTC+.sol | f4e86cf4d7551e48338d3951cd0d7e25d734449c  
single/eth/AaveWBTC+.sol | d9ca49e6cf6903ec7a5bd609979db70b9814e358  
single/eth/ACoconutBTC+.sol | 62bc803a4b2a83b9dfafdde57ddad6d5f0a4d888  
single/eth/BadgerHrenCrv+.sol | ce9e31919be1d66db535bcd165fc54628f2ee896  
single/eth/BadgerRenCrv+.sol | f0324973533c13f9f2b18c367dddcef60eef239d  
single/eth/BadgerSBTCCrv+.sol | 4f3131e1980d1949d4f60de7b68c6f1d1a281b59  
single/eth/BadgerTBTCCrv+.sol | a75370204b9e773d131a02db65727e4d7cc14ca0  
single/eth/CompoundWBTC+.sol | 36e08e52de9c96f47fc1aab07e7b8d97567e57b3  
single/eth/RenCrv+.sol | 38434370055711fb33e549815dce946a099db7a8  
single/eth/SbtcCrv+.sol | 98f212479c6e4391f125b7fdd637183f99b15e66  
single/eth/VesperWBTC+.sol | d719d15ac0c913708bd547f96e6a93b180914edd  
single/eth/YearnHBTCCrv+.sol | c5918c92c3572cad29074e3537e2129816dbb7bb  
single/eth/YearnOBTCCrv+.sol | 603514a552e23c5ab88f991a1e1560682a886525  
misc/BTCBPlusRebalancer.sol | 79d2eba604049e085ac8acfc9f79ab80e2c34b1c  
misc/BTCZapBsc.sol | 9fa8e95f2ea529c46a279149010ed00c55f8d50b  
misc/Claimer.sol | 768cfa7208443049dcc078011d31e58e3f661c50  
misc/ConverterProxy.sol | 9637df16a32b24eca3f851360b946907d4de15a2  
misc/Converter.sol | c749cdc2ddf6f4c9f44db9f079139b4e95a11f6c  
misc/CurveBTCZap.sol | 7047d5d48e8442b99dcf12d796059976cc59b3e1  
misc/ERC20Proxy.sol | 4f8b31e313ef02dd9825c96b02777fff6b80660e  
misc/GaugeControllerProxy.sol | 92964fd35fe57ab5c46b06c5b87870f6b0a6bacb  
misc/LiquidityGaugeProxy.sol | 95ad86eca32492d206d911e65120f84a70e34b3d  
misc/RebalancerProxy.sol | 5ba44535fee92799b27226fea7d3d0aa33ff1f61  
misc/UpdatableLiquidityGauge.sol | fdf98dc662ba388043fe71d9da417217727df050  
misc/VotingEscrowProxy.sol | 17071a74bd1ebd4cea988f681a18867117fae0e3  
misc/ZapProxy.sol | b9a6d18f9f9d138806a74bf77999960c4ee73985  
  
## Appendix 2 - Disclosure

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

