let i = 0;
// 반복할 때 i,j,k 이런식으로 변수를 선언한다.
// i : index 의 약자. git은 아예 다르게 index라는 용어를 사용하니 헷갈리지 않게 조심.
// array[5] = 배열의 6번째 아이템을 가져온다. << 5가 index
while (i < 10) {
  // while : 반복문의 명령어 중 하나이다.
  // () 안의 조건이 충족되면 실행된다.
  // {} 안의 코드를 실행한 후 ()안의 조건을 확인한다.
  console.log("i = " + ++i);
}

let j = 0;
while (j < 10) {
  console.log("j = " + j++);
  //   break;
}

// while(true)console.log(new Date())
// 브라우저 멈추고 싶으면 위 코드를 실행하시오.

while (true) {
  console.log(new Date());
  if (--i < 1) break;
  // break는 코드를 멈춘다, 즉 반복을 멈추고 다음 코드를 실행한다.
}

let k = 0;

do {
  // do는 while 조건을 확인하기 전에 실행한다.
  console.log("k = " + ++k);
  // k를 출력하고 조건을 확인한다.
} while (k < 10);

// do를 적는것과 안적는 것의 차이가 무엇인가?
console.log(i);
while (i !== 0) {
  console.log("asdf1");
}
do {
  console.log("asdf2");
} while (i !== 0);
