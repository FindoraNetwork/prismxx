/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1967Proxy,
  ERC1967ProxyInterface,
} from "../../../../../@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405260405162000c6438038062000c6483398181016040528101906200002991906200058a565b6200003d828260006200004560201b60201c565b5050620007e1565b62000056836200008860201b60201c565b600082511180620000645750805b156200008357620000818383620000df60201b620000371760201c565b505b505050565b62000099816200011560201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606200010d838360405180606001604052806027815260200162000c3d60279139620001eb60201b60201c565b905092915050565b6200012b816200027d60201b620000641760201c565b6200016d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001649062000677565b60405180910390fd5b80620001a77f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620002a060201b620000871760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051620002179190620006e6565b600060405180830381855af49150503d806000811462000254576040519150601f19603f3d011682016040523d82523d6000602084013e62000259565b606091505b50915091506200027286838387620002aa60201b60201c565b925050509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b606083156200031a5760008351036200031157620002ce856200027d60201b60201c565b62000310576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000307906200074f565b60405180910390fd5b5b8290506200032d565b6200032c83836200033560201b60201c565b5b949350505050565b600082511115620003495781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200037f9190620007bd565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003c9826200039c565b9050919050565b620003db81620003bc565b8114620003e757600080fd5b50565b600081519050620003fb81620003d0565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000456826200040b565b810181811067ffffffffffffffff821117156200047857620004776200041c565b5b80604052505050565b60006200048d62000388565b90506200049b82826200044b565b919050565b600067ffffffffffffffff821115620004be57620004bd6200041c565b5b620004c9826200040b565b9050602081019050919050565b60005b83811015620004f6578082015181840152602081019050620004d9565b8381111562000506576000848401525b50505050565b6000620005236200051d84620004a0565b62000481565b90508281526020810184848401111562000542576200054162000406565b5b6200054f848285620004d6565b509392505050565b600082601f8301126200056f576200056e62000401565b5b8151620005818482602086016200050c565b91505092915050565b60008060408385031215620005a457620005a362000392565b5b6000620005b485828601620003ea565b925050602083015167ffffffffffffffff811115620005d857620005d762000397565b5b620005e68582860162000557565b9150509250929050565b600082825260208201905092915050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b60006200065f602d83620005f0565b91506200066c8262000601565b604082019050919050565b60006020820190508181036000830152620006928162000650565b9050919050565b600081519050919050565b600081905092915050565b6000620006bc8262000699565b620006c88185620006a4565b9350620006da818560208601620004d6565b80840191505092915050565b6000620006f48284620006af565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600062000737601d83620005f0565b91506200074482620006ff565b602082019050919050565b600060208201905081810360008301526200076a8162000728565b9050919050565b600081519050919050565b6000620007898262000771565b620007958185620005f0565b9350620007a7818560208601620004d6565b620007b2816200040b565b840191505092915050565b60006020820190508181036000830152620007d981846200077c565b905092915050565b61044c80620007f16000396000f3fe6080604052366100135761001161001d565b005b61001b61001d565b005b610025610091565b610035610030610093565b6100a2565b565b606061005c83836040518060600160405280602781526020016103f0602791396100c8565b905092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b565b600061009d61014e565b905090565b3660008037600080366000845af43d6000803e80600081146100c3573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516100f291906102e4565b600060405180830381855af49150503d806000811461012d576040519150601f19603f3d011682016040523d82523d6000602084013e610132565b606091505b5091509150610143868383876101a5565b925050509392505050565b600061017c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610087565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606083156102075760008351036101ff576101bf85610064565b6101fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f590610358565b60405180910390fd5b5b829050610212565b610211838361021a565b5b949350505050565b60008251111561022d5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026191906103cd565b60405180910390fd5b600081519050919050565b600081905092915050565b60005b8381101561029e578082015181840152602081019050610283565b838111156102ad576000848401525b50505050565b60006102be8261026a565b6102c88185610275565b93506102d8818560208601610280565b80840191505092915050565b60006102f082846102b3565b915081905092915050565b600082825260208201905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000610342601d836102fb565b915061034d8261030c565b602082019050919050565b6000602082019050818103600083015261037181610335565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b600061039f82610378565b6103a981856102fb565b93506103b9818560208601610280565b6103c281610383565b840191505092915050565b600060208201905081810360008301526103e78184610394565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a80244726b14ed0bfd0039b315c5353c69d9bbf83b258a168eedd220f8346db364736f6c634300080d0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type ERC1967ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1967ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1967Proxy__factory extends ContractFactory {
  constructor(...args: ERC1967ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1967Proxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<ERC1967Proxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  override attach(address: string): ERC1967Proxy {
    return super.attach(address) as ERC1967Proxy;
  }
  override connect(signer: Signer): ERC1967Proxy__factory {
    return super.connect(signer) as ERC1967Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1967ProxyInterface {
    return new utils.Interface(_abi) as ERC1967ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1967Proxy {
    return new Contract(address, _abi, signerOrProvider) as ERC1967Proxy;
  }
}