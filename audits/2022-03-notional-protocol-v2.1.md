[ ![Consensys Diligence](/diligence/images/logo/logo.svg) ](/diligence "Home")

[Audits](/diligence/audits/ "Audits") [Fuzzing](/diligence/fuzzing/ "Fuzzing")
[Scribble](/diligence/scribble/ "Scribble") [Blog](/diligence/blog/ "Blog")
[Tools](/diligence/tools/ "Tools") [Research](/diligence/research/ "Research")
[About](/diligence/about/ "About") [Contact](/diligence/contact/ "Contact")

# Notional Protocol V2.1

  * 1 Executive Summary
  * 2 Findings
    * 2.1 Accounts that claim incentives immediately before the migration will be stuck Medium
    * 2.2 `type(T).max` is inclusive Minor
    * 2.3 Minor mathematical mistake in comment Minor
  * Appendix 1 - Disclosure

Date | March 2022  
---|---  
Auditors | Heiko Fisch, Elias Leers, Jasper Hepp  
  
## 1 Executive Summary

This report documents our first engagement with
[**Notional**](https://notional.finance/), in which we started to familiarize
ourselves with their protocol for fixed-rate, fixed-term crypto asset lending
and borrowing. From January 31 to March 4, 2022, we invested 7 person-weeks.

The Notional team is interested in a long-term security partnership with
ConsenSys Diligence. As their codebase is very large, complex, and involved,
we agreed on the following procedure and goals for this engagement:

  1. Gain initial knowledge of and familiarity with the system within the Diligence team.

  2. To direct these efforts, focus on a set of three changes to the existing system that Notional will provide together with an accompanying document. These changes will be reviewed by Diligence, but given the size and complexity of the system on the one hand and the limited time available on the other, this review is strictly on a best-effort basis.

The changes can be briefly summarized as follows:  
A. Allow nTokens to be redeemed in the presence of idiosyncratic fCash
residuals.  
B. Improve the existing incentivization calculation, and migrate existing
liquidity providers to the new algorithm.  
C. Add support for Aave aTokens.  
We investigated the code at commit hash
[`582dc370e30ccae5e29110d2fd6f6c52c56d5b0e`](https://github.com/jeffywu/contracts-v2-private/tree/582dc370e30ccae5e29110d2fd6f6c52c56d5b0e)
(private repository).

As mentioned above, while the focus was on developing an understanding of
(some parts of) the system, any potential issues we discovered were, of
course, discussed with the client. As we found the code exceptionally well-written and -documented, only one issue and two minor points were discovered.
These are briefly described in the next section.

## 2 Findings

Each issue has an assigned severity:

  * Minor issues are subjective in nature. They are typically suggestions around best practices or readability. Code maintainers should use their own judgment as to whether to address such issues.
  * Medium issues are objective in nature but are not security vulnerabilities. These should be addressed unless there is a clear reason not to.
  * Major issues are security vulnerabilities that may not be directly exploitable or may require certain conditions in order to be exploited. All major issues should be addressed.
  * Critical issues are directly exploitable security vulnerabilities that need to be fixed.

### 2.1 Accounts that claim incentives immediately before the migration will
be stuck Medium

#### Description

For accounts that existed before the migration to the new incentive
calculation, the following happens when they claim incentives for the first
time after the migration: First, the incentives that are still owed from
before the migration are computed according to the old formula; the incentives
_since_ the migration are calculated according to the new logic, and the two
values are added together. The first part – calculating the pre-migration
incentives according to the old formula – happens in function
`MigrateIncentives.migrateAccountFromPreviousCalculation`; the following lines
are of particular interest in the current context:

**code-582dc37/contracts/external/MigrateIncentives.sol:L39-L50**

    
    
    uint256 timeSinceMigration = finalMigrationTime - lastClaimTime;
    
    // (timeSinceMigration * INTERNAL_TOKEN_PRECISION * finalEmissionRatePerYear) / YEAR
    uint256 incentiveRate =
        timeSinceMigration
            .mul(uint256(Constants.INTERNAL_TOKEN_PRECISION))
            // Migration emission rate is stored as is, denominated in whole tokens
            .mul(finalEmissionRatePerYear).mul(uint256(Constants.INTERNAL_TOKEN_PRECISION))
            .div(Constants.YEAR);
    
    // Returns the average supply using the integral of the total supply.
    uint256 avgTotalSupply = finalTotalIntegralSupply.sub(lastClaimIntegralSupply).div(timeSinceMigration);
    

The division in the last line will throw if `finalMigrationTime` and
`lastClaimTime` are equal. This will happen if an account claims incentives
immediately before the migration happens – where "immediately" means in the
same block. In such a case, the account will be stuck as any attempt to claim
incentives will revert.

#### Recommendation

The function should return `0` if `finalMigrationTime` and `lastClaimTime` are
equal. Moreover, the variable name `timeSinceMigration` is misleading, as the
variable doesn't store the time since the migration but the time between the
last incentive claim and the migration.

### 2.2 `type(T).max` is inclusive Minor

#### Description

Throughout the codebase, there are checks whether a number can be represented
by a certain type.

#### Examples

**code-582dc37/contracts/internal/nToken/nTokenSupply.sol:L71**

    
    
    require(accumulatedNOTEPerNToken < type(uint128).max); // dev: accumulated NOTE overflow
    

**code-582dc37/contracts/internal/nToken/nTokenSupply.sol:L134**

    
    
    require(blockTime < type(uint32).max); // dev: block time overflow
    

**code-582dc37/contracts/external/patchfix/MigrateIncentivesFix.sol:L86-L87**

    
    
    require(totalSupply <= type(uint96).max);
    require(blockTime <= type(uint32).max);
    

Sometimes these checks use `<=`, sometimes they use `<`.

#### Recommendation

`type(T).max` is inclusive, i.e., it is the greatest number that _can_ be
represented with type `T`. Strictly speaking, it can and should therefore be
used consistently with `<=` instead of `<`.

### 2.3 Minor mathematical mistake in comment Minor

#### Description

In `nTokenSupply.sol`, there is a comment explaining why 18 decimal places for
the accumulation precision is a good choice. There is a minor mistake in the
calculation. It does not invalidate the reasoning, but as it is confusing for
a reader, we recommend correcting it.

**code-582dc37/contracts/internal/nToken/nTokenSupply.sol:L85-L88**

    
    
    // If we use 18 decimal places as the accumulation precision then we will overflow uint128 when
    // a single nToken has accumulated 3.4 x 10^20 NOTE tokens. This isn't possible since the max
    // NOTE that can accumulate is 10^17 (100 million NOTE in 1e8 precision) so we should be safe
    // using 18 decimal places and uint128 storage slot
    

100 million NOTE in 1e8 precision is 10^16.

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
is limited to a review of code and only the code we note as being within the
scope of our review within this report. Any Solidity code itself presents
unique and unquantifiable risks as the Solidity language itself remains under
development and is subject to unknown risks and flaws. The review does not
extend to the compiler layer, or any other areas beyond specified code that
could present security risks. Cryptographic tokens are emergent technologies
and carry with them high levels of technical risk and uncertainty. In some
instances, we may perform penetration testing or infrastructure assessments
depending on the scope of the particular engagement.

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

