function tentosixteen(num) {
  let imsi = num;
  let imsi2 = num;
  let divide = [];
  let tensix = [];
  let result;

  while (parseInt(num / 16) > 0) {
    divide.push(1);
    num = num / 16;
  }
  for (let i = divide.length; i >= 0; i--) {
    tensix.push(parseInt(imsi / 16 ** i));
    imsi -= 16 ** i * tensix[divide.length - i];
  }
  for (let i = 0; i < tensix.length; i++) {
    switch (tensix[i]) {
      case 10:
        tensix[i] = "A";
        break;
      case 11:
        tensix[i] = "B";
        break;
      case 12:
        tensix[i] = "C";
        break;
      case 13:
        tensix[i] = "D";
        break;
      case 14:
        tensix[i] = "E";
        break;
      case 15:
        tensix[i] = "F";
        break;
    }
  }

  result = tensix.join("");
  console.log(`10진수 ${imsi2}  => 16진수`, result);
  return result;
}

function tentotwo(num) {
  let imsi = num;
  let imsi2 = num;
  let divide = [];
  let two = [];
  let result;

  while (parseInt(num / 2) > 0) {
    divide.push(1);
    num = num / 2;
  }
  for (let i = divide.length; i >= 0; i--) {
    two.push(parseInt(imsi / 2 ** i));
    imsi -= 2 ** i * two[divide.length - i];
  }

  result = two.join("");
  console.log(`10진수 ${imsi2}  => 2진수`, result);
  return result;
}

tentosixteen(16000);

tentotwo(17);
