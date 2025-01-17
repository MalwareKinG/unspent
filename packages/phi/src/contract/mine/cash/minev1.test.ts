import {
  ElectrumCluster,
  ClusterOrder,
  ElectrumTransport,
} from "electrum-cash";
import { Contract, ElectrumNetworkProvider } from "cashscript";
import { RegTestWallet, mine as mineBlocks } from "mainnet-js";
import {
  binToHex,
  hexToBin,
  bigIntToBinUintLE,
  bigIntToVmNumber,
} from "@bitauth/libauth";
import { sha256, sum, deriveLockingBytecodeHex, getRandomIntWeak } from "../../../common/util.js";
import { artifact as v1 } from "./v1.js";
import { _PROTOCOL_ID } from "../../../common/constant.js";

describe(`Mining Contract Tests`, () => {
  test("Should pay a mining contract 10 times in 10 blocks", async () => {
    const regTest = new ElectrumCluster(
      "unspent phi-tests - faucet",
      "1.4.1",
      1,
      1,
      ClusterOrder.PRIORITY
    );
    regTest.addServer("127.0.0.1", 60003, ElectrumTransport.WS.Scheme, false);

    const regtestNetwork = new ElectrumNetworkProvider("regtest", regTest, false);

    const alice = await RegTestWallet.fromId(process.env["ALICE_ID"]!);
    const bob = await RegTestWallet.fromSeed(
      "rubber amateur across squirrel deposit above dish toddler visa cherry clerk egg"
    );

    const period = 1n;
    const payout = 5000n;
    const difficulty = 1n;
    const index = new Uint8Array(7);

    let contract = new Contract(
      v1,
      [period, payout, difficulty, index],
      {provider:regtestNetwork, addressType:"p2sh20"}
    );

    // fund the initial mining contract
    await alice.send([
      {
        cashaddr: contract.address!,
        value: 510000,
        unit: "satoshis",
      },
    ]);

    for (let x = 0; x < 3; x++) {
      await mineBlocks({
        /* cspell:disable-next-line */ 
        cashaddr: "bchreg:ppt0dzpt8xmt9h2apv9r60cydmy9k0jkfg4atpnp2f",
        blocks: 1,
      });
      const balance = await contract.getBalance();
      let mined = false;
      let nonce = 0;

      let nonceBin = new Uint8Array([]);
      let result = new Uint8Array([]);
      while (!mined) {
        nonce = getRandomIntWeak(9007199254740991);
        nonceBin = bigIntToVmNumber(BigInt(nonce));
        const msg = new Uint8Array([
          ...hexToBin(contract.bytecode),
          ...nonceBin,
        ]);
        result = await sha256(msg);
        if (result.slice(0, Number(difficulty)).reduce(sum) === 0) mined = true;
      }

      if (nonceBin.length < 7) {
        const zeros = 7 - nonceBin.length;
        nonceBin = new Uint8Array([...nonceBin, ...new Uint8Array(zeros)]);
      }

      const nonceHex = binToHex(nonceBin);

      const fn = contract!.functions["execute"]!(nonceHex);

      const newContract = new Contract(
        v1,
        [period, payout, difficulty, nonceHex],
        {provider:regtestNetwork, addressType:"p2sh20"}
      );

      //console.log(payout)
      const tx = await fn
        .withOpReturn([
          _PROTOCOL_ID,
          "M",
          "0x01",
          "0x01",
          "0x8813",
          "0x0" + difficulty,
          "0x" + nonceHex,
          "0x" + deriveLockingBytecodeHex(newContract.address),
        ])
        .to([
          {
            to: newContract.address,
            amount: balance - payout + 3n,
          },
          { to: bob.getDepositAddress(), amount: payout - 453n },
        ])
        .withAge(1)
        .withoutChange()
        .send();
      //console.log(tx.txid)
      contract = newContract;
    }

    expect(await bob.getBalance("sat")).toBeGreaterThanOrEqual(
      (payout - 453n) * 3n
    );
  });
});
