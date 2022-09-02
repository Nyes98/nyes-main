// 객체란? {}로 묶인 키와 값으로 이루어진 변수(상자)
const obj = {
  // obj = 객체
  a: 1,
  // a가 키고 1이 값이다.
  // 키의 정식 명칭은 프로퍼티(property, porps)다
  b: function () {
    // b와 c는 함수 => 메서드(method)
    console.log("b");
  },
  c: () => {
    return "c";
  },
};

const arr = [1, 2, 3, 4, 5];
// 배열도 객체이다.
// arr.push()
// push method 호출
console.log(arr.length);
// 배열의 길이를 나타내는 프로퍼티
let tempReturn = arr.indexOf(3);
// 배열에 있는 아이템을 찾아서 그 위치를 알려준다. 즉 위치를 리턴해준다.
// 없으면 -1, 첫번째 있으면 0을 반환, 리턴해준다.
console.log(tempReturn);

tempReturn = arr.find((item) => {
  console.log("item" + item);
  return item == 3;
});
// find : 검색할 때 사용할 코드
// 코드의 반환값이 true 나오는 함수를 넣어준다.
// find의 반환값은 아이템의 순서가 아닌 아이템 그 자체다.
// find 메서드는 매개변수로 함수를 전달한다.
// 매개변수에 해당하는 함수의 매개변수(item)은 배열의 각 아이템을 적용한다.
// find 함수는 배열의 각 아이템을 순서대로 매개변수함수에 전달하여 리턴값을 확인한다.
// 매개변수함수에게서 받은 리턴 값이 true면 해당 아이템을 리턴하고 함수 find함수를 종료한다.

console.log(arr);
arr.reverse();
// 순서 거꾸로
console.log(arr);
arr.reverse();

console.log(arr.join(" / "));
// 배열을 문자열로 바꿔줍니다. 매개변수로 아이템 사이에 넣을 문자를 입력합니다.
console.log(arr.toString()); // 문자열로 바꿈(거의 모든 객체에 포함되어 있음)

console.log(arr.slice(1, 3));
// {1,2,3} 이라 했을때 1의 앞이 0이고 각 ,마다 숫자가 늘어난다고 생각하면 됨
console.log(arr.slice(1, -1));
// -는 뒤에서부터 확인합니다. 즉 5가 0이고 4가 -1이됨
// console.log(arr.slice(1, -1)); <- 순서가 꼬이면 안됨

// arr.splice(1,3); <- 1부터 3개를 짜른다. 단, arr을 수정해버린다.
// console.log(arr)

console.log(arr.sort()); // 오름차순
console.log(arr.sort().reverse()); // 내림차순

console.log(
  arr.sort((curr, next) => {
    return curr - next;
    // sort : 정렬을 해주는 메서드
    // 1, 0, -1 로 정렬 방식을 선택한다.
    // 현재가 큰 것을 1로주고 다음 것이 큰 것을 -1로 주면 오름차순으로 정렬된다.
  })
);

console.log(
  arr.sort((curr, next) => {
    return next - curr;
    // 반대 조건 시 내림 차순이다.
  })
);

const arrt = ["윤길동", "박길동", "김춘향", "최강민호", "김부각"];

tempReturn = arrt.find((item) => {
  return item[0] === "김";
});
// find는 매개변수함수가 true인 아이템들 중 첫번째만 리턴해준다.
console.log(tempReturn);

tempReturn = arrt.findIndex((item) => {
  return item[0] === "김";
});
// findIndex는 매개변수함수가 true인 아이템들 중 첫번째의 배열 내에서 몇번째인지 확인한다.
console.log(tempReturn);

tempReturn = arrt.filter((item) => {
  return item.length === 3;
});
// filter는 매개변수함수가 true인 아이템들을 배열로 리턴해준다.
console.log(tempReturn);

tempReturn = arrt.map((item) => {
  return item + "오늘 출석함";
  //   return item[0] === "김";
});
// map은 매개변수함수의 return 값들을 배열로 리턴해준다.
console.log(tempReturn);

arr.forEach((item) => console.log(item));
// =
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// forEach 메서드는 아이템을 하나씩 함수에게 매개변수로 전달해 함수를 호출한다.
// 아래의 for 문과 같다.

const tempFind = (item) => {
  return item === 3;
  // item이 3이랑 같으면 true를 리턴하고 아니면 false를 리턴한다.
};

const arrFind = function () {
  for (let i = 0; i < arr.length; i++) {
    if (tempFind(arr[i])) return arr[i];
    // tempFind 함수를 호출하고 매개변수로 arr의 i번째의 아이템을 전달한다.
    // tempFind 함수가 true를 리턴(반환)하면 arr의 i번째 아이템을 리턴(반환)한다.
  }
};

// const tempArr = [
//   { name: "정재훈", age: 30, area: "대치동" },
//   { name: "염예나", age: 22, area: "하남" },
//   { name: "김성진", age: 27, area: "성남" },
// ];
// console.log(tempArr.find((item) => item, area === "하남"));
// console.log(tempArr.findIndex((item) => item, area === "하남"));
// console.log(tempArr.filter((item) => item, area === "하남"));
// console.log(tempArr.map((item) => item, area === "하남"));

// 수정하면서 확인해보기
