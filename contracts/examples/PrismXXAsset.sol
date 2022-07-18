// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

import "../interfaces/IPrismXXAsset.sol";

/**
 * @dev prism asset manager contract
 */
contract PrismXXAsset is Ownable, IPrismXXAsset {
    // status information for the asset
    struct AssetInfo {
        address addr;
        uint256 tokenId;
        TokenType ty;
        bool isBurn;
        uint8 decimal;
    }

    address public bridge;

    mapping(bytes32 => AssetInfo) public assets;

    modifier onlyBridge() {
        require(msg.sender == bridge);
        _;
    }

    constructor(address _bridge) {
        bridge = _bridge;
    }

    function getERC20Info(bytes32 _asset)
        external
        view
        override
        returns (address)
    {
        return assets[_asset].addr;
    }

    function setERC20Info(bytes32 _asset, address _addr)
        external
        override
        onlyBridge
    {
        AssetInfo storage info = assets[_asset];

        IERC20Metadata erc20 = IERC20Metadata(_addr);

        info.decimal = erc20.decimals();

        info.addr = _addr;
    }

    function getERC721Info(bytes32 _asset)
        external
        view
        override
        returns (address, uint256)
    {
        AssetInfo storage info = assets[_asset];

        return (info.addr, info.tokenId);
    }

    function setERC721Info(
        bytes32 _asset,
        address _addr,
        uint256 tokenId
    ) external override onlyBridge {
        AssetInfo storage info = assets[_asset];

        info.addr = _addr;
        info.tokenId = tokenId;
        info.ty = TokenType.ERC721;
    }

    function getERC1155Info(bytes32 _asset)
        external
        view
        override
        returns (address, uint256)
    {
        AssetInfo storage info = assets[_asset];

        return (info.addr, info.tokenId);
    }

    function setERC1155Info(
        bytes32 _asset,
        address _addr,
        uint256 tokenId
    ) external override onlyBridge {
        AssetInfo storage info = assets[_asset];

        info.addr = _addr;
        info.tokenId = tokenId;
        info.ty = TokenType.ERC1155;
    }

    function setBurn(bytes32 _asset) external onlyOwner {
        assets[_asset].isBurn = true;
    }

    function isBurn(bytes32 _asset) external view override returns (bool) {
        return assets[_asset].isBurn;
    }

    function getTokenType(bytes32 _asset)
        external
        view
        override
        returns (TokenType)
    {
        return assets[_asset].ty;
    }
}
