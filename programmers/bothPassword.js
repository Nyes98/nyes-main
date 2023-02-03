function solution(s, skip, index) {
  var answer = "";
  let abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < skip.length; i++) {
    abc.splice(abc.indexOf(skip[i]), 1);
  }

  for (let i = 0; i < s.length; i++) {
    answer += abc[(abc.indexOf(s[i]) + index) % (26 - skip.length)];
  }

  return answer;
}
