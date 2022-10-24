const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const userlist = {}; // 회원가입 된 정보를 받는 객체

// api폴더의 jwt.js를 라이브러리를 사용해서 대체한다.
router.post("/regist", (req, res) => {
  const tempJWT = jwt.sign({ name: "test" }, "keke", {
    algorithm: "HS256",
    expiresIn: "10m",
    issuer: "pys",
  }); // pys 생성
  // console.log(tempJWT);
  const tempData = jwt.verify(tempJWT, "keke"); // jwt 파싱
  console.log(tempData);
  // 쿠키는 임시 데이터를 브라우저에 저장한다.
  // 크롬에서 로그인하면, 쿠키에 남아있다.
  // 파이어폭스에서는 연동되지 않는다. 데이터 저장 공간이 다르다. 즉, 쿠키 저장한 파일이 다르다.
  //   const cookie_name = "cookie_name",
  //     cookie_data = "now testing";
  //   res.cookie("cookie_name", "now testing", {}
  res.cookie(req.body.id, req.body.pw, {
    expires: new Date(Date.now() + 1 * 5 * 1000),
    // 단위 = 1ms
    // 10 * 60 * 1000 => 1s * 60=> 1m * 10 => 10min
    // 5초로 수정
    // expires : 시간이 지나면 사라지게 한다
  });
  // 쿠키 추가 (설정한 시간이 지나면 사라진다.)

  //   console.log(req.body);
  //   console.log(userlist);
  //   {id : '123', pw : "123"}
  //   {id : '123', pw : "123", name : '123'} 만약 1개 더(name) 받고싶다면?

  // 응답으로 쿠키 추가
  if (!userlist[req.body.id]) {
    // userlist[req.body.id] = {
    //   pw: req.body.pw,
    //   name: req.body.name,
    // };
    userlist[req.body.id] = crypto.SHA256(req.body.pw).toString();
    // userlist[req.body.id] = req.body.pw;
    res.send({ status: 200, data: "regist" });
  } else {
    res.send({ status: 402, data: "exist id" });
  }
});
router.post("/login", (req, res) => {
  //   console.log(req.body);
  // console.log(req.cookies.cookie_name);
  //   요청을 통해 받은 쿠키

  //   if (userlist[req.body.id]?.pw === req.body.pw) {
  if (userlist[req.body.id] === crypto.SHA256(req.body.pw).toString()) {
    res.send({ status: 200, data: "login", username: req.body.id });
    // name: userlist[req.body.id].name }
  } else {
    res.send({ status: 401, data: "wrong password" });
  }
});

module.exports = router; // 작업이 끝난 후 바깥으로 내보내야하니 맨 밑에 있어야한다.
