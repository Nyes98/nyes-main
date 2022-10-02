function solution(n) {
  let share = parseInt(n / 3);
  let remainder = n % 3;
  let answerArr = [];
  let result = 0;

  console.log("n = " + n);
  console.log("share = " + share);
  console.log("remainder = " + remainder);

  if (n <= 3) answerArr.push(n);
  else {
    debugger;

    do {
      if (remainder == 0) {
        share--;
        remainder += 3;
      }

      answerArr.unshift(remainder);
      answerArr.unshift(share);
      answerArr.splice(2, 2);

      if (share > 3) {
        let a = parseInt(answerArr[0] / 3);
        let b = answerArr[0] % 3;
        answerArr.unshift(b);
        remainder = b;
        answerArr.unshift(a);
        share = a;
        answerArr.splice(2, 1);
      }
    } while (answerArr[0] >= 4 || answerArr[1] == 0);
  }

  console.log(answerArr);
  for (let i = 0; i < answerArr.length; i++) {
    if (answerArr[i] == 3) answerArr[i] = 4;
  }

  result = answerArr.join("");
  console.log(result);
  return result;
}

solution(58);
