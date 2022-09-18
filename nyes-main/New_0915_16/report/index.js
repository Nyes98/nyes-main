let userSelv = 0;
let winexp = 0;
let pickCount = 0;
let startCount = 0;
let rdmcom = 0;
let mycoin = 1000;
let result = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 20];
let resultrdm = [];

const target = document.getElementById("comDisplay");
const target1 = document.getElementById("comResult");
const wineft = document.getElementById("windiv");
const draweft = document.getElementById("drawdiv");
const loseeft = document.getElementById("losediv");
const spin = document.getElementById("roulette");
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
  shuffle(result);
  for (let i = 1; i <= result.length; i++) {
    document.getElementById(`rrdiv${i}`).innerHTML = `${result[i - 1]}`;
  }
  if (startCount >= 1) return;
  startCount++;
  pickCount = 0;

  target1.style.opacity = "0";
  draweft.style.border = "none";
  wineft.style.border = "none";
  loseeft.style.border = "none";
  pickeft1.style.border = "2px solid black";
  pickeft2.style.border = "2px solid black";
  pickeft3.style.border = "2px solid black";

  mycoin -= 100;
  document.getElementById("myCoin").innerHTML = `${mycoin}`;
  target.style.animation = "comSel 0.3s infinite";
  spin.style.animation = "rouletteSpin 7s linear infinite";
}

function userPickS() {
  if (pickCount >= 1 || startCount != 1) return;
  pickeft1.style.border = "2px solid blue";
  pickeft2.style.border = "2px solid black";
  pickeft3.style.border = "2px solid black";
  pickCount++;
  draweft.style.border = "none";
  target.style.animationPlayState = "paused";
  spin.style.animation = "rouletteSpin 7s linear infinite";
  userSelv = 1;
  rdmcom = Math.floor(Math.random() * 3 + 1);
  if (userSelv == rdmcom) {
    target1.style.backgroundImage = "url('rsp1.png')";
    target1.style.opacity = "1";
    draweft.style.border = "3px solid aqua";
    pickCount--;
  } else if (userSelv - rdmcom == -2) {
    winexp++;
    target1.style.backgroundImage = "url('rsp3.png')";
    target1.style.opacity = "1";
    spin.style.animation = "rouletteSpin 5s ease";
    wineft.style.border = "3px solid aqua";
    startCount--;
    let resultx = document.getElementById("rrdiv1").innerText;

    console.log(resultx);
    mycoin += 100 * resultx;
    document.getElementById("myCoin").innerHTML = `${mycoin}`;
  } else {
    target1.style.backgroundImage = "url('rsp2.png')";
    target1.style.opacity = "1";
    loseeft.style.border = "3px solid aqua";
    startCount--;
  }
}
function userPickR() {
  if (pickCount >= 1 || startCount != 1) return;
  pickeft2.style.border = "2px solid blue";
  pickeft1.style.border = "2px solid black";
  pickeft3.style.border = "2px solid black";
  pickCount++;
  draweft.style.border = "none";
  target.style.animationPlayState = "paused";
  userSelv = 2;
  spin.style.animation = "rouletteSpin 7s linear infinite";
  rdmcom = Math.floor(Math.random() * 3 + 1);
  if (userSelv == rdmcom) {
    target1.style.backgroundImage = "url('rsp2.png')";
    target1.style.opacity = "1";
    draweft.style.border = "3px solid aqua";
    pickCount--;
  } else if (userSelv - rdmcom == 1) {
    target1.style.backgroundImage = "url('rsp1.png')";
    target1.style.opacity = "1";
    spin.style.animationPlayState = "running";
    wineft.style.border = "3px solid aqua";
    spin.style.animation = "rouletteSpin 5s ease";
    startCount--;
    let resultx = document.getElementById("rrdiv1").innerText;

    mycoin += 100 * resultx;
    document.getElementById("myCoin").innerHTML = `${mycoin}`;
  } else {
    target1.style.backgroundImage = "url('rsp3.png')";
    target1.style.opacity = "1";
    loseeft.style.border = "3px solid aqua";
    startCount--;
  }
}

function userPickP() {
  if (pickCount >= 1 || startCount != 1) return;
  pickeft3.style.border = "2px solid blue";
  pickeft2.style.border = "2px solid black";
  pickeft1.style.border = "2px solid black";
  pickCount++;
  draweft.style.border = "none";
  target.style.animationPlayState = "paused";
  userSelv = 3;
  spin.style.animation = "rouletteSpin 7s linear infinite";
  rdmcom = Math.floor(Math.random() * 3 + 1);
  if (userSelv == rdmcom) {
    target1.style.backgroundImage = "url('rsp3.png')";
    target1.style.opacity = "1";
    draweft.style.border = "3px solid aqua";
    pickCount--;
  } else if (userSelv - rdmcom == 1) {
    target1.style.backgroundImage = "url('rsp2.png')";
    target1.style.opacity = "1";
    spin.style.animationPlayState = "running";
    wineft.style.border = "3px solid aqua";
    startCount--;
    spin.style.animation = "rouletteSpin 5s ease";
    let resultx = document.getElementById("rrdiv1").innerText;

    mycoin += 100 * resultx;
    document.getElementById("myCoin").innerHTML = `${mycoin}`;
  } else {
    target1.style.backgroundImage = "url('rsp1.png')";
    target1.style.opacity = "1";
    loseeft.style.border = "3px solid aqua";
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
