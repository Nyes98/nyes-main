// 기존의 odd, even 클릭과 달리 oddeven에서 호출받으며 전달받은 매개변수를
// 사용하기위해 count를 매개변수로 선언한다. 괄호 안의 count << '123'
function odd(count) {
  if (!count) {
    // odd 클릭 시 count는 입력된 값이 없기 때문에 undefined가 된다.
    // oddeven 함수에서 호출받았을 때에는 count에 oddeven 함수에서 전달한
    // 매개변수가 count에 정의된다. << '123' = true
    const count = parseInt(prompt("몇 까지 찍을까?"));
    // undefined는 boolean 값으로 따졌을 때 false 되기 때문에 매개변수가 없는지
    // 확인하여 입력 받을 수 있도록 처리한다.
    count = parseInt(count);
    // oddeven 함수에서 전달받은 count는 문자열이기 때문에 parseInt 함수를 호출하여
    // 정수로 변환해준다.
  }
  for (let i = 0; i < count; i++) {
    if (i % 2) console.log(i);
    // i%2 << 홀수일 때 1, 홀수를 판단할 수 있다.
  }
  // 위 코드는 아래 코드들보다 안좋다.
  // 10을 넣었을 시 10번을 반복하지만 아래는 5번만 반복하기 때문
  // 반복의 횟수 차이가 입력된 수에 비례해 기하급수적으로 늘어 날 수 있다.

  for (let i = 0; i < count / 2; i++) {
    console.log(i * 2 + 1);
  }

  for (let i = 1; i < count + 1; i += 2) {
    console.log(i);
  }
}

const even = function (count) {
  if (!count) {
    const count = parseInt(prompt("몇 까지 찍을까?"));
  }

  count = parseInt(count);

  for (let i = 0; i <= count; i++) {
    if (!(i % 2)) console.log(i);
    // i%2 << 홀수일 때 1, 홀수를 판단할 수 있다.
  }
  for (let i = 0; i < (count + 1) / 2; i++) {
    console.log(i * 2);
  }

  for (let i = 0; i < count + 1; i += 2) {
    console.log(i);
  }
};

const oddeven = () => {
  const count = prompt("몇 까지 찍을까? 그리고 홀? 짝?\n 형식: n&홀짝"); // parseInt 없는이유 : 숫자랑 문자(홀,짝)동시에 받을거라
  // '123&홀' 형식의 문자열(string)을 받게 된다.
  // split 메서드를 호출해서 &를 기준으로 분리한다.
  // 문자열(string) 아이템을 가진 배열을 반환(리턴)받는다. >> count.split('&') >> ['123', '홀']
  const number = count.split(`&`)[0]; // << '123'
  const isOdd = count.split(`&`)[1]; // << '홀'
  // 숫자와 문자(홀,짝)가 나누어 졌다.

  if (isOdd == "홀") {
    // isOdd가 홀인지 확인하여 홀이면 odd 함수를 호출한다.
    // 호출하면서 받았던 숫자를 매개변수로 전달한다.
    odd(number);
    // 매개변수로 입력된 숫자를 전달한다.
  } else {
    even(number);
  }
};
