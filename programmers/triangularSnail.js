function solution(n) {
  var answer = [];
  let cnt = parseInt(n - 1 / 3);
  let amu = new Map();

  while (cnt >= 0) {
    for (let i = 1; i <= n; i++) {
      amu.set(i, [i]);
    }
    for (let i = n + 1; i < parseInt(n) * 2 - 1; i++) {
      let temp = amu.get(n);
      amu.set(n, [...temp, i]);
    }

    for (let i = 0; i < n - 1; i++) {
      let temp = amu.get(n - i);
      amu.set(n - i, [...temp, parseInt(n) * 2 - 1 + i]);
    }
    console.log(cnt);
    cnt--;
  }

  console.log(amu);
  return answer;
}
// [[],[,][,,]]

solution(5);
