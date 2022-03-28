// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./interfaces/IPrismXXAsset.sol";
import "./interfaces/IPrismXXLedger.sol";

contract PrismXXBridge is Ownable {
    using Address for address;
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

    // Deposit FRA
    // _from: from H160 address
    // _to: to FRA address.
    // _amount: amount to deposit.
    event DepositFRA(address _from, bytes32 _to, uint256 _amount);

    // Deposit FRC20
    // _frc20: FRC20 contract address
    // _from: from H160 address.
    // _to: to FRA address.
    // _amount: amount to deposit.
    event DepositFRC20(address _frc20, address _from, bytes32 _to, uint256 _amount);

    // Withdraw FRA
    // _from: from FRA address
    // _to: to H160 address.
    // _amount: amount to deposit.
    event WithdrawFRA(bytes32 _from, address _to, uint256 _amount);

    // Withdraw FRC20
    // _frc20: FRC20 contract address
    // _from: from FRA address
    // _to: to H160 address.
    // _amount: amount to deposit.
    event WithdrawFRC20(address _frc20, bytes32 _from, address _to, uint256 _amount);

    modifier onlySystem {
        require(msg.sender == address(0x00), "Only system can call this function");
        _;
    }

    function adminSetLedger(address _ledger_contract) onlyOwner public {
        ledger_contract = _ledger_contract;
    }

    function adminSetAsset(address _asset_contract) onlyOwner public {
        asset_contract = _asset_contract;
    }

    // Utils:
    function _checkDecimal(uint256 amount, uint8 decimal) private pure returns(uint256) {
        uint256 pow = 10 ** decimal;

        uint256 a = amount / pow;

        return a * pow;
    }

    // This function called by user.
    // FRA will store in this contract.
    // When end_block called, this contract's FRA will burn.
    function depositFRA(bytes32 _to) public payable {
        // Decimal mapping for FRA.
        uint256 amount = msg.value;

        require(_checkDecimal(amount, 12) == amount, "low 12 must be 0.");

        MintOp memory op = MintOp(FRA, _to, amount);

        ops.push(op);

        emit DepositFRA(msg.sender, _to, amount);
    }

    // This function called on end_block.
    // Before this function called, mint _value FRA to this contract.
    // This funtion don't cost gas.
    function withdrawFRA(bytes32 _from, address payable _to, uint256 _value, bytes calldata _data) onlySystem public {
        // Decimal mapping for FRA.

        if (Address.isContract(this)) {
            Address.functionCallWithValue(_to, _data, _value);
        } else {
            Address.sendValue(_to, _value);
        }

        emit WithdrawFRA(_from, _to, _value);
    }

    // User deposit FRC20 token use this function.
    function depositFRC20(address _frc20, bytes32 _to, uint256 _value) public {
        IPrismXXAsset ac = IPrismXXAsset(asset_contract);

        // Get asset type in UTXO.
        bytes32 asset = ac.getAssetByAddress(_frc20);

        // If asset don't regist, revert.
        require(asset != 0x00, "Asset type must registed");

        address _from = msg.sender;

        uint256 amount = ac.depositDecimal(_frc20, _value);

        // Build mintop for coinbase.
        MintOp memory op = MintOp(asset, _to, amount);

        ops.push(op);

        IPrismXXLedger lc = IPrismXXLedger(ledger_contract);

        // deposit FRC20.
        lc.depositFRC20(_frc20, _from, _value);

        emit DepositFRC20(_frc20, _from, _to, _value);
    }

    // This funtion don't cost gas.
    function withdrawFRC20(bytes32 _asset, bytes32 _from, address _to, uint256 _value, bytes calldata _data) onlySystem public {
        IPrismXXLedger lc = IPrismXXLedger(ledger_contract);
        IPrismXXAsset ac = IPrismXXAsset(asset_contract);

        address frc20 = ac.getAddressByAsset(_asset);

        // If asset don't regist, revert.
        require(frc20 != address(0x00), "Asset type must registed");

        uint256 amount = ac.withdrawDecimal(frc20, _value);

        lc.withdrawFRC20(frc20, _to, amount, _data);

        emit WithdrawFRC20(frc20, _from, _to, amount);
    }

    function consumeMint() onlySystem public returns(MintOp[] memory) {
        MintOp[] memory ret = ops;

        delete ops;

        return ret;
    }
}
