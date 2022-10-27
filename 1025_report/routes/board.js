const router = require("express").Router();

const boardlist = [];

router.post("/add", (req, res) => {
  if (req.body.title) {
    boardlist.unshift(req.body);

    res.send({
      status: 200,
      data: "게시판 추가",
      list: boardlist,
      title: req.body.title,
      contents: req.body.contents,
    });
  } else {
    res.send({ status: 403, data: "게시판 추가 실패" });
  }
});

module.exports = router;
