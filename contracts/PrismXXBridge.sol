// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IPrismXXAsset.sol";
import "./interfaces/IPrismXXLedger.sol";

contract PrismXXBridge is Ownable {
    // Note, in here, Owner is system.

    bytes32 constant FRA = bytes32(0x00);

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

    function adminSetLedger(address _ledger_contract) onlyOwner public {
        ledger_contract = _ledger_contract;
    }

    function adminSetAsset(address _asset_contract) onlyOwner public {
        asset_contract = _asset_contract;
    }

    // This function called by user.
    // FRA will store in this contract.
    // When end_block called, this contract's FRA will burn.
    function depositFRA(bytes32 _receiver) public payable {
        MintOp memory op = MintOp(FRA, _receiver, msg.value);

        ops.push(op);
    }

    // This function called on end_block.
    // Before this function called, mint _value FRA to this contract.
    // This funtion don't cost gas.
    function withdrawFRA(address payable _owner, uint256 _value) onlySystem public {
        _owner.transfer(_value);
    }

    // User deposit FRC20 token use this function.
    function depositFRC20(address _frc20, uint256 _value, bytes32 _receiver) public {
        IPrismXXAsset ac = IPrismXXAsset(asset_contract);

        // Get asset type in UTXO.
        bytes32 asset = ac.getAssetByAddress(_frc20);

        // If asset don't regist, revert.
        require(asset != 0x00);

        address _owner = msg.sender;

        // Build mintop for coinbase.
        MintOp memory op = MintOp(asset, _receiver, _value);

        ops.push(op);

        IPrismXXLedger lc = IPrismXXLedger(ledger_contract);

        // deposit FRC20.
        lc.depositFRC20(_frc20, _owner, _value);
    }

    // This funtion don't cost gas.
    function withdrawERC20(bytes32 _asset, address _owner, uint256 _value) onlySystem public {
        IPrismXXLedger lc = IPrismXXLedger(ledger_contract);
        IPrismXXAsset ac = IPrismXXAsset(asset_contract);

        address frc20 = ac.getAddressByAsset(_asset);

        // If asset don't regist, revert.
        require(frc20 != address(0x00));

        lc.withdrawFRC20(frc20, _owner, _value);
    }

    function consumeMint() public returns(MintOp[] memory) {
        MintOp[] memory ret = ops;

        delete ops;

        return ret;
    }
}
