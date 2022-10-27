const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");

const db = require("./models/index.js");

const app = express();
dotenv.config();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "public")));
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

// sequelize : node.js와 연결해줌 즉 MySQL과 연결됨
// Sequelize : 라이브러리
// sequelize : 라이브러리를 통해 나온 값
db.sequelize
  .sync({ force: true }) // DB 서버와 연결한다. force는 설정된 테이블을 강제로 생성한다.
  //   우리가 express 서버에서 설정한 테이블 데이터와 실제 DB 서버의 테이블 데이터가 다를 경우
  //   서버의 테이블을 새로 생성하기 위해 사용한다.
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

// db.NewTable1.create({ idx: 11, name: "fdkf", pw: "qwer", id: "asdf" });

// SELECT
// [].find
db.NewTable1.findOne({
  where: {
    idx: 1,
    name: "1",
  },
})
  .then((data) => console.log("이게뭐냐면 : " + data))
  .catch((err) => console.error("에러입니다 : " + err));

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
