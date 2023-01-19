function solution(dartResult) {
  let result = 0;
  let arr = [...dartResult];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1 && arr[i + 1] == 0) {
      arr[i] = 10;
      arr.splice(i + 1, 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "S" || arr[i] === "D" || arr[i] === "T") {
      if (arr[i] === "D") {
        arr[i - 1] = Math.pow(arr[i - 1], 2);
      } else if (arr[i] === "T") {
        arr[i - 1] = Math.pow(arr[i - 1], 3);
      }
    } else if (arr[i] == "*") {
      arr[i - 2] = arr[i - 2] * 2;

      if (typeof arr[i - 4] == "number") {
        arr[i - 4] = arr[i - 4] * 2;
      } else {
        arr[i - 5] = arr[i - 5] * 2;
      }
    } else if (arr[i] === "#") {
      arr[i - 2] = arr[i - 2] * -1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      result += arr[i];
    }
  }

  return result;
}
