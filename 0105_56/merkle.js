// 설치 명렁어
// npm i merkle - 머클 트리를 쉽게 사용할 수 있게 도와준다.

const merkle = require("merkle");

const data = ["151sq", "dfsdfs", "41351", "sdfaw"];

// 머클 트리
// 인자값 : 암호화 방법
// sync(data) 함수로 트리를 만들어 준다
const merkleTree = merkle(`sha256`).sync(data);

// 생성한 머클 트리의 root 값을 가져오는 함수
const root = merkleTree.root();

// 머클 트리에서 sha256 알고리즘을 사용하는데 문자열로 변환과 대문자로 변환을 둘다 해주고 값을 반환해준다.

console.log(merkleTree);
console.log(merkleTree.nodes());
console.log(root);
