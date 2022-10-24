const crypto = require("crypto-js");
// hashing 알고리즘 종류 마다 길이가 정해져 있다.

console.log(crypto.SHA256("chocodarling").toString());
// toString 안하면 문자열로 안나오고 배열로 나온다.
// 적당한 길이와 중복이 적은 SHA256을 많이 사용한다.

console.log(crypto.MD5("chocodarling").toString());

console.log(crypto.SHA1("chocodarling").toString());

console.log(crypto.SHA512("chocodarling").toString());

console.log(crypto.RIPEMD160("chocodarling").toString());

const tempAES = crypto.AES.encrypt("chocodarling", "key").toString();
// encrypt : 암호화   decrypt : 복호화
console.log(tempAES);
console.log(crypto.AES.decrypt(tempAES, "key").toString(crypto.enc.Utf8));

// eyJuYW1lIjoiYmxvY2s3IiwiYWxnIjoiSFMyNTYifQ
//   .eyJuYW1lIjoiYmxvY2s3IiwiYWxnIjoiSFMyNTYifQ
//   .wbVoDXK0njxDGbABvS2yTmguGjeelwNfvWKYSexEK9w;

// eyJuYW1lIjoiYmxvY2s3IiwiYWxnIjoiSFMyNTYifQ
//   .eyJuYW1lIjoiYmxvY2s3IiwiYWxnIjoiSFMyNTYifQ
//   .wbVoDXK0njxDGbABvS2yTmguGjeelwNfvWKYSexEK9w;
