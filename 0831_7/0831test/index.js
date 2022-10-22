lp = 0;
lp2 = 0;
lp3 = 0;
lp4 = 0;
lp5 = 0;
lp5_1 = 0;
lp5_3 = 0;
lp5_3_1 = 0;
lp6 = 0;
room1v = 0;
room2v = 0;
room3v = 0;
room4v = 0;
key1 = 0;
key2 = 0;
gun = 0;
ring = 0;

let quarter = 0;

console.log("??? : 안녕하세요");
console.log("??? : 잘생기셨네요");
console.log("??? : 저랑사귀실래요?");

while (lp != 1) {
  const q1 = prompt("1 : 좋아\n2 : 싫어\n3 : 누구세요");
  console.log("\n");
  switch (q1) {
    case "1" || "좋아":
      console.log("나  : 좋아");
      quarter = 1;
      lp = 1;
      break;
    case "2":
      console.log("나  : 싫어");
      quarter = 2;
      lp = 1;
      break;
    case "3":
      console.log("나  : 누구세요?");
      console.log("??? : 죄송합니다 사람 잘못봤네요.");
      console.log("아무일도 일어나지 않았다.");
      console.log("End 1 : 착각");
      lp = 1;
      break;
    default:
      console.log("1~3만 골라");
  }
}

if (quarter == 1) {
  console.log("??? : 그럼 우리 어디갈까?");

  while (lp2 != 1) {
    const q2_1 = prompt("1 : 달\n2 : 화성\n3 : 태양");
    console.log("\n");

    switch (q2_1) {
      case "1":
        console.log("나  : 달에 가자");
        console.log("??? : 어머 너무낭만적이야 지금 우주복사러가자");
        quarter = 3;
        lp2 = 1;
        break;
      case "2":
        console.log("나  : 화성에 가자");
        console.log("??? : 정말 유행에 뒤쳐지는구나 실망이 커");
        console.log("유행에 뒤쳐진다는 자괴감때문에 우울증에걸렸다.");
        console.log("End 4 : 우울증");
        lp2 = 1;
        break;
      case "3":
        console.log("나  : 태양에 가자");
        console.log("??? : 태양은 이미 저번주에 갔다왔어 정말 센스없네");
        console.log("센스없다는 말에 충격을 받고 우울증에걸렸다.");
        console.log("End 4 : 우울증");
        lp2 = 1;
        break;
      default:
        console.log("1-3만 골라");
    }
  }
}
if (quarter == 2) {
  console.log("??? : 나 상처받았어");

  while (lp3 != 1) {
    const q2_2 = prompt("1 : 위로해준다\n2 : 무시한다");
    console.log("\n");

    switch (q2_2) {
      case "1":
        lp3 = 1;
        console.log("나  : 괜찮니?");
        console.log("??? : 괜찮겠니?");
        console.log("나쁜 소문이 퍼지고 평판이 나빠져 징역을 선고받았다.");
        console.log("End 2 : 감옥살이");
        break;
      case "2":
        lp3 = 1;
        console.log("무시했다.");
        console.log("이상한 사람이 떠나갔다.");
        console.log("End 3 : 무시");
        break;
      default:
        console.log("1~2만 골라");
    }
  }
}
if (quarter == 3) {
  console.log("우주복을 사러가고있다.");
  console.log("어색한데 질문이나 해볼까?");
  while (lp3 != 1) {
    const q3 = prompt(
      "1 : 축구 좋아하세요?\n2 : 영화 좋아하세요?\n3 : 이름이 어떻게되세요?"
    );
    console.log("\n");

    switch (q3) {
      case "1":
        lp3 = 1;
        console.log("??? : 아니");
        console.log("이후 분위기가 어색해져 헤어졌다.");
        console.log("End 5 : 이별");
        break;
      case "2":
        lp3 = 1;
        console.log("??? : 아니");
        console.log("이후 분위기가 어색해져 헤어졌다.");
        console.log("End 5 : 이별");
        break;
      case "3":
        lp3 = 1;
        quarter = 4;
        console.log("길동 : 길동 이라고 합니다.");
        break;
      default:
        console.log("1~3만 골라");
    }
  }
}

if (quarter == 4) {
  console.log("우주복 가게에 도착했다.");
  console.log(
    "점원 : 우주복이 품절되었습니다, 지금 있는것들은 모두 예약되어 있네요."
  );
  console.log("나   : 이제 어쩌지?");
  while (lp4 != 1) {
    const q4 = prompt("1 : 입대한다\n2 : 우주복을 훔친다");
    console.log("\n");

    switch (q4) {
      case "1":
        lp4 = 1;
        console.log("나   : 나 군대 갔다올게");
        console.log("둘은 아쉽게 헤어졌다.");
        console.log("End 6 : 입대");
        break;
      case "2":
        lp4 = 1;
        console.log(
          "점원이 눈치채지 못하게 재빠르게 우주복을 훔치는데 성공했다."
        );
        console.log("길동 : 너 대단한 사람이구나");
        quarter = 5;
        break;
      default:
        console.log("1~2만 골라");
    }
  }
}

if (quarter == 5) {
  console.log("달에가는 왕복선에 탑승했다.");
  console.log("여러 방이 있다.");
  console.log("어느 방부터 갈까?");
  while (lp5 != 1) {
    const q5 = prompt(
      "1 : 게스트룸\n2 : 백화점\n3 : 창고\n4 : 회의실\n5 : 알수없는 방"
    );
    console.log("\n");

    switch (q5) {
      case "1":
        if (room1v == 0) {
          console.log("게스트룸에 들어왔다.");
          console.log("희미한 불빛을 따라가니 모르는 사람이 죽어있다.");
          console.log("시체의 손에 장난감 총같은게 있다.");
          console.log("가져가시겠습니까?");
          while (lp5_1 != 1) {
            const q5_1 = prompt("1 : 예\n2 : 아니오");
            console.log("\n");

            if (q5_1 == 1 || q5_1 == "예") {
              console.log("시체의 손에서 장난감총을 챙겼다.");
              console.log("나   : 웩");
              gun = 1;
              lp5_1 = 1;
            } else if (q5_1 == 2 || q5_1 == "아니오") {
              console.log("나   : 장난감 총같은걸 챙겨봤자 짐이야");
              lp5_1 = 1;
            } else {
              console.log("1~2만 골라");
            }
          }
          console.log("서둘러 방을 나왔다.");

          room1v = 1;
        } else {
          console.log("이미 방문했던 방이다.");
        }
        break;

      case "2":
        if (room2v == 0) {
          console.log("백화점에 들어왔다.");
          console.log("비어있는 선반에서 손잡이를 획득했다. ");
          console.log("무언가 끼워 넣을수 있는 홈이 있다.");
          key1 = 1;
          room2v = 1;
          if (key2 == 1) {
            console.log("나   : 아까 주웠던 막대랑 조립해볼까?");
            console.log("주머니에 있던 막대와 결합했다.");
            console.log("열쇠처럼 보이는게 완성됐다.");
            console.log("백화점에서 나왔다.");
          } else {
            console.log("나   : 어디에 쓸지는 모르겠지만 일단 가져가보자");
            console.log("백화점에서 나왔다.");
          }
        } else {
          console.log("이미 방문했던 방이다.");
        }
        break;

      case "3":
        if (room3v == 0) {
          room3v = 1;
          console.log("창고에 들어왔다.");
          console.log("이상한 형체가 보여 먼저 다가갔다.");
          console.log("외계인과 눈이 마주쳤다.");
          console.log("알아들을 수 없는 언어로 나에게 소리치기 시작했다.");
          console.log("가만히 있었다간 위험해보인다. 어떡하지?");
          if (gun == 1) {
            while (lp5_3 != 1) {
              const q5_3 = prompt(
                "1 : 장난감총을 겨눠 쏜다\n2 : 빨리 방을 나간다\n3 : 대화를 시도한다."
              );
              console.log("\n");

              switch (q5_3) {
                case "1":
                  console.log(
                    "기대하지 않았던 장난감 총에서 레이저가 나와 괴물을 죽였다."
                  );
                  console.log(
                    "외계인의 몸에 뚫린 구멍에서 예쁜 반지가 나왔다."
                  );
                  console.log("나   : 정말 위험했어, 이건 챙겨두자");
                  console.log("반지를 챙겼다.");
                  console.log("그리고 서둘러 창고에서 나왔다");

                  ring = 1;

                  lp5_3 = 1;
                  break;
                case "2":
                  console.log(
                    "재빨리 등을돌려 도망가려했지만 갑자기 눈앞이 어두워진다."
                  );
                  console.log("End 7 : 외계인에게 피살");
                  lp5_3 = 1;
                  break;
                case "3":
                  console.log("언어가 통하지 않는다.");
                  console.log("눈앞에 어두워졌다.");
                  console.log("End 7 : 외계인에게 피살");
                  lp5_3 = 1;
                  break;
                default: {
                  console.log("1~3만 골라");
                }
              }
            }
          } else {
            while (lp5_3_1 != 1) {
              const q5_3_1 = prompt(
                "1 : 빨리 방을 나간다\n2 : 대화를 시도한다."
              );
              console.log("\n");

              switch (q5_3_1) {
                case "1":
                  console.log(
                    "재빨리 등을돌려 도망가려했지만 갑자기 눈앞이 어두워진다."
                  );
                  console.log("End 7 : 외계인에게 피살");
                  lp5_3_1 = 1;
                  lp5 = 1;
                  break;
                case "2":
                  console.log("언어가 통하지 않는다.");
                  console.log("눈앞에 어두워졌다.");
                  console.log("End 7 : 외계인에게 피살");
                  lp5_3_1 = 1;
                  lp5 = 1;
                  break;
                default: {
                  console.log("1~2만 골라");
                }
              }
            }
          }
        } else {
          console.log("이미 방문했던 방이다.");
        }
        break;
      case "4":
        if (room4v == 0) {
          console.log("회의실에 들어왔다.");
          console.log("이상하게 생긴 막대를 획득했다.");
          key2 = 1;
          room4v = 1;
          if (key1 == 1) {
            console.log("나   : 아까 주웠던 손잡이에 끼워볼까?");
            console.log("주머니에있던 손잡이에 막대를 끼웠다.");
            console.log("열쇠처럼 보이는게 완성됐다.");
            console.log("회의실에서 나왔다.");
          } else {
            console.log(
              "막대를 어디에 써야할진 모르겠지만 혹시모르니 가져가보자."
            );
            console.log("회의실에서 나왔다.");
          }
        } else {
          console.log("이미 방문했던 방이다.");
        }
        break;
      case "5":
        if (key1 == 1 && key2 == 1) {
          console.log("완성된 열쇠로 문을 열었다.");
          lp5 = 1;
          quarter = 6;
        } else {
          console.log("문이 잠겨있다.");
        }
        break;
      default:
        console.log("1~5만 골라");
    }
  }
}

if (quarter == 6) {
  console.log("내부를 확인하니 결혼식장이었다.");
  console.log("청혼할까?");
  while (lp6 != 1) {
    const q6 = prompt("1 : 청혼한다\n2 : 아직 때가 아니다.");
    console.log("\n");

    if (q6 == 1 || q6 == "청혼한다") {
      console.log("나   : 결혼하자");
      if (ring == 1) {
        console.log("반지를 건냈다");
        console.log("길동 : 어머 너무 감동적이야");
        console.log("나와 길동은 행복하게 오래오래 살았답니다.");

        console.log("End 10 : 결혼성공");
        lp6 = 1;
      } else {
        console.log("길동 : 반지도없이?");
        console.log("길동 : 어떻게 사람이 그렇게 쉽게 변하니?");
        console.log("우주선에서 쫒겨났다.");
        console.log("End 8 : 우주미아");
        lp6 = 1;
      }
    } else if (q6 == 2 || q6 == "아직 때가 아니다") {
      console.log("길동 : 우린 결혼 언제해?");
      console.log("나   : 아직 때가 아닌거같아");
      console.log("길동 : 사람이 어떻게 변하니?");
      console.log("길동 : 우리 헤어져");
      console.log("End 9 : 준비부족");
      lp6 = 1;
    } else {
      console.log("1~2만 골라");
    }
  }
}
