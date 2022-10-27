const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const userinfolist = {};

router.post("/regist", (req, res) => {
  console.log(req.body);

  if (!userinfolist[req.body.id]) {
    userinfolist[req.body.id] = {
      pw: crypto.SHA256(req.body.pw).toString(),
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
    };
    if (
      userinfolist[req.body.id].pw == "" ||
      userinfolist[req.body.id].name == "" ||
      userinfolist[req.body.id].age == ""
    )
      return;
    res.send({ status: 200, data: "회원가입 완료" });
  } else {
    res.send({ status: 402, data: "이미 존재하는 ID 입니다." });
  }
});

router.post("/login", (req, res) => {
  if (userinfolist[req.body.id]?.pw === crypto.SHA256(req.body.pw).toString()) {
    res.cookie(
      "login",
      jwt.sign({ name: userinfolist[req.body.id].name }, "block7", {
        algorithm: "HS256",
        expiresIn: "10m",
        issuer: "pys",
      })
    );
    res.send({ status: 200, data: "로그인 성공" });
  } else res.send({ status: 401, data: "로그인 실패" });
});

module.exports = router;
