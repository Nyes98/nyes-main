function solution(wallpaper) {
  var answer = [];
  let min = wallpaper[0].length;
  let max = -1;

  for (let i = 0; i <= wallpaper.length; i++) {
    if (wallpaper[i].indexOf("#") > -1) {
      console.log("1번", i);
      answer.push(i);
      break;
    }
  }

  for (let i = 0; i < wallpaper.length; i++) {
    console.log("인덱스", wallpaper[i].indexOf("#"));
    if (wallpaper[i].indexOf("#") <= min && wallpaper[i].indexOf("#") > -1) {
      min = wallpaper[i].indexOf("#");
      console.log(" 민", min);
    }
  }

  answer.push(min);
  console.log("투", answer);

  for (let i = wallpaper.length - 1; i >= 0; i--) {
    if (wallpaper[i].indexOf("#") > -1) {
      console.log("3번", i);
      answer.push(i + 1);
      break;
    }
  }

  console.log("쓰리", answer);

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].lastIndexOf("#") > max)
      max = wallpaper[i].lastIndexOf("#") + 1;
  }

  answer.push(max);
  console.log("포", answer);

  return answer;
}

// solution([
//   "..........",
//   ".....#....",
//   "......##..",
//   "...##.....",
//   "....#.....",
// ]);

// solution(["..", "#."]);

// solution(["#"]);
solution([
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
]);
