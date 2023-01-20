function solution(number, limit, power) {
  var answer = 0;
  let arr = [];

  for (let i = 1; i <= number; i++) {
    let cnt = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j == 0) cnt++;
      if (j == i) arr.push(cnt);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) answer += power;
    else answer += arr[i];
  }

  console.log(answer);
  return answer;
}

solution(100000, 3, 2);
