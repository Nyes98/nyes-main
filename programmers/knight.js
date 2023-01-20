function solution(number, limit, power) {
  var answer = 0;
  let arr = [];

  for (let i = 1; i <= number; i++) {
    let cnt = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j == 0) cnt++;
      if (j == i - 1) arr.push(cnt);
    }
  }
  console.log(arr);

  return answer;
}

solution(5);
