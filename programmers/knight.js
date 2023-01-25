// function solution(number, limit, power) {
//   var answer = 0;
//   let arr = [];

//   for (let i = 1; i <= number; i++) {
//     let cnt = 0;

//     for (let j = 1; j <= i; j++) {
//       if (i % j == 0) cnt++;
//       if (j == i) arr.push(cnt);
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > limit) answer += power;
//     else answer += arr[i];
//   }

//   console.log(answer);
//   return answer;
// }

// solution(100000, 3, 2);

function solution(number, limit, power) {
  var answer = 0;
  let arr = [];

  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      console.log("i", i);
      if (i % j == 0) {
        console.log("j", j);
        cnt++;
        console.log("제곱근 약수추가", cnt);

        if (i / j != j) {
          console.log("넘나제", i / j);
          cnt++;
          console.log("제곱근으로 나눈 수 약수추가", cnt);
        }
      }

      if (j == parseInt(Math.sqrt(i))) arr.push(cnt);
      console.log(arr);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) answer += power;
    else answer += arr[i];
  }
  console.log(answer);
  return answer;
}

solution(10, 3, 2);
