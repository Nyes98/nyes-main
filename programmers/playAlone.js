function solution(cards) {
  var answer = 0;
  let group1 = [];
  let group2 = [];

  group1.push(cards[0]);
  for (let i = 0; i < cards.length; i++) {
    if (cards[group1[i] - 1] == group1[0]) {
      group2.push(cards[group1[i]]);
      break;
    }
    group1.push(cards[group1[i] - 1]);
  }

  console.log(group1);
  if (group1.length == cards.length) return 0;

  for (let i = 0; i < cards.length; i++) {
    if (cards[group2[i] - 1] == group2[0] && i != 0) {
      console.log("가타요");
      break;
    }
    for (let j = 0; j < group1.length; j++) {
      console.log("비교", cards[group2[i] - 1], group1[j]);
      if (cards[group2[i] - 1] == group1[j]) {
        console.log("걸렸을때 그룹2", group2);
        return group1.length * group2.length;
      }
    }
    group2.push(cards[group2[i] - 1]);
    console.log(group2);
  }

  answer = group1.length * group2.length;
  console.log(answer);
  return answer;
}

// solution([8, 6, 3, 7, 2, 5, 1, 4]);
// solution([2, 5, 4, 1, 3]);
solution([3, 2, 4, 1, 6, 5]);
// solution([5, 3, 6, 1, 7, 9, 2, 4, 8]);

// 5 7 2 3 6 9 8
