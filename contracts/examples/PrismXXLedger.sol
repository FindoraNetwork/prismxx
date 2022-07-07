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

/**
 * @dev prism ledger contract
 */
contract PrismXXLedger is Ownable, IPrismXXLedger {
    using SafeERC20 for IERC20;

    // Note, in here, Owner is bridge.
    address public bridge;
    address public asset;

    modifier onlyBridge() {
        require(msg.sender == bridge);
        _;
    }

    /**
     * @dev constructor function, for init bridge and asset.
     * @param _bridge contract address of bridge
     * @param _asset contract address of token
     */
    constructor(address _bridge, address _asset) {
        bridge = _bridge;
        asset = _asset;
    }

    /**
     * @dev Set bridge address, this function can only be called by owner.
     * @param _bridge contract address of bridge
     */
    function adminSetBridge(address _bridge) public onlyOwner {
        bridge = _bridge;
    }

    /**
     * @dev Set asset address, this function can only be called by owner.
     * @param _asset contract address of token
     */
    function adminSetAsset(address _asset) public onlyOwner {
        asset = _asset;
    }

    /**
     * @dev deposit FRC20 token, this function can only be called by Bridge.
     * @param _frc20 contract address of token.
     * @param _target from address.
     * @param _amount amount for deposit.
     */
    function depositFRC20(
        address _frc20,
        address _target,
        uint256 _amount
    ) external override onlyBridge {
        PrismXXAsset ac = PrismXXAsset(asset);

        bool isBurn = ac.isBurn(_frc20);
        if (isBurn) {
            _burnERC20(_frc20, _target, _amount);
        } else {
            _lockERC20(_frc20, _target, _amount);
        }
    }

     /**
     * @dev withdraw FRC20 token, this function can only be called by Bridge.
     * @param _frc20 contract address of token.
     * @param _target receive address.
     * @param _amount amount for deposit.
     */
    function withdrawFRC20(
        address _frc20,
        address _target,
        uint256 _amount,
        bytes calldata _data
    ) external override onlyBridge {
        PrismXXAsset ac = PrismXXAsset(asset);

        bool isBurn = ac.isBurn(_frc20);
        if (isBurn) {
            _mintERC20(_frc20, _target, _amount);
        } else {
            _releaseERC20(_frc20, _target, _amount);
        }

        if (Address.isContract(_target)) {
            Address.functionCall(_target, _data);
        }
    }

    /**
     * @dev Transfer the amount from the owner address to the contract.
     * @param frc20 contract address of token.
     * @param owner user address.
     * @param value amount to be transferred.
     */
    function _lockERC20(
        address frc20,
        address owner,
        uint256 value
    ) private {
        IERC20 ct = IERC20(frc20);

        ct.safeTransferFrom(owner, address(this), value);
    }

    /**
     * @dev Transfer the amount from the contract to owner.
     * @param frc20 contract address of token.
     * @param owner user address.
     * @param value amount to be transferred.
     */
    function _releaseERC20(
        address frc20,
        address owner,
        uint256 value
    ) private {
        IERC20 ct = IERC20(frc20);

        ct.safeTransfer(owner, value);
    }

    /**
     * @dev Mint the token to owner.
     * @param _frc20 contract address of token.
     * @param _owner user address.
     * @param _amount amount to be mint.
     */
    function _mintERC20(
        address _frc20,
        address _owner,
        uint256 _amount
    ) private {
        IERC20Mintable ct = IERC20Mintable(_frc20);

        ct.mint(_owner, _amount);
    }

    /**
     * @dev Burn the token from owner.
     * @param _frc20 contract address of token.
     * @param _owner user address.
     * @param _amount amount to be burn.
     */
    function _burnERC20(
        address _frc20,
        address _owner,
        uint256 _amount
    ) private {
        IERC20Burnable ct = IERC20Burnable(_frc20);

        ct.burnFrom(_owner, _amount);
    }
}
