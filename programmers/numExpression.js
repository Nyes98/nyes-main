function solution(n) {
  var answer = 1;
  let temp = [];

  for (let i = 2; i <= n; i++) {
    if (n % i == 0) temp.push(i);
  }

  console.log(temp);

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] % 2 == 1) answer++;
  }

  console.log(answer);
  return answer;
}
solution(1);
solution(2);

solution(3);
solution(4);
solution(5);
solution(6);
solution(7);
