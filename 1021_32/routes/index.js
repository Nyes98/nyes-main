const router = require("express").Router();
// const board = require("./board.js");
const user = require("./user.js");
// /api

router.use("/", (req, res, next) => {
  // console.log("routes/index.js : " + req.url);
  next();
});

// router.use("/board", board);
router.use("/user", user);

module.exports = router;

const name = "";
const email = "";
const cellphone = "";
const address = "";
const id = "";
const pw = "";

const userInfo = {
  name: "a",
  email: "b",
  cellphone: "c",
  address: "d",
  id: "e",
  pw: "f",
};

// userInfo.name => 'a'
// userInfo.email => 'b'

userInfo.gender = "g";
const userInput = "jkh";
// userInfo.[userInput];

// import / export
// require / module.exports
