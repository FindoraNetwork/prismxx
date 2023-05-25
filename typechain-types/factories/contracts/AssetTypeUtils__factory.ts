/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  AssetTypeUtils,
  AssetTypeUtilsInterface,
} from "../../contracts/AssetTypeUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "computeERC1155AssetType",
    outputs: [
      {
        internalType: "bytes32",
        name: "result",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "computeERC20AssetType",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "computeERC721AssetType",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bbf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806338ace49c146100465780633eb0edcf14610076578063afeb7cd5146100a6575b600080fd5b610060600480360381019061005b91906107ef565b6100d6565b60405161006d9190610848565b60405180910390f35b610090600480360381019061008b9190610863565b61038d565b60405161009d9190610848565b60405180910390f35b6100c060048036038101906100bb91906107ef565b61049f565b6040516100cd9190610848565b60405180910390f35b6000808260001b90506000602067ffffffffffffffff8111156100fc576100fb610890565b5b6040519080825280601f01601f19166020018201604052801561012e5781602001600182028036833780820191505090505b5090506000602067ffffffffffffffff81111561014e5761014d610890565b5b6040519080825280601f01601f1916602001820160405280156101805781602001600182028036833780820191505090505b50905060005b601f8110156101fb578381602081106101a2576101a16108bf565b5b1a60f81b8382815181106101b9576101b86108bf565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806101f39061091d565b915050610186565b83601f6020811061020f5761020e6108bf565b5b1a60f81b82600081518110610227576102266108bf565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600083610262906109a2565b9050600083610270906109a2565b905060008061200273ffffffffffffffffffffffffffffffffffffffff167faa31eb25c5789d021dc9abbd255653c17aebca3728aa8d8d4eeb628e8072613b8c86866040516020016102c59493929190610a18565b6040516020818303038152906040526040516102e19190610acc565b600060405180830381855afa9150503d806000811461031c576040519150601f19603f3d011682016040523d82523d6000602084013e610321565b606091505b5091509150818015610334575060208151145b610373576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036a90610b40565b60405180910390fd5b8061037d906109a2565b9850505050505050505092915050565b600080600061200273ffffffffffffffffffffffffffffffffffffffff167f417da15577dd9592732295d8c27d76c130427b4f6cccf630c99e59334cdf963d856040516020016103de929190610b60565b6040516020818303038152906040526040516103fa9190610acc565b600060405180830381855afa9150503d8060008114610435576040519150601f19603f3d011682016040523d82523d6000602084013e61043a565b606091505b509150915081801561044d575060208151145b61048c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048390610b40565b60405180910390fd5b80610496906109a2565b92505050919050565b6000808260001b90506000602067ffffffffffffffff8111156104c5576104c4610890565b5b6040519080825280601f01601f1916602001820160405280156104f75781602001600182028036833780820191505090505b5090506000602067ffffffffffffffff81111561051757610516610890565b5b6040519080825280601f01601f1916602001820160405280156105495781602001600182028036833780820191505090505b50905060005b601f8110156105c45783816020811061056b5761056a6108bf565b5b1a60f81b838281518110610582576105816108bf565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806105bc9061091d565b91505061054f565b83601f602081106105d8576105d76108bf565b5b1a60f81b826000815181106105f0576105ef6108bf565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060008361062b906109a2565b9050600083610639906109a2565b905060008061200273ffffffffffffffffffffffffffffffffffffffff167f962b34e0f41e00787e5adc7b0f606811d33744e56b86b2cf8a2358960330249a8c868660405160200161068e9493929190610a18565b6040516020818303038152906040526040516106aa9190610acc565b600060405180830381855afa9150503d80600081146106e5576040519150601f19603f3d011682016040523d82523d6000602084013e6106ea565b606091505b50915091508180156106fd575060208151145b61073c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073390610b40565b60405180910390fd5b80610746906109a2565b9850505050505050505092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107868261075b565b9050919050565b6107968161077b565b81146107a157600080fd5b50565b6000813590506107b38161078d565b92915050565b6000819050919050565b6107cc816107b9565b81146107d757600080fd5b50565b6000813590506107e9816107c3565b92915050565b6000806040838503121561080657610805610756565b5b6000610814858286016107a4565b9250506020610825858286016107da565b9150509250929050565b6000819050919050565b6108428161082f565b82525050565b600060208201905061085d6000830184610839565b92915050565b60006020828403121561087957610878610756565b5b6000610887848285016107a4565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610928826107b9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361095a576109596108ee565b5b600182019050919050565b600081519050919050565b6000819050602082019050919050565b600061098c825161082f565b80915050919050565b600082821b905092915050565b60006109ad82610965565b826109b784610970565b90506109c281610980565b92506020821015610a02576109fd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802610995565b831692505b5050919050565b610a128161077b565b82525050565b6000608082019050610a2d6000830187610839565b610a3a6020830186610a09565b610a476040830185610839565b610a546060830184610839565b95945050505050565b600081905092915050565b60005b83811015610a86578082015181840152602081019050610a6b565b83811115610a95576000848401525b50505050565b6000610aa682610965565b610ab08185610a5d565b9350610ac0818560208601610a68565b80840191505092915050565b6000610ad88284610a9b565b915081905092915050565b600082825260208201905092915050565b7f507265636f6d70696c652063616c6c206661696c656400000000000000000000600082015250565b6000610b2a601683610ae3565b9150610b3582610af4565b602082019050919050565b60006020820190508181036000830152610b5981610b1d565b9050919050565b6000604082019050610b756000830185610839565b610b826020830184610a09565b939250505056fea26469706673582212205a638dfb291ab7b47cf6bb9c416d2123f67ea472384de89f7c8e7c9b741699f064736f6c634300080d0033";

type AssetTypeUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetTypeUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetTypeUtils__factory extends ContractFactory {
  constructor(...args: AssetTypeUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetTypeUtils> {
    return super.deploy(overrides || {}) as Promise<AssetTypeUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetTypeUtils {
    return super.attach(address) as AssetTypeUtils;
  }
  override connect(signer: Signer): AssetTypeUtils__factory {
    return super.connect(signer) as AssetTypeUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetTypeUtilsInterface {
    return new utils.Interface(_abi) as AssetTypeUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetTypeUtils {
    return new Contract(address, _abi, signerOrProvider) as AssetTypeUtils;
  }
}
