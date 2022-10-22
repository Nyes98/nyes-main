let userSelv = 0;
let pickCount = 0;
let startCount = 0;
let rdmcom = 0;
let mycoin = 1000;
let result = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 20];

const target = document.getElementById("comDisplay");
const target1 = document.getElementById("comResult");
const wineft = document.getElementById("windiv");
const wineft1 = document.getElementById("windiv1");

const draweft = document.getElementById("drawdiv");
const loseeft = document.getElementById("losediv");
const spin = document.getElementById("roulette");
const pickeft = document.getElementById("userBtn");
const pickeft1 = document.getElementById("userBtn1");
const pickeft2 = document.getElementById("userBtn2");
const pickeft3 = document.getElementById("userBtn3");

document.getElementById("myCoin").innerHTML = `${mycoin}`;

function reset() {
  target1.classList.remove("simg");
  target1.classList.remove("rimg");
  target1.classList.remove("pimg");
  pickeft.classList.add("on");
  draweft.classList.remove("onBorder");
  target.classList.add("pause");
  pickCount++;
  rdmcom = Math.floor(Math.random() * 3 + 1);
}

function drawSitu() {
  pickCount--;
  target1.classList.add("onOpacity");
  draweft.classList.add("onBorder");
}

function loseSitu() {
  startCount--;
  target1.classList.add("onOpacity");
  loseeft.classList.add("onBorder");
}

function winSitu() {
  target1.classList.add("onOpacity");
  wineft.classList.add("onBorder");
  wineft1.classList.add("onBorder");
  spin.classList.add("onSpin");
  startCount--;
  let resultx = document.getElementById("rrdiv1").innerText;
  mycoin += 100 * resultx;
  setTimeout(() => {
    spin.classList.remove("onSpin");
    document.getElementById("myCoin").innerHTML = `${mycoin}`;
  }, 3500);
}

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
  wineft1.classList.remove("onBorder");
  loseeft.classList.remove("onBorder");

  mycoin -= 100;
  document.getElementById("myCoin").innerHTML = `${mycoin}`;
  target.classList.add("on");
}

function userPickS() {
  if (pickCount >= 1 || startCount != 1) return;
  pickeft1.classList.add("on");
  reset();
  userSelv = 1;

  if (userSelv == rdmcom) {
    drawSitu();
    target1.classList.add("simg");
    pickeft1.classList.remove("on");
  } else if (userSelv - rdmcom == -2) {
    winSitu();

    target1.classList.add("pimg");
  } else {
    loseSitu();
    target1.classList.add("rimg");
  }
}
function userPickR() {
  if (pickCount >= 1 || startCount != 1) return;
  pickeft2.classList.add("on");
  reset();
  userSelv = 2;

  if (userSelv == rdmcom) {
    drawSitu();

    target1.classList.add("rimg");
    pickeft2.classList.remove("on");
  } else if (userSelv - rdmcom == 1) {
    winSitu();
    target1.classList.add("simg");
  } else {
    loseSitu();

    target1.classList.add("pimg");
  }
}

function userPickP() {
  if (pickCount >= 1 || startCount != 1) return;
  pickeft3.classList.add("on");
  reset();
  userSelv = 3;

  if (userSelv == rdmcom) {
    drawSitu();

    target1.classList.add("pimg");
    pickeft3.classList.remove("on");
  } else if (userSelv - rdmcom == 1) {
    winSitu();

    target1.classList.add("rimg");
  } else {
    loseSitu();

    target1.classList.add("simg");
  }
}
