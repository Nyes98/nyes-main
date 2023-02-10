function solution(numbers) {
  var answer = [];
  let chaiArr = [];
  let cnt = 0;

  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i]);
  }

  console.log("자리더하기", answer);
  answer.sort();
  console.log("원본", answer);

  for (let z = 0; z < 2; z++) {
    for (let i = 0; i < answer.length - 1; i++) {
      let gap = `${answer[i + 1]}`.length - `${answer[i]}`.length;
      // console.log("갭", gap);
      // console.log("다음", answer[i + 1]);
      // console.log(typeof answer[i]);
      // let imsi = `${answer[i]}`;
      // let imsi2 = answer[i];
      // imsi = imsi.substring(0, 1);

      if (answer[i] == `${answer[i + 1]}`.substring(0, `${answer[i]}`.length)) {
        let chai = `${answer[i + 1]}`.length - `${answer[i]}`.length;
        chaiArr.push(answer[i]);
        console.log("잘림?");
        console.log("지금", answer[i]);
        console.log(
          "다음",
          `${answer[i + 1]}`.substring(0, `${answer[i]}`.length)
        );

        for (let j = 0; j < chai; j++) {
          console.log(j);
          answer[i] += `${answer[i]}`.substring(0, 1);
          console.log("증량중", answer[i]);
        }
        //   temp = answer[i];
        //   answer[i] = answer[i + 1];
        //   answer[i + 1] = temp;
      }
    }

    console.log("전", answer);
    answer.sort();
    console.log("후", answer);

    for (let i = answer.length - 1; i >= 0; i--) {
      if (typeof answer[i] == "string") {
        answer[i] = chaiArr[chaiArr.length - 1 - cnt];
        console.log("원본", chaiArr);
        cnt++;
        console.log("과정", answer);
      }
    }

    console.log(answer.reverse().join(""));
    let real = answer.reverse().join("");
    console.log(real);
  }
  //   return real;
}

solution([3, 30, 34, 5, 9]);
