result = 1;

function factorial() {
  const a = prompt("숫자를 입력해주세요");
  console.log(a);
  for (let i = a; i >= 1; i--) {
    result *= i;
  }

  console.log(result);
}

factorial();
