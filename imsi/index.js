function solution(n) {
  let share = parseInt(n / 3);
  let remainder = n % 3;
  let answerArr = [];

  console.log("n = " + n);
  console.log("share = " + share);
  console.log("remainder = " + remainder);

  if (n <= 3) answerArr.push(n);
  else {
    // debugger;

    do {
      if (remainder == 0) {
        share--;
        remainder += 3;
      }

      answerArr.push(share);
      answerArr.push(remainder);

      if (share > 3) {
        // answerArr.unshift(solution(answerArr[0]));
        let a = parseInt(answerArr[0] / 3);
        let b = answerArr[0] % 3;
        answerArr.unshift(b);
        answerArr.unshift(a);
        answerArr.splice(2, 1);
      }
    } while (answerArr[0] >= 4);
  }

  // if (share >= 4) {
  //   if (remainder == 0) {
  //     share--;
  //     remainder += 3;
  //     answerArr.push(share);
  //     answerArr.push(remainder);
  //   }
  //   if (remainder == 1) {
  //     share--;
  //     remainder += 3;
  //     answerArr.push(share);
  //     answerArr.push(remainder);
  //   }
  //   if (remainder == 2) {
  //     share--;
  //     remainder += 3;
  //     answerArr.push(share);
  //     answerArr.push(remainder);
  //   }
  // }

  console.log(answerArr);
  for (let i = 0; i < answerArr.length; i++) {
    if (answerArr[i] == 3) answerArr[i] = 4;
  }
  return answerArr;
}

solution(39);
// console.log(solution(2));
