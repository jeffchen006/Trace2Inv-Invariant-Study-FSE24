[ ![Consensys Diligence](/diligence/images/logo/logo.svg) ](/diligence "Home")

[Audits](/diligence/audits/ "Audits") [Fuzzing](/diligence/fuzzing/ "Fuzzing")
[Scribble](/diligence/scribble/ "Scribble") [Blog](/diligence/blog/ "Blog")
[Tools](/diligence/tools/ "Tools") [Research](/diligence/research/ "Research")
[About](/diligence/about/ "About") [Contact](/diligence/contact/ "Contact")

A CONSENSYS DILIGENCE Audit Report

# Aave Token

  * 1 Executive Summary
  * 2 Scope
    * 2.1 Objectives
  * 3 Document Change Log
  * 4 Recommendations
    * 4.1 Pin the Solidity version to the latest stable 0.6.x Closed
    * 4.2 Permit expiration can be set indefinite by using MAX_UINT Closed
  * 5 Issues
    * 5.1 Remove `nonce` argument from `permit` functions Closed
  * Appendix 1 - Files in Scope
  * Appendix 2 - Artifacts
    * A.2.1 MythX
    * A.2.2 Surya
    * A.2.3 Tests Suite
  * Appendix 3 - Disclosure

Date | July 2020  
---|---  
Lead Auditor | Daniel Luca  
Co-auditors | John Mardlin  
  
## 1 Executive Summary

This report presents the results of our engagement with Aave to review Aave
Token.

The review was conducted over 3 days, from July 6 to July 8 2020, by Daniel
Luca and John Mardlin as part of an ongoing engagement between Aave and
ConsenSys Diligence. A total of 4 person-days were spent.

During the first day, we became familiar with the source code, as well as ran
tests and coverage without issues. We also reviewed EIP-2612 and EIP-1967,
which describe a significant part of the token's functionality.

During the second day, we continued to manually review the code and tried to
find inconsistencies between the EIP-2612 standard and the implementation. We
found a discrepancy in implementation of EIP-2612, and checked with the
EIP-2612 creator to ensure the specs are correct.

During the third day, we finalized the manual review, scanned the contracts
with our common tools suite, and created a few constraints that were validated
with the Mythx platform and we then put the report together.

On July 22nd we reviewed changes made to the system and updated this report
accordingly.

## 2 Scope

Our review focused on the commit hash
`86d4ef225a8e702b5ec8315eda3add186ff31f33`. The list of files in scope can be
found in the Appendix.

Following our initial review, the system was modified and reviewed again at
commit hash `b5d7e540d0ce16c7f8ec6e7d0d59f09d5f32f056`.

### 2.1 Objectives

Together with the Aave team, we identified the following priorities for our
review:

  1. Ensure that the system is implemented consistently with the intended functionality, and without unintended edge cases.
  2. Identify known vulnerabilities particular to smart contract systems, as outlined in our [Smart Contract Best Practices](https://consensys.github.io/smart-contract-best-practices/), and the [Smart Contract Weakness Classification Registry](https://swcregistry.io/).
  3. Identify any replay attacks or inconsistencies in the EIP-2612 implementation.
  4. Check the upgradeability pattern.

## 3 Document Change Log

Version | Date | Description  
---|---|---  
1.0 | 2020-07-08 | Initial report  
1.1 | 2020-07-23 | Updated report with changes to code  
  
## 4 Recommendations

The issues are presented in approximate order of priority from highest to
lowest.

### 4.1 Pin the Solidity version to the latest stable 0.6.x Closed

#### Resolution

This has been addressed in the latest reviewed version of the code.

#### Description

Some of the contract files are not very specific about the Solidity version,
which can cause a bit of a problem in the compilation step for some tools.

`VersionedInitializable` is only compilable with `Solidity 0.6.x` versions.

**code/contracts/utils/VersionedInitializable.sol:L1**

    
    
    pragma solidity >=0.4.24 <0.7.0;
    

This is because of the `abstract` keyword which is not compatible with [lower
versions of Solidity](https://solidity.readthedocs.io/en/v0.6.10/060-breaking-changes.html?highlight=abstract#explicitness-requirements).

> The new keyword `abstract` can be used to mark contracts as **abstract**. It
> has to be used if a contract does not implement all its functions.
> **Abstract** contracts cannot be created using the `new` operator, and it is
> not possible to generate bytecode for them during compilation.

#### Recommendation

Specify a fixed Solidity version for at least this contract.

### 4.2 Permit expiration can be set indefinite by using MAX_UINT Closed

#### Resolution

Addressed per the recommendation.

#### Description

In the `permit()` function, a deadline of `0` is treated as non-expiring.

**code/contracts/token/AaveToken.sol:L114**

    
    
    require(expiration == 0 || block.timestamp <= expiration, "INVALID_EXPIRATION");
    

#### Recommendation

This extra check is unnecessary, the same can be achieved by setting the
deadline to MAX_UINT. This would also be more consistent with the [Uniswap-V2
implementation](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol#L82)
referenced in EIP-2612.

## 5 Issues

The issues are presented in approximate order of priority from highest to
lowest.

### 5.1 Remove `nonce` argument from `permit` functions Closed

#### Resolution

This has been addressed in latest reviewed version of the code.

#### Description

The
[EIP-2612](https://github.com/ethereum/EIPs/blob/8a34d644aacf0f9f8f00815307fd7dd5da07655f/EIPS/eip-2612.md)
specifies a way for a token owner to `approve` tokens for a spender without
any gas costs for themselves. This is also a good way to allow a 3rd party to
enable `approve` before a `transferFrom`, in the same transaction.

The standard specifies a new `permit` function that looks like this:

    
    
    function permit(
        address owner,
        address spender, 
        uint256 value,
        uint256 deadline, 
        uint8 v,
        bytes32 r, 
        bytes32 s
    )
    

The function in the standard does not have a `nonce` argument and as
[clarified by the standard
creator](https://github.com/ethereum/EIPs/pull/2612/files#r451351487), the
nonce does not need to be specified, as it can be used from the contract
storage.

However, the current `permit` implementation does contain that `nonce`

**code/contracts/token/AaveToken.sol:L92-L101**

    
    
    function permit(
        address owner,
        address spender,
        uint256 nonce,
        uint256 expiration,
        uint256 amount,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
    

In order to match the EIP-2612 standard, the `permit` function needs to be
changed in the following manner:

  * remove the `nonce` argument in the function definition
  * remove the `require` which checks if the provided **nonce** matches the **nonce** in the contract storage
  * to generate the digest, use the **nonce** currently available in the contract storage
  * if the signature is valid, increment the **nonce** in the contract storage.

#### Recommendation

Remove the `nonce` argument and make the necessary changes in the code and the
matching tests to match the EIP-2612 spec.

## Appendix 1 - Files in Scope

This audit covered the following files )

File | `git hash-object`  
---|---  
contracts/token/AaveToken.sol | 4c5dc5478a50da52d5b530f8876368560ba8511c  
contracts/token/LendToAaveMigrator.sol |
e316261f318659c6af36bed651ae52bb026f0c49  
contracts/utils/VersionedInitializable.sol |
e5a8b87b8f89b6c5f28b25be9f7499d14b5b6ff3  
  
## Appendix 2 - Artifacts

This section contains some of the artifacts generated during our review by
automated tools, the test suite, etc. **If any issues or recommendations were
identified by the output presented here, they have been addressed in the
appropriate section above.**

### A.2.1 MythX

MythX is a security analysis API for Ethereum smart contracts. It performs
multiple types of analysis, including fuzzing and symbolic execution, to
detect many common vulnerability types. The tool was used for automated
vulnerability discovery for all audited contracts and libraries. More details
on MythX can be found at [mythx.io](https://mythx.io).

Below is the raw output of the MythX vulnerability scan for each contract:

#### AaveToken

chevronRight icon chevronDown icon Click to expand Mythx AaveToken output
Click to collapse Mythx AaveToken output

Report for token/AaveToken.sol
╒════════╤══════════════════════════════════════════════════╤════════════╤════════════════════════════════════════════════════════════════════════════════════╕
│ Line │ SWC Title │ Severity │ Short Description │
╞════════╪══════════════════════════════════════════════════╪════════════╪════════════════════════════════════════════════════════════════════════════════════╡
│ 110 │ Timestamp Dependence │ Low │ A control flow decision is made based on
The block.timestamp environment variable. │
├────────┼──────────────────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ 140 │ Weak Sources of Randomness from Chain Attributes │ Low │ Potential use
of "block.number" as source of randonmness. │
├────────┼──────────────────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ 47 │ DoS With Block Gas Limit │ Low │ Implicit loop over unbounded data
structure. │
╘════════╧══════════════════════════════════════════════════╧════════════╧════════════════════════════════════════════════════════════════════════════════════╛

Report for open-zeppelin/ERC20.sol
╒════════╤══════════════════════════════╤════════════╤═════════════════════════════════════╕
│ Line │ SWC Title │ Severity │ Short Description │
╞════════╪══════════════════════════════╪════════════╪═════════════════════════════════════╡
│ 306 │ Presence of unused variables │ Low │ Unused function parameter "from".
│
├────────┼──────────────────────────────┼────────────┼─────────────────────────────────────┤
│ 306 │ Presence of unused variables │ Low │ Unused function parameter "to". │
├────────┼──────────────────────────────┼────────────┼─────────────────────────────────────┤
│ 306 │ Presence of unused variables │ Low │ Unused function parameter
"amount". │
╘════════╧══════════════════════════════╧════════════╧═════════════════════════════════════╛

Report for utils/VersionedInitializable.sol
╒════════╤══════════════════════════════╤════════════╤════════════════════════════════════╕
│ Line │ SWC Title │ Severity │ Short Description │
╞════════╪══════════════════════════════╪════════════╪════════════════════════════════════╡
│ 43 │ Presence of unused variables │ Low │ Unused state variable "______gap".
│
╘════════╧══════════════════════════════╧════════════╧════════════════════════════════════╛

Report for utils/VersionedInitializable.sol
╒════════╤══════════════════════════════╤════════════╤════════════════════════════════════╕
│ Line │ SWC Title │ Severity │ Short Description │
╞════════╪══════════════════════════════╪════════════╪════════════════════════════════════╡
│ 43 │ Presence of unused variables │ Low │ Unused state variable "______gap".
│
╘════════╧══════════════════════════════╧════════════╧════════════════════════════════════╛

#### VersionedInitializable

It is an abstract contract; the implementation is used by `AaveToken`.

### A.2.2 Surya

Surya is a utility tool for smart contract systems. It provides a number of
visual outputs and information about the structure of smart contracts. It also
supports querying the function call graph in multiple ways to aid in the
manual inspection and control flow analysis of contracts.

Below is a complete list of functions with their visibility and modifiers:

#### AaveToken

![AaveToken Inheritance Graph](./appendices/AaveToken-graph.png)

chevronRight icon chevronDown icon Click to expand Contracts & File
Description Table Click to collapse Contracts & File Description Table

##### Contracts Description Table

Contract | Type | Bases |  |  
---|---|---|---|---  
└ | **Function Name** | **Visibility** | **Mutability** | **Modifiers**  
|  |  |  |  
**AaveToken** | Implementation | ERC20, VersionedInitializable |  |  
└ | <Constructor> | Public ❗️ | 🛑 | ERC20  
└ | initialize | External ❗️ | 🛑 | initializer  
└ | permit | External ❗️ | 🛑 | NO❗️  
└ | getRevision | Internal 🔒 |  | override  
└ | _writeSnapshot | Internal 🔒 | 🛑 |  
└ | _beforeTokenTransfer | Internal 🔒 | 🛑 | override  
  
##### Legend

Symbol | Meaning  
---|---  
🛑 | Function can modify state  
💵 | Function is payable  
  
### A.2.3 Tests Suite

The tests are comprehensive and cover all of the execution branches.

Below is the output generated by running the test suite:

chevronRight icon chevronDown icon Click to expand Test Suite Output Click to
collapse Test Suite Output

    
    
    $ npm test
    
    > [[email protected]](/cdn-cgi/l/email-protection) test /home/daniel/Development/github.com/ConsenSys/aave-token-audit-2020-07/code
    > buidler test
    
    Compiling...
    
    
    contracts/interfaces/IERC20.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/interfaces/ITransferHook.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/open-zeppelin/Address.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/open-zeppelin/BaseAdminUpgradeabilityProxy.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/open-zeppelin/BaseUpgradeabilityProxy.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/open-zeppelin/Proxy.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/open-zeppelin/SafeMath.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/open-zeppelin/UpgradeabilityProxy.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/utils/DoubleTransferHelper.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/utils/MockTransferHook.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/utils/VersionedInitializable.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    
    
    contracts/open-zeppelin/BaseAdminUpgradeabilityProxy.sol:13:1: Warning: This contract has a payable fallback function, but no receive ether function. Consider adding a receive ether function.
    contract BaseAdminUpgradeabilityProxy is BaseUpgradeabilityProxy {
    ^ (Relevant source part starts here and spans across multiple lines).
    contracts/open-zeppelin/Proxy.sol:15:3: The payable fallback function is defined here.
      fallback () payable external {
      ^ (Relevant source part starts here and spans across multiple lines).
    
    
    
    contracts/open-zeppelin/InitializableUpgradeabilityProxy.sol:11:1: Warning: This contract has a payable fallback function, but no receive ether function. Consider adding a receive ether function.
    contract InitializableUpgradeabilityProxy is BaseUpgradeabilityProxy {
    ^ (Relevant source part starts here and spans across multiple lines).
    contracts/open-zeppelin/Proxy.sol:15:3: The payable fallback function is defined here.
      fallback () payable external {
      ^ (Relevant source part starts here and spans across multiple lines).
    
    
    
    contracts/open-zeppelin/InitializableAdminUpgradeabilityProxy.sol:12:1: Warning: This contract has a payable fallback function, but no receive ether function. Consider adding a receive ether function.
    contract InitializableAdminUpgradeabilityProxy is BaseAdminUpgradeabilityProxy, InitializableUpgradeabilityProxy {
    ^ (Relevant source part starts here and spans across multiple lines).
    contracts/open-zeppelin/Proxy.sol:15:3: The payable fallback function is defined here.
      fallback () payable external {
      ^ (Relevant source part starts here and spans across multiple lines).
    
    
    
    contracts/utils/MockTransferHook.sol:8:25: Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
        function onTransfer(address from, address to, uint256 amount) external override {
                            ^----------^
    
    
    
    contracts/utils/MockTransferHook.sol:8:39: Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
        function onTransfer(address from, address to, uint256 amount) external override {
                                          ^--------^
    
    
    
    contracts/utils/MockTransferHook.sol:8:51: Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
        function onTransfer(address from, address to, uint256 amount) external override {
                                                      ^------------^
    
    Compiled 19 contracts successfully
    
    
    -> Deploying test environment...
    WARNING: Multiple definitions for initialize
    WARNING: Multiple definitions for initialize
    setup: 359.179ms
    
    ***************
    Setup and snapshot finished
    ***************
    
      AAVE token
        ✓ Checks initial configuration
        ✓ Checks the domain separator
        ✓ Checks the revision
        ✓ Checks the allocation of the initial AAVE supply
    WARNING: Multiple definitions for initialize
        ✓ Starts the migration
        ✓ Checks the snapshots emitted after the initial allocation
        ✓ Record correctly snapshot on migration (66ms)
        ✓ Record correctly snapshot on transfer (48ms)
        ✓ Submits a permit with 0 expiration (38ms)
        ✓ Cancels the previous permit
        ✓ Tries to submit a permit with invalid nonce
        ✓ Tries to submit a permit with invalid expiration (previous to the current block)
        ✓ Tries to submit a permit with invalid signature
        ✓ Tries to submit a permit with invalid owner
        ✓ Correct snapshotting on double action in the same block (100ms)
        ✓ Emits correctly mock event of the _beforeTokenTransfer hook
    
      LEND migrator
        ✓ Check the constructor is executed properly
        ✓ Check migration isn't started
    WARNING: Multiple definitions for initialize
        ✓ Starts the migration
        ✓ Migrates 1000 LEND (70ms)
    
    
      20 passing (1s)
    

Even though it seems like there isn't 100% coverage, the unexplored branch in
the tests is actually not reachable in that specific case.

chevronRight icon chevronDown icon Click to expand Test coverage Click to
collapse Test coverage

    
    
    -----------------------------|----------|----------|----------|----------|----------------|
    File                         |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
    -----------------------------|----------|----------|----------|----------|----------------|
     interfaces/                 |      100 |      100 |      100 |      100 |                |
      IERC20.sol                 |      100 |      100 |      100 |      100 |                |
      IERC20Detailed.sol         |      100 |      100 |      100 |      100 |                |
      ITransferHook.sol          |      100 |      100 |      100 |      100 |                |
     token/                      |      100 |    88.89 |      100 |      100 |                |
      AaveToken.sol              |      100 |     87.5 |      100 |      100 |                |
      LendToAaveMigrator.sol     |      100 |      100 |      100 |      100 |                |
     utils/                      |      100 |       50 |      100 |      100 |                |
      DoubleTransferHelper.sol   |      100 |      100 |      100 |      100 |                |
      MintableErc20.sol          |      100 |      100 |      100 |      100 |                |
      MockTransferHook.sol       |      100 |      100 |      100 |      100 |                |
      VersionedInitializable.sol |      100 |       50 |      100 |      100 |                |
    -----------------------------|----------|----------|----------|----------|----------------|
    All files                    |      100 |       85 |      100 |      100 |                |
    -----------------------------|----------|----------|----------|----------|----------------|
    

## Appendix 3 - Disclosure

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

