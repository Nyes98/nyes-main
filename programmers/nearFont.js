function solution(s) {
  var answer = [];
  let zz = "ho ro ja sik";

  for (let i = 0; i < s.length; i++) {
    console.log("에스아이", s[i]);
    console.log(s.indexOf(s[i]));
    if (s.indexOf(s[i]) == i) answer.push(-1);
    else {
      answer.push(i - s.indexOf(s[i]));
      console.log("zjf", s.indexOf(s[i]));
      console.log(answer);
      s = s.replace(s[i], "1");
      console.log(s);
    }
  }

  console.log(answer);
  return answer;
}

// solution("foobar");
solution("banana");
