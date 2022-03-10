// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract PrismXXLedger is Ownable {
    // Note, in here, Owner is bridge.

    using SafeERC20 for IERC20;

    mapping(address => uint256) public amounts;

    address public bridge;

    modifier onlyBridge {
        require(msg.sender == bridge);
        _;
    }

    function adminSetAssetAddress(address _bridge) onlyOwner public {
        bridge = _bridge;
    }

    function depositERC20(address erc20, address owner, uint256 value) onlyBridge public {
        amounts[erc20] += value;
        IERC20 ct = IERC20(erc20);

        ct.safeTransferFrom(owner, address(this), value);
    }

    function withERC20(address erc20, address owner, uint256 value) onlyBridge public {
        amounts[erc20] -= value;
        IERC20 ct = IERC20(erc20);

        ct.safeTransfer(owner, value);
    }
}
