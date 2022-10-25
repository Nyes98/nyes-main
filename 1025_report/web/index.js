document.getElementById("login").onclick = async function (e) {
  e.preventDefault();

  const data = await axios.post("/api/user/login", {
    id: document.forms["userinfo"].id.value,
    pw: document.forms["userinfo"].pw.value,
  });
  console.log(data.data);
  if (data.data.status == 200) {
    document.getElementById("logout").classList.remove("on");
    document.getElementById("login").classList.add("on");
  }
};

document.getElementById("logout").onclick = async function (e) {
  e.preventDefault();
  document.getElementById("login").classList.remove("on");
  document.getElementById("logout").classList.add("on");
};

document.getElementById("signup").onclick = async function (e) {
  e.preventDefault();
  console.log("gd");
  const data = await axios.post("/api/user/regist", {
    id: document.forms["userinfo"].id.value,
    pw: document.forms["userinfo"].pw.value,
    name: document.forms["userinfo"].name.value,
    gender: document.forms["userinfo"].gender.value,
    age: document.forms["userinfo"].age.value,
  });
  console.log(data.data);
};
