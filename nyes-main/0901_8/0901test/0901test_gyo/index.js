let firstNum, secondNum;

function numSell(num) {
  // (num) = let num;
  // 함수 스코프({}) 안에서만 사용된다.
  // 함수 밖에서 선언된 전역변수, 지역변수 등 다른 "이름이 같은 다른 변수"와 다른 변수다.
  // 밖에서 num = 1; 했어도 안에서는 undefined가 뜰 수 있다.
  // 이후 HTML에서 () 안에 7을 넣음으로써 "num = 7" 로 정의한다.
  clickCount++;
  if (clickCount == 1) {
    fistNum = num;
  } else if (clickCount == 2) {
    secondNum = num;
  }
}

function check() {
  console.log(firstNum);
  console.log(secondNum);
}

function calculate(order) {
  // order는 위의 num와 마찬가지로 매개변수
  if (clickCount < 2) return;
  // clickCount가 2 미만일 때, 즉 0, 1일때, 숫자 클릭을 2번이상 하지 않알을 때 return(멈춤).
  switch (order) {
    case "+":
      alert(firstNum + secondNum);
      break;
    case "-":
      alert(firstNum - secondNum);
      break;
    case "*":
      alert(firstNum * secondNum);
      break;
    case "/":
      alert(firstNum / secondNum);
      break;
    case "%":
      alert(firstNum % secondNum);
      break;
  }
}
