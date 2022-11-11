// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/utils/ERC721HolderUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/utils/ERC1155HolderUpgradeable.sol";
import "../interfaces/IPrismXXLedger.sol";
import "../interfaces/IERC20Mintable.sol";
import "../interfaces/IERC20Burnable.sol";
import "./PrismXXAsset.sol";
import "../AssetTypeUtils.sol";

contract PrismXXLedger is
    Initializable,
    OwnableUpgradeable,
    IPrismXXLedger,
    ERC721HolderUpgradeable,
    ERC1155HolderUpgradeable,
    AssetTypeUtils
{
    using SafeERC20Upgradeable for IERC20Upgradeable;
    using AddressUpgradeable for address;

    address public bridge;
    address public asset;

    modifier onlyBridge() {
        require(msg.sender == bridge);
        _;
    }

    function initialize(address _bridge, address _asset) public initializer {
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

        bytes32 at = computeERC20AssetType(_frc20);

        if (ac.isBurn(at)) {
            IERC20Burnable ct = IERC20Burnable(_frc20);

            ct.burnFrom(_target, _amount);
        } else {
            IERC20Upgradeable ct = IERC20Upgradeable(_frc20);

            ct.safeTransferFrom(_target, address(this), _amount);
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

        bytes32 at = computeERC20AssetType(_frc20);

        if (ac.isBurn(at)) {
            IERC20Mintable ct = IERC20Mintable(_frc20);

            ct.mint(_target, _amount);
        } else {
            IERC20Upgradeable ct = IERC20Upgradeable(_frc20);

            ct.safeTransfer(_target, _amount);
        }

        if (_target.isContract()) {
            _target.functionCall(_data);
        }
    }

    function depositFRC721(
        address _frc721,
        address _target,
        uint256 tokenId
    ) external override onlyBridge {
        IERC721Upgradeable ct = IERC721Upgradeable(_frc721);

        ct.safeTransferFrom(_target, address(this), tokenId);
    }

    function withdrawFRC721(
        address _addr,
        address _target,
        uint256 _id,
        bytes calldata _data
    ) external override onlyBridge {
        IERC721Upgradeable ct = IERC721Upgradeable(_addr);

        ct.safeTransferFrom(address(this), _target, _id, _data);
    }

    function depositFRC1155(
        address _addr,
        address _target,
        uint256 _id,
        uint256 _amount
    ) external override onlyBridge {
        IERC1155Upgradeable ct = IERC1155Upgradeable(_addr);

        ct.safeTransferFrom(_target, address(this), _id, _amount, "");
    }

    function withdrawFRC1155(
        address _addr,
        address _target,
        uint256 _id,
        uint256 _amount,
        bytes calldata _data
    ) external override onlyBridge {
        IERC1155Upgradeable ct = IERC1155Upgradeable(_addr);

        ct.safeTransferFrom(address(this), _target, _id, _amount, _data);
    }
}
