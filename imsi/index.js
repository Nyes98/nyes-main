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

    if (remainder == 0) {
      share--;
      remainder += 3;
    }

    answerArr.push(share);
    answerArr.push(remainder);

    if (n > 12) {
      console.log(answerArr[0]);
      console.log(solution(answerArr[0]));

      answerArr.unshift(solution(answerArr[0]));
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
  }

  console.log(answerArr);
  return answerArr;
}

solution(13);
// console.log(solution(2));
