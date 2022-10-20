const boardList = document.getElementById("list");

function getList() {
  boardList.innerHTML = "";
  axios.get("/api/list").then((resData) => {
    console.log(resData);
    resData.data.list.forEach((title, contents) => {
      const tempElem = document.createElement("li");
      const tempElembtn = document.createElement("button");
      const tempDiv = document.createElement("div");

      tempElem.classList.add("TitleList");
      tempElem.innerHTML = `${title.text}`;
      tempElembtn.classList.add("Titlebutton");
      tempElembtn.innerHTML = "+";
      tempDiv.classList.add("Contentsdiv");
      // tempDiv.innerHTML = `${contents.text}`;

      boardList.append(tempElem);
      tempElem.append(tempElembtn);
      boardList.append(tempDiv);
    });
  });
}

// function getBtn() {
//   axios.get("/api/list").then((resData) => {
//     resData.data.list.forEach((title) => {});
//   });
// }

document.forms["board-form"].onsubmit = function (e) {
  e.preventDefault(); // 기본 이벤트를 막는다
  // XMLHttpRequest => fetch/ajax => axios
  // http 모듈 => express

  axios
    .post("/api/list", {
      title: document.forms["board-form"]["title"].value,
      // contents: document.forms["board-form"]["contents"].value,
    })
    .then((data) => {
      getList();
      // getBtn();
    });
  // .put((req, res) => {
  //   // 수정
  // })

  // .delete((req, res) => {
  //   // 삭제
  // });

  // axios.put("/api/list", {});
  // axios.delete("/api/list", {});

  // const getURL =
  //   "/api/add?name=" +
  //   document.forms["todo-form"]["do-name"].value +
  //   "&str=이가원";

  // axios.post('라우터', 서버의 req.body)
  // 저 데이터를 보낸다.
  // axios.get(getUrl);
};

// axios = 클라이언트에서 서버로 요청을 보낼때 사용
