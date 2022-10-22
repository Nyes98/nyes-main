let firstNum = 0;
let secondNum = 0;

function fpbutton() {
  console.log("첫번째 숫자를 증가합니다.");
  console.log(`현재 : ${++firstNum}`);
  console.log("");
}

function spbutton() {
  console.log("두번째 숫자를 증가합니다.");
  console.log(`현재 : ${++secondNum}`);
  console.log("");
}

function result() {
  console.log("첫번째 숫자와 두번째 숫자를 더합니다.");
  console.log(`${firstNum} + ${secondNum} = ${addNum(firstNum + secondNum)}`);
  console.log("");
}

function addNum() {
  return firstNum + secondNum;
}

/* 
function examAddFn(firstNum) {
  // 매개변수는 위에 변수와 다른 변수가 된다.
  // 1번줄에서 선언한 firstNum와 매개변수로 선언된 firstNum은 엄연히 다른 놈이다.
  console.log(firstNum);
  firstNum++;
  firstNum += 1;
  firstNum = firstNum + 1;
}

examAddFn(); // 매개변수가 없어, 20번째 줄의 firstNum은 undefined
*/
