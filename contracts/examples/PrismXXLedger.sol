// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "../interfaces/IPrismXXLedger.sol";
import "../interfaces/IERC20Mintable.sol";
import "../interfaces/IERC20Burnable.sol";
import "./PrismXXAsset.sol";

contract PrismXXLedger is Ownable, IPrismXXLedger, ERC721Holder, ERC1155Holder {
    using SafeERC20 for IERC20;

    bytes32 constant ERC20_PREFIX =
        bytes32(
            0x0000000000000000000000000000000000000000000000000000000000000077
        );

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

        bytes32 at = keccak256(abi.encode(ERC20_PREFIX, _frc20));

        if (ac.isBurn(at)) {
            IERC20Burnable ct = IERC20Burnable(_frc20);

            ct.burnFrom(_target, _amount);
        } else {
            IERC20 ct = IERC20(_frc20);

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

        bytes32 at = keccak256(abi.encode(_frc20));

        if (ac.isBurn(at)) {
            IERC20Mintable ct = IERC20Mintable(_frc20);

            ct.mint(_target, _amount);
        } else {
            IERC20 ct = IERC20(_frc20);

            ct.safeTransfer(_target, _amount);
        }

        if (Address.isContract(_target)) {
            Address.functionCall(_target, _data);
        }
    }

    function depositFRC721(
        address _frc721,
        address _target,
        uint256 tokenId
    ) external override onlyBridge {
        IERC721 ct = IERC721(_frc721);

        ct.safeTransferFrom(_target, address(this), tokenId);
    }

    function withdrawFRC721(
        address _addr,
        address _target,
        uint256 _id,
        bytes calldata _data
    ) external override onlyBridge {
        IERC721 ct = IERC721(_addr);

        ct.safeTransferFrom(address(this), _target, _id, _data);
    }

    function depositFRC1155(
        address _addr,
        address _target,
        uint256 _id,
        uint256 _amount
    ) external override onlyBridge {
        IERC1155 ct = IERC1155(_addr);

        ct.safeTransferFrom(_target, address(this), _id, _amount, "");
    }

    function withdrawFRC1155(
        address _addr,
        address _target,
        uint256 _id,
        uint256 _amount,
        bytes calldata _data
    ) external override onlyBridge {
        IERC1155 ct = IERC1155(_addr);

        ct.safeTransferFrom(_target, address(this), _id, _amount, _data);
    }
}
