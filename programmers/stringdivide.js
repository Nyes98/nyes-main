function solution(s) {
  var answer = 0;
  let first = "";
  let cnt = 0;
  let dcnt = 0;

  if (s.length % 2) answer++;

  for (let i = 0; i < s.length; i++) {
    if (first == "") {
      first = s[i];
      cnt++;
      continue;
    }
    if (first == s[i]) {
      cnt++;
      continue;
    } else {
      dcnt++;
      if (cnt == dcnt) {
        answer++;
        cnt = 0;
        dcnt = 0;
        first = "";
      }
    }
  }

  return answer;
}
