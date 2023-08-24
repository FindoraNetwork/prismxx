// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "../interfaces/IPrismXXAsset.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

/**
 * @dev prism asset manager contract
 */
contract PrismXXAsset is Initializable, OwnableUpgradeable, IPrismXXAsset {
    bytes32 constant ERC20_PREFIX = keccak256("Findora ERC20 Asset Type");

    bytes32 constant ERC721_PREFIX = keccak256("Findora ERC721 Asset Type");

    bytes32 constant ERC1155_PREFIX = keccak256("Findora ERC1155 Asset Type");

    address constant _anemoi_address = address(0x2003);

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

    mapping(bytes32 => bytes32) public migration_v1assets;

    modifier onlyBridge() {
        require(msg.sender == bridge);
        _;
    }

    function initialize(address _bridge) public initializer {
        bridge = _bridge;
    }

    function adminSetBridge(address _addr) external onlyOwner {
        bridge = _addr;
    }


    function setV1Asset(bytes32 v2asset, bytes32 v1asset) external onlyOwner {
        migration_v1assets[v2asset] = v1asset;
    }

    function getERC20Info(
        bytes32 _asset
    ) external view override returns (address) {
        return assets[_asset].addr;
    }

    function setERC20Info(
        bytes32 _asset,
        address _addr
    ) external override onlyBridge {
        AssetInfo storage info = assets[_asset];

        IERC20Metadata erc20 = IERC20Metadata(_addr);

        info.decimal = erc20.decimals();

        info.addr = _addr;
    }

    function getERC721Info(
        bytes32 _asset
    ) external view override returns (address, uint256) {
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

    function getERC1155Info(
        bytes32 _asset
    ) external view override returns (address, uint256) {
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

    function getTokenType(
        bytes32 _asset
    ) external view override returns (TokenType) {
        return assets[_asset].ty;
    }

    function computeERC20AssetType(address addr) external view returns (bytes32) {
        (bool success, bytes memory source) = _anemoi_address.staticcall(
            abi.encode(ERC20_PREFIX, addr)
        );
        require(success && source.length == 32, "Precompile call failed");

        bytes32 asset = bytes32(source);
        if (migration_v1assets[asset] != bytes32(0)) {
            return v1assets[asset];
        }
        return asset;
    }

    function computeERC721AssetType(address addr, uint256 tokenId)
        external
        view
        returns (bytes32)
    {
        bytes32 code = bytes32(tokenId);
        bytes memory tmp0 = new bytes(32);
        bytes memory tmp1 = new bytes(32);
        uint256 i = 0;
        for (i = 0; i < 31; i++) {
            tmp0[i] = code[i];
        }
        tmp1[0] = code[31];
        bytes32 code0 = bytes32(tmp0);
        bytes32 code1 = bytes32(tmp1);

        (bool success, bytes memory source) = _anemoi_address.staticcall(
            abi.encode(ERC721_PREFIX, addr, code0, code1)
        );
        require(success && source.length == 32, "Precompile call failed");

        bytes32 asset = bytes32(source);
        if (migration_v1assets[asset] != bytes32(0)) {
            return migration_v1assets[asset];
        }
        return asset;
    }

    function computeERC1155AssetType(address addr, uint256 tokenId)
        external
        view
        returns (bytes32 result)
    {
        bytes32 code = bytes32(tokenId);
        bytes memory tmp0 = new bytes(32);
        bytes memory tmp1 = new bytes(32);
        uint256 i = 0;
        for (i = 0; i < 31; i++) {
            tmp0[i] = code[i];
        }
        tmp1[0] = code[31];
        bytes32 code0 = bytes32(tmp0);
        bytes32 code1 = bytes32(tmp1);

        (bool success, bytes memory source) = _anemoi_address.staticcall(
            abi.encode(ERC1155_PREFIX, addr, code0, code1)
        );
        require(success && source.length == 32, "Precompile call failed");

        bytes32 asset = bytes32(source);
        if (migration_v1assets[asset] != bytes32(0)) {
            return migration_v1assets[asset];
        }
        return asset;
    }
}
