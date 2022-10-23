document.getElementById("sign-up").onsubmit = async function (e) {
  e.preventDefault();

  if (!e.target["sign-up-id"].value) {
    e.target["sign-up-id"].focus();
    return;
  }

  if (!e.target["sign-up-pw"].value) {
    e.target["sign-up-pw"].focus();
    return;
  }

  try {
    const data = await axios.post("api/signup", {
      id: e.target["sign-up-id"].value,
      pw: e.target["sign-up-pw"].value,
    });
    console.log(data.data);

    if (data.data.status == 200) {
      e.target["sign-up-id"].value = e.target["sign-up-pw"].value = "";
    }
  } catch (err) {
    console.log("이미 가입된 아이디입니다. 다른 아이디를 입력해주세요.");
  }
};

const loginbtn = document.getElementById("login-btn");
const logoutbtn = document.getElementById("logout-btn");
// const loginbtnC = document.createElement("button");
// const logoutbtnC = document.createElement("button");

document.getElementById("log-in").onsubmit = async function (e) {
  e.preventDefault();

  if (!e.target["login-id"].value) {
    e.target["login-id"].focus();
    return;
  }

  if (!e.target["login-pw"].value) {
    e.target["login-pw"].focus();
    return;
  }

  try {
    const data = await axios.post("api/login", {
      id: e.target["login-id"].value,
      pw: e.target["login-pw"].value,
    });
    console.log(data.data);
    if (data.data.status == 200) {
      e.target["login-id"].value = e.target["login-pw"].value = "";
    }
    loginbtn.classList.remove("on");
    logoutbtn.classList.add("on");
  } catch (err) {
    console.log("잘못된 정보입니다. 아이디와 비밀번호를 다시 입력해주세요.");
  }
};

document.getElementById("logout-btn").onclick = function (e) {
  logoutbtn.classList.remove("on");
  loginbtn.classList.add("on");
};
