// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "../ERC20WrapperGluwacoin.sol";


contract ERC20WrapperGluwacoinMock is Initializable, ERC20WrapperGluwacoin {

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals_,
        IERC20Upgradeable token
    )  {
        ERC20WrapperGluwacoin.initialize(name, symbol, decimals_, _msgSender(), token);
        __ERC20Wrapper_init_unchained(token);
    }


    function __ERC20Wrapper_init_unchained(
        IERC20Upgradeable token
    ) internal override {
        _setupToken(token);
        _setupRole(WRAPPER_ROLE, _msgSender());
    }   

    uint256[50] private __gap;
}