/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  PrismXXProxyAdmin,
  PrismXXProxyAdminInterface,
} from "../../../../contracts/examples/ProxyAdmin.sol/PrismXXProxyAdmin";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeProxyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610ccc8061010d6000396000f3fe60806040526004361061007b5760003560e01c80639623609d1161004e5780639623609d1461012857806399a88ec414610144578063f2fde38b1461016d578063f3b7dead146101965761007b565b8063204e1c7a14610080578063715018a6146100bd5780637eff275e146100d45780638da5cb5b146100fd575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a291906106f2565b6101d3565b6040516100b49190610740565b60405180910390f35b3480156100c957600080fd5b506100d2610267565b005b3480156100e057600080fd5b506100fb60048036038101906100f69190610787565b61027b565b005b34801561010957600080fd5b506101126102f2565b60405161011f9190610740565b60405180910390f35b610142600480360381019061013d919061090d565b61031b565b005b34801561015057600080fd5b5061016b60048036038101906101669190610787565b610396565b005b34801561017957600080fd5b50610194600480360381019061018f919061097c565b61040d565b005b3480156101a257600080fd5b506101bd60048036038101906101b891906106f2565b610490565b6040516101ca9190610740565b60405180910390f35b60008060008373ffffffffffffffffffffffffffffffffffffffff166040516101fb90610a00565b600060405180830381855afa9150503d8060008114610236576040519150601f19603f3d011682016040523d82523d6000602084013e61023b565b606091505b50915091508161024a57600080fd5b8080602001905181019061025e9190610a41565b92505050919050565b61026f610524565b61027960006105a2565b565b610283610524565b8173ffffffffffffffffffffffffffffffffffffffff16638f283970826040518263ffffffff1660e01b81526004016102bc9190610740565b600060405180830381600087803b1580156102d657600080fd5b505af11580156102ea573d6000803e3d6000fd5b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610323610524565b8273ffffffffffffffffffffffffffffffffffffffff16634f1ef2863484846040518463ffffffff1660e01b815260040161035f929190610af6565b6000604051808303818588803b15801561037857600080fd5b505af115801561038c573d6000803e3d6000fd5b5050505050505050565b61039e610524565b8173ffffffffffffffffffffffffffffffffffffffff16633659cfe6826040518263ffffffff1660e01b81526004016103d79190610740565b600060405180830381600087803b1580156103f157600080fd5b505af1158015610405573d6000803e3d6000fd5b505050505050565b610415610524565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047b90610ba9565b60405180910390fd5b61048d816105a2565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff166040516104b890610c15565b600060405180830381855afa9150503d80600081146104f3576040519150601f19603f3d011682016040523d82523d6000602084013e6104f8565b606091505b50915091508161050757600080fd5b8080602001905181019061051b9190610a41565b92505050919050565b61052c610666565b73ffffffffffffffffffffffffffffffffffffffff1661054a6102f2565b73ffffffffffffffffffffffffffffffffffffffff16146105a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790610c76565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106ad82610682565b9050919050565b60006106bf826106a2565b9050919050565b6106cf816106b4565b81146106da57600080fd5b50565b6000813590506106ec816106c6565b92915050565b60006020828403121561070857610707610678565b5b6000610716848285016106dd565b91505092915050565b600061072a82610682565b9050919050565b61073a8161071f565b82525050565b60006020820190506107556000830184610731565b92915050565b6107648161071f565b811461076f57600080fd5b50565b6000813590506107818161075b565b92915050565b6000806040838503121561079e5761079d610678565b5b60006107ac858286016106dd565b92505060206107bd85828601610772565b9150509250929050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61081a826107d1565b810181811067ffffffffffffffff82111715610839576108386107e2565b5b80604052505050565b600061084c61066e565b90506108588282610811565b919050565b600067ffffffffffffffff821115610878576108776107e2565b5b610881826107d1565b9050602081019050919050565b82818337600083830152505050565b60006108b06108ab8461085d565b610842565b9050828152602081018484840111156108cc576108cb6107cc565b5b6108d784828561088e565b509392505050565b600082601f8301126108f4576108f36107c7565b5b813561090484826020860161089d565b91505092915050565b60008060006060848603121561092657610925610678565b5b6000610934868287016106dd565b935050602061094586828701610772565b925050604084013567ffffffffffffffff8111156109665761096561067d565b5b610972868287016108df565b9150509250925092565b60006020828403121561099257610991610678565b5b60006109a084828501610772565b91505092915050565b600081905092915050565b7f5c60da1b00000000000000000000000000000000000000000000000000000000600082015250565b60006109ea6004836109a9565b91506109f5826109b4565b600482019050919050565b6000610a0b826109dd565b9150819050919050565b610a1e816106a2565b8114610a2957600080fd5b50565b600081519050610a3b81610a15565b92915050565b600060208284031215610a5757610a56610678565b5b6000610a6584828501610a2c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610aa8578082015181840152602081019050610a8d565b83811115610ab7576000848401525b50505050565b6000610ac882610a6e565b610ad28185610a79565b9350610ae2818560208601610a8a565b610aeb816107d1565b840191505092915050565b6000604082019050610b0b6000830185610731565b8181036020830152610b1d8184610abd565b90509392505050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610b93602683610b26565b9150610b9e82610b37565b604082019050919050565b60006020820190508181036000830152610bc281610b86565b9050919050565b7ff851a44000000000000000000000000000000000000000000000000000000000600082015250565b6000610bff6004836109a9565b9150610c0a82610bc9565b600482019050919050565b6000610c2082610bf2565b9150819050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610c60602083610b26565b9150610c6b82610c2a565b602082019050919050565b60006020820190508181036000830152610c8f81610c53565b905091905056fea26469706673582212203234132936ecf530df9ddce18c329413447df7c2719ec2e20cc928dd237f655464736f6c634300080d0033";

type PrismXXProxyAdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrismXXProxyAdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrismXXProxyAdmin__factory extends ContractFactory {
  constructor(...args: PrismXXProxyAdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PrismXXProxyAdmin> {
    return super.deploy(overrides || {}) as Promise<PrismXXProxyAdmin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PrismXXProxyAdmin {
    return super.attach(address) as PrismXXProxyAdmin;
  }
  override connect(signer: Signer): PrismXXProxyAdmin__factory {
    return super.connect(signer) as PrismXXProxyAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrismXXProxyAdminInterface {
    return new utils.Interface(_abi) as PrismXXProxyAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PrismXXProxyAdmin {
    return new Contract(address, _abi, signerOrProvider) as PrismXXProxyAdmin;
  }
}
