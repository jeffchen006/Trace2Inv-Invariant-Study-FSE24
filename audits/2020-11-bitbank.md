[ ![Consensys Diligence](/diligence/images/logo/logo.svg) ](/diligence "Home")

[Audits](/diligence/audits/ "Audits") [Fuzzing](/diligence/fuzzing/ "Fuzzing")
[Scribble](/diligence/scribble/ "Scribble") [Blog](/diligence/blog/ "Blog")
[Tools](/diligence/tools/ "Tools") [Research](/diligence/research/ "Research")
[About](/diligence/about/ "About") [Contact](/diligence/contact/ "Contact")

# bitbank

  * 1 Executive Summary
  * 2 Scope
    * 2.1 Objectives
  * 3 Recommendations
    * 3.1 Move `deployNewInstance()` into a separate factory contract
    * 3.2 Replace `exchangeDepositorAddress()`
    * 3.3 More optimizer rounds will save more gas
    * 3.4 Separate `isExchangeDepositor()` into two functions
  * 4 Security Specification
    * 4.1 Actors
    * 4.2 Trust Model
    * 4.3 Security Properties
  * 5 Findings
    * 5.1 ERC20 tokens with no return value will fail to transfer Major ✓ Fixed
  * Appendix 1 - Fuzz Testing of Depositor Proxy
  * Appendix 2 - Disclosure

Date | November 2020  
---|---  
Lead Auditor | John Mardlin  
Co-auditors | Nicholas Ward  
  
## 1 Executive Summary

This report presents the results of our engagement with bitbank, Inc. to
review a set of smart contracts for managing deposits of Ethereum-based assets
to the bitbank exchange.

The review was conducted over 1 week, from November 9th to 13th, 2020 by John
Mardlin and Nicholas Ward. A total of 10 person-days were spent.

During the course of the engagement we reviewed the code manually, as well as
using fuzzing tests to assess particular properties (see Appendix 1).

We found that the system was well specified and thoroughly tested, and the
clients goals were clearly laid out for us.

## 2 Scope

Our review initially focused on the commit hash
`d0e884fae6a8342f5464086db0d8205479b0ef78`. We also reviewed several pull
requests, which resulted in a final commit hash of
`3daeedb029ef4642e82550a24726875675284bb3`.

### 2.1 Objectives

The client provided the following list of objectives for the contract system.
Confirming that these objectives are met by the current system was included as
a key part of the review.

  1. Optimize deploy gas usage for the depositor proxy.
  2. Optimize run-time gas usage for the ETH deposit to deposit address path.
  3. Allow killing the `ExchangeDeposit` contract, which should cause all future ETH deposits to fail.
  4. Support ERC20 deposits by allowing them to be moved to the `coldAddress`. The gas cost for this should be somewhere in the 50k gas range.
  5. If the contract is killed, retrieved ERC20 deposits should be sent to the `adminAddress`.

## 3 Recommendations

### 3.1 Move `deployNewInstance()` into a separate factory contract

#### Description

The `deployNewInstance()` function is used to deploy depositor proxy contracts
from the `ExchangeDeposit`. In the interest of simplifying the core logic and
minimizing attack surface, a separate factory contract should be used to
deploy these proxies.

### 3.2 Replace `exchangeDepositorAddress()`

#### Description

The function `exchangeDepositorAddress()` is used for two purposes:

  1. To find the address of the main `ExchangeDeposit` implementation where mutable values such as the `coldAddress` are stored.

  2. To determine the context of the current call.

The first introduces unnecessary complexity and could be replaced with a
`address immutable exchangeDeposit` value set in the constructor. This would
make the address of the main `ExchangeDeposit` implementation part of the
deployed bytecode.

The second is used to enforce important properties such as the restriction of
storage writes to the context of the `ExchangeDeposit` contract. However, it
can lead to invalid assumptions about the caller and call context and could be
replaced by a much simpler check.

Instead of comparing the bytecode contained at `address(this)` to that of the
depositor proxy, `ExchangeDeposit` should compare `address(this)` to the
immutable `exchangeDeposit` address mentioned above. This allows the contract
to determine whether or not its code is running in the context of its own
address.

#### Recommendation

By addressing the two uses of `exchangeDepositorAddress()` with simpler
methods, the amount of low-level assembly can be reduced significantly,
invalid assumptions about the source and context of the call can be avoided,
and the depositor proxy implementation can be decoupled from the
`ExchangeDeposit` implementation.

### 3.3 More optimizer rounds will save more gas

Increasing the number of optimizer runs in truffle-config.js can save a small
amount of gas on common operations.

### 3.4 Separate `isExchangeDepositor()` into two functions

The name `isExchangeDepositor()` suggests that it should return a boolean, but
it also returns the `exchangeDepositorAddress`. Separating this into two
functions should make the logic more readable.

This function can also be simplified by comparing `address(this)` to an
`immutable address` type determined during deployment.

## 4 Security Specification

This section describes the expected behavior of the system under audit from a
security perspective. It is not a substitute for documentation. The purpose of
this section is to identify specific security properties that were validated
by the audit team.

### 4.1 Actors

The relevant actors are listed below with their respective abilities:

  * **Admin** : A single admin address is set in the constructor. The Admin may take the following actions if and only if the `ExchangeDeposit` is "alive" (`coldAddress != 0x0`): 
    * Change the `coldAddress`
    * Change the `implementation` address
    * Change the `minimumInput`
    * Stop standard deposits and future admin actions by calling `kill()`
  * **Depositor** : For each depositor, a proxy contract is deployed with the address of the main `ExchangeDeposit` implementation hardcoded as the recipient of all calls from the proxy. A depositor proxy may take the following actions: 
    * `CALL` to `ExchangeDeposit` to make a deposit in ETH
    * `DELEGATECALL` to any function not modified by `onlyExchangeDepositor`

### 4.2 Trust Model

In any system, it's important to identify what trust is expected/required
between various actors. For this audit, we established the following trust
model:

  * _Depositors_ trust the _Admin_ with the ability to redirect or block deposits, adjust the minimum deposit amount, and run arbitrary code in the context of any depositor proxy contract.

We note that although this is a high level of trust, it is in line with the
trust inherent in using a centralized exchange.

### 4.3 Security Properties

The following is a non-exhaustive list of security properties that were
verified in this audit:

  * The depositor proxy: 
    * Makes no calls or delegatecalls to any address except the target address contained in its bytecode.
    * Calls to `ExchangeDeposit` if and only if no calldata is provided.
    * Delegatecalls to `ExchangeDeposit` if and only if at least one byte of calldata is provided.
  * No storage writes are made in `ExchangeDepositor` except within functions callable only by the `adminAddress`.
  * The "killed" state (`coldAddress == 0x0`) can not be reverted.
  * None of the _existing_ functions in `ExchangeDepositor` can be used to modify the storage of a depositor proxy _whose target is the main`ExchangeDepositor` instance_. 
    * Note that this property only holds for the `ExchangeDepositor` which we reviewed, and even then it would be possible for the admin to set an `implementation` address which can write to the proxy's storage.

## 5 Findings

Each issue has an assigned severity:

  * Minor issues are subjective in nature. They are typically suggestions around best practices or readability. Code maintainers should use their own judgment as to whether to address such issues.
  * Medium issues are objective in nature but are not security vulnerabilities. These should be addressed unless there is a clear reason not to.
  * Major issues are security vulnerabilities that may not be directly exploitable or may require certain conditions in order to be exploited. All major issues should be addressed.
  * Critical issues are directly exploitable security vulnerabilities that need to be fixed.

### 5.1 ERC20 tokens with no return value will fail to transfer Major ✓ Fixed

#### Resolution

This issue was addressed using OpenZeppelin's SafeERC20.

#### Description

Although the ERC20 standard suggests that a transfer should return `true` on
success, many tokens are non-compliant in this regard.

In that case, the `.transfer()` call here will revert even if the transfer is
successful, because solidity will check that the RETURNDATASIZE matches the
ERC20 interface.

**code/contracts/ExchangeDeposit.sol:L229-L231**

    
    
    if (!instance.transfer(getSendAddress(), forwarderBalance)) {
        revert('Could not gather ERC20');
    }
    

#### Recommendation

Consider using [OpenZeppelin's
SafeERC20](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/SafeERC20.sol).

## Appendix 1 - Fuzz Testing of Depositor Proxy

In addition to manual inspection of the code, the correctness of the bytecode
implementation of the depositor proxy contract was assessed using Harvey, our
in-house greybox fuzzer for smart contracts (see
<https://arxiv.org/pdf/1905.06944.pdf> for more details). Using a custom
testing harness, the proxy was fuzzed for approximately 15 hours, resulting in
over 2 million unique testing inputs.

For each input, important security properties of the proxy were checked. No
violations of these properties were detected during the fuzzing campaign.

While this method of testing allowed for the behavior of the proxy contract to
be evaluated with a large number of inputs, it is important to understand the
limitations of this approach. The following should be carefully considered in
assessing the results of this analysis:

  * The fact that every possible path could not be explored, particularly as it relates to the external call made by the proxy.
  * The limited number of properties that could be checked given time constraints.
  * The possibility of an error in the fuzzing harness, the assertions of important properties, or the fuzzer itself.

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

