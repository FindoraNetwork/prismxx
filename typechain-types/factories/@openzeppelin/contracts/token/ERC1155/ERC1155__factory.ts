/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1155,
  ERC1155Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC1155/ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200289f3803806200289f8339818101604052810190620000379190620002b8565b62000048816200004f60201b60201c565b506200036d565b8060029080519060200190620000679291906200006b565b5050565b828054620000799062000338565b90600052602060002090601f0160209004810192826200009d5760008555620000e9565b82601f10620000b857805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e8578251825591602001919060010190620000cb565b5b509050620000f89190620000fc565b5090565b5b8082111562000117576000816000905550600101620000fd565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001848262000139565b810181811067ffffffffffffffff82111715620001a657620001a56200014a565b5b80604052505050565b6000620001bb6200011b565b9050620001c9828262000179565b919050565b600067ffffffffffffffff821115620001ec57620001eb6200014a565b5b620001f78262000139565b9050602081019050919050565b60005b838110156200022457808201518184015260208101905062000207565b8381111562000234576000848401525b50505050565b6000620002516200024b84620001ce565b620001af565b90508281526020810184848401111562000270576200026f62000134565b5b6200027d84828562000204565b509392505050565b600082601f8301126200029d576200029c6200012f565b5b8151620002af8482602086016200023a565b91505092915050565b600060208284031215620002d157620002d062000125565b5b600082015167ffffffffffffffff811115620002f257620002f16200012a565b5b620003008482850162000285565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200035157607f821691505b60208210810362000367576200036662000309565b5b50919050565b612522806200037d6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f414610138578063a22cb46514610168578063e985e9c514610184578063f242432a146101b457610087565b8062fdd58e1461008c57806301ffc9a7146100bc5780630e89341c146100ec5780632eb2c2d61461011c575b600080fd5b6100a660048036038101906100a191906113b0565b6101d0565b6040516100b391906113ff565b60405180910390f35b6100d660048036038101906100d19190611472565b610298565b6040516100e391906114ba565b60405180910390f35b610106600480360381019061010191906114d5565b61037a565b604051610113919061159b565b60405180910390f35b610136600480360381019061013191906117ba565b61040e565b005b610152600480360381019061014d919061194c565b6104af565b60405161015f9190611a82565b60405180910390f35b610182600480360381019061017d9190611ad0565b6105c8565b005b61019e60048036038101906101999190611b10565b6105de565b6040516101ab91906114ba565b60405180910390f35b6101ce60048036038101906101c99190611b50565b610672565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610240576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023790611c59565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061036357507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610373575061037282610713565b5b9050919050565b60606002805461038990611ca8565b80601f01602080910402602001604051908101604052809291908181526020018280546103b590611ca8565b80156104025780601f106103d757610100808354040283529160200191610402565b820191906000526020600020905b8154815290600101906020018083116103e557829003601f168201915b50505050509050919050565b61041661077d565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061045c575061045b8561045661077d565b6105de565b5b61049b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049290611d4b565b60405180910390fd5b6104a88585858585610785565b5050505050565b606081518351146104f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611ddd565b60405180910390fd5b6000835167ffffffffffffffff811115610512576105116115c2565b5b6040519080825280602002602001820160405280156105405781602001602082028036833780820191505090505b50905060005b84518110156105bd5761058d85828151811061056557610564611dfd565b5b60200260200101518583815181106105805761057f611dfd565b5b60200260200101516101d0565b8282815181106105a05761059f611dfd565b5b602002602001018181525050806105b690611e5b565b9050610546565b508091505092915050565b6105da6105d361077d565b8383610aa6565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61067a61077d565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806106c057506106bf856106ba61077d565b6105de565b5b6106ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f690611d4b565b60405180910390fd5b61070c8585858585610c12565b5050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b81518351146107c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c090611f15565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082f90611fa7565b60405180910390fd5b600061084261077d565b9050610852818787878787610ead565b60005b8451811015610a0357600085828151811061087357610872611dfd565b5b60200260200101519050600085838151811061089257610891611dfd565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610933576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092a90612039565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109e89190612059565b92505081905550505050806109fc90611e5b565b9050610855565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610a7a9291906120af565b60405180910390a4610a90818787878787610eb5565b610a9e818787878787610ebd565b505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0b90612158565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610c0591906114ba565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610c81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7890611fa7565b60405180910390fd5b6000610c8b61077d565b90506000610c9885611094565b90506000610ca585611094565b9050610cb5838989858589610ead565b600080600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905085811015610d4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4390612039565b60405180910390fd5b85810360008089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560008089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e019190612059565b925050819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a8a604051610e7e929190612178565b60405180910390a4610e94848a8a86868a610eb5565b610ea2848a8a8a8a8a61110e565b505050505050505050565b505050505050565b505050505050565b610edc8473ffffffffffffffffffffffffffffffffffffffff166112e5565b1561108c578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401610f22959493929190612205565b6020604051808303816000875af1925050508015610f5e57506040513d601f19601f82011682018060405250810190610f5b9190612282565b60015b61100357610f6a6122bc565b806308c379a003610fc65750610f7e6122de565b80610f895750610fc8565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbd919061159b565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ffa906123e0565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461108a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108190612472565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff8111156110b3576110b26115c2565b5b6040519080825280602002602001820160405280156110e15781602001602082028036833780820191505090505b50905082816000815181106110f9576110f8611dfd565b5b60200260200101818152505080915050919050565b61112d8473ffffffffffffffffffffffffffffffffffffffff166112e5565b156112dd578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611173959493929190612492565b6020604051808303816000875af19250505080156111af57506040513d601f19601f820116820180604052508101906111ac9190612282565b60015b611254576111bb6122bc565b806308c379a00361121757506111cf6122de565b806111da5750611219565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120e919061159b565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124b906123e0565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146112db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d290612472565b60405180910390fd5b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113478261131c565b9050919050565b6113578161133c565b811461136257600080fd5b50565b6000813590506113748161134e565b92915050565b6000819050919050565b61138d8161137a565b811461139857600080fd5b50565b6000813590506113aa81611384565b92915050565b600080604083850312156113c7576113c6611312565b5b60006113d585828601611365565b92505060206113e68582860161139b565b9150509250929050565b6113f98161137a565b82525050565b600060208201905061141460008301846113f0565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61144f8161141a565b811461145a57600080fd5b50565b60008135905061146c81611446565b92915050565b60006020828403121561148857611487611312565b5b60006114968482850161145d565b91505092915050565b60008115159050919050565b6114b48161149f565b82525050565b60006020820190506114cf60008301846114ab565b92915050565b6000602082840312156114eb576114ea611312565b5b60006114f98482850161139b565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561153c578082015181840152602081019050611521565b8381111561154b576000848401525b50505050565b6000601f19601f8301169050919050565b600061156d82611502565b611577818561150d565b935061158781856020860161151e565b61159081611551565b840191505092915050565b600060208201905081810360008301526115b58184611562565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6115fa82611551565b810181811067ffffffffffffffff82111715611619576116186115c2565b5b80604052505050565b600061162c611308565b905061163882826115f1565b919050565b600067ffffffffffffffff821115611658576116576115c2565b5b602082029050602081019050919050565b600080fd5b600061168161167c8461163d565b611622565b905080838252602082019050602084028301858111156116a4576116a3611669565b5b835b818110156116cd57806116b9888261139b565b8452602084019350506020810190506116a6565b5050509392505050565b600082601f8301126116ec576116eb6115bd565b5b81356116fc84826020860161166e565b91505092915050565b600080fd5b600067ffffffffffffffff821115611725576117246115c2565b5b61172e82611551565b9050602081019050919050565b82818337600083830152505050565b600061175d6117588461170a565b611622565b90508281526020810184848401111561177957611778611705565b5b61178484828561173b565b509392505050565b600082601f8301126117a1576117a06115bd565b5b81356117b184826020860161174a565b91505092915050565b600080600080600060a086880312156117d6576117d5611312565b5b60006117e488828901611365565b95505060206117f588828901611365565b945050604086013567ffffffffffffffff81111561181657611815611317565b5b611822888289016116d7565b935050606086013567ffffffffffffffff81111561184357611842611317565b5b61184f888289016116d7565b925050608086013567ffffffffffffffff8111156118705761186f611317565b5b61187c8882890161178c565b9150509295509295909350565b600067ffffffffffffffff8211156118a4576118a36115c2565b5b602082029050602081019050919050565b60006118c86118c384611889565b611622565b905080838252602082019050602084028301858111156118eb576118ea611669565b5b835b8181101561191457806119008882611365565b8452602084019350506020810190506118ed565b5050509392505050565b600082601f830112611933576119326115bd565b5b81356119438482602086016118b5565b91505092915050565b6000806040838503121561196357611962611312565b5b600083013567ffffffffffffffff81111561198157611980611317565b5b61198d8582860161191e565b925050602083013567ffffffffffffffff8111156119ae576119ad611317565b5b6119ba858286016116d7565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6119f98161137a565b82525050565b6000611a0b83836119f0565b60208301905092915050565b6000602082019050919050565b6000611a2f826119c4565b611a3981856119cf565b9350611a44836119e0565b8060005b83811015611a75578151611a5c88826119ff565b9750611a6783611a17565b925050600181019050611a48565b5085935050505092915050565b60006020820190508181036000830152611a9c8184611a24565b905092915050565b611aad8161149f565b8114611ab857600080fd5b50565b600081359050611aca81611aa4565b92915050565b60008060408385031215611ae757611ae6611312565b5b6000611af585828601611365565b9250506020611b0685828601611abb565b9150509250929050565b60008060408385031215611b2757611b26611312565b5b6000611b3585828601611365565b9250506020611b4685828601611365565b9150509250929050565b600080600080600060a08688031215611b6c57611b6b611312565b5b6000611b7a88828901611365565b9550506020611b8b88828901611365565b9450506040611b9c8882890161139b565b9350506060611bad8882890161139b565b925050608086013567ffffffffffffffff811115611bce57611bcd611317565b5b611bda8882890161178c565b9150509295509295909350565b7f455243313135353a2061646472657373207a65726f206973206e6f742061207660008201527f616c6964206f776e657200000000000000000000000000000000000000000000602082015250565b6000611c43602a8361150d565b9150611c4e82611be7565b604082019050919050565b60006020820190508181036000830152611c7281611c36565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611cc057607f821691505b602082108103611cd357611cd2611c79565b5b50919050565b7f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60008201527f6572206f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611d35602e8361150d565b9150611d4082611cd9565b604082019050919050565b60006020820190508181036000830152611d6481611d28565b9050919050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b6000611dc760298361150d565b9150611dd282611d6b565b604082019050919050565b60006020820190508181036000830152611df681611dba565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e668261137a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611e9857611e97611e2c565b5b600182019050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b6000611eff60288361150d565b9150611f0a82611ea3565b604082019050919050565b60006020820190508181036000830152611f2e81611ef2565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611f9160258361150d565b9150611f9c82611f35565b604082019050919050565b60006020820190508181036000830152611fc081611f84565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b6000612023602a8361150d565b915061202e82611fc7565b604082019050919050565b6000602082019050818103600083015261205281612016565b9050919050565b60006120648261137a565b915061206f8361137a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156120a4576120a3611e2c565b5b828201905092915050565b600060408201905081810360008301526120c98185611a24565b905081810360208301526120dd8184611a24565b90509392505050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b600061214260298361150d565b915061214d826120e6565b604082019050919050565b6000602082019050818103600083015261217181612135565b9050919050565b600060408201905061218d60008301856113f0565b61219a60208301846113f0565b9392505050565b6121aa8161133c565b82525050565b600081519050919050565b600082825260208201905092915050565b60006121d7826121b0565b6121e181856121bb565b93506121f181856020860161151e565b6121fa81611551565b840191505092915050565b600060a08201905061221a60008301886121a1565b61222760208301876121a1565b81810360408301526122398186611a24565b9050818103606083015261224d8185611a24565b9050818103608083015261226181846121cc565b90509695505050505050565b60008151905061227c81611446565b92915050565b60006020828403121561229857612297611312565b5b60006122a68482850161226d565b91505092915050565b60008160e01c9050919050565b600060033d11156122db5760046000803e6122d86000516122af565b90505b90565b600060443d1061236b576122f0611308565b60043d036004823e80513d602482011167ffffffffffffffff8211171561231857505061236b565b808201805167ffffffffffffffff811115612336575050505061236b565b80602083010160043d03850181111561235357505050505061236b565b612362826020018501866115f1565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b60006123ca60348361150d565b91506123d58261236e565b604082019050919050565b600060208201905081810360008301526123f9816123bd565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b600061245c60288361150d565b915061246782612400565b604082019050919050565b6000602082019050818103600083015261248b8161244f565b9050919050565b600060a0820190506124a760008301886121a1565b6124b460208301876121a1565b6124c160408301866113f0565b6124ce60608301856113f0565b81810360808301526124e081846121cc565b9050969550505050505056fea264697066735822122047b4e5115d2e1d1561f142cc245aa99f34c3cadbfb1499fbf89cab413c5dd49e64736f6c634300080d0033";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  override getDeployTransaction(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  override connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
