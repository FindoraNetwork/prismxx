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
        require(msg.sender == address(0xdD870fA1b7C4700F2BD7f44238821C26f7392148));
        _;
    }

    function adminSetLedgerAddress(address _ledger_contract) onlyOwner public {
        ledger_contract = _ledger_contract;
    }

    function adminSetAssetAddress(address _asset_contract) onlyOwner public {
        asset_contract = _asset_contract;
    }

    function depositERC20(address _erc20, uint256 _value, bytes32 _receiver) public {
        PrismXXAsset ac = PrismXXAsset(asset_contract);
        bytes32 asset = ac.addressToAsset(_erc20);

        require(asset != 0x00);

        address _owner = msg.sender;

        MintOp memory op = MintOp(asset, _receiver, _value);

        ops.push(op);

        PrismXXLedger lc = PrismXXLedger(ledger_contract);

        bool isBurn = ac.isBurn(_erc20);
        
        if (isBurn) {
            lc.burnERC20(_erc20, _owner, _value);
        } else {
            lc.lockERC20(_erc20, _owner, _value);
        }
    }

    function consumeMint() public view returns(MintOp[] memory) {
        return ops;
    }

    function clearOps() onlySystem public {
        delete ops;
    }

    function withdrawERC20(bytes32 _asset, address _owner, uint256 _value) onlySystem public {
        PrismXXLedger lc = PrismXXLedger(ledger_contract);
        PrismXXAsset ac = PrismXXAsset(asset_contract);

        address erc20 = ac.assetToAddress(_asset);

        require(erc20 != address(0x00));

        bool isBurn = ac.isBurn(erc20);

        if (isBurn) {
            lc.mintERC20(erc20, _owner, _value);
        } else {
            lc.releaseERC20(erc20, _owner, _value);
        }
    }
}
