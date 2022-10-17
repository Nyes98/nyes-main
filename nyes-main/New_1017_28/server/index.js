// npm => node package manager
// Node.js에서 사용하는 라이브러리 관리자
// yarn(React)도 사용가능

// 라이브러리 설치 : npm install 라이브러리명 / npm i 라이브러리명
// package.json : Node.js를 사용해 구현된 프로그램(모듈, 라이브러리, ...)에 대한 정보를 모아둔 파일
// dependencies : 의존성, 현재 프로그램이 실행되기 위해서 필요한 라이브러리

const express = require("express");
// require는 외부 라이브러리를 가져오는 함수
// 매개변수로 라이브러리명을 전달한다.

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
  //   req : 요청 사항, 요청에 대한 데이터
  //  res : 응답 사항, 응답에 대한 데이터
  // send는 return과 같이 2개넣으면 오류
});

app.listen(8080, () => {
  console.log("서버 열음");
});
