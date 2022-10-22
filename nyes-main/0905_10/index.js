let num = 0;

function change() {
  document.getElementById("change").innerHTML = `<img src="${
    ++num % 3
    // 0,1,2 의 공통점 = 3으로 나눴을때의 나머지
  }.png" alt="change" />`;
  // document, getElementById, innerHTML 은 이후 자세히 한다.
  // innerHTML은 여는 태그와 닫는 태그 사이의 텍스트다.
}
