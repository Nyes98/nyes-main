function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    console.log("i", i);
    if (i == numbers.length - 1) {
      answer.push(-1);
      break;
    }
    for (let j = i + 1; j <= numbers.length; j++) {
      if (answer && numbers[i] == numbers[i - 1]) {
        answer.push(answer[answer.length - 1]);
        console.log("이게마지막", answer);
        break;
      }
      if (j == numbers.length - 1 && numbers[i] >= numbers[j]) {
        answer.push(-1);
        console.log(answer);
        break;
      }
      if (numbers[i] < numbers[j]) {
        answer.push(numbers[j]);
        console.log(answer);

        break;
      }
    }
  }
  console.log(answer);
  return answer;
}

solution([3, 3, 3, 3, 3, 3, 3]);
