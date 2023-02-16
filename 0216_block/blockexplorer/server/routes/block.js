const router = require("express").Router();

const { Block } = require("../models");

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
