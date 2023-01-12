// Hex : 16진수 Hexadecimal
//  - 암호화 했을 때 나오는 수
// Dex : 10진수 Decimal
// Oct : 8진수 Octal
// Bin : 2진수 Binary
//  - 컴퓨터가 사용하는 수 << bit, byte == 8bit

// x를 n승으로 제곱
function pow(x, n) {
  let value = 1;
  for (let i = 0; i < n; i++) {
    value *= x;
  }
  return value;
}

// function changeInt(number){
//     let str = `${number}`
//     let value = 0;
//     for (let i =0; i < str.length; ++i){
//         let tempNumber = +str[i];
//         if()
//     }
// }

function dec2Hex(dec) {
  // 10진수를 16진수
  let value = "";
  while (dec) {
    // 10진수를 16으로 나눈 뒤 나머지를 사용한다.
    switch (dec % 16) {
      case 10:
        value = "A" + value;
        break;
      case 11:
        value = "B" + value;
        break;
      case 12:
        value = "C" + value;
        break;
      case 13:
        value = "D" + value;
        break;
      case 14:
        value = "E" + value;
        break;
      case 15:
        value = "F" + value;
        break;

      default:
        value = (dec % 16) + value;
        break;
    }
    dec = parseInt(dec / 16);
  }
  return value;
}

function hex2dec(hex) {
  // 프로그램 상에서 Hex는 string으로 저장한다.
  let value = 0; // << 10진수 저장할 변수
  for (let i = 0; i < hex.length; ++i) {
    let temp = 0;
    switch (hex[i]) {
      case "A":
        temp = 10;
        break;
      case "B":
        temp = 11;
        break;
      case "C":
        temp = 12;
        break;
      case "D":
        temp = 13;
        break;
      case "E":
        temp = 14;
        break;
      case "F":
        temp = 15;
        break;
      default:
        temp = +hex[i];
        break;
    }
    value += temp * 16 ** (hex.length - i - 1);
    // value += temp * pow(16, hex.length - i - 1);
  }
  return value;
}

function bin2dec(bin) {
  let value = 0;
  for (let i = 0; i < bin.length; ++i) {
    value += +bin[i] * 2 ** (bin.length - 1 - i);
  }
  return value;
}

console.log(dec2Hex(23123));
console.log(hex2dec("5A53"));
