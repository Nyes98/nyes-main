let numArr = [];
// const numSet = new Set();
let cardNum = [];

// 카드 자체를 배열에 넣었다
for (let i = 0; i < 16; i++) {
  cardNum.push(document.getElementById(i + 1));
}
// console.log(cardNum);

// 1~8 2번씩 16개 랜덤 배열
function selNum() {
  numArr = [];
  for (let i = 0; i < 8; i++) {
    numArr.push(i + 1);
    numArr.push(i + 1);
  }
  for (i = 0; i < 100; i++) {
    const firstCard = parseInt(Math.random() * numArr.length);
    const secondCard = parseInt(Math.random() * numArr.length);
    const temp = numArr[firstCard];
    numArr[firstCard] = numArr[secondCard];
    numArr[secondCard] = temp;
  }
  console.log(numArr);

  for (i = 0; i < 16; i++) {
    document.getElementById(i + 1).innerHTML = numArr[i];
  }
}

selNum();

function clikcCard(_id) {
  for (let i = 0; i < cardNum.length; ++i) {
    if (cardNum[i].id == _id) {
      console.log(`cardNumId : ${cardNum[i].id}  id = ${_id}`);
      cardNum[i].style.setProperty(`color`, "yellow");
      break;
    }
  }
}

// console.log($)
// function compareCard() {
// document.getElementById(i+1)
// }

// innerhtml
// id

//   while (numSet.size < 8) {
//     for (let j = 0; j < 8; j++) {
//       numSet.add(parseInt(Math.random() * 8 + 1));
//     }
//   }
//   numArr = [...numSet];
//   numArr.push(...numArr);
