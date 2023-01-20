function solution(storey) {
  let answer = 0;
  let temp = [...String(storey)].map((item) => parseInt(item)).reverse();
  for (let i = 0; i < temp.length; i++) {
    if (i == temp.length - 1) {
      if (temp[i] == 10) {
        answer += 1;
        break;
      } else if (temp[i] > 5) {
        answer += 11 - temp[i];
        break;
      } else {
        answer += temp[i];
        break;
      }
    }
    if (temp[i] == 10) {
      temp[i + 1] += 1;
      continue;
    }
    if (temp[i] >= 6) {
      temp[i + 1] += 1;
      answer += 10 - temp[i];
    } else if (temp[i] <= 4) {
      answer += temp[i];
    } else {
      if (temp[i + 1] >= 5) {
        temp[i + 1] += 1;
        answer += 5;
      } else {
        answer += 5;
      }
    }
  }
  return answer;
}
