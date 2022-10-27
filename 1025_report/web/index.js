document.getElementById("loginform").onsubmit = async function (e) {
  e.preventDefault();
  if (
    document.getElementById("logid").value == "" ||
    document.getElementById("logpw").value == ""
  )
    return;

  const data = await axios.post("/api/user/login", {
    id: document.forms["loginform"].logid.value,
    pw: document.forms["loginform"].logpw.value,
  });

  console.log(data.data);
  if (data.data.status == 200) {
    document.getElementById("logout").classList.remove("on");
    document.getElementById("login").classList.add("on");
    document.getElementById("boardwrite").classList.remove("on");
  }
};

document.getElementById("logout").onclick = async function (e) {
  e.preventDefault();
  document.getElementById("login").classList.remove("on");
  document.getElementById("logout").classList.add("on");
  document.getElementById("boardwrite").classList.add("on");
};

document.getElementById("signupform").onsubmit = async function (e) {
  e.preventDefault();
  if (
    document.getElementById("id").value == "" ||
    document.getElementById("pw").value == "" ||
    document.getElementById("name").value == "" ||
    document.getElementById("age").value == ""
  )
    return;

  const data = await axios.post("/api/user/regist", {
    id: document.forms["signupform"].id.value,
    pw: document.forms["signupform"].pw.value,
    name: document.forms["signupform"].name.value,
    gender: document.forms["signupform"].gender.value,
    age: document.forms["signupform"].age.value,
  });
  console.log(data.data);
};

document.getElementById("boardadd").onsubmit = async function (e) {
  e.preventDefault();
  console.log(e.target["inputtitle"].value);
  console.log(e.target["inputcontents"].value);
  const data = await axios.post("/api/board/add", {
    title: e.target["inputtitle"].value,
    contents: e.target["inputcontents"].value,
  });
  getList();
};

let listmaxcnt = 2;
let listcnt = 0;

async function getList() {
  const list = document.getElementById("list");
  const templi = document.createElement("li");
  const tempdelbtn = document.createElement("img");
  const temph2 = document.createElement("H2");
  const tempp = document.createElement("p");

  const data = await axios.post("/api/board/add", {
    title: document.forms["boardadd"].inputtitle.value,
    contents: document.forms["boardadd"].inputcontents.value,
  });
  // console.log("getList : " + data.data.list);
  // console.log(data.data.list);

  temph2.innerText = data.data.title;
  tempp.innerText = data.data.contents;

  tempdelbtn.src = "./image/xmark-solid.svg";
  tempdelbtn.alt = "delbtn";
  tempdelbtn.classList.add("delete");
  tempdelbtn.onclick = async function (e) {
    try {
      console.log("삭제버튼 작동해요");
      templi.remove();
    } catch (err) {
      console.log(err);
    }
  };

  templi.append(temph2);
  templi.append(tempp);
  templi.append(tempdelbtn);
  list.append(templi);
}

// getList();
