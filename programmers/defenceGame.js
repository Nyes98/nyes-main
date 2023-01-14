function solution(n, k, enemy) {
  let answer = 0;
  let undead = [];
  let temp = 0;

  if (k >= enemy.length) return enemy.length;

  for (let i = 0; i < k; i++) {
    undead.push(enemy[i]);
  }
  console.log(undead);
  console.log("최소 인덱스", undead.indexOf(Math.min(...undead)));

  // undead.sort(function (a, b) {
  //   return a - b;
  // });

  for (let i = k; i < enemy.length; i++) {
    if (enemy[i] > undead[undead.indexOf(Math.min(...undead))]) {
      temp = undead[undead.indexOf(Math.min(...undead))];
      undead[undead.indexOf(Math.min(...undead))] = enemy[i];
      enemy[i] = temp;
      // enemy[j] = undead[j];
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

solution(6, 3, [3, 1, 7, 9, 4, 5]);
