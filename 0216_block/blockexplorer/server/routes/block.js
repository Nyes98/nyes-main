const router = require("express").Router();
const Web3 = require("web3");
const axios = require("axios");

const { Block, Transaction } = require("../models");

const request = axios.create({
  method: "POST",
  baseURL: "http://localhost:8080",
  headers: {
    "content-type": "application/json",
  },
});

const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://localhost:8082")
);

const allTransaction = async () => {
  const at = await web3.eth.getTransaction;
};

const allBlock = async () => {
  const latestBlock = await web3.eth.getBlock("latest");

  for (let i = 0; i <= latestBlock.number; i++) {
    console.log("반복돼");
    let data = await web3.eth.getBlock(i);
    console.log(data.transactions);
    const newBlock = await Block.create(data);
    for (let j = 0; j < data.transactions.length; j++) {
      let at = await web3.eth.getTransaction(data.transactions[j]);
      console.log(at);
      const transaction = await Transaction.create(at);
    }
  }
};

// const exist = async () => {
//   const exist = await
// }

// if (exist) {
//   hh();
// }
// for(let i=0; i<)
// web3.eth.getBlock

web3.eth.subscribe("newBlockHeaders", async (error, result) => {
  if (!error) {
    console.log(result.miner);
    console.log("뉴뉴뉴뉴진스");
    // const newBlock = await Block.create(result);
  }
});

// const test = async () => {
//   const accounts = await web3.eth.getAccounts();
//   console.log("몇번도냐");
//   console.log(accounts);
// };
// test();

// router.post("/", async (req, res) => {
//   console.log(req.body);
//   try {
//     const list = await Board.findAll(req.body);
//     res.send({ isError: false, list });
//   } catch (error) {
//     res.send({ isError: true });
//   }
// });

router.post("/all", async (req, res) => {
  try {
    const block = await Block.findAll();
    console.log("트루", block == 0);
    // console.log("블블록곡", block);
    if (block == 0) {
      // console.log("계속되냐");
      allBlock();
    }

    res.send({ isError: false, data: block });
  } catch (error) {
    res.send({ isError: true });
  }
});

router.post("/recent", async (req, res) => {
  try {
    const block = await Block.findAll({
      order: [["id", "DESC"]],
      limit: 6,
    });
    console.log("블블록곡", block);

    const transaction = await Transaction.findAll({
      order: [["id", "DESC"]],
      limit: 6,
    });

    res.send({ isError: false, data: block, trans: transaction });
  } catch (error) {
    res.send({ isError: true });
  }
  // console.log(accounts);
  // console.log(req.body);
  // };
});

module.exports = router;
