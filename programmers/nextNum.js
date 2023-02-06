function solution(common) {
  var answer = 0;

  if (common[2] - common[0] == 2) return common[length - 1] + 1;
  else {
    return (common[1] / common[0]) * common[length - 1];
  }
}
