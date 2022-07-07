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

    address public bridge;
    address public asset;

    modifier onlyBridge() {
        require(msg.sender == bridge);
        _;
    }

    constructor(address _bridge, address _asset) {
        bridge = _bridge;
        asset = _asset;
    }

    function adminSetBridge(address _bridge) public onlyOwner {
        bridge = _bridge;
    }

    function adminSetAsset(address _asset) public onlyOwner {
        asset = _asset;
    }

    function depositFRC20(
        address _frc20,
        address _target,
        uint256 _amount
    ) external override onlyBridge {
        PrismXXAsset ac = PrismXXAsset(asset);

        bytes32 at = keccak256(abi.encode(_frc20));

        if (ac.isBurn(at)) {
            IERC20Burnable ct = IERC20Burnable(_frc20);

            ct.burnFrom(_target, _amount);
        } else {
            IERC20 ct = IERC20(_frc20);

            ct.safeTransferFrom(_target, address(this), _amount);
        }
    }

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
        PrismXXAsset ac = PrismXXAsset(asset);

        bytes32 at = keccak256(abi.encode(_frc721, tokenId));

        if (ac.isBurn(at)) {} else {
            IERC721 ct = IERC721(_frc721);

            ct.safeTransferFrom(_target, address(this), tokenId);
        }
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

    function depositFRC1155Batch(
        address _addr,
        address _target,
        uint256[] calldata _ids,
        uint256[] calldata _amounts
    ) external override onlyBridge {
        IERC1155 ct = IERC1155(_addr);

        ct.safeBatchTransferFrom(_target, address(this), _ids, _amounts, "");
    }

    function withdrawFRC1155Batch(
        address _addr,
        address _target,
        uint256[] calldata _ids,
        uint256[] calldata _amounts,
        bytes calldata _data
    ) external override onlyBridge {
        IERC1155 ct = IERC1155(_addr);

        ct.safeBatchTransferFrom(_target, address(this), _ids, _amounts, _data);
    }
}
