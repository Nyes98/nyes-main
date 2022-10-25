const router = require("express").Router();
const userinfolist = {};

router.post("/regist", (req, res) => {
  console.log(req.body);
  if (!userinfolist[req.body.id]) {
    userinfolist[req.body.id] = {
      pw: req.body.pw,
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
    };
    console.log(userinfolist);

    res.send({ status: 200, data: "회원가입 완료" });
  } else {
    res.send({ status: 402, data: "이미 존재하는 ID 입니다." });
  }
});

router.post("/login", (req, res) => {
  if (userinfolist[req.body.id]?.pw === req.body.pw)
    res.send({ status: 200, data: "로그인 성공" });
  else res.send({ status: 401, data: "로그인 실패" });
});

module.exports = router;
