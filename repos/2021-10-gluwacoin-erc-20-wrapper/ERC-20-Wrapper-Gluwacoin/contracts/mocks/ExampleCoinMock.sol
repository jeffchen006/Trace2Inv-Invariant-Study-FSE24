// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "./ExampleCoin.sol";

contract ExampleCoinMock is Initializable, ExampleCoin {

    constructor(
        string memory name,
        string memory symbol,
        IERC20Upgradeable token
    )  {
        __ExampleCoinMock_init(name, symbol, token);
    }

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function __ExampleCoinMock_init(
        string memory name,
        string memory symbol,
        IERC20Upgradeable token
    ) internal initializer {
        __Context_init_unchained();
        __ERC165_init_unchained();
        __AccessControl_init_unchained();
        __AccessControlEnumerable_init_unchained();        
        __ERC20_init_unchained(name, symbol);
        __ERC20ETHless_init_unchained();
        __ERC20Reservable_init_unchained();
        __ERC20Wrapper_init_unchained(token);
        __ERC20WrapperGluwacoin_init_unchained(6, _msgSender());
    }


}