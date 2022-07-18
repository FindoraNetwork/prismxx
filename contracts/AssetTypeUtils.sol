// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract AssetTypeUtils {
    bytes32 constant ERC20_PREFIX =
        0x0000000000000000000000000000000000000000000000000000000000000077;

    bytes32 constant NFT_PREFIX =
        0x0000000000000000000000000000000000000000000000000000000000000002;

    function computeERC20AssetType(address addr) public pure returns (bytes32) {
        return keccak256(abi.encode(ERC20_PREFIX, addr));
    }

    function computeNFTAssetType(address addr, uint256 tokenId)
        public
        pure
        returns (bytes32)
    {
        return keccak256(abi.encode(NFT_PREFIX, addr, tokenId));
    }
}
