const fs = require("fs");
const path = require("path");

// console.log("dirname : " + path.dirname(__filename));
// // 파일의 경로
// console.log("extname : " + path.extname(__filename));
// // 파일의 확장자
// console.log("basename : " + path.basename(__filename));
// // 파일의 이름
// console.log(path.join(__dirname, "..", ".."));
// // 경로를 합친다. (자주 사용)
// // path : 경로에 대해서 관리하는 모듈

// fs.writeFile("./test.txt", "안녕하세요", (data) => {
//   console.log(data);
// });
// // 파일을 생성한다.

// fs.readFile("./test.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log(data.toString());
// });

// const fsProm = fs.promises;

// fsProm
//   .writeFile("./test1.txt", "프라미스~")
//   .then(() => {
//     return fsProm.readFile("./test1.txt");
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.writeFileSync("./test2.txt", "싱크 확인");
function tryTest() {
  try {
    let data = fs.readFileSync("./test11.txt");
    console.log("data : " + data);
  } catch (err) {
    console.error("err : " + err);
  }
}
tryTest();

let data = fs.readFileSync("./test.txt");
console.log(data.toString());
data = fs.readFileSync("./test1.txt");
console.log(data.toString());
data = fs.readFileSync("./test2.txt");
console.log(data.toString());

async function readFileSyncFunc(filePath) {
  const data = await fs.promises.readFile(filePath);
  console.log("test : " + data);
}

// fs.createReadStream()
// 알아서 찾아보기 (큰 파일을 쓰지 않을예정)

// console.log(__filename);
// 파일 이름을 포함한 경로
// console.log(__dirname);
// 현재 파일 경로
// 위 변수들은 ES6에 없다.

// import fs from "fs"; << ES6 문법, 지금은 터진다. (ES6 이전 버전이기 때문)
