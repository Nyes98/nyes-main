const keythereum = require("keythereum");
const path = require("path");

const address = "0x1948cc92389c53c8d7a353d57bdbb0f99db4b5a5";

const keyObj = keythereum.importFromFile(address, __dirname);
// 매개변수로 가져올 지갑 주소와 해당 지갑 주소에 대한 key 파일이 있는 keystore 폴더의 위치를 전달한다.

const privateKey = keythereum.recover("12341234", keyObj);
// 매개변수로 비밀번호와 key 객체를 전달한다.
// 개인키에 대한 객체를 반환받는다.
console.log(privateKey.toString("hex"));
