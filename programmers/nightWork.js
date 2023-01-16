function solution(n, works) {
  let answer = 0;

  console.log(works);
  console.log(Math.max(...works));
  console.log("이거임", works.indexOf(Math.max(works)));

  while (n > 0) {
    works.sort(function (a, b) {
      return b - a;
    });
    console.log(works);

    // if (works[works.indexOf(Math.max(...works))] == 0) break;
    // works[works.indexOf(Math.max(...works))] -= 1;
    works[0] -= -1;
    n--;
  }
  console.log(works);

  for (let i = 0; i < works.length; i++) {
    answer += works[i] ** 2;
  }

  console.log(answer);
  return answer;

  //   while (cnt > 0) {
  //     Math.max(...works);
  //   }

  //   for (let i = 0; i < works.length; i++) {
  //     if (works[i] > works[i + 1]) {
  //       if (cnt > 0) {
  //         works[i] = works[i] - 1;
  //         console.log(works);
  //         cnt--;
  //       }
  //     } else {
  //       if (cnt > 0) {
  //         for (let j = 0; j < works.length; j++) {
  //           //   console.log(cnt);
  //           if (cnt > 0) {
  //             works[j] = works[j] - 1;
  //             if (works[j] == -1) works[j] = works[j] + 1;
  //             // console.log("뺴기전", cnt);
  //             // console.log(works);
  //             cnt--;
  //             // console.log("뺴고나서", cnt);
  //             console.log(works);
  //           } else break;
  //         }
  //       } else break;
  //     }
  //   }

  //   console.log(works);

  // for (let i = 0; i < works.length; i++) {
  //   answer += works[i] ** 2;
  // }

  // console.log(answer);
  // return answer;
}

// solution(1, [2, 1, 2]);
// solution(4, [4, 3, 3]);
// solution(3, [1, 1]);
solution(5, [5, 6, 7, 8, 9]);
