function solution(k, m, score) {
  var answer = 0;

  score.sort((a, b) => {
    return b - a;
  });
  console.log(score);
  console.log(score.slice(0, 4));

  for (let i = 0; i < parseInt(score.length / m); i++) {
    let temp = score.slice(i * m, i * m + m);
    answer += temp[m - 1] * m;
    console.log("자른거", temp);
    console.log("정답", answer);
  }

  return answer;
}

solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
