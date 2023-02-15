const router = require("express").Router();

const { User, Board } = require("../models");

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const list = await Board.findAll(req.body);
    res.send({ isError: false, list });
  } catch (error) {
    res.send({ isError: true });
  }
});

router.post("/new", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ where: { name: req.body.userName } });
    const board = await Board.create(req.body);
    await user.addBoard(board);
    res.send({ isError: false });
  } catch (error) {
    res.send({ isError: true });
  }
});

module.exports = router;
