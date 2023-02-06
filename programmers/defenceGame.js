// function solution(n, k, enemy) {
//   let answer = 0;
//   let undead = [];
//   let temp = 0;

//   if (k >= enemy.length) return enemy.length;

//   for (let i = 0; i < k; i++) {
//     undead.push(enemy[i]);
//   }
//   console.log(undead);
//   console.log("최소 인덱스", undead.indexOf(Math.min(...undead)));

//   // undead.sort(function (a, b) {
//   //   return a - b;
//   // });

//   for (let i = k; i < enemy.length; i++) {
//     if (enemy[i] > undead[undead.indexOf(Math.min(...undead))]) {
//       temp = undead[undead.indexOf(Math.min(...undead))];
//       undead[undead.indexOf(Math.min(...undead))] = enemy[i];
//       enemy[i] = temp;
//       // enemy[j] = undead[j];
//     }
//     console.log("무적권", undead);
//     console.log("적숫자", enemy);
//     if (n - enemy[i] >= 0) {
//       n = n - enemy[i];
//       answer++;
//     } else break;
//   }
//   console.log(answer + k);
//   return answer + k;
// }

// solution(6, 3, [3, 1, 7, 9, 4, 5]);

function solution(board) {
  let row = board.length;
  let col = board[0].length;
  let answer = 0;
  let dp = new Array(row + 1).fill(0).map(() => new Array(col + 1).fill(0));

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (board[i - 1][j - 1] === 0) continue;
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      answer = Math.max(answer, dp[i][j]);
    }
  }
  return answer * answer;
}

console.log(solution([3, 1, 7, 9, 4, 5]));
