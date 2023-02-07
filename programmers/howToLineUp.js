function solution(n, k) {
  var answer = [];
  let imsi = [];
  let nfac = 1;

  if (n == 1) return [1];

  for (let i = 1; i <= n; i++) {
    imsi.push(i);
  }
  console.log("imsi", imsi);

  while (n > 2) {
    for (let i = 2; i <= n - 1; i++) {
      nfac = nfac * i;
    }

    // if (k == nfac * n) {
    //   console.log(k == nfac * n);
    //   return imsi.reverse();
    // }

    console.log("nfac", nfac);
    if (k % nfac == 0) {
      answer.push(imsi[k / nfac - 1]);
      console.log("나누어 떠러지는 answer", answer);
      imsi.splice(imsi.indexOf(imsi[k / nfac - 1]), 1);
      console.log("나누어 떠러지는 imsi", imsi);
      console.log(imsi.length);
      for (let i = imsi.length - 1; i >= 0; i--) {
        console.log("나여기써");
        answer.push(imsi[i]);
        console.log(answer);
      }
      return answer;
    } else {
      //   answer.push(imsi[parseInt(k / nfac)]);
      //   console.log("일반적인 imsi", imsi);

      if (parseInt(k / nfac) == 0) {
        answer.push(imsi[0]);
        imsi.shift();
        console.log("answer에 imsi 첫번째 넣고", answer);
        console.log("첫번째 imsi 삭제", imsi);
      } else {
        answer.push(imsi[parseInt(k / nfac)]);
        console.log("answer에 imsi의 값 넣고", answer);
        imsi.splice(parseInt(k / nfac), 1);
        console.log("그 값의 imsi 삭제", imsi);

        // if (imsi.indexOf(parseInt(k / nfac)) == -1) {
        //   imsi.shift();
        //   console.log("imsi 삭제", imsi);
        // } else {
        //   imsi.splice(imsi.indexOf(parseInt(k / nfac)), 1);
        //   console.log("imsi 삭제", imsi);
        // }
      }
    }
    console.log(answer);
    k = k - nfac * parseInt(k / nfac);

    console.log("k의 변천사", k);
    // console.log("k", k);
    n--;
    if (n == 2) break;
    nfac = 1;
  }
  if (k % 2 == 1) {
    answer.push(imsi[0]);
    answer.push(imsi[1]);
  } else {
    answer.push(imsi[1]);
    answer.push(imsi[0]);
  }

  console.log(answer);
  return answer;
}

solution(4, 18);
