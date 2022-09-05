const cc = [];
const uc = [];
let coverlap = 0;
let uoverlap = 0;
let ball_count = 0;
let strike_count = 0;
let try_count = 0;
let clear = 0;

function c_picknum() {
  do {
    for (let a = 0; a < 3; a++) {
      cc[a] = Math.floor(Math.random() * 10);
    }

    console.log(`${cc[0]}, ${cc[1]}, ${cc[2]} (실제 게임에선 지움)`);
    // 중복된 숫자가 들어갈 때, 재선택을 잘 하는지 확인하기위해 임시로 확인

    if (cc[0] == cc[1]) coverlap = 1;
    else if (cc[1] == cc[2] || cc[2] == cc[0]) coverlap = 1;
    else coverlap = 0;
  } while (coverlap == 1);
  console.log("컴퓨터가 숫자선택을 끝냈습니다.");
  console.log(
    `컴퓨터가 선택한 숫자 : ${cc[0]}, ${cc[1]}, ${cc[2]} (실제 게임에선 지움)`
  );
  // 빠른 테스트를 위해 임시로 정답을 보여줌
}

function u_picknum() {
  do {
    for (let a = 0; a < 3; a++) {
      let num = prompt(`0~9 사이의 ${a + 1}번째 숫자를 입력해주세요`);
      if (num >= 0 && num <= 9) uc[a] = num;
      else {
        console.log("0~9 까지의 숫자만 입력해주세요.");
        a--;
      }
    }
    if (uc[0] == uc[1]) {
      uoverlap = 1;
      console.log(`\n당신이 고른 숫자 : ${uc[0]}, ${uc[1]}, ${uc[2]}\n\n`);
      console.log("서로 다른 3개의 숫자를 입력해주세요");
    } else if (uc[1] == uc[2] || uc[2] == uc[0]) {
      uoverlap = 1;
      console.log(`\n당신이 고른 숫자 : ${uc[0]}, ${uc[1]}, ${uc[2]}\n\n`);
      console.log("서로 다른 3개의 숫자를 입력해주세요");
    } else uoverlap = 0;
  } while (uoverlap == 1);
  console.log(`\n당신이 고른 숫자 : ${uc[0]}, ${uc[1]}, ${uc[2]}\n\n`);
}

function compare1() {
  for (i = 0; i < cc.length; i++) {
    if (cc[i] == uc[i]) {
      strike_count++;
    }
  }
}

function compare2() {
  for (i = 0; i < cc.length; i++) {
    for (let j = 0; j < cc.length; j++) {
      if (cc[i] == uc[j]) {
        ball_count++;
      }
    }
  }
  try_count++;
}

function outcheck() {
  if (strike_count + ball_count == 0) {
    console.log("아웃");
    console.log("숫자를 다시 선택해주세요");
  } else if (strike_count == 3) {
    clear = 1;
    console.log(`${strike_count} 스트라이크\n${ball_count - strike_count} 볼`);
    console.log(`축하합니다. ${try_count}번 만에 정답을 맞추셨습니다!`);
    console.log("게임 종료");
  } else {
    console.log(`${strike_count} 스트라이크\n${ball_count - strike_count} 볼`);
    console.log("숫자를 다시 선택해주세요");
    strike_count = 0;
    ball_count = 0;
  }
}

c_picknum();
while (clear == 0) {
  u_picknum();
  compare1();
  compare2();
  outcheck();
}
