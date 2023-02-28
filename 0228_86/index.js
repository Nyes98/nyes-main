const Compiler = require("./compiler");
const Client = require("./web3");

const {
  Test: { abi, bytecode },
} = Compiler.compile("Test.sol");
console.log(abi);

const client = new Client("http://127.0.0.1:8545");

const txObj = { data: bytecode };
const contract = new client.web3.eth.Contract(abi);

async function init() {
  const instance = await contract.deploy(txObj).send({
    from: "0xcF4192Ad7f4fA4c9FF3eECAd062Ad3A4b1820721",
    gas: 1000000,
  });
  console.log(instance);
  console.log(instance.options.address); // ca : 0x0fcbECfe1308F00407cAC586B8Ac60fC6E116F6d
}

// init();

async function test() {
  const accounts = await client.web3.eth.getAccounts();
  console.log(accounts);
  const ca = "0x0fcbECfe1308F00407cAC586B8Ac60fC6E116F6d";
  const deployed = new client.web3.eth.Contract(abi, ca);

  let text = await deployed.methods.getText().call();
  await deployed.methods.setText("오점머").send({
    from: accounts[1],
    gas: 1000000,
  });
  console.log("text", text);
  const balance = await client.web3.eth.getBalance(accounts[1]);
  console.log(balance);
}
test();
