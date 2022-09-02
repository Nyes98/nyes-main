const str = "abcDeFgHIJklmn";

console.log(str.indexOf("D"));
console.log(str.indexOf("cD"));
console.log(str.indexOf("cDY")); // 전달된 텍스트가 내용에 없을 시 -1을 리턴(반환)한다.

console.log(str.length); // 길이

console.log(str.slice(1, 3)); // 자르기
console.log(str.split(/D/));
// 매개변수로 전달된 정규표현식을 기준으로 짜른다.
console.log(str.split("")); // 하나하나 다 분해한다.

console.log(str.replace(/D/, "a"));
// 1번째 매개변수로 정규표현식을 전달하고, 두번째 매개변수로 바꾸고싶은 텍스트를 전달한다.

console.log(str.toLowerCase()); // 전부 소문자로
console.log(str.toUpperCase()); // 전부 대문자로
