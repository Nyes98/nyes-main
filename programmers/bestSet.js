function solution(n, s) {
  var answer = [];
  let value;
  let remainder;

  value = parseInt(s / n);
  remainder = s % n;

  if (value == 0) return [-1];

  if (remainder == 0) {
    for (let i = 0; i < n; i++) {
      answer.push(value);
    }
  } else {
    for (let i = 0; i < n; i++) {
      if (remainder !== 0) {
        answer.push(value + 1);
        remainder--;
      } else {
        answer.push(value);

        continue;
      }
    }
  }

  answer.sort(function (a, b) {
    return a - b;
  });

  return answer;
}
