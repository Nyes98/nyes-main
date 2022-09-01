const comSel = parseInt(Math.random() * 99 + 1);
// parseInt(***) : 정수화 함수
// 컴퓨터 선택 완료

let playerSel;
let count = 0;
let max = 100;
let min = 0;
let updown = "";
const maxCount = parseInt(prompt("몇번만에 성공할래? 숫자만"));

do {
  playerSel = prompt(
    `${updown}\n숫자를 선택해 주세요.\n컴퓨터가 선택한 숫자를 맞추시면 됩니다.\n
    최소 : ${min} / 최대 : ${max} / 남은 횟수 : ${maxCount - count}`
  );
  // prompt는 string이다. parseInt는 정수형이다. 그래서 ===를 사용하면 안된다.

  playerSel = parseInt(playerSel);

  if (min >= playerSel || max <= playerSel) {
    // 최대와 최소 사이에 값만 확인하기 위해 최소 미만과 최대 초과를 먼저 처리한다.
    console.log("제외된 숫자들이다.");
  } else if (playerSel == comSel) {
    console.log(`${++count}번 만에맞추셨네요, 축하합니다.`);
    break;
  } else if (playerSel > comSel) {
    // 플레이어가 선택한 숫자가 컴퓨터가 선택한 숫자보다 크다.
    max = playerSel;
    // max가 현재 플레이어가 선택한 숫자가 된다.
    console.log("UP!");
    count++;
    updown = "UP";
  } else if (playerSel < comSel) {
    min = playerSel;
    console.log("DOWN!");
    count++;
    updown = "DOWN";
  } else {
    console.log("숫자만 입력해라!");
    updown = "숫자만 입력해라!";
  }
} while (playerSel !== comSel && maxCount > count);

if (count >= maxCount) {
  console.log("제한 횟수를 초과했네요");
}
// 컴퓨터가 숫자 선택 후 플레이어가 선택하는 것은 계속 반복되어야 한다.
// 플레이어가 컴퓨터의 숫자를 맞출때까지
