// function solution(want, number, discount) {
//   var answer = 0;
//   let my = [];

//   for (let i = 0; i < number.length; i++) {
//     for (let j = 0; j < number[i]; j++) {
//       my.push(want[i]);
//     }
//   }
//   console.log(my);
//   my.sort();

//   for (let j = 0; j < discount.length - 9; j++) {
//     let cut = discount.slice(j, j + 10).sort();
//     if (my.join() == cut.join()) answer++;
//   }
//   console.log(answer);
//   return answer;
// }

// solution(
//   ["banana", "apple", "rice", "pork", "pot"],
//   [3, 2, 2, 2, 1],
//   [
//     "chicken",
//     "apple",
//     "apple",
//     "banana",
//     "rice",
//     "apple",
//     "pork",
//     "banana",
//     "pork",
//     "rice",
//     "pot",
//     "banana",
//     "apple",
//     "banana",
//   ]
// );

const arr = [
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 2, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

const arr1 = arr[0];
console.log(arr1);
console.log(arr1[5]);
