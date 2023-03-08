function solution(k, d) {
  var answer = 0;

  for (let i = 0; i <= parseInt(d / k); i++) {
    answer += parseInt(parseInt(Math.sqrt(d ** 2 - (i * k) ** 2)) / k) + 1;
    console.log("i번째", 0);
    console.log("몇개", parseInt(Math.sqrt(d ** 2 - (i * k) ** 2)) / k + 1);
  }
  console.log("최종", answer);
  return answer;
}

solution(1, 5);
