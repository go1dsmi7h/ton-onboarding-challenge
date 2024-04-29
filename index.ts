import {Address, TonClient} from "ton"
import {getHttpEndpoint} from "@orbs-network/ton-access";

async function main () {

  const wallet = Address.parse('0QCJ_2a9meTE66ykvSW-Agz6-RF8HXdxsiwqMrYUtmy_i73P');
  const collection = Address.parse('EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX');

  // get the decentralized RPC endpoint in Testnet
const endpoint = await getHttpEndpoint({
    network: "testnet",
  });

  // initialize ton library
  const client = new TonClient({ endpoint });

  const miningData = await client.callGetMethod(collection, 'get_mining_data')

  console.log(miningData)

}



main()