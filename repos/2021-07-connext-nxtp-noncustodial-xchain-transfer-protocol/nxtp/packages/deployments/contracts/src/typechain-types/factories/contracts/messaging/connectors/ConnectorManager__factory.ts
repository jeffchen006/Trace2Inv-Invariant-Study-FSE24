/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ConnectorManager,
  ConnectorManagerInterface,
} from "../../../../contracts/messaging/connectors/ConnectorManager";

const _abi = [
  {
    inputs: [],
    name: "home",
    outputs: [
      {
        internalType: "contract IOutbox",
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
        internalType: "address",
        name: "_potentialReplica",
        type: "address",
      },
    ],
    name: "isReplica",
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
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ConnectorManager__factory {
  static readonly abi = _abi;
  static createInterface(): ConnectorManagerInterface {
    return new utils.Interface(_abi) as ConnectorManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectorManager {
    return new Contract(address, _abi, signerOrProvider) as ConnectorManager;
  }
}