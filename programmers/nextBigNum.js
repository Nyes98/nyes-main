function solution(n) {
  let cnt = 0;
  let imsi = n.toString(2);
  let acnt = 0;

  for (let i = 0; i < imsi.length; i++) {
    if (imsi[i] == 1) cnt++;
  }
  console.log("임시", imsi);
  console.log("카운트", cnt);

  while (cnt != acnt) {
    console.log("카운트", cnt);
    console.log("어카운트", acnt);

    acnt = 0;
    n++;
    imsi = n.toString(2);
    for (let i = 0; i < imsi.length; i++) {
      if (imsi[i] == 1) acnt++;
    }
  }

  console.log(n);
  return n;
}

solution(134);
