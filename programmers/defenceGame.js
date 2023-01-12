function solution(n, k, enemy) {
  let answer = 0;
  let undead = [];
  let temp = 0;

  if (k > enemy.length) k = enemy.length;

  for (let i = 0; i < k; i++) {
    undead.push(enemy[i]);
  }
  console.log(undead);

  undead.sort(function (a, b) {
    return a - b;
  });
  for (let i = k; i < enemy.length; i++) {
    for (let j = 0; j < k; j++) {
      if (enemy[i] > undead[j]) {
        temp = undead[j];
        undead[j] = enemy[i];
        enemy[i] = temp;
        // enemy[j] = undead[j];
      }
    }
    console.log("무적권", undead);
    console.log("적숫자", enemy);
    if (n - enemy[i] >= 0) {
      n = n - enemy[i];
      answer++;
    } else break;
  }
  console.log(answer + k);
  return answer + k;
}

solution(5, 2, [1, 2, 3, 4, 6, 1, 2, 3]);
// console.log(solution(5, 4, [1, 2, 3, 4, 6, 1, 2, 3]));
