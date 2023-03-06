function solution(n, m, section) {
  var answer = 0;
  let wall = [];

  for (let i = 1; i <= n; i++) {
    wall.push(i);
  }

  for (let i = 0; i < section.length; i++) {
    if (wall.indexOf(section[i]) > -1) {
      wall.splice(wall.indexOf(section[i]), m);
      answer++;
    }
  }

  return answer;
}

solution(4, 1, [1, 2, 3, 4]);
