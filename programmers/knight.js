function solution(number, limit, power) {
  var answer = 0;
  let arr = [];

  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        cnt++;
        if (i / j != j) {
          cnt++;
        }
      }
      if (j == parseInt(Math.sqrt(i))) arr.push(cnt);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) answer += power;
    else answer += arr[i];
  }
  return answer;
}
