function oddnumber() {
  let uSelnum = prompt("아무 수나 입력 해보세요");
  for (let i = 1; i <= uSelnum; i += 2) {
    console.log(`${i}`);
  }
}

function evennumber() {
  let uSelnum = prompt("아무 수나 입력 해보세요");
  for (let i = 0; i <= uSelnum; i += 2) {
    console.log(`${i}`);
  }
}

function samyukgu() {
  let uSelnum = prompt("아무 수나 입력 해보세요");

  let jjackCount = 0;
  let testStr = "짝";
  for (let i = 1; i <= parseInt(uSelnum); i++) {
    let curAry = [...String(i)];
    for (let j = 0; j <= curAry.length; ++j) {
      if (curAry[j] == 3 || curAry[j] == 6 || curAry[j] == 9) jjackCount++;
    }
    if (jjackCount == 0) {
      console.log(i);
    } else {
      console.log(testStr.repeat(jjackCount));
    }
    jjackCount = 0;
  }
}
// oddnumber();
// evennumber();
samyukgu();

// for를 써서 0부터 입력값까지 홀수 콘솔 찍기
// for를 써서 0부터 입력값까지 짝수 콘솔 찍기
// for를 써서 1부터 입력값까지 3이 아니면 숫자, 3이면 '짝' 콘솔 찍기(369 게임,
// 33일 경우 (369의 수만큼) 짝짝 아니면 숫자)
// (고급) 홀수와 짝수를 플레이어가 입력하도록
// 한번에 입력 (prompt 한번만 써라) = 입력창에 숫자와 홀수인지 짝수인지를 입력
