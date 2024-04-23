/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UpgradeBeaconController,
  UpgradeBeaconControllerInterface,
} from "../../../../contracts/shared/upgrade/UpgradeBeaconController";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
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
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
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
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
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
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
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
    name: "proposedTimestamp",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
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
        name: "_beacon",
        type: "address",
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x0004000000000002000500000000000200000000030100190000006003300270000000b20430019700030000004103550002000000010355000000b20030019d000100000000001f0000008001000039000000400010043f00000001012001900000003d0000c13d0000000001000031000000040110008c000001640000413d0000000201000367000000000101043b000000e001100270000000b80210009c000000cc0000613d000000b90210009c000000e60000613d000000ba0210009c000000fd0000613d000000bb0210009c000000630000613d000000bc0210009c0000007b0000613d000000bd0210009c000001280000613d000000be0210009c000001530000613d000000bf0210009c000000b30000613d000000c00110009c000001640000c13d0000000001000416000000000110004c000001640000c13d000000040100008a0000000001100031000000c102000041000000000310004c00000000030000190000000003024019000000c101100197000000000410004c000000000200a019000000c10110009c00000000010300190000000001026019000000000110004c000001640000c13d0000000201000039000000000101041a000000800010043f00000080010000390000002002000039000000000300001902c302880000040f0000000001000416000000000110004c000001640000c13d000000000400041a000000b2010000410000000002000414000000b20320009c0000000001024019000000c001100210000000b3011001c7000500000004001d000000b4054001970000800d020000390000000303000039000000b5040000410000000006000411000400000006001d02c302b90000040f0000000101200190000001640000613d0000000501000029000000b6011001970000000402000029000000000121019f000000000010041b0000000201000039000000000001041b0000000101000039000000000201041a000000b602200197000000000021041b00000020010000390000010000100443000001200000044300000100010000390000004002000039000000b70300004102c302880000040f0000000001000416000000000110004c000001640000c13d000000040100008a0000000001100031000000c102000041000000000310004c00000000030000190000000003024019000000c101100197000000000410004c000000000200a019000000c10110009c00000000010300190000000001026019000000000110004c000001640000c13d000000000100041a000000b402100197000000400100043d00000000002104350000002002000039000000000300001902c302880000040f0000000001000416000000000110004c000001640000c13d000000040100008a0000000001100031000000c102000041000000400310008c00000000030000190000000003024019000000c101100197000000000410004c000000000200a019000000c10110009c00000000010300190000000001026019000000000110004c000001640000c13d00000002010003670000000402100370000000000302043b000000b40230009c000001640000213d0000002401100370000000000401043b000000b40140009c000001640000213d000000000100041a000000b4011001970000000002000411000000000121004b000001800000c13d000500000004001d000000c8010000410000000000100439000400000003001d00000004003004430000800201000039000000240200003902c302760000040f000000400500043d000000000110004c000001d10000c13d0000004401500039000000ce020000410000000000210435000000240150003900000010020000390000000000210435000000cf0100004100000000001504350000000401500039000000200200003900000000002104350000006402000039000000000105001902c302920000040f0000000001000416000000000110004c000001640000c13d000000040100008a0000000001100031000000c102000041000000000310004c00000000030000190000000003024019000000c101100197000000000410004c000000000200a019000000c10110009c00000000010300190000000001026019000000000110004c000001640000c13d0000000101000039000000000101041a000000b402100197000000400100043d00000000002104350000002002000039000000000300001902c302880000040f0000000001000416000000000110004c000001640000c13d000000040100008a0000000001100031000000c102000041000000000310004c00000000030000190000000003024019000000c101100197000000000410004c000000000200a019000000c10110009c00000000010300190000000001026019000000000110004c000001640000c13d000000000100041a000000b40110019800000000020000190000000102006039000000400100043d00000000002104350000002002000039000000000300001902c302880000040f0000000001000416000000000110004c000001640000c13d000000040100008a0000000001100031000000c102000041000000000310004c00000000030000190000000003024019000000c101100197000000000410004c000000000200a019000000c10110009c00000000010300190000000001026019000000000110004c000001640000c13d000000400100043d000000d10200004100000000002104350000002002000039000000000300001902c302880000040f0000000001000416000000000110004c000001640000c13d000000040100008a0000000001100031000000c102000041000000000310004c00000000030000190000000003024019000000c101100197000000000410004c000000000200a019000000c10110009c00000000010300190000000001026019000000000110004c000001640000c13d000000000100041a000000b4011001970000000002000411000000000121004b000001800000c13d0000000201000039000000000101041a000500000001001d000000c30100004100000000001004390000800b01000039000000040200003902c302760000040f0000000503000029000000000231004b000001790000413d0000000001310049000000d10110009c0000018d0000a13d000000000130004c000001df0000c13d000000400100043d000000d3020000410000000000210435000000040200003902c302920000040f0000000001000416000000000110004c000001640000c13d000000040100008a0000000001100031000000c102000041000000200310008c00000000030000190000000003024019000000c101100197000000000410004c000000000200a019000000c10110009c00000000010300190000000001026019000000000110004c000001640000c13d00000004010000390000000201100367000000000301043b000000b40130009c000001640000213d000000000100041a000000b4021001970000000001000411000000000212004b000001800000c13d0000000104000039000000000504041a000000b402500197000000000232004b0000014c0000c13d0000000202000039000000000202041a000000000220004c000001e80000c13d000000000131004b000001b20000c13d000000400100043d000000c7020000410000000000210435000000040200003902c302920000040f0000000001000416000000000110004c000001640000c13d000000040100008a0000000001100031000000c102000041000000000310004c00000000030000190000000003024019000000c101100197000000000410004c000000000200a019000000c10110009c00000000010300190000000001026019000000000110004c000001670000613d0000000001000019000000000200001902c302920000040f0000000102000039000000000302041a000000b4013001970000000004000411000000000141004b000001850000c13d000500000004001d000300000003001d000400000002001d000000c30100004100000000001004390000800b01000039000000040200003902c302760000040f0000000204000039000000000204041a000000000321004b0000018a0000813d000000cd0100004100000000001004350000001101000039000000040010043f0000002402000039000000000100001902c302920000040f000000400100043d000000d0020000410000000000210435000000040200003902c302920000040f000000400100043d000000c2020000410000000000210435000000040200003902c302920000040f0000000001210049000000c40110009c000001920000813d000000400100043d000000d4020000410000000000210435000000040200003902c302920000040f000200000004001d000000000400041a000000b2010000410000000002000414000000b20320009c0000000001024019000000c001100210000000b3011001c7000100000004001d000000b4054001970000800d020000390000000303000039000000b504000041000000050600002902c302b90000040f0000000101200190000001640000613d0000000101000029000000b6011001970000000502000029000000000121019f000000000010041b0000000201000029000000000001041b0000000301000029000000b6011001970000000402000029000000000012041b00000000010000190000000002000019000000000300001902c302880000040f000000c30100004100000000001004390000800b010000390000000402000039000400000003001d000500000004001d000300000005001d02c302760000040f0000000203000039000000000013041b0000000301000029000000b6011001970000000405000029000000000151019f0000000502000029000000000012041b000000b2010000410000000002000414000000b20420009c0000000001024019000000c001100210000000b3011001c70000800d02000039000000c60400004102c302b90000040f0000000101200190000001640000613d00000000010000190000000002000019000000000300001902c302880000040f00000020010000390000000000150435000000200350003900000005070000290000000000730435000000c90150009c000001ed0000413d000000cd0100004100000000001004350000004101000039000000040010043f0000002402000039000000000100001902c302920000040f0000000101000039000000000101041a000000b4011001980000024a0000c13d02c3029b0000040f00000000010000190000000002000019000000000300001902c302880000040f000000400100043d000000c5020000410000000000210435000000040200003902c302920000040f0000004001500039000000400010043f000000010100003900000000020004140000000406000029000000040460008c000001fa0000613d00000000040504330000000001020019000000000206001902c302630000040f0000000507000029000000040600002900000001020000320000022a0000613d0000003f03200039000000200400008a000000000443016f000000400300043d0000000004430019000000000534004b00000000050000190000000105004039000000ca0640009c000001d80000213d0000000105500190000001d80000c13d000000400040043f00000000002304350000002002300039000000030300036700000001050000310000001f0450018f0000000505500272000002190000613d000000000600001900000005076002100000000008720019000000000773034f000000000707043b00000000007804350000000106600039000000000756004b000002110000413d000000000640004c000000040600002900000005070000290000022a0000613d0000000505500210000000000353034f00000000025200190000000304400210000000000502043300000000054501cf000000000545022f000000000303043b0000010004400089000000000343022f00000000034301cf000000000353019f0000000000320435000000000110004c0000024f0000c13d000000030100036700000001020000310000001f0320018f0000000502200272000002390000613d00000000040000190000000505400210000000000651034f000000000606043b00000000006504350000000104400039000000000524004b000002320000413d000000000430004c000002470000613d00000003033002100000000502200210000000000402043300000000043401cf000000000434022f000000000121034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000141019f00000000001204350000000102000031000000000100001902c302920000040f000000400100043d000000d2020000410000000000210435000000040200003902c302920000040f000000400100043d0000000000710435000000b2020000410000000003000414000000b20430009c0000000003028019000000b20410009c00000000010280190000004001100210000000c002300210000000000112019f000000cb011001c70000800d020000390000000203000039000000cc04000041000000000506001902c302b90000040f0000000101200190000001cd0000c13d000001640000013d000000b205000041000000b20630009c00000000030580190000004003300210000000b20640009c00000000040580190000006004400210000000000334019f000000b20410009c0000000001058019000000c001100210000000000113019f02c302b90000040f00000000030100190000006003300270000100b20030019d0003000000010355000000010120018f000000000001042d0000000003010019000000b2010000410000000004000414000000b20540009c0000000001044019000000c00110021000000060022002100000000001120019000000d501100041000000000203001902c302be0000040f0000000102200190000002850000613d000000000101043b000000000001042d0000000001000019000000000200001902c302920000040f000000b204000041000000b20510009c000000000104801900000040011002100000000001310019000000b20320009c000000000204801900000060022002100000000001210019000002c40001042e000000b203000041000000b20420009c0000000002038019000000b20410009c000000000103801900000040011002100000006002200210000000000112019f000002c5000104300001000000000002000000000400041a000000b2010000410000000002000414000000b20320009c0000000001024019000000c001100210000000b3011001c7000100000004001d000000b4054001970000800d020000390000000303000039000000b504000041000000000600001902c302b90000040f0000000101200190000002b60000613d0000000101000029000000b601100197000000000010041b0000000201000039000000000001041b0000000101000039000000000201041a000000b602200197000000000021041b000000000001042d0000000001000019000000000200001902c302920000040f000002bc002104210000000102000039000000000001042d0000000002000019000002bb0000013d000002c1002104230000000102000039000000000001042d0000000002000019000002c00000013d000002c300000432000002c40001042e000002c5000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0ffffffffffffffffffffffff0000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d232c220000000000000000000000000000000000000000000000000000000006a42b8f800000000000000000000000000000000000000000000000000000000715018a6000000000000000000000000000000000000000000000000000000008da5cb5b0000000000000000000000000000000000000000000000000000000099a88ec400000000000000000000000000000000000000000000000000000000b1f8100d00000000000000000000000000000000000000000000000000000000c5b350df00000000000000000000000000000000000000000000000000000000d1851c92000000000000000000000000000000000000000000000000000000003cf52ffb8000000000000000000000000000000000000000000000000000000000000000234fe4e200000000000000000000000000000000000000000000000000000000796b89b91644bc98cd93958e4c9038275d622183e25ac5af08cc6b5d955391320000000000000000000000000000000000000000000000000000000000093a8123780cca000000000000000000000000000000000000000000000000000000006ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a945f6e7e000000000000000000000000000000000000000000000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b83000000000000000000000000000000000000000000000000ffffffffffffffc0000000000000000000000000000000000000000000000000ffffffffffffffff0200000000000000000000000000000000000020000000000000000000000000c945ae30494f6ee00b9e4bf1fec5653ced7244b559666f44f9a88ea732e957b04e487b7100000000000000000000000000000000000000000000000000000000626561636f6e2021636f6e74726163740000000000000000000000000000000008c379a0000000000000000000000000000000000000000000000000000000008d450dd8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000093a8023295ef900000000000000000000000000000000000000000000000000000000392cc0fc000000000000000000000000000000000000000000000000000000009380a17c0000000000000000000000000000000000000000000000000000000002000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

type UpgradeBeaconControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradeBeaconControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradeBeaconController__factory extends ContractFactory {
  constructor(...args: UpgradeBeaconControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UpgradeBeaconController> {
    return super.deploy(overrides || {}) as Promise<UpgradeBeaconController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UpgradeBeaconController {
    return super.attach(address) as UpgradeBeaconController;
  }
  override connect(signer: Signer): UpgradeBeaconController__factory {
    return super.connect(signer) as UpgradeBeaconController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeBeaconControllerInterface {
    return new utils.Interface(_abi) as UpgradeBeaconControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeBeaconController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UpgradeBeaconController;
  }
}