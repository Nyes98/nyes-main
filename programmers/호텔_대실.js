function solution(book_time) {
  var answer = 0;
  let temp = [];
  let schedule = [];

  book_time.sort();

  for (let i = 0; i < book_time.length; i++) {
    temp.push(book_time[i][0].replace(":", ""));
    temp.push(book_time[i][1].replace(":", ""));
    console.log(temp);
  }

  for (let i = 0; i < temp.length / 2; i++) {
    if (i == 0) {
      schedule.push(temp[i]);
      schedule.push(temp[i + 1]);
    }
    for (let j = 0; j < schedule.length / 2; j++) {
      console.log(schedule);
      console.log(temp[2 * i], schedule[2 * j]);
      if (
        temp[2 * i] >= schedule[2 * j] &&
        temp[2 * i] <= schedule[2 * j + 1]
      ) {
      }
    }
  }

  return answer;
}

solution([
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
]);
