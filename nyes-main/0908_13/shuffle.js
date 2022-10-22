function shuffle(arr, count) {
  if (!arr?.length || typeof arr != "object") {
    alert("배!열!만!");
    return "이상한거 넣지말고 배열만 넣어라";
  }

  for (let i = 0; i < 100; i++) {
    const first = parseInt(Math.random() * arr.length);
    const second = parseInt(Math.random() * arr.length);
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }

  return arr;
}

// 헤더에 넣고 복사해서 써라
