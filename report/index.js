let userSelv = 0;
let pickCount = 0;
let startCount = 0;
let rdmcom = 0;
let mycoin = 1000;
let result = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 20];

const target = document.getElementById("comDisplay");
const target1 = document.getElementById("comResult");
const wineft = document.getElementById("windiv");
const draweft = document.getElementById("drawdiv");
const loseeft = document.getElementById("losediv");
const spin = document.getElementById("roulette");
const pickeft = document.getElementById("userBtn");
const pickeft1 = document.getElementById("userBtn1");
const pickeft2 = document.getElementById("userBtn2");
const pickeft3 = document.getElementById("userBtn3");

document.getElementById("myCoin").innerHTML = `${mycoin}`;

function shuffle(arr) {
  for (let i = 0; i < 100; i++) {
    const first = parseInt(Math.random() * arr.length);
    const second = parseInt(Math.random() * arr.length);
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }

  return result;
}

function startbtn() {
  if (mycoin == 0) {
    alert("돈이 없습니다");
    return;
  }
  if (startCount >= 1) return;
  startCount++;
  pickCount = 0;
  shuffle(result);
  for (let i = 1; i <= result.length; i++) {
    document.getElementById(`rrdiv${i}`).innerHTML = `${result[i - 1]}`;
  }

  target.classList.remove("pause");

  pickeft1.classList.remove("on");
  pickeft2.classList.remove("on");
  pickeft3.classList.remove("on");

  target1.classList.remove("onOpacity");

  draweft.classList.remove("onBorder");
  wineft.classList.remove("onBorder");
  loseeft.classList.remove("onBorder");

  mycoin -= 100;
  document.getElementById("myCoin").innerHTML = `${mycoin}`;
  target.classList.add("on");
}

function userPickS() {
  if (pickCount >= 1 || startCount != 1) return;
  target1.classList.remove("simg");

  pickeft.classList.add("on");
  pickeft1.classList.add("on");
  draweft.classList.remove("onBorder");
  pickCount++;
  target.classList.add("pause");
  userSelv = 1;
  rdmcom = Math.floor(Math.random() * 3 + 1);
  if (userSelv == rdmcom) {
    target1.classList.add("onOpacity");
    target1.classList.add("simg");

    pickeft1.classList.remove("on");
    draweft.classList.add("onBorder");
    pickCount--;
  } else if (userSelv - rdmcom == -2) {
    target1.style.backgroundImage = "url('rsp3.png')";
    target1.classList.add("onOpacity");
    spin.classList.add("onSpin");
    wineft.classList.add("onBorder");

    let resultx = document.getElementById("rrdiv1").innerText;
    mycoin += 100 * resultx;
    setTimeout(() => {
      spin.style.animation = "none";
      document.getElementById("myCoin").innerHTML = `${mycoin}`;
    }, 3500);

    startCount--;
  } else {
    target1.style.backgroundImage = "url('rsp2.png')";
    target1.classList.add("onOpacity");
    loseeft.classList.add("onBorder");
    startCount--;
  }
}
function userPickR() {
  if (pickCount >= 1 || startCount != 1) return;
  target1.classList.remove("simg");
  pickeft.classList.add("on");
  pickeft2.classList.add("on");
  pickCount++;
  draweft.classList.remove("onBorder");

  target.classList.add("pause");

  userSelv = 2;
  rdmcom = Math.floor(Math.random() * 3 + 1);
  if (userSelv == rdmcom) {
    target1.style.backgroundImage = "url('rsp2.png')";
    target1.classList.add("onOpacity");

    pickeft2.classList.remove("on");
    draweft.classList.add("onBorder");

    pickCount--;
  } else if (userSelv - rdmcom == 1) {
    wineft.classList.add("onBorder");
    target1.style.backgroundImage = "url('rsp1.png')";
    target1.classList.add("onOpacity");

    spin.style.animationPlayState = "running";
    spin.style.animation = "rouletteSpin 3s ease";
    let resultx = document.getElementById("rrdiv1").innerText;
    mycoin += 100 * resultx;
    setTimeout(() => {
      spin.style.animation = "none";
      document.getElementById("myCoin").innerHTML = `${mycoin}`;
    }, 3500);
    startCount--;
  } else {
    loseeft.classList.add("onBorder");
    target1.style.backgroundImage = "url('rsp3.png')";
    target1.classList.add("onOpacity");

    startCount--;
  }
}

function userPickP() {
  if (pickCount >= 1 || startCount != 1) return;
  target1.classList.remove("simg");
  pickeft.classList.add("on");
  pickeft3.classList.add("on");
  draweft.classList.remove("onBorder");

  pickCount++;
  target.classList.add("pause");

  userSelv = 3;
  rdmcom = Math.floor(Math.random() * 3 + 1);
  if (userSelv == rdmcom) {
    target1.style.backgroundImage = "url('rsp3.png')";
    target1.classList.add("onOpacity");

    draweft.classList.add("onBorder");
    pickeft3.classList.remove("on");
    pickCount--;
  } else if (userSelv - rdmcom == 1) {
    wineft.classList.add("onBorder");
    target1.style.backgroundImage = "url('rsp2.png')";
    target1.classList.add("onOpacity");

    spin.style.animationPlayState = "running";
    startCount--;
    spin.style.animation = "rouletteSpin 3s ease";
    let resultx = document.getElementById("rrdiv1").innerText;
    mycoin += 100 * resultx;
    setTimeout(() => {
      spin.style.animation = "none";
      document.getElementById("myCoin").innerHTML = `${mycoin}`;
    }, 3500);
  } else {
    loseeft.classList.add("onBorder");
    target1.style.backgroundImage = "url('rsp1.png')";
    target1.classList.add("onOpacity");

    startCount--;
  }
}

// ==========================

// window.onload = function () {
//   let i = 1;
//   setInterval(function () {
//     let pic = document.getElementById("rspimg");
//     pic.setAttribute("src", "rsp" + ((i % 3) + 1) + ".png");
//     i++;
//   }, chgtime);
// };
