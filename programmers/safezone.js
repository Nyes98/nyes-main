function solution(board) {
  var answer = 0;

  let n = board.length;

  let zone = new Array(n + 2).fill().map(() => new Array(n + 2));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (board[i - 1][j - 1] == 1) {
        zone[i - 1][j - 1] = 1;
        zone[i - 1][j] = 1;
        zone[i - 1][j + 1] = 1;
        zone[i][j - 1] = 1;
        zone[i][j] = 1;
        zone[i][j + 1] = 1;
        zone[i + 1][j - 1] = 1;
        zone[i + 1][j] = 1;
        zone[i + 1][j + 1] = 1;
      }
    }
    console.log("i =", i, zone[i]);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (zone[i][j] == 1) answer++;
    }
  }

  console.log(zone);
  console.log("답", n * n - answer);
  return answer;
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]);
