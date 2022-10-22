const today = new Date();

console.log(today);

console.log(today.toLocaleString());
console.log(today.toUTCString());

console.log(today.getDate());
console.log(today.getDay()); // 일: 0, 월: 1 ... ~ 토 : 6

console.log(today.getMonth()); // 1월 : 0 ...  ~ 12월 : 11
// 날짜 관련이다 => Date
console.log(Date.now());
console.log(new Date(Date.now()));
