const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

const data = ["1244s", "35jfo", "jfo2o", "99301", "gdgd"];
const data2 = "ㅎㅇ";

// 트리를 만들고 루트값을 반환해주는 함수
const createMerkle = (_data) => {
  if (!Array.isArray(_data)) return "not Array";

  //   배열의 값을 전체 암호화해서 merkleArr 반환 해준다.
  let merkleArr = _data.map((item) => SHA256(item).toString().toUpperCase());

  //   조건 : 머클루트 한개의 값이 나올때 까지
  // merkleArr 배열의 길이가 1이 될때까지 반복
  while (merkleArr.length > 1) {
    const tempArr = [];
    for (let i = 0; i < merkleArr.length; i += 2) {
      if (i + 1 === merkleArr.length) {
        tempArr.push(merkleArr[i]);
      } else {
        tempArr.push(
          SHA256(merkleArr[i] + merkleArr[i + 1])
            .toString()
            .toUpperCase()
        );
      }
    }
    merkleArr = tempArr;
  }
  return merkleArr[0];
};

const libMerkle = (_data) => {
  // 암호화 방식은 sha256이고 매개변수로 전달받은 배열을 트리구조로 만들어 주고 root 값을 가져오자
  const merkleRoot = merkle("sha256").sync(_data).root();
  return merkleRoot;
};

console.log("createMerkle : ", createMerkle(data));
console.log("libMerkle : ", libMerkle(data));
