[ ![Consensys Diligence](/diligence/images/logo/logo.svg) ](/diligence "Home")

[Audits](/diligence/audits/ "Audits") [Fuzzing](/diligence/fuzzing/ "Fuzzing")
[Scribble](/diligence/scribble/ "Scribble") [Blog](/diligence/blog/ "Blog")
[Tools](/diligence/tools/ "Tools") [Research](/diligence/research/ "Research")
[About](/diligence/about/ "About") [Contact](/diligence/contact/ "Contact")

A CONSENSYS DILIGENCE Audit Report

# Orchid Multisend

  * 1 Summary
    * 1.1 Orchid's OXT Token Information
  * 2 Audit Scope
  * 3 Key Observations/Recommendations
  * 4 Security Specification
    * 4.1 Important Security Properties
  * 5 Issues
  * 6 Tool-Based Analysis
    * 6.1 MythX
  * Appendix 1 - Disclosure

Date | December 2020  
---|---  
Auditors | Gonçalo Sá  
Download | [PDF __](/diligence/audits/2020/12/orchid-multisend/Deferred-Comp-Release-Schedule.pdf)  
  
## 1 Summary

ConsenSys Diligence conducted a security audit on the second version of
Orchid's batch send smart contract used for multiple disbursements of ERC20
tokens in a single transaction.

### 1.1 Orchid's OXT Token Information

ConsenSys Diligence prepared this Report on behalf of Orchid Labs ("Orchid")
to summarize the results of our security audit, which was limited to a
technical audit of Orchid's smart contracts (see the Audit Scope for more
details). We understand Orchid intends to use these smart contracts to release
OXT tokens to its buyers. Note that the actual release/distribution of OXT
tokens will be managed by Orchid in accordance with its policies and
procedures.

Please see the links below, which were supplied by Orchid, for more
information. ConsenSys Diligence is not responsible for the information
included in these links or any transactions contemplated by Orchid.

Orchid OXT token contract:

<https://github.com/OrchidTechnologies/orchid/blob/3187d0716f16eeb59552d2c103c02efd5a530a76/tok-ethereum/token.sol>

Current OXT release schedule:

[PDF Link](https://github.com/OrchidTechnologies/orchid/blob/master/tst-ethereum/distributor/release_schedule.pdf)

Original schedule:

[PDF Link](Deferred-Comp-Release-Schedule.pdf)

Orchid Whitepaper, including description of OXT:

<https://www.orchid.com/assets/whitepaper/whitepaper.pdf>

Orchid's OXT web portal:

<https://www.orchid.com/oxt>

## 2 Audit Scope

This audit covered the following files:

File Name | SHA-1 Hash  
---|---  
sender.sol | 674d1645b6fb76bfecbb0fa19661dc1ad85038b5  
  
## 3 Key Observations/Recommendations

  * The codebase is small enough that the lack of comments or documentation is not detrimental to the audit process.
  * The development team is advised to create at least a minimal test suite covering the happy paths of the batch sends with end-to-end testing. Still, _100% code coverage is desirable_.

## 4 Security Specification

This section describes, **from a security perspective** , the expected
behavior of the system under audit. It is not a substitute for documentation.
The purpose of this section is to identify specific security properties that
were validated by the audit team.

### 4.1 Important Security Properties

The following is a non-exhaustive list of security properties that were
verified in this audit:

  * Funds are incapable of being locked in the contract as a result of a send.

## 5 Issues

No issues were found as part of the audit to the smart contract under
scrutiny. The smart contract should operate according to the specification
provided.

## 6 Tool-Based Analysis

Several tools were used to perform automated analysis of the reviewed
contracts. These issues were reviewed by the audit team, and relevant issues
are listed in the Issue Details section.

### 6.1 MythX

![MythX](mythril.png)

MythX is a security analysis API for Ethereum smart contracts. It performs
multiple types of analysis, including fuzzing and symbolic execution, to
detect many common vulnerability types. The tool was used for automated
vulnerability discovery for all audited contracts and libraries. More details
on MythX can be found at [mythx.io](https://mythx.io).

The output of a MythX _Full Mode_ analysis was reviewed by the audit team and
no relevant issues were raised as part of the process.

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

