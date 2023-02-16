const router = require("express").Router();
const Web3 = require("web3");
const axios = require("axios");

const { Block } = require("../models");
const request = axios.create({
  method: "POST",
  baseURL: "http://localhost:8080",
  headers: {
    "content-type": "application/json",
  },
});
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));

// router.post("/", async (req, res) => {
//   console.log(req.body);
//   try {
//     const list = await Board.findAll(req.body);
//     res.send({ isError: false, list });
//   } catch (error) {
//     res.send({ isError: true });
//   }
// });

router.post("/new", async (req, res) => {
  console.log(req.body);
  try {
    const block = await Block.create(req.body);
    // await user.addBoard(board);
    res.send({ isError: false });
  } catch (error) {
    res.send({ isError: true });
  }
});

module.exports = router;
