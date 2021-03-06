/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StartTokenIdHelper,
  StartTokenIdHelperInterface,
} from "../StartTokenIdHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTokenId_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "startTokenId",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161010338038061010383398101604081905261002f91610037565b608052610050565b60006020828403121561004957600080fd5b5051919050565b608051609b610068600039600060310152609b6000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063e6798baa14602d575b600080fd5b60537f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200160405180910390f3fea2646970667358221220af8f67153ac1928dc77485c64621036529ac89e63d4e1c2c4936c07c25efcc3364736f6c634300080d0033";

export class StartTokenIdHelper__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    startTokenId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StartTokenIdHelper> {
    return super.deploy(
      startTokenId_,
      overrides || {}
    ) as Promise<StartTokenIdHelper>;
  }
  getDeployTransaction(
    startTokenId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(startTokenId_, overrides || {});
  }
  attach(address: string): StartTokenIdHelper {
    return super.attach(address) as StartTokenIdHelper;
  }
  connect(signer: Signer): StartTokenIdHelper__factory {
    return super.connect(signer) as StartTokenIdHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StartTokenIdHelperInterface {
    return new utils.Interface(_abi) as StartTokenIdHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StartTokenIdHelper {
    return new Contract(address, _abi, signerOrProvider) as StartTokenIdHelper;
  }
}
