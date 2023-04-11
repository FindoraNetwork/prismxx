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
        bytes32 code = bytes32(tokenId);
        bytes32 code0 = 0x00;
        bytes32 code1 = 0x00;
        bytes memory tmp0 = new bytes(32);
        bytes memory tmp1 = new bytes(32);
        uint i = 0;
        for (i = 0; i < 31; i++) {
            tmp0[i] = code[i];
        }
        tmp1[0] = code[31];
        assembly {
            code0 := mload(add(tmp0, 32))
            code1 := mload(add(tmp1, 32))
        }
        (bool success, bytes memory source) = _anemoi_address.staticcall(
            abi.encode(ERC721_PREFIX, addr, code0, code1)
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
        bytes32 code = bytes32(tokenId);
        bytes32 code0 = 0x00;
        bytes32 code1 = 0x00;
        bytes memory tmp0 = new bytes(32);
        bytes memory tmp1 = new bytes(32);
        uint i = 0;
        for (i = 0; i < 31; i++) {
            tmp0[i] = code[i];
        }
        tmp1[0] = code[31];
        assembly {
            code0 := mload(add(tmp0, 32))
            code1 := mload(add(tmp1, 32))
        }
        (bool success, bytes memory source) = _anemoi_address.staticcall(
            abi.encode(ERC1155_PREFIX, addr, code0, code1)
        );
        require(success && source.length == 32, "Precompile call failed");
        assembly {
            result := mload(add(source, 32))
        }
    }
}
