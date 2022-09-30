function solution(board, moves) {
  moves = moves.map((item) => item - 1);
  var answerCnt = 0;
  let tempArr = [];
  let tempArr2 = [];
  let answerArr = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      tempArr.push(board[j][i]);
      if (tempArr.length == 5) {
        tempArr2.push(tempArr);
        tempArr = [];
      }
    }
  }

  console.log(tempArr2);
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let curItem = tempArr2[moves[i]][j];
      if (curItem == 0) {
        continue;
      } else {
        answerArr.push(curItem);
        curItem = 0;
        console.log(answerArr);

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
  console.log(answerArr);

  return answerCnt;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
