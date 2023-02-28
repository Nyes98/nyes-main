function solution(keymap, targets) {
  let imsi = [];
  let real = [];
  let sum = 0;

  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      for (let k = 0; k < keymap.length; k++) {
        if (keymap[k].indexOf(targets[i][j]) > -1) {
          imsi.push(keymap[k].indexOf(targets[i][j]));
        } else {
          imsi.push(101);
        }
      }
      if (Math.min(...imsi) >= 101) {
        sum = -1;
        break;
      } else {
        sum += Math.min(...imsi) + 1;
        imsi = [];
      }
    }
    real.push(sum);
    sum = 0;
  }
  return real;
}
