// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "../ERC20WrapperGluwacoin.sol";

/**
 * @dev Example usage of {ERC20WrapperGluwacoin}.
 */
contract ExampleCoin is ERC20WrapperGluwacoin  {
    uint8 private _decimals;

    // note that `decimals` must match that of `token` or less
    function initialize(string memory name, string memory symbol, uint8 decimals_, IERC20Upgradeable token) public {
        __ExampleCoin_init(name, symbol, token);
        _decimals = decimals_;
    }

    function decimals() public view override virtual returns (uint8) {
        return _decimals;
    }

    function __ExampleCoin_init(string memory name, string memory symbol, IERC20Upgradeable token)
    internal initializer {
        __Context_init_unchained();
        __ERC165_init_unchained();
        __AccessControl_init_unchained();
        __AccessControlEnumerable_init_unchained();
        __ERC20_init_unchained(name, symbol);
        __ERC20ETHless_init_unchained();
        __ERC20Reservable_init_unchained();
        __ERC20Wrapper_init_unchained(token);     
        __ERC20WrapperGluwacoin_init_unchained(_decimals, _msgSender());
    }
}