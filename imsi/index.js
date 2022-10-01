function solution(n) {
  let share = parseInt(n / 3);
  let remainder = n % 3;
  let resultArr = [];

  for (i = 0; i < parseInt(n / 3) + 1; i++) {
    if (remainder == 0) {
      share - 1;
      remainder += 3;
      resultArr.push(share);
      resultArr.push(remainder);
      remainder = 0;
      if (resultArr[0] >= 4) {
        share = parseInt(share / 3);
        resultArr.unshift(share);
        resultArr[1] = parseInt(resultArr[1] / 3);
      } else break;
    }
    if (remainder == 1) {
      resultArr.push(1);
      console.log(resultArr);

      continue;
    }
    if (remainder == 2) {
      resultArr.push(2);
      console.log(resultArr);

      continue;
    }
  }
}

solution(3);
