/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IPrismXXLedgerInterface extends utils.Interface {
  functions: {
    "depositFRC1155(address,address,uint256,uint256)": FunctionFragment;
    "depositFRC20(address,address,uint256)": FunctionFragment;
    "depositFRC721(address,address,uint256)": FunctionFragment;
    "withdrawFRC1155(address,address,uint256,uint256,bytes)": FunctionFragment;
    "withdrawFRC20(address,address,uint256)": FunctionFragment;
    "withdrawFRC721(address,address,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "depositFRC1155"
      | "depositFRC20"
      | "depositFRC721"
      | "withdrawFRC1155"
      | "withdrawFRC20"
      | "withdrawFRC721"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositFRC1155",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFRC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFRC721",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFRC1155",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFRC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFRC721",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "depositFRC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFRC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFRC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFRC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFRC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFRC721",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IPrismXXLedger extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPrismXXLedgerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    depositFRC1155(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>,
      _amounts: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFRC20(
      _frc20: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFRC721(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFRC1155(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>,
      _amounts: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFRC20(
      _frc20: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFRC721(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  depositFRC1155(
    _addr: PromiseOrValue<string>,
    _target: PromiseOrValue<string>,
    _ids: PromiseOrValue<BigNumberish>,
    _amounts: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFRC20(
    _frc20: PromiseOrValue<string>,
    _target: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFRC721(
    _addr: PromiseOrValue<string>,
    _target: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFRC1155(
    _addr: PromiseOrValue<string>,
    _target: PromiseOrValue<string>,
    _ids: PromiseOrValue<BigNumberish>,
    _amounts: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFRC20(
    _frc20: PromiseOrValue<string>,
    _target: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFRC721(
    _addr: PromiseOrValue<string>,
    _target: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositFRC1155(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>,
      _amounts: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFRC20(
      _frc20: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFRC721(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFRC1155(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>,
      _amounts: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFRC20(
      _frc20: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFRC721(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    depositFRC1155(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>,
      _amounts: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFRC20(
      _frc20: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFRC721(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFRC1155(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>,
      _amounts: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFRC20(
      _frc20: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFRC721(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositFRC1155(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>,
      _amounts: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFRC20(
      _frc20: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFRC721(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFRC1155(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>,
      _amounts: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFRC20(
      _frc20: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFRC721(
      _addr: PromiseOrValue<string>,
      _target: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
