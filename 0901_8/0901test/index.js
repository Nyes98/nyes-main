let firstNum = 0;
let secondNum = 0;
let usecal = 0;
// 카운트를 쓰느냐 안쓰느냐
// 안쓰면 firstNum가 비었는지, 정의가 되지 않았는지 -> undefined (정의가 되지않은 변수의 값)

function bt(value) {
  if (firstNum == 0 && secondNum == 0) {
    usecal = 1;
    firstNum = value;
    console.log(`첫 번째 숫자 : ${firstNum}`);
  } else if (firstNum != 0 && secondNum == 0) {
    usecal = 2;
    secondNum = value;
    console.log(`두 번째 숫자 : ${secondNum}`);
  } else {
    console.log("이미 두 개의 숫자를 선택하셨습니다.");
  }
}

function bt0() {
  if (usecal == 0) {
    firstNum = 0;
    usecal = 1;
    console.log(`첫 번째 숫자 : ${firstNum}`);
  } else if (usecal == 1) {
    usecal = 2;
    secondNum = 0;
    console.log(`두 번째 숫자 : ${secondNum}`);
  } else {
    console.log("이미 두 개의 숫자를 선택하셨습니다.");
  }
}

function ao(btao, operator) {
  alert(`${firstNum} ${operator} ${secondNum} = ${btao()}`);
}

function addNum() {
  return firstNum + secondNum;
}
function minusNum() {
  return firstNum - secondNum;
}
function multiNum() {
  return firstNum * secondNum;
}
function divideNum() {
  return firstNum / secondNum;
}
function modNum() {
  return firstNum % secondNum;
}
