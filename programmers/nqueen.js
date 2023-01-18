function solution(n) {
  var answer = 0;
  let chess = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      chess.push([i, j]);
    }
  }

  return answer;
}
