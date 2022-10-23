const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

const boardList = [];

const app = express();
dotenv.config();

app.set("port", process.env.PORT || 8080);
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
    name: "cook",
  })
);

app.post("/api/signup", (req, res) => {
  boardList.push(req.body);
  let overlap = new Set(boardList).size != boardList.length;
  if (!overlap) res.send({ status: 200, data: "회원가입 완료" });
});

app.post("/api/login", (req, res) => {
  for (let i = 0; i < boardList.length; i++) {
    if (boardList[i].id == req.body.id && boardList[i].pw == req.body.pw)
      res.send({ status: 200, data: "로그인 완료" });
  }
});

app.listen(app.get("port"), () => {
  console.log("Server Open");
});
