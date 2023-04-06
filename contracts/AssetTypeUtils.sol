// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract AssetTypeUtils {
    bytes32 constant ERC20_PREFIX = keccak256("Findora ERC20 Asset Type");

    bytes32 constant ERC721_PREFIX = keccak256("Findora ERC721 Asset Type");

    bytes32 constant ERC1155_PREFIX = keccak256("Findora ERC1155 Asset Type");

    function computeERC20AssetType(address addr) public pure returns (bytes32) {
        return keccak256(abi.encode(ERC20_PREFIX, addr));
    }

    function computeERC721AssetType(address addr, uint256 tokenId)
        public
        pure
        returns (bytes32)
    {
        return keccak256(abi.encode(ERC721_PREFIX, addr, tokenId));
    }

    function computeERC1155AssetType(address addr, uint256 tokenId)
        public
        pure
        returns (bytes32)
    {
        return keccak256(abi.encode(ERC721_PREFIX, addr, tokenId));
    }
}
