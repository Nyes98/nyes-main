const cards = [];
for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}
// 카드 1~8까지 2번 총 16장

for (let i = 0; i < 100; i++) {
  const firstCard = parseInt(Math.random() * cards.length);
  // 첫 번째 카드 선택
  const secondCard = parseInt(Math.random() * cards.length);
  // 두 번째 카드 선택
  const temp = cards[firstCard];
  // 첫 번째 카드를 임시 저장
  cards[firstCard] = cards[secondCard];
  // 첫 번째 카드 자리에 두 번째 카드를 저장
  cards[secondCard] = temp;
  // 두 번째 카드 자리에 temp를 저장
}
console.log(cards);
