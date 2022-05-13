// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../interfaces/IERC20Mintable.sol";
import "../interfaces/IERC20Burnable.sol";
import "../interfaces/IPrismXXLedger.sol";
import "./PrismXXAsset.sol";

contract PrismXXLedger is Ownable, IPrismXXLedger {
    using SafeERC20 for IERC20;

    // Note, in here, Owner is bridge.

    address public bridge;
    address public asset;

    modifier onlyBridge {
        require(msg.sender == bridge);
        _;
    }

    constructor(address _bridge, address _asset) {
        bridge = _bridge;
        asset = _asset;
    }

    function adminSetBridge(address _bridge) onlyOwner public {
        bridge = _bridge;
    }

    function adminSetAsset(address _asset) onlyOwner public {
        asset = _asset;
    }

    function depositFRC20(address _frc20, address _target, uint256 _amount) override onlyBridge external {
        PrismXXAsset ac = PrismXXAsset(asset);

        bool isBurn = ac.isBurn(_frc20);
        if(isBurn) {
            _burnERC20(_frc20, _target, _amount);
        } else {
            _lockERC20(_frc20, _target, _amount);
        }
    }

    function withdrawFRC20(address _frc20, address _target, uint256 _amount, bytes calldata _data) override onlyBridge external {
        PrismXXAsset ac = PrismXXAsset(asset);

        bool isBurn = ac.isBurn(_frc20);
        if(isBurn) {
            _mintERC20(_frc20, _target, _amount);
        } else {
            _releaseERC20(_frc20, _target, _amount);
        }
    }

    function _lockERC20(address frc20, address owner, uint256 value) private {
        IERC20 ct = IERC20(frc20);

        ct.safeTransferFrom(owner, address(this), value);
    }

    function _releaseERC20(address frc20, address owner, uint256 value) private {
        IERC20 ct = IERC20(frc20);

        ct.safeTransfer(owner, value);
    }

    function _mintERC20(address _frc20, address _owner, uint256 _amount) private {
        IERC20Mintable ct = IERC20Mintable(_frc20);

        ct.mint(_owner, _amount);
    }

    function _burnERC20(address _frc20, address _owner, uint256 _amount) private {
        IERC20Burnable ct = IERC20Burnable(_frc20);

        ct.burnFrom(_owner, _amount);
    }
}
