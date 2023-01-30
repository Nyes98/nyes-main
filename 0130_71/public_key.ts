// npm i elliptic
//  - 타원 곡선 알고리즘 사용하는 암호화 라이브러리
// npm i -D @types/elliptic

import cryptoJS from "crypto-js";
import elliptic from "elliptic";

const privateKey: string = cryptoJS.lib.WordArray.random(32)
  .toString()
  .toUpperCase();

const ec: elliptic.ec = new elliptic.ec("secp256k1");
// 타원 곡선을 생성한다.
// ec에 전달하는 매개변수 "secp256k1"은 elliptic에서 제공하는 사전 설정 중 하나이다.
//  - 사전 설정으로는 secp256k1, pl92, p224 등이 있다.
// - secp256k1 사용 이유 : 비트코인과 이더리움에서 사용하는 설정, y^2 = x^3 + 7, G = "02 ......"

const keyPair: elliptic.ec.KeyPair = ec.keyFromPrivate(privateKey);
// 개인키를 사용해서 키페어를 생성한다.
//  - 즉 공개키를 생성한다.
// KeyFromPrivate(개인키) : 개인키를 사용하여 키페어(개인키 + 공개키)를 생성한다.

const publicKey: string = keyPair.getPublic().encode("hex", true).toUpperCase();
// 생성된 키페어에서 공개키를 가져온다.
// getPublic() : 키페어에서 공개키를 가져온다.
// encode(인코딩 형식, true) : 암호문을 저장하기 위해 객체 형식으로 되어있는 데이터를 문자열(hex)로 변환한다.
console.log(privateKey);
console.log(publicKey);
// 타원곡선에서 공개키는 찾은 점의 좌표이다. => x,y 두 수로 이루어져 있다.
// 공개키는 문자열로 나타낼 시 "x" + "y" = `${x}${y}` << 두 좌표를 문자로써 연결한 문자열(string)이다.
// x, y의 크기는 256bits 이다. => 공개키의 크기는 512bits 이다. => 128자가 나와야한다.
// 128자는 너무 길어서 압축을 한다. => x의 값은 그대로 가져오고 y의 값은 짝수일 때 "02", 홀수일 때 "03"을 사용하게 된다. => 02XXXXXXX || 03XXXXXXXX 가 나오게 된다.
// 타원 곡선 알고리즘을 사용해서 공개키를 구했을 때 => x,y 좌표가 공개키로 정의된다. => x, y를 모두 표기하면 128자(512bits)의 길이를 갖게된다. => 너무 길어서 64자로 줄인다(x만 사용)=> y를 버릴 수 없어서 홀수와 짝수로 나누어 간단하게 추가한다. (짝수 : 02, 홀수 : 03) y에 대한 값은 앞에 붙인다.
// => 02XXXXX || 03XXXXXX
// => 02eae0b27d8b625098890f3cb683a7252df36417ea7d7c45b2a635893789d53b6f

// y가 짝수일 때 02를 앞에 추가하고 홀수일 때 03을 앞에 추가한다. => x+y를 모두 시용할 때 128자일까? => 앞에 04를 붙인다. 즉 130자가 된다.(520bits / 65bytes)
// => 04XXXXXX

const data: string = "checking data";
const hash = cryptoJS.SHA256(data).toString().toUpperCase();
// 전송할 데이터, Hash로 암호화
console.log("hash : ", hash);
console.log(hash.length);

const signature: elliptic.ec.Signature = keyPair.sign(hash, "hex");
// sign(데이터, 인코딩 형식) : 키페어를 사용해서 서명을 만든다.
console.log(signature);

// 위에서 만든 서명을 확인하자
const verify: boolean = ec.verify(
  hash,
  signature,
  ec.keyFromPublic(publicKey, "hex")
);
console.log("veri : ", verify);
// 정상적으로 복호화되어 hash가 확인된다면 true가 반환된다.
// verify(데이터, 서명, 키페어) : 서명을 키페어를 사용해서 복호화하여 데이터와 비교한다. 같은 데이터라면 true를 반환한다.
// keyFromPublic(공개키, 인코딩 형식) : 공개키를 사용하여 키페어를 생성한다.

const newPrivateKey: string = cryptoJS.lib.WordArray.random(32)
  .toString()
  .toUpperCase();
const newKeyPair = ec.keyFromPrivate(newPrivateKey);
const newPublicKey = newKeyPair.getPublic().encode("hex", true).toUpperCase();
const newVerify = ec.verify(
  hash,
  signature,
  ec.keyFromPublic(newPublicKey, "hex")
);
console.log("newVeri : ", newVerify);
// 새로운 공개키로 확인했기 때문에 false가 반환된다.
//  - keyFromPublic에서 "hex" 없으면 오류발생
//  - hash(데이터)와 signature(서명)과 publicKey(공개키)가 정확히 일치하지 않는다. => 상대가 보낸 것인지 확신할 수 없다. 해킹 일수도 있다.

const myWallet = publicKey.slice(26);

console.log(myWallet.length);
