import { Router } from "express";

const router = Router();
const boardList = [];
const contentsList = [];

router
  .route("/list")
  //   /api/list + '/' = /api/list
  .get((req, res) => {
    res.send({
      list: boardList,
      // list2: contentsList,
    });
  })
  .post((req, res) => {
    boardList.push({
      text: req.body["title"],
    });
    // contentsList.push({
    //   contents: req.body["contents"],
    // });
    res.end();
  })

  .put((req, res) => {
    // 수정
  })

  .delete((req, res) => {
    // 삭제
  });

export default router;
// module.exports = router
