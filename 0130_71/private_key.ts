// 개인키를 만들어보자
import cryptoJS from "crypto-js";

const privateKey: string = cryptoJS.lib.WordArray.random(32)
  .toString()
  .toUpperCase();
// random의 매개변수로 몇 byte를 사용할 것인지 전달한다.
// 64자가 나와야하기 때문에 32byte를 사용한다.
console.log(privateKey);
console.log(privateKey.length);
// 0~F -> F를 2진수로 바꾸면 1111 -> 4bit -> 총 64자 -> 64 * 4 -> 256bit
// 1 byte = 8bits -> 256bit = 32byte

// node.js 기본 모듈 암호화
// import crypto from "crypto";
// const moduleKey = crypto.randomBytes(32).toString("hex");
// const moduleKey1 = crypto.randomBytes(32);
// console.log(moduleKey);
// console.log(moduleKey.length);
