// html 파일을 가져와서 수정하여 완성된 HTML을 반환하도록 한다.
// 템플릿 : 만들어져있는 틀, 디자인적 또는 코드상에서 완성된 html을 가져다가 우리가 원하는 데이터를 입력하여 페이지를 만든다.
const fs = require("fs");
const path = require("path");

const createHtml = (fileName, data, { styleName, scriptName }) => {
  const target = path.join(__dirname, "../views", fileName);
  let readLine = fs.readFileSync(target, "utf-8");

  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; ++i) {
    if (Array.isArray(data[keys[i]])) {
      // data로 받은 값이 배열이면
      const subTarget = path.join(target, "../", keys[i] + ".html");
      console.log("타겟", target);
      console.log("서브타겟", subTarget);
      const subLine = fs.readFileSync(subTarget, "utf-8");
      console.log("subLine", subLine);
      let subReadLine = "";
      for (let j = 0; j < data[keys[i]].length; ++j) {
        subReadLine += subLine.replace(`{{item}}`, data[keys[i]][j]);
      }
      readLine = readLine.replace(`{for{${keys[i]}}}`, subReadLine);
    } else {
      // data로 받은 값이 배열이 아니면
      readLine = readLine.replace(`{{${keys[i]}}}`, data[keys[i]]);
    }
  }

  if (styleName) {
    const styleTarget = path.join(__dirname, "../views", styleName);
    let stlyeLine = fs.readFileSync(styleTarget, "utf-8");
    readLine = readLine.replace("{{style}}", stlyeLine);
  }

  if (scriptName) {
    const scriptTarget = path.join(__dirname, "../views", scriptName);
    let scriptLine = fs.readFileSync(scriptTarget, "utf-8");
    readLine = readLine.replace(`{{script}}`, `<script>${scriptLine}</script>`);
  }

  //   readLine = readLine.replace("{{title}}", "SSR 테스트야");
  //   readLine = readLine.replace("{{text}}", req.query.text || "처음이야 SSR");
  //   readLine = readLine.replace("{{link}}", "/test");
  //   readLine = readLine.replace("{{linkName}}", "들어가면 404");
  console.log(readLine);
  return readLine;
};

module.exports = createHtml;
