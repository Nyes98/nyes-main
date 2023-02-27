function solution(keymap, targets) {
  var answer = [];
  let imsi = [];
  let real = [];
  let sum = 0;

  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      for (let k = 0; k < keymap.length; k++) {
        console.log(keymap[k].indexOf(targets[i][j]));
        if (keymap[k].indexOf(targets[i][j]) > -1) {
          imsi.push(keymap[k].indexOf(targets[i][j]));
        } else {
          imsi.push(200);
        }
      }
      console.log("임시", imsi);
      if (Math.min(...imsi) >= 200) {
        return [-1];
      }
      answer.push(Math.min(...imsi) + 1);
      console.log("정답", answer);
      imsi = [];
    }
    answer.forEach((item) => {
      sum += item;
    });
    real.push(sum);
    sum = 0;
    answer = [];
  }

  console.log(real);
  return real;
}

// solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]);
solution(["AA"], ["B"]);
