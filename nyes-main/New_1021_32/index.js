// 내일 수!업! : 게시판 등록/수정/삭제, 목록 페이징, 아이디 생성/삭제/로그인/로그아웃

const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");

// const routes = require("./routes/index.js");

const boardList = [
  { title: "arvserv1", text: "9baresrsearvstb" },
  { title: "arvserv2", text: "8baresrsearvstb" },
  { title: "arvserv3", text: "7baresrsearvstb" },
  { title: "arvserv4", text: "6baresrsearvstb" },
  { title: "arvserv5", text: "5baresrsearvstb" },
  { title: "arvserv6", text: "4baresrsearvstb" },
  { title: "arvserv7", text: "3baresrsearvstb" },
  { title: "arvserv8", text: "2baresrsearvstb" },
  { title: "arvserv9", text: "1baresrsearvstb" },
];

const app = express();
dotenv.config();

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "web")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

// app.use("/api", routes);

app.post("/api/board/add", (req, res) => {
  boardList.unshift(req.body);
  res.send({ status: 200, data: "정상 입력 완료" });
});

app.post("/api/board/delete", (req, res) => {
  console.log(req.body);
  boardList.splice(+req.body.count * 5 + +req.body.num, 1);
  res.send({ status: 200, data: "delete" });
});

app.post("/api/board/update", (req, res) => {
  boardList[+req.body.count * 5 + +req.body.num].text = req.body.text;
  boardList[+req.body.count * 5 + +req.body.num].uptime = req.body.time;
  res.send({ status: 200, data: "update" });
});

app.get("/api/board", (req, res) => {
  res.send({
    status: 200,
    list: boardList.slice(+req.query.count * 5, (+req.query.count + 1) * 5), // 0~5 => 5~10
    maxCount:
      parseInt(
        (boardList.length ? boardList.length - 1 : boardList.length) / 5
      ) + 1,
    // 조건 ? 참 : 거짓
  });
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});

// 암호화 << 이론만 간단하게 용어정도?
// 입력한 데이터를 다른 사람이 알수 없도록 변환한다
// 1234 => 암호화를 통해서 => asekuhrbveablkreasbrvrlkuseabrv123
// 복호화 : 암호화된 데이터를 원상 복구한다.
// asekuhrbveablkreasbrvrlkuseabrv123 => 복호화 => 1234
// 사용자가 입력한 데이터를 알 수 있어야 할까?
//   알면 안되는 것들도 있다. => 단방향 / 양방향 암호화
// 단방향은 암호화만 가능하다. => 복호화가 불가능하다.
// 양방향은 복호화가 가능하다.
