function solution(board, moves) {
  moves = moves.map((item) => item - 1);
  var answerCnt = 0;
  let rowArr = [];
  let colArr = [];
  let answerArr = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      rowArr.push(board[j][i]);
      if (rowArr.length == board.length) {
        colArr.push(rowArr);
        rowArr = [];
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let curItem = colArr[moves[i]][j];
      if (curItem == 0) {
        continue;
      } else {
        answerArr.push(curItem);
        colArr[moves[i]][j] = 0;

        if (
          answerArr.length >= 2 &&
          answerArr[answerArr.length - 1] == answerArr[answerArr.length - 2]
        ) {
          answerArr.splice(answerArr.length - 2, 2);
          answerCnt += 2;
        }
        break;
      }
    }
  }

  return answerCnt;
}
