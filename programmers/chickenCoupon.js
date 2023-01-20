function solution(chicken) {
  let answer = parseInt(chicken / 10);

  let coupon = parseInt(chicken / 10) + (chicken % 10);
  while (coupon > 9) {
    answer += parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  console.log(answer);
}

solution(1081);
