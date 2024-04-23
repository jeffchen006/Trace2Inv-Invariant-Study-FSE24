## Preamble

    Title: ERC-20 Wrapper Gluwacoin Standard
    Author: Tae Lim Oh <taelim.oh@gluwa.com>
    Type: Standard
    Created: 2020-09-14


## Simple Summary

A standard interface for [Gluwacoin](https://gluwacoin.com) backed by 
another [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token.


## Abstract

The following standard allows the implementation of a standard API for Gluwacoin backed by a specific ERC-20 token.
A user can mint a Gluwacoin by depositing the ERC-20 token to the smart contract. You can burn the Gluwacoin and 
withdraw the original ERC-20. This standard is Gluwacoin compatible, and, thus, ERC-20 compliant.


## Motivation

A standard interface to add any ERC-20 token to the Gluwa ecosystem to be re-used by other applications: 
from ETHless transfer and non-custodial exchange.

Gluwacoin Standard has extended on ERC-20 to enhance usability.
ETHless transfer freed users from buying Ether before they can start using a dapp.
Non-custodial exchange functions allow users to make exchange without giving up custody of their fund 
and access a pool of orders instead of taking a whole order at a time.
Again, without buying Ether.
Also, [Gluwa](https://gluwa.com) provides a suite of web services to ease on-boarding,
including [REST API](https://docs.gluwa.com/api/api), 
mobile apps ([iOS](https://apps.apple.com/app/gluwa/id1021292326), [Android](https://play.google.com/store/apps/details?id=com.gluwa.android)), 
and [dashboard](https://dashboard.gluwa.com/).

However, vanilla ERC-20 cannot take advantage of what Gluwa has to offer;
While Gluwacoin is ERC-20 compliant, the reverse is not.

ERC-20 Wrapper Gluwacoin extends the original Gluwacoin standard 
and defines how to wrap any ERC-20 into a Gluwacoin.
Think of ERC-20 as a steam engine train 
and Gluwacoin as an electric train with an overhead line.
ERC-20 Wrapper Gluwacoin is an electric locomotive that turns your train into an electric train.


## Specification

## Token
### Methods

**NOTE**: Callers MUST handle `false` from `returns (bool success)`.
Callers MUST NOT assume that `false` is never returned!

#### ERC-20 Wrapper Gluwacoin Methods



##### token

Returns the address of the base token contract.

``` js
function token() public view returns (address)
```



##### mint

Creates `amount` tokens to the caller.
Transfers `amount` of base tokens from the caller to the contract using `transferFrom`.

**Note** 
- the caller must have base tokens of at least `amount`.
- the contract must have allowance for caller's base tokens of at least `amount`.

``` js
function mint(uint256 amount)
```



##### ETHless mint

`mint` but with `minter`, `fee`, `nonce`, and `sig` as extra parameters.
`fee` is a mint fee amount in Gluwacoin, which the minter will pay for the mint.
`sig` is a signature created by signing the mint information with the minter’s private key.
Anyone can initiate the mint for the minter by calling the Etherless Mint function 
with the mint information and the signature. 
The caller will have to pay the gas for calling the function.

Transfers `amount` + `fee` of base tokens from the minter to the contract using `transferFrom`.
Creates `amount` + `fee` of tokens to the minter and transfers `fee` tokens to the caller.

**Note** 
- the minter must have base tokens of at least `amount` + `fee`.
- the contract must have allowance for minter's base tokens of at least `amount` + `fee`.

``` js
function mint(address minter, uint256 amount, uint256 fee, uint256 nonce, bytes memory sig)
```



##### burn

Destroys `amount` of tokens from the caller.
Transfers `amount` of base tokens from the contract to the caller.

**Note** 
- the caller must have tokens of at least `amount`.

``` js
function burn(uint256 amount)
```



##### ETHless burn

`burn` but with `burner`, `fee`, `nonce`, and `sig` as extra parameters.
`fee` is a burn fee amount in Gluwacoin, which the burner will pay for the burn.
`sig` is a signature created by signing the burn information with the burner’s private key.
Anyone can initiate the burn for the burner by calling the Etherless Burn function 
with the burn information and the signature. 
The caller will have to pay the gas for calling the function.

Destroys `amount` + `fee` tokens from the burner.
Transfers `amount` of base tokens from the contract to the burner and `fee` of base token to the caller.

**Note** 
- the burner must have tokens of at least `amount` + `fee`.

``` js
function burn(address burner, uint256 amount, uint256 fee, uint256 nonce, bytes memory sig)
```


Refer to [Gluwacoin](./Gluwacoin.md) for general Gluwacoin methods and events.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).