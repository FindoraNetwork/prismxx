// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IPrismXXAsset {
    function getERC20Info(bytes32 _asset) external view returns (address);

    function setERC20Info(bytes32 _asset, address _addr) external;

    function getERC721Info(
        bytes32 _asset
    ) external view returns (address, uint256);

    function setERC721Info(
        bytes32 _asset,
        address _addr,
        uint256 tokenId
    ) external;

    function getERC1155Info(
        bytes32 _asset
    ) external view returns (address, uint256);

    function setERC1155Info(
        bytes32 _asset,
        address _addr,
        uint256 tokenId
    ) external;

    function isBurn(bytes32 _asset) external view returns (bool);

    enum TokenType {
        ERC20,
        ERC721,
        ERC1155
    }

    function getTokenType(bytes32 _asset) external view returns (TokenType);

    function computeERC20AssetType(address addr) external view returns (bytes32);

    function computeERC721AssetType(address addr, uint256 tokenId) external view returns (bytes32);

    function computeERC1155AssetType(address addr, uint256 tokenId) external view returns (bytes32);
}
