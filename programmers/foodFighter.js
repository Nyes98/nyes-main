function solution(food) {
  var answer = "";
  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < parseInt(food[i] / 2); j++) {
      answer += i;
    }
  }

  answer += 0;

  for (let i = answer.length - 2; i >= 0; i--) {
    answer += answer[i];
  }

  console.log(answer);
  return answer;
}

solution([1, 3, 4, 6]);
