// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./interfaces/IPrismXXLedger.sol";
import "./interfaces/IPrismXXAsset.sol";

contract PrismXXBridge is Ownable {
    using Address for address;
    // Note, in here, Owner is system.

    address private __self = address(this);

    address public proxy_contract;
    address public ledger_contract;
    address public asset_contract;

    MintOp[] public ops;

    bytes32 constant FRA = bytes32(0x00);

    struct MintOp {
        bytes32 asset;
        bytes32 receiver;
        uint256 amount;
        uint8 decimal;
        uint256 max_supply;
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
    event DepositFRC20(
        address _frc20,
        address _from,
        bytes32 _to,
        uint256 _amount
    );

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
    event WithdrawFRC20(
        address _frc20,
        bytes32 _from,
        address _to,
        uint256 _amount
    );

    modifier onlySystem() {
        require(
            msg.sender == address(0x00),
            "Only system can call this function"
        );
        _;
    }

    modifier onlyProxy() {
        require(
            msg.sender == proxy_contract,
            "Only proxy can call this function"
        );
        _;
    }

    constructor(address _proxy_contract) {
        proxy_contract = _proxy_contract;
    }

    function adminSetLedger(address _ledger_contract) public onlyOwner {
        ledger_contract = _ledger_contract;
    }

    function adminSetAsset(address _asset_contract) public onlyOwner {
        asset_contract = _asset_contract;
    }

    // Utils:
    function _checkDecimal(uint256 amount, uint8 decimal)
        private
        pure
        returns (uint256)
    {
        uint256 pow = 10**decimal;

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

        MintOp memory op = MintOp(FRA, _to, amount, 6, 0);

        ops.push(op);

        emit DepositFRA(msg.sender, _to, amount);
    }

    // This function called on end_block.
    // Before this function called, mint _value FRA to this contract.
    // This funtion don't cost gas.
    function withdrawFRA(
        bytes32 _from,
        address payable _to,
        uint256 _value,
        bytes calldata _data
    ) public onlySystem {
        Address.sendValue(payable(__self), _value);

        PrismXXBridge bridge = PrismXXBridge(payable(__self));

        bridge._withdrawFRA(_to, _value, _data);

        emit WithdrawFRA(_from, _to, _value);
    }

    function _withdrawFRA(
        address payable _to,
        uint256 _value,
        bytes calldata _data
    ) public onlyProxy {
        if (Address.isContract(_to)) {
            Address.functionCallWithValue(_to, _data, _value);
        } else {
            Address.sendValue(_to, _value);
        }
    }

    // User deposit FRC20 token use this function.
    function depositFRC20(
        address _frc20,
        bytes32 _to,
        uint256 _value
    ) public {
        // Get asset type in UTXO.
        bytes32 asset = keccak256(abi.encode(_frc20));

        IPrismXXAsset ac = IPrismXXAsset(asset_contract);

        ac.setERC20Info(asset, _frc20);

        address _from = msg.sender;

        // Build mintop for coinbase.
        MintOp memory op = MintOp(asset, _to, _value, 6, 0);

        ops.push(op);

        IPrismXXLedger lc = IPrismXXLedger(ledger_contract);

        // deposit FRC20.
        lc.depositFRC20(_frc20, _from, _value);

        emit DepositFRC20(_frc20, _from, _to, _value);
    }

    // This funtion don't cost gas.
    function _withdrawFRC20(
        bytes32 _asset,
        bytes32 _from,
        address _to,
        uint256 _value,
        bytes calldata _data
    ) public onlyProxy {
        IPrismXXLedger lc = IPrismXXLedger(ledger_contract);
        IPrismXXAsset ac = IPrismXXAsset(asset_contract);

        address frc20 = ac.getERC20Info(_asset);

        // If asset don't regist, revert.
        require(frc20 != address(0x00), "Asset type must registed");

        require(_checkDecimal(_value, 12) == _value, "low 12 must be 0.");

        lc.withdrawFRC20(frc20, _to, _value, _data);

        emit WithdrawFRC20(frc20, _from, _to, _value);
    }

    function withdrawFRC20(
        bytes32 _asset,
        bytes32 _from,
        address _to,
        uint256 _value,
        bytes calldata _data
    ) public onlySystem {
        PrismXXBridge bridge = PrismXXBridge(payable(__self));

        bridge._withdrawFRC20(_asset, _from, _to, _value, _data);
    }

    function consumeMint() public onlySystem returns (MintOp[] memory) {
        PrismXXBridge bridge = PrismXXBridge(payable(__self));

        return bridge._consumeMint();
    }

    function _consumeMint() public onlyProxy returns (MintOp[] memory) {
        MintOp[] memory ret = ops;

        delete ops;

        return ret;
    }

    receive() external payable {}
}
