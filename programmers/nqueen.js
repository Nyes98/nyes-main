function solution(arrayA, arrayB) {
  let answer = 0;
  let temp = [];

  let max = Math.max(...arrayA);
  console.log(max);

  for (let i = 0; i <= arrayA.length; i++) {
    for (let j = 2; j <= max; j++) {
      if (arrayA[i] % j !== 0) continue;
      temp.push(j);
    }
  }

  return answer;
}

solution([1, 2, 3, 4, 5], [3, 4, 5, 6]);
