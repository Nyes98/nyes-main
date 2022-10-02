function solution(board, moves) {
  moves = moves.map((item) => item - 1);
  var answerCnt = 0;
  let tempArr = [];
  let tempArr2 = [];
  let answerArr = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      tempArr.push(board[j][i]);
      if (tempArr.length == board.length) {
        tempArr2.push(tempArr);
        tempArr = [];
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let curItem = tempArr2[moves[i]][j];
      if (curItem == 0) {
        continue;
      } else {
        answerArr.push(curItem);
        tempArr2[moves[i]][j] = 0;

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
