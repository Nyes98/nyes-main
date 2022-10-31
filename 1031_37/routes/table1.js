const router = require("express").Router();

const { Table1, Table2 } = require("../models/index.js");

// GET / POST / PUT / PATCH / DELETE
// 위 5가지 방식으로 통신을 하는 방식을 REST API 라고 한다.
// REST API = RESTFUL API = RESTFUL
// HTTP 통신, 즉 Web 통신을 할 때 기본적으로 사용되는 방식이다.
// REST API VS GraphGL(REST API를 간소화한 것, 잘 사용하지는 않는다)

// CRUD => sequelize(메서드) / mySQL(SQL 문)
// Create => create / INSERT
// Read => findAll || findOne / SELECT
// Update => update / UPDATE
// Delete => destroy / DELETE

// 미들웨어
// next가 중요하다.
// router.get("/", (req, res, next) => {
//   res.cookie("middle", "testing", { expires: Date.now() + 1000 * 1 });
//   next();
// });

router.get("/", async (req, res) => {
  const { body, query } = req; // 구조 분해할당
  const options = {
    include: [
      {
        model: Table2,
        as: "Table2s",
      },
    ],
  };
  if (query.column2) {
    options.where = {
      // 어떤 조건으로 찾을거냐?
      column2: query.column2, // column2가 query.column2인 것을 찾겠다.
    };
  }
  const tempTables = await Table1.findAll(options);
  /* const tempTables = await Table1.findAll({
    where:{
      column2 : query.column2
    }
  });
*/
  // console.log(req.query);
  // console.log(req.body);
  res.send({ name: "get", body, query, tempTables });
});

router.post("/", async (req, res) => {
  const { body, query } = req;
  // console.log("바디에요");
  // console.log(req.body);

  // console.log("커리에요");
  // console.log(req.query);
  console.log(body.column1);

  const tempTable = await Table1.create({
    column1: body.column1,
  });
  res.send({ name: "post", body, query, tempTable });
});

router.put("/", async (req, res) => {
  // 수정 시 전부 수정을 요청할 때 (모든 정보를 덮어씌운다.)
  const { body, query } = req;
  const tempTable = await Table1.update(
    {
      column1: body.column1,
      // 수정할 정보를 입력한다.
    },
    {
      where: {
        column2: body.column2,
        // 바꾸려는 조건
      },
    }
  );
  res.send({ name: "put", body, query });
  // 수정 시 일부만 수정을 요청할 때 (일부 정보만 덮어씌운다.)
});

router.patch("/", (req, res) => {
  const { body, query } = req;

  res.send({ name: "patch", body, query });
});

router.delete("/", async (req, res) => {
  const { body, query } = req;
  // console.log("바디에요");
  // console.log(req.body);

  // console.log("커리에요");
  // console.log(req.query);
  const tempTable = await Table1.destroy({
    where: {
      column1: query.column1,
      // 보통 idx로 지운다 (column2)
    },
  });
  res.send({ name: "delete", body, query, tempTable });
});

module.exports = router;
