function solution(storey) {
  var answer = 0;
  let str = String(storey);
  let temp = [...str].reverse();

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] >= 6) {
      temp[i + 1] = +temp[i + 1] + 1;
      answer += 10 - +temp[i];
      console.log("답", answer);
    } else if (temp[i] <= 4) {
      answer += +temp[i];
      console.log("답", answer);
    }
    console.log(temp);
  }
  return answer;
}

solution(166);
