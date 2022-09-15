let temp = [];
let divnum = 0;

function addButton() {
  let text = document.getElementById("inputText").value;
  temp.push(text);
  console.log(temp);
  const list = document.getElementById("list");
  list.innerHTML += `<div class = "innerList" id="div${divnum}"> ${
    divnum + 1
  }. ${temp}`;

  temp = [];
  divnum++;

  let contents = document.getElementById("inputText");
  contents.value = null; // inputtext 비워주기
}

function delButton() {
  const div = document.getElementById(`div${divnum - 1}`);
  divnum--;
  if (divnum < 0) divnum = 0; // 삭제버튼을 누를 때, divnum이 1보다 작아지는걸 방지
  div.remove();
}
