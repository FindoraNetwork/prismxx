// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Params is Initializable, OwnableUpgradeable {
    address public bridge;

    function initialize(address _bridge) public initializer {
        bridge = _bridge;
        __Context_init_unchained();
        __Ownable_init_unchained();
    }

    mapping(string => uint256) private uint256Params;

    event Uint256ParamSetted(string indexed _key, uint256 _value);

    function SetUint256Param(string memory _key, uint256 _value)
        external
        onlyOwner
    {
        uint256Params[_key] = _value;
        emit Uint256ParamSetted(_key, _value);
    }

    function GetUint256Param(string memory _key) public view returns (uint256) {
        return uint256Params[_key];
    }
}
