function solution(sequence) {
  var answer = 0;
  let store = [];
  let sum = 0;

  for (let i = 1; i <= sequence.length; i++) {
    for (let j = 0; j < sequence.length - i + 1; j++) {
      console.log(sequence.slice(j, j + i));
    }
  }

  return answer;
}

solution([2, 3, -6, 1, 3, -1, 2, 4]);
