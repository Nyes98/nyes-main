import ImsiComp from "./Component";
import axios from "axios";
import Web3 from "web3";
import { useEffect, useState } from "react";
import { newBlock } from "../../api";

const ImsiContainer = () => {
  const [accounts, setAccounts] = useState([]);
  const request = axios.create({
    method: "POST",
    baseURL: "http://localhost:8080",
    headers: {
      "content-type": "application/json",
    },
  });
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://localhost:8080")
  );

  const test = async () => {
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts);
    console.log("몇번도냐");
  };

  const onclick = async () => {
    console.log("오긴함?");
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "personal_unlockAccount",
        params: [accounts[0], "1234"],
      },
    });
    const transaction = await web3.eth.sendTransaction({
      from: accounts[0],
      to: accounts[1],
      value: web3.utils.toWei("1"),
    });
    console.log(transaction);
    console.log("여긴왜?");
  };

  const getTrans = async () => {
    const transaction = await web3.eth.getTransaction(
      "0x88f235ddc193452505b3bb03b34d2c4176eaba12472639e96b4232660c4bd9d3"
    );
    console.log(transaction);
  };

  const getBlock = async () => {
    const block = await web3.eth.getBlock("latest");
    const result = await newBlock(block);
    console.log(block);
    console.log(result);
  };

  const balance = async () => {
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log(web3.utils.fromWei(balance));

    const balance2 = await web3.eth.getBalance(accounts[1]);
    console.log(web3.utils.fromWei(balance2));
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <ImsiComp
      accounts={accounts}
      onclick={onclick}
      balance={balance}
      getTrans={getTrans}
      getBlock={getBlock}
    ></ImsiComp>
  );
};

export default ImsiContainer;
