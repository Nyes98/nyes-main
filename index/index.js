const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

app.set("port", process.env.PORT);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

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
    name: "project",
  })
);

app.listen(app.get("port"), () => {
  console.log("Server Open");
});
