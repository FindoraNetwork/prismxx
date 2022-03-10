// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IERC20Mintable.sol";
import "./interfaces/IERC20Burnable.sol";

contract PrismXXLedger is Ownable {
    // Note, in here, Owner is bridge.

    mapping(address => uint256) public amounts;

    address public bridge;

    modifier onlyBridge {
        require(msg.sender == bridge);
        _;
    }

    function adminSetAssetAddress(address _bridge) onlyOwner public {
        bridge = _bridge;
    }

    function lockERC20(address erc20, address owner, uint256 value) onlyBridge public {
        amounts[erc20] += value;
        IERC20 ct = IERC20(erc20);

        ct.transferFrom(owner, address(this), value);
    }

    function releaseERC20(address erc20, address owner, uint256 value) onlyBridge public {
        amounts[erc20] -= value;
        IERC20 ct = IERC20(erc20);

        ct.transfer(owner, value);
    }

    function mintERC20(address _erc20, address _owner, uint256 _amount) onlyBridge public {
        amounts[_erc20] -= _amount;
        IERC20Mintable ct = IERC20Mintable(_erc20);

        ct.mint(_owner, _amount);
    }

    function burnERC20(address _erc20, address _owner, uint256 _amount) onlyBridge public {
        amounts[_erc20] += _amount;
        IERC20Burnable ct = IERC20Burnable(_erc20);

        ct.burnFrom(_owner, _amount);
    }
}
