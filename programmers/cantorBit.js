// function solution(n, l, r) {
//   var answer = 0;
//   let arr = "1";
//   let temp = [];
//   let tempString = "";

//   while (arr.length < 5 ** n) {
//     let length = arr.length;
//     for (let i = 0; i < length; i++) {
//       if (arr[i] == 1) {
//         tempString += "11011";
//         // temp.push(1);
//         // temp.push(1);
//         // temp.push(0);
//         // temp.push(1);
//         // temp.push(1);
//       } else {
//         tempString += "00000";
//         // temp.push(0);
//         // temp.push(0);
//         // temp.push(0);
//         // temp.push(0);
//         // temp.push(0);
//       }
//     }
//     arr = tempString;
//     tempString = "";
//   }

//   for (let i = l - 1; i < r; i++) {
//     if (arr[i] == 1) answer++;
//   }
//   console.log(arr);
//   console.log(answer);
//   return answer;
// }

// solution(3, 55, 69);

function solution(n, l, r) {
  let length = 5 ** n;
  let set = 5 ** (n - 1);

  console.log(l);

  while (l - set > 0) {
    l = l - set;
  }
  console.log(l);
}

solution(2, 4, 17);
