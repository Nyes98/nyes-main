function solution(k, score) {
  var answer = [];
  let hof = [];

  if (k > score.length) k = score.length;

  for (let i = 0; i < k; i++) {
    hof.push(score[i]);
    hof.sort((a, b) => {
      return a - b;
    });
    answer.push(hof[0]);
  }

  for (let i = k; i < score.length; i++) {
    if (hof[0] < score[i]) {
      hof.sort((a, b) => {
        return a - b;
      });
      hof.push(score[i]);
      hof.shift();
      hof.sort((a, b) => {
        return a - b;
      });
      answer.push(hof[0]);
    } else {
      answer.push(hof[0]);
    }
  }

  console.log(answer);
  return answer;
}

solution(9, [10, 30, 40, 3, 0, 20, 4]);
