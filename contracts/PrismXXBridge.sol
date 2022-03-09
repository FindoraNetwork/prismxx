// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./PrismXXLedger.sol";
import "./PrismXXAsset.sol";

contract PrismXXBridge is Ownable {
    // Note, in here, Owner is system.
    address public ledger_contract;
    address public asset_contract;

    MintOp[] public ops;

    struct MintOp {
        bytes32 asset;
        bytes32 receiver;
        uint256 amount;
    }

    modifier onlySystem {
        require(msg.sender == address(0x00));
        _;
    }

    constructor() {
        // use ledger address instead.
        ledger_contract = address(0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B);
        asset_contract = address(0xd9145CCE52D386f254917e481eB44e9943F39138);
    }

    function depositERC20(address erc20, address owner, uint256 value, bytes32 receiver) public {
        PrismXXAsset ac = PrismXXAsset(asset_contract);
        bytes32 asset = ac.addressToAsset(erc20);

        MintOp memory op = MintOp(asset, receiver, value);

        ops.push(op);

        PrismXXLedger lc = PrismXXLedger(ledger_contract);

        lc.depositERC20(erc20, owner, value);
    }

    function consumeMint() onlySystem public view returns(MintOp[] memory) {
        return ops;
    }

    function clearOps() onlySystem public {
        delete ops;
    }

    function withdrawERC20(bytes32 _asset, address target, uint256 value) public {
        PrismXXLedger lc = PrismXXLedger(ledger_contract);
        PrismXXAsset ac = PrismXXAsset(asset_contract);

        address erc20 = ac.assetToAddress(_asset);

        lc.withERC20(erc20, target, value);
    }
}
