const express = require("express");
const cors = require("cors");
const Web3 = require("web3");
const CounterContract = require("./build/contracts/Counter.json");
console.log(CounterContract);

const app = express();
const web3 = new Web3("http://127.0.0.1:8545");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.post("/api/increment", async (req, res) => {
  const { from } = req.body;
  const nonce = await web3.eth.getTransactionCount(from);
  const networkId = await web3.eth.net.getId();
  const CA = CounterContract.networks[networkId].address;
  const abi = CounterContract.abi;

  const deployed = new web3.eth.Contract(abi, CA);
  const data = await deployed.methods.increment().encodeABI();
  //   트랜잭션을 바로 보내는(send) 것이 아닌 bytecode 형식으로 변환하여 data에 포함시킨다.

  const txObj = {
    nonce,
    from,
    to: CA,
    data,
  };
  res.json(txObj);
});

app.listen(8080, () => {
  console.log("server start");
});
