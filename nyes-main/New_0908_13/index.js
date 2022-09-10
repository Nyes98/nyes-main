let firstCardIdx = -1;
let secondCardIdx = -1;

let cards = [];
for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}

cards = shuffle(cards, 100);
// 카드를 섞어주는 함수(자체제작)

console.log(cards);

function selectNum(cardNum) {
  const tempElem = document.getElementById("card" + cardNum);
  const firstElem = document.getElementById("card" + firstCardIdx);
  // 첫 번째 선택한 카드의 태그가 정의된다.
  const secondElem = document.getElementById("card" + secondCardIdx);
  // 매개변수로 받은 cardNum은 id의 'card' 뒤에 붙은 숫자와 동일하게 되어있으며
  // cardNum와 'card'를 붙여서 id를 찾아옵니다.

  if (tempElem.innerHTML) return;
  // 클릭한 div에 값이 있는가? (= 선택하거나 맞춘 카드인가?)
  if (firstCardIdx > -1 && secondCardIdx > -1) {
    // 카드 두장으로 모두 선택했는가?
    if (cards[firstCardIdx] != cards[secondCardIdx]) {
      // 카드 두장이 다른가?
      firstElem.innerHTML = "";
      secondElem.innerHTML = "";
      // 카드를 다시 뒤집는다.
    }
    firstCardIdx = -1;
    secondCardIdx = -1;
    // 선택한 카드들에 대한 위치 정보를 없앤다.
  }

  if (firstCardIdx < 0) {
    // 첫 번째 카드를 선택하지 않았는가?
    firstCardIdx = cardNum;
    // 첫 번째 카드의 index(cards 기준)를 정의한다.
    tempElem.innerHTML = cards[cardNum];
  } else if (secondCardIdx < 0) {
    // 두 번째 카드를 선택하지 않았는가?
    secondCardIdx = cardNum;
    tempElem.innerHTML = cards[cardNum];
  }

  //   } else
  //     firstCardIdx = -1;
  //     secondCardIdx = -1;
  //   } else {
  //     firstCardIdx = -1;
  //     secondCardIdx = -1;
  //   }
  // 찾은 클릭 당한 태그에 내용으로 cards(랜덤으로 배치한 카드들)중에 cardNum - 1(0부터 시작)번째를 찾아 출력하도록 한다.
}

// 함수안에 모든 기능을 때려넣는 것 보다 분할해서 하는게 가독성이 더 좋다.
