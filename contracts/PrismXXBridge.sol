// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "./interfaces/IPrismXXLedger.sol";
import "./interfaces/IPrismXXAsset.sol";
import "./AssetTypeUtils.sol";

/**
 * @dev prismXXBridge cross-chain bridge contract.
 */
contract PrismXXBridge is Ownable, AssetTypeUtils {
    using Address for address;
    // Note, in here, Owner is system.

    address private __self = address(this);

    address public proxy_contract; // address of proxy contract
    address public ledger_contract; // address of ledger contract
    address public asset_contract; // address of asset contract

    MintOp[] public ops;

    bytes32 constant FRA = bytes32(0x00);

    struct MintOp {
        bytes32 asset;
        bytes receiver;
        uint256 amount;
        uint8 decimal;
        uint256 max_supply;
    }

    // Deposit FRA
    // _from: from H160 address
    // _to: to FRA address.
    // _amount: amount to deposit.
    event DepositFRA(address _from, bytes _to, uint256 _amount);

    // Deposit FRC20
    // _frc20: FRC20 contract address
    // _from: from H160 address.
    // _to: to FRA address.
    // _amount: amount to deposit.
    event DepositFRC20(
        address _frc20,
        address _from,
        bytes _to,
        uint256 _amount
    );

    event DepositFRC721(address _addr, address _from, bytes _to, uint256 _id);

    event DepositFRC1155(
        address _addr,
        address _from,
        bytes _to,
        uint256 _id,
        uint256 amount
    );

    // Withdraw FRA
    // _from: from FRA address
    // _to: to H160 address.
    // _amount: amount to deposit.
    event WithdrawFRA(bytes _from, address _to, uint256 _amount);

    // Withdraw FRC20
    // _frc20: FRC20 contract address
    // _from: from FRA address
    // _to: to H160 address.
    // _amount: amount to deposit.
    event WithdrawFRC20(
        address _frc20,
        bytes _from,
        address _to,
        uint256 _amount
    );

    event WithdrawFRC721(
        address _frc20,
        bytes _from,
        address _to,
        uint256 _id
    );

    event WithdrawFRC1155(
        address _frc20,
        bytes _from,
        address _to,
        uint256 _id,
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

    /**
     * @dev constructor function, for init proxy_contract.
     * @param _proxy_contract address of proxy contract.
     */
    constructor(address _proxy_contract) {
        proxy_contract = _proxy_contract;
    }

    /**
     * @dev Set contarct address of ledger, this function can only be called by owner.
     * @param _ledger_contract address of ledger contract.
     */
    function adminSetLedger(address _ledger_contract) public onlyOwner {
        ledger_contract = _ledger_contract;
    }

    /**
     * @dev Set contarct address of asset, this function can only be called by owner.
     * @param _asset_contract address of asset contract.
     */
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

    function _shrinkDecimal(uint256 amount, uint8 decimal)
        private
        pure
        returns (uint256)
    {
        uint256 pow = 10**decimal;

        uint256 a = amount / pow;

        return a;
    }

    function _extendDecimal(uint256 amount, uint8 decimal)
        private
        pure
        returns (uint256)
    {
        uint256 pow = 10**decimal;

        return amount * pow;
    }

    /**
     * @dev deposit FRA token, this function called by user.
     * @notice FRA will store in this contract, When end_block called, this contract's FRA will burn.
     *
     * @param _to address of asset contract.
     */
    function depositFRA(bytes calldata _to) public payable {
        // Decimal mapping for FRA.
        uint256 amount = msg.value;

        require(_checkDecimal(amount, 12) == amount, "low 12 must be 0.");

        MintOp memory op = MintOp(FRA, _to, amount, 6, 0);

        ops.push(op);

        Address.sendValue(payable(proxy_contract), amount);

        emit DepositFRA(msg.sender, _to, amount);
    }

    /**
     * @dev withdraw FRA token.
     * @notice This function called on end_block, Before this function called, mint _value FRA to this contract.
     *   This funtion don't cost gas.
     *
     * @param _from from address of findora.
     * @param _to receive address.
     * @param _value amount of funds transferred.
     * @param _data additional data when transferring funds.
     */
    function withdrawFRA(
        bytes calldata _from,
        address payable _to,
        uint256 _value,
        bytes calldata _data
    ) public onlySystem {
        Address.sendValue(payable(__self), _value);

        PrismXXBridge bridge = PrismXXBridge(payable(__self));

        bridge._withdrawFRA(_to, _value, _data);

        emit WithdrawFRA(_from, _to, _value);
    }

    /**
     * @dev withdraw FRA token.
     * @param _to receive address.
     * @param _value amount of funds transfer.
     * @param _data additional data when transferring funds.
     */
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

    /**
     * @dev User deposit FRC20 token use this function.
     * @param _frc20 address of FRC20 token.
     * @param _to receive address.
     * @param _value amount of funds transfer.
     */
    function depositFRC20(
        address _frc20,
        bytes calldata _to,
        uint256 _value
    ) public {
        require(asset_contract != address(0), "Prism asset must be inital");
        require(ledger_contract != address(0), "Prism ledger must be inital");

        IERC20Metadata erc20 = IERC20Metadata(_frc20);

        uint8 decimal = erc20.decimals();

        uint8 target_decimal = decimal;

        uint256 value = _value;

        if (decimal > 6) {
            require(
                _checkDecimal(_value, decimal - 6) == _value,
                "low 12 must be 0."
            );

            target_decimal = 6;
            value = _shrinkDecimal(_value, decimal - 6);
        }

        bytes32 asset = computeERC20AssetType(_frc20);

        IPrismXXAsset ac = IPrismXXAsset(asset_contract);

        ac.setERC20Info(asset, _frc20);

        address _from = msg.sender;

        // Build mintop for coinbase.
        MintOp memory op = MintOp(asset, _to, value, target_decimal, 0);

        ops.push(op);

        IPrismXXLedger lc = IPrismXXLedger(ledger_contract);

        // deposit FRC20.
        lc.depositFRC20(_frc20, _from, _value);

        emit DepositFRC20(_frc20, _from, _to, _value);
    }

    function depositFRC721(
        address _addr,
        bytes calldata _to,
        uint256 _id
    ) public {
        require(asset_contract != address(0), "Prism asset must be inital");
        require(ledger_contract != address(0), "Prism ledger must be inital");

        bytes32 asset = computeNFTAssetType(_addr, _id);

        IPrismXXAsset ac = IPrismXXAsset(asset_contract);

        ac.setERC721Info(asset, _addr, _id);

        address _from = msg.sender;

        // Build mintop for coinbase.
        MintOp memory op = MintOp(asset, _to, 1, 0, 1);

        ops.push(op);

        IPrismXXLedger lc = IPrismXXLedger(ledger_contract);

        // deposit FRC20.
        lc.depositFRC721(_addr, _from, _id);

        emit DepositFRC721(_addr, _from, _to, _id);
    }

    function depositFRC1155(
        address _addr,
        bytes calldata _to,
        uint256 _id,
        uint256 _amount
    ) public {
        require(asset_contract != address(0), "Prism asset must be inital");
        require(ledger_contract != address(0), "Prism ledger must be inital");

        bytes32 asset = computeNFTAssetType(_addr, _id);

        IPrismXXAsset ac = IPrismXXAsset(asset_contract);

        ac.setERC1155Info(asset, _addr, _id);

        address _from = msg.sender;

        // Build mintop for coinbase.
        MintOp memory op = MintOp(asset, _to, _amount, 0, 0);

        ops.push(op);

        IPrismXXLedger lc = IPrismXXLedger(ledger_contract);

        // deposit FRC20.
        lc.depositFRC1155(_addr, _from, _id, _amount);

        emit DepositFRC1155(_addr, _from, _to, _id, _amount);
    }

    /**
     * @dev withdraw FRC20 token, this function can only be called by proxy.
     * @notice this funtion don't cost gas.
     * @param _asset the encoded ID of the asset.
     * @param _from from address of findora.
     * @param _to receive address.
     * @param _value amount of funds transferred.
     * @param _data additional data when transferring funds.
     */
    function _withdrawAsset(
        bytes32 _asset,
        bytes calldata _from,
        address _to,
        uint256 _value,
        bytes calldata _data
    ) public onlyProxy {
        IPrismXXLedger lc = IPrismXXLedger(ledger_contract);
        IPrismXXAsset ac = IPrismXXAsset(asset_contract);

        IPrismXXAsset.TokenType ty = ac.getTokenType(_asset);

        if (ty == IPrismXXAsset.TokenType.ERC721) {
            (address addr, uint256 id) = ac.getERC721Info(_asset);

            require(_value == 1, "Error: Asset type is not ERC721");

            lc.withdrawFRC721(addr, _to, id, _data);

            emit WithdrawFRC721(addr, _from, _to, id);
        } else if (ty == IPrismXXAsset.TokenType.ERC1155) {
            (address addr, uint256 id) = ac.getERC1155Info(_asset);

            lc.withdrawFRC1155(addr, _to, id, _value, _data);

            emit WithdrawFRC1155(addr, _from, _to, id, _value);
        } else {
            address frc20 = ac.getERC20Info(_asset);

            IERC20Metadata erc20 = IERC20Metadata(frc20);

            // If asset don't regist, revert.
            require(frc20 != address(0x00), "Asset type must registed");

            uint8 decimal = erc20.decimals();

            uint256 amount = _value;

            if (decimal > 6) {
                amount = _extendDecimal(_value, decimal - 6);
            }

            lc.withdrawFRC20(frc20, _to, amount, _data);

            emit WithdrawFRC20(frc20, _from, _to, amount);
        }
    }

    /**
     * @dev withdraw FRC20 token, this function can only be called by system.
     * @param _asset the encoded ID of the asset.
     * @param _from from address of findora.
     * @param _to receive address.
     * @param _value amount of funds transferred.
     * @param _data additional data when transferring funds.
     */
    function withdrawAsset(
        bytes32 _asset,
        bytes calldata _from,
        address _to,
        uint256 _value,
        bytes calldata _data
    ) public onlySystem {
        PrismXXBridge bridge = PrismXXBridge(payable(__self));

        bridge._withdrawAsset(_asset, _from, _to, _value, _data);
    }

    /**
     * @dev Consume current MintOp entry, this function can only be called by system.
     * @return current MintOp entry
     */
    function consumeMint() public onlySystem returns (MintOp[] memory) {
        PrismXXBridge bridge = PrismXXBridge(payable(__self));

        return bridge._consumeMint();
    }

    /**
     * @dev Get and delete current MintOp entry, this function can only be called by proxy.
     * @return current MintOp entry
     */
    function _consumeMint() public onlyProxy returns (MintOp[] memory) {
        MintOp[] memory ret = ops;

        delete ops;

        return ret;
    }

    /**
     * @dev Fallback function in order to receive FRA.
     */
    receive() external payable {}
}
