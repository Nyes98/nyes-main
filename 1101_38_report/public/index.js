const loginbtn = document.getElementById("user-loginbtn");
const logoutbtn = document.getElementById("user-logoutbtn");
const board = document.getElementById("user-info");
const inputDiv = document.getElementById("inputdiv");
const userId = document.getElementById("user-id");

const inputElem = document.getElementById("input-chat");
const sendBtn = document.getElementById("input-chatbtn");
const listElem = document.getElementById("chat-line");

// socket.on("msg1", (data) => {
//   console.log(data);
// });

function socket() {
  const socket = io();
  socket.on("msg1", (data) => {
    if (!data.text || !data.id) return;
    const tempLi = document.createElement("li");
    console.log(data.id + " : " + data.text);

    tempLi.innerHTML = data.id + " : " + data.text;
    listElem.prepend(tempLi);
  });
  sendBtn.onclick = () => {
    socket.emit("chat", { id: userId.value, text: inputElem.value });
    inputElem.value = null;
  };

  socket.on("login1", (data) => {
    const tempLi = document.createElement("li");
    tempLi.innerHTML = data.id + "님이 접속했습니다.";
    listElem.prepend(tempLi);
  });
  loginbtn.onclick = function () {
    if (!userId.value) return;
    socket.emit("login", { id: userId.value });
    board.innerHTML = "";
    logoutbtn.classList.toggle("on");
    loginbtn.classList.toggle("on");
    userId.classList.toggle("on");
    inputDiv.classList.toggle("on");
  };

  socket.on("logout1", (data) => {
    const tempLi = document.createElement("li");
    tempLi.innerHTML = data.id + "님이 접속을 종료했습니다.";
    listElem.prepend(tempLi);
  });
  logoutbtn.onclick = function () {
    socket.emit("logout", { id: userId.value });
    board.innerHTML = "";
    logoutbtn.classList.toggle("on");
    userId.classList.toggle("on");
    inputDiv.classList.toggle("on");
    loginbtn.classList.toggle("on");
  };

  socket.on("disconnect1", (data) => {
    // console.log(data);
  });
  //   endBtn.onclick = () => {
  //     socket.disconnect();
  //   };
}
socket();
