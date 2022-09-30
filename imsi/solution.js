function solution(board, moves) {
  var answer = 0;
  let tempArr = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      tempArr[j][i] = board[i][j];
    }
  }
  return answer;
}
