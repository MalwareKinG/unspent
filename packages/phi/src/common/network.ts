import {
  ElectrumCluster,
  ClusterOrder,
  ElectrumTransport,
} from "electrum-cash";
import { ElectrumNetworkProvider } from "cashscript";
import { PsiNetworkProvider } from "@unspent/psi";

export async function getBlockHeight(): Promise<number> {
  let e = new ElectrumNetworkProvider();
  const height = await e.getBlockHeight();
  e.disconnectCluster();
  return height;
}

export function getDefaultProvider(network="mainnet", chaingraphHost?:string){
  let provider = undefined;

  if (network === "mainnet") {
    let failover = getDefaultElectrumProvider("mainnet");
    provider = new PsiNetworkProvider("mainnet", chaingraphHost, failover);
  } else if (network === "chipnet") {
    let failover = getDefaultElectrumProvider("chipnet");
    provider = new PsiNetworkProvider("chipnet", chaingraphHost, failover);
  } 
  // fallback to fulcrum for regtest
  else if (network === "regtest") {
    let cluster = new ElectrumCluster(
      "@unspent/phi - regtest",
      "1.4.1",
      1,
      1,
      ClusterOrder.RANDOM
    );
    cluster.addServer("127.0.0.1", 60003, ElectrumTransport.WS.Scheme, false);
    provider = new ElectrumNetworkProvider("regtest", cluster);
  } else throw "unrecognized network";
  return provider;
}

export function getDefaultElectrumProvider(network = "mainnet") {
  let provider = undefined;
  if (network === "mainnet") {
    let cluster = new ElectrumCluster(
      "@unspent/phi",
      "1.4.1",
      1,
      1,
      ClusterOrder.RANDOM,
      2000
    );

    cluster.addServer(
      "bch.imaginary.cash",
      50004,
      ElectrumTransport.WSS.Scheme,
      false
    );
    // cluster.addServer(
    //   "electrum.imaginary.cash",
    //   50004,
    //   ElectrumTransport.WSS.Scheme,
    //   false
    // );
    provider = new ElectrumNetworkProvider("mainnet", cluster, false);
  } else if (network === "chipnet") {
    provider = new ElectrumNetworkProvider("chipnet");
  } else if (network === "regtest") {
    let cluster = new ElectrumCluster(
      "@unspent/phi - regtest",
      "1.4.1",
      1,
      1,
      ClusterOrder.RANDOM
    );
    cluster.addServer("127.0.0.1", 60003, ElectrumTransport.WS.Scheme, false);
    provider = new ElectrumNetworkProvider("regtest", cluster);
  } else throw "unrecognized network";
  return provider;
}
