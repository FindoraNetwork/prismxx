/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PrismXXAsset,
  PrismXXAssetInterface,
} from "../../../contracts/examples/PrismXXAsset";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
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
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "adminSetBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "assets",
    outputs: [
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
      {
        internalType: "enum IPrismXXAsset.TokenType",
        name: "ty",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isBurn",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "decimal",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bridge",
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
        internalType: "bytes32",
        name: "_asset",
        type: "bytes32",
      },
    ],
    name: "getERC1155Info",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_asset",
        type: "bytes32",
      },
    ],
    name: "getERC20Info",
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
        internalType: "bytes32",
        name: "_asset",
        type: "bytes32",
      },
    ],
    name: "getERC721Info",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_asset",
        type: "bytes32",
      },
    ],
    name: "getTokenType",
    outputs: [
      {
        internalType: "enum IPrismXXAsset.TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridge",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_asset",
        type: "bytes32",
      },
    ],
    name: "isBurn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "bytes32",
        name: "_asset",
        type: "bytes32",
      },
    ],
    name: "setBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_asset",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "setERC1155Info",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_asset",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setERC20Info",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_asset",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "setERC721Info",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061124b806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063a8b7cc1611610097578063d87e0e3211610066578063d87e0e32146102ae578063e78cea92146102df578063ed7e205b146102fd578063f2fde38b1461031957610100565b8063a8b7cc1614610229578063c04fd06c14610245578063c4d66de814610276578063d0e5390d1461029257610100565b8063715018a6116100d3578063715018a61461019d5780638da5cb5b146101a7578063979a9b5e146101c55780639fda5b66146101f557610100565b80630404e3c51461010557806305c62fe3146101355780631996e4f4146101515780631a5a143e14610181575b600080fd5b61011f600480360381019061011a9190610ca1565b610335565b60405161012c9190610ce9565b60405180910390f35b61014f600480360381019061014a9190610d98565b610362565b005b61016b60048036038101906101669190610ca1565b610452565b6040516101789190610dfa565b60405180910390f35b61019b60048036038101906101969190610e15565b610492565b005b6101a56104de565b005b6101af6104f2565b6040516101bc9190610dfa565b60405180910390f35b6101df60048036038101906101da9190610ca1565b61051c565b6040516101ec9190610eb9565b60405180910390f35b61020f600480360381019061020a9190610ca1565b610549565b604051610220959493929190610eff565b60405180910390f35b610243600480360381019061023e9190610ca1565b6105c6565b005b61025f600480360381019061025a9190610ca1565b610600565b60405161026d929190610f52565b60405180910390f35b610290600480360381019061028b9190610e15565b61064e565b005b6102ac60048036038101906102a79190610d98565b6107c6565b005b6102c860048036038101906102c39190610ca1565b6108b6565b6040516102d6929190610f52565b60405180910390f35b6102e7610904565b6040516102f49190610dfa565b60405180910390f35b61031760048036038101906103129190610f7b565b61092a565b005b610333600480360381019061032e9190610e15565b610a74565b005b60006066600083815260200190815260200160002060020160019054906101000a900460ff169050919050565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103bc57600080fd5b6000606660008581526020019081526020016000209050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081816001018190555060018160020160006101000a81548160ff0219169083600281111561044757610446610e42565b5b021790555050505050565b60006066600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61049a610af7565b80606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6104e6610af7565b6104f06000610b75565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006066600083815260200190815260200160002060020160009054906101000a900460ff169050919050565b60666020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020160009054906101000a900460ff16908060020160019054906101000a900460ff16908060020160029054906101000a900460ff16905085565b6105ce610af7565b60016066600083815260200190815260200160002060020160016101000a81548160ff02191690831515021790555050565b60008060006066600085815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681600101549250925050915091565b60008060019054906101000a900460ff1615905080801561067f5750600160008054906101000a900460ff1660ff16105b806106ac575061068e30610c3b565b1580156106ab5750600160008054906101000a900460ff1660ff16145b5b6106eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e29061103e565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610728576001600060016101000a81548160ff0219169083151502179055505b81606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156107c25760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516107b991906110a3565b60405180910390a15b5050565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461082057600080fd5b6000606660008581526020019081526020016000209050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081816001018190555060028160020160006101000a81548160ff021916908360028111156108ab576108aa610e42565b5b021790555050505050565b60008060006066600085815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681600101549250925050915091565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461098457600080fd5b600060666000848152602001908152602001600020905060008290508073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109eb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0f91906110ea565b8260020160026101000a81548160ff021916908360ff160217905550828260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b610a7c610af7565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610aeb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae290611189565b60405180910390fd5b610af481610b75565b50565b610aff610c5e565b73ffffffffffffffffffffffffffffffffffffffff16610b1d6104f2565b73ffffffffffffffffffffffffffffffffffffffff1614610b73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6a906111f5565b60405180910390fd5b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600033905090565b600080fd5b6000819050919050565b610c7e81610c6b565b8114610c8957600080fd5b50565b600081359050610c9b81610c75565b92915050565b600060208284031215610cb757610cb6610c66565b5b6000610cc584828501610c8c565b91505092915050565b60008115159050919050565b610ce381610cce565b82525050565b6000602082019050610cfe6000830184610cda565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d2f82610d04565b9050919050565b610d3f81610d24565b8114610d4a57600080fd5b50565b600081359050610d5c81610d36565b92915050565b6000819050919050565b610d7581610d62565b8114610d8057600080fd5b50565b600081359050610d9281610d6c565b92915050565b600080600060608486031215610db157610db0610c66565b5b6000610dbf86828701610c8c565b9350506020610dd086828701610d4d565b9250506040610de186828701610d83565b9150509250925092565b610df481610d24565b82525050565b6000602082019050610e0f6000830184610deb565b92915050565b600060208284031215610e2b57610e2a610c66565b5b6000610e3984828501610d4d565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610e8257610e81610e42565b5b50565b6000819050610e9382610e71565b919050565b6000610ea382610e85565b9050919050565b610eb381610e98565b82525050565b6000602082019050610ece6000830184610eaa565b92915050565b610edd81610d62565b82525050565b600060ff82169050919050565b610ef981610ee3565b82525050565b600060a082019050610f146000830188610deb565b610f216020830187610ed4565b610f2e6040830186610eaa565b610f3b6060830185610cda565b610f486080830184610ef0565b9695505050505050565b6000604082019050610f676000830185610deb565b610f746020830184610ed4565b9392505050565b60008060408385031215610f9257610f91610c66565b5b6000610fa085828601610c8c565b9250506020610fb185828601610d4d565b9150509250929050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000611028602e83610fbb565b915061103382610fcc565b604082019050919050565b600060208201905081810360008301526110578161101b565b9050919050565b6000819050919050565b6000819050919050565b600061108d6110886110838461105e565b611068565b610ee3565b9050919050565b61109d81611072565b82525050565b60006020820190506110b86000830184611094565b92915050565b6110c781610ee3565b81146110d257600080fd5b50565b6000815190506110e4816110be565b92915050565b600060208284031215611100576110ff610c66565b5b600061110e848285016110d5565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611173602683610fbb565b915061117e82611117565b604082019050919050565b600060208201905081810360008301526111a281611166565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006111df602083610fbb565b91506111ea826111a9565b602082019050919050565b6000602082019050818103600083015261120e816111d2565b905091905056fea264697066735822122075ff9359bba57895468d18aa9f87d921b06136e9e7d2d1f0556488642cdb6f7d64736f6c634300080d0033";

type PrismXXAssetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrismXXAssetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrismXXAsset__factory extends ContractFactory {
  constructor(...args: PrismXXAssetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PrismXXAsset> {
    return super.deploy(overrides || {}) as Promise<PrismXXAsset>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PrismXXAsset {
    return super.attach(address) as PrismXXAsset;
  }
  override connect(signer: Signer): PrismXXAsset__factory {
    return super.connect(signer) as PrismXXAsset__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrismXXAssetInterface {
    return new utils.Interface(_abi) as PrismXXAssetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PrismXXAsset {
    return new Contract(address, _abi, signerOrProvider) as PrismXXAsset;
  }
}
