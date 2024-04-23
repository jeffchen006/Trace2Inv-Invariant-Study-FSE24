// SPDX-License-Identifier: MIT
pragma solidity 0.6.11;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./interfaces/ITokeHypervisor.sol";
import "./interfaces/IHypervisorFactory.sol";
import "./BaseController.sol";

contract GammaController is BaseController {
    using SafeERC20 for IERC20;
    using Address for address;
    using SafeMath for uint256;
    uint256 public constant N_COINS = 2;
    IHypervisorFactory hypeFactory; 
    constructor(
        address manager,
        address addressRegistry,
        address _hypeFactory
    ) public BaseController(manager, addressRegistry) { 
      hypeFactory = IHypervisorFactory(_hypeFactory); 
    }

    /// @notice Deploy liquidity to a Gamma Hypervisor ( controller owns assets, manager receives LP tokens )
    /// @dev Calls to external contract
    /// @dev We trust sender to send a true gamma lpTokenAddress
    /// @param amount0 quantity of token0 of Hypervisor 
    /// @param amount1 quantity of token1 of Hypervisor 
    /// @param token0 address of pool token0 
    /// @param token1 address of pool token1
    /// @param fee fee of pool
    /// @param minMintAmount min amount of LP tokens to accept 
    function deploy(
      uint256 amount0,
      uint256 amount1,
      address token0,
      address token1,
      uint24 fee,
      uint256 minMintAmount,
      uint256[4] memory inMin
    ) external onlyManager {

        address lpTokenAddress = hypeFactory.getHypervisor(token0, token1, fee);
        uint256 balance0 = IERC20(token0).balanceOf(manager);
        uint256 balance1 = IERC20(token0).balanceOf(manager);

        require(balance0 >= amount0 && balance1 >= amount1, "INSUFFICIENT_BALANCE");

        // approve Hypervisor to spend amount0,1 amounts of Hypervisor.token0,1
        _approve(IERC20(token0), lpTokenAddress, amount0);
        _approve(IERC20(token1), lpTokenAddress, amount1);

        uint256 lpTokenBalanceBefore = IERC20(lpTokenAddress).balanceOf(manager);
        // deposit amount0, amount1 and mint LP tokens to the manager 
        uint256 lpTokenReceived = ITokeHypervisor(lpTokenAddress).deposit(amount0, amount1, manager, manager, inMin);

        uint256 lpTokenBalanceAfter = IERC20(lpTokenAddress).balanceOf(manager);
        require(lpTokenBalanceBefore + lpTokenReceived == lpTokenBalanceAfter, "LP_TOKEN_MISMATCH");
        require(lpTokenReceived >= minMintAmount, "INSUFFICIENT_MINT");
    }

    /// @notice Withdraw liquidity from TokeHypervisor ( TokeHypervisor's msg.sender owns LP tokens, manager receives assets ) 
    /// @dev Calls to external contract
    /// @param token0 address of pool token0 
    /// @param token1 address of pool token1
    /// @param fee fee of pool
    /// @param amount Quantity of LP tokens to burn in the withdrawal
    /// @param minAmounts min amount of token0, token1 to receive after LP burn
    function withdraw(
        address token0,
        address token1,
        uint24 fee,
        uint256 amount,
        uint256[4] memory minAmounts
    ) external onlyManager {
        
        address lpTokenAddress = hypeFactory.getHypervisor(token0, token1, fee);
        uint256 lpTokenBalanceBefore = IERC20(lpTokenAddress).balanceOf(manager);
        uint256[N_COINS] memory coinsBalancesBefore = _getCoinsBalances(lpTokenAddress);

        ITokeHypervisor(lpTokenAddress).withdraw(amount, manager, manager, minAmounts);

        uint256 lpTokenBalanceAfter = IERC20(lpTokenAddress).balanceOf(manager);
        uint256[N_COINS] memory coinsBalancesAfter = _getCoinsBalances(lpTokenAddress);

        _compareCoinsBalances(coinsBalancesBefore, coinsBalancesAfter, [minAmounts[0].add(minAmounts[2]), minAmounts[1].add(minAmounts[3])]);

        require(lpTokenBalanceBefore - amount == lpTokenBalanceAfter, "LP_TOKEN_MISMATCH");
    }

    function _getCoinsBalances(address lpTokenAddress) internal view returns (uint256[N_COINS] memory coinsBalances) {
        coinsBalances[0] = ITokeHypervisor(lpTokenAddress).token0().balanceOf(manager);
        coinsBalances[1] = ITokeHypervisor(lpTokenAddress).token1().balanceOf(manager);
        return coinsBalances;
    }

    function _compareCoinsBalances(uint256[N_COINS] memory balancesBefore, uint256[N_COINS] memory balancesAfter, uint256[N_COINS] memory amounts) internal pure {
        for (uint256 i = 0; i < N_COINS; i++) {
            if (amounts[i] > 0) {
                require(balancesBefore[i] < balancesAfter[i], "BALANCE_MUST_INCREASE");
                require(amounts[i] <= balancesAfter[i] - balancesBefore[i], "BALANCE_LT_MIN");
            }
        }
    }

    function _approve(
        IERC20 token,
        address spender,
        uint256 amount
    ) internal {
        uint256 currentAllowance = token.allowance(address(this), spender);
        if (currentAllowance > 0) {
            token.safeDecreaseAllowance(spender, currentAllowance);
        }
        token.safeIncreaseAllowance(spender, amount);
    }
}
