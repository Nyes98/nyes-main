function solution(operations) {
  var answer = [];
  //   console.log(operations[0][0]);
  //   console.log("자른거", operations[1].slice(2));

  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] == "I") {
      answer.push(parseInt(operations[i].slice(2)));
    }
    if (answer && operations[i][0] == "D") {
      answer.sort((a, b) => {
        return a - b;
      });
      if (operations[i][2] == "1") {
        answer.pop();
      } else {
        answer.shift();
      }
    }
  }
  //   console.log([answer[answer.length - 1], answer[0]]);
  //   console.log("엔서", answer);
  //   console.log("엔서기리", answer.length);
  //   console.log(answer == true);

  if (answer.length) {
    console.log("여기오냐");
    return [answer[answer.length - 1], answer[0]];
  } else {
    console.log("그럼 여기오냐");

    return [0, 0];
  }
}

console.log(
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);
// solution([
//   "I -45",
//   "I 653",
//   "D 1",
//   "I -642",
//   "I 45",
//   "I 97",
//   "D 1",
//   "D -1",
//   "I 333",
// ]);
