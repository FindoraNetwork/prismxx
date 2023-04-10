// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract AssetTypeUtils {
    bytes32 constant ERC20_PREFIX = keccak256("Findora ERC20 Asset Type");

    bytes32 constant ERC721_PREFIX = keccak256("Findora ERC721 Asset Type");

    bytes32 constant ERC1155_PREFIX = keccak256("Findora ERC1155 Asset Type");

    address constant _anemoi_address = address(0x2002);

    function computeERC20AssetType(
        address addr
    ) public view returns (bytes32 result) {
        (bool success, bytes memory source) = _anemoi_address.staticcall(
            abi.encode(ERC20_PREFIX, addr)
        );
        require(success && source.length == 32, "Precompile call failed");
        assembly {
            result := mload(add(source, 32))
        }
    }

    function computeERC721AssetType(
        address addr,
        uint256 tokenId
    ) public view returns (bytes32 result) {
        (bool success, bytes memory source) = _anemoi_address.staticcall(
            abi.encode(ERC721_PREFIX, addr, tokenId)
        );
        require(success && source.length == 32, "Precompile call failed");
        assembly {
            result := mload(add(source, 32))
        }
    }

    function computeERC1155AssetType(
        address addr,
        uint256 tokenId
    ) public view returns (bytes32 result) {
        (bool success, bytes memory source) = _anemoi_address.staticcall(
            abi.encode(ERC1155_PREFIX, addr, tokenId)
        );
        require(success && source.length == 32, "Precompile call failed");
        assembly {
            result := mload(add(source, 32))
        }
    }
}
