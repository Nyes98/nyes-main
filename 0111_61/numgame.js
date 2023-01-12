// let imsi = [];
// let temp = 0;
// let result = 0;

// A.sort(function (a, b) {
//   return a - b;
// });
// // A.sort();
// // B.sort();

// console.log(A, B);
// for (let i = 0; i < A.length; i++) {
//   for (let j = 0; j < A.length; j++) {
//     if (A[i] < B[j]) {
//       imsi.push(B[j]);
//       imsi.sort(function (a, b) {
//         return a - b;
//       });
//       temp = imsi[i];
//       imsi[i] = imsi[j];
//       imsi[j] = temp;
//     }
//   }

//   if (A[i] < B[i]) result++;
// }
// console.log(result);

const A = [1, 6, 10, 200];
const B = [201, 2, 5, 4];
let imsi = [];
let temp = 0;
let result = 0;
let cnt = 0;

A.sort(function (a, b) {
  return a - b;
});

B.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < A.length; i++) {
  for (let j = i; j < A.length; j++) {
    if (A[i] < B[j]) {
      temp = B[i];
      B[i] = B[j];
      B[j] = temp;
      break;
    }
  }
  if (A[i] < B[i]) result++;
}
