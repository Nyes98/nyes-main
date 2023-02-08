function solution(cards) {
  let answer = 0;
  let group1 = [];
  let trycnt = 0;
  let answerArr = [];
  let same = 0;
  let real = [];

  while (trycnt < cards.length) {
    group1.push(cards[trycnt]);
    for (let i = trycnt; i < cards.length; i++) {
      if (cards[group1[i - trycnt] - 1] == group1[0]) {
        break;
      }
      group1.push(cards[group1[i - trycnt] - 1]);
    }

    console.log("그룹1", group1);
    if (group1.length == cards.length) {
      console.log("빵점");
      return 0;
    }

    for (let i = 0; i < answerArr.length; i++) {
      for (let j = 0; j < group1.length; j++) {
        for (let z = 0; z < answerArr[i][1].length; z++) {
          if (answerArr[i][1][z] == group1[j]) {
            console.log(i, z, j);
            console.log("담긴 답", answerArr[i][1][z]);
            console.log("같은거있으면 안돼", group1[j]);
            console.log("너 같잖아");
            same++;
          }
        }
      }
    }

    if (same == 0) {
      answerArr.push([group1.length, group1]);
    }
    same = 0;
    console.log("장답", answerArr);

    answer = 0;
    group1 = [];

    trycnt++;
  }

  for (let i = 0; i < answerArr.length; i++) {
    real.push(answerArr[i][0]);
  }

  real.sort((a, b) => {
    return b - a;
  });

  return real[0] * real[1];
}

solution([8, 6, 3, 7, 2, 5, 1, 4]);
