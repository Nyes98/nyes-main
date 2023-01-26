function solution(array) {
  let max = 0;
  let cnt = 1;
  let item = [];

  array.sort((a, b) => {
    return a - b;
  });

  console.log(array);

  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      cnt++;
      console.log("다음값과 같아서 카운트 늘렸어", cnt);
    } else if (array[i] != array[i + 1]) {
      if (cnt > max) {
        max = cnt;
        console.log("최빈수는 이정도야", max);

        item = [];
        console.log("원래있던건 다 빼줬어", item);

        item.push(array[i]);
        console.log("이게 젤 많아서 정답에 넣었어", item);

        cnt = 1;
        console.log("카운트 초기화", cnt);
      } else if (cnt == max) {
        item.push(array[i]);
        console.log("동률이라 같이 넣었어", item);

        cnt = 1;
        console.log("카운트 초기화", cnt);
      } else if (cnt < max) {
        cnt = 1;
      }
    } else {
      return array[0];
    }
  }

  if (item.length >= 2) {
    console.log("동률이가 -1 리턴했어");
    return -1;
  }
  console.log("이건 정답이오", item[0]);
  return item[0];
}
