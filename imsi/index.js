let s = prompt("단어입력");
let arr = s.split("");
let answer = "";
console.log(arr);

if (arr.length % 2 != 0) {
  answer = arr[arr.length / 2];
} else {
  answer = arr[arr.length / 2] + arr[arr.length / 2 + 1];
}

console.log;
