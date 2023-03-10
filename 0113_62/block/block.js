const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;
const hexToBinary = require("hex-to-binary");

class BlockHeader {
  version;
  merkleRoot;
  timestamp;
  height;
  difficulty;
  nonce;

  constructor(_data, _previousBlock) {
    this.version = "1.0.0";
    const merkleRoot = this.createMerkleRoot(_data);
    if (merkleRoot.isError) {
      this.merkleRoot = "";
      console.error(merkleRoot.msg);
    } else {
      this.merkleRoot = merkleRoot.value;
    }
    this.setTimestamp();
    this.height = _previousBlock ? _previousBlock.height + 1 : 0;
    this.difficulty = 0;
    this.nonce = 0;
  }

  setTimestamp() {
    this.timestamp = Date.now();
  }
  createMerkleRoot(_data) {
    if (!Array.isArray(_data) || !_data.length) {
      return { isError: true, msg: "data가 배열이 아니거나 빈 배열이다" };
    }
    return { isError: false, value: merkle("sha256").sync(_data).root() };
  }

  getDifficulty({
    previousDifficulty, // 이전 블록의 난이도
    adjustmentDifficulty, // 난이도 조절 단위 개수 이전의 블록의 난이도, (10개 전 난이도)
    adjustmentTimestamp, // 난이도 조절 단위 개수 이전의 블록의 생성 시간, (10개 전 생성시간)
    DAI, // 난이도 조절 단위 개수
    averageGenerationTime, // 블록 세대당 생성 시간(10개당 생성 시간)
  }) {
    if (this.height < DAI) {
      this.difficulty = 0;
    }
    // 10개 이전에는 제네시스 블록 생성 시 설정한 난이도로 설정된다.
    else if (this.height < DAI * 2) {
      this.difficulty = 1;
    }
    // 20개 이전에는 제네시스 블록 생성 시 설정한 난이도보다 하나 더 높은 난이도로 설정된다.
    else if (this.height % DAI !== 0) {
      // 높이가 난이도 조절 단위 개수에 맞지 않을 때 이전 블록의 난이도로 설정
      this.difficulty = previousDifficulty;
    } else {
      const timeToken = this.timestamp - adjustmentTimestamp;
      // 10개 전 블록과 현재 블록의 생성 시간 차이

      if (timeToken < averageGenerationTime * 0.9) {
        // 이전 10개 생성 시간이 기준 시간 이내일 떄
        this.difficulty = adjustmentDifficulty + 1;
        // 난이도를 올려서 시간이 더 걸릴 수 있게 조절한다.
      } else if (timeToken > averageGenerationTime * 1.1) {
        // 이전 10개 생성 시간이 기준 시간 초과일 때
        this.difficulty = adjustmentDifficulty - 1;
        // 난이도를 내려서 시간이 적게 걸릴 수 있게 조절한다.
      } else {
        this.difficulty = adjustmentDifficulty;
      }
    }
  }
}

class Block extends BlockHeader {
  hash;
  previousHash;
  data;

  constructor(_data, _previousBlock, _adjustmentBlock, _config) {
    super(_data, _previousBlock);
    this.previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
    if (this.merkleRoot) {
      if (_adjustmentBlock && _config) {
        this.getDifficulty({
          previousDifficulty: _previousBlock.difficulty,
          adjustmentDifficulty: _adjustmentBlock.difficulty,
          adjustmentTimestamp: _adjustmentBlock.timestamp,
          DAI: _config.DAI,
          averageGenerationTime: _config.averageGenerationTime,
        });
      }
      this.hash = Block.createHash(this);
      if (_adjustmentBlock && _config) {
        this.updateBlock({
          // hash 생성 후에 문제 풀이를 시작한다.
          previousDifficulty: _previousBlock.difficulty,
          adjustmentDifficulty: _adjustmentBlock.difficulty,
          adjustmentTimestamp: _adjustmentBlock.timestamp,
          DAI: _config.DAI,
          averageGenerationTime: _config.averageGenerationTime,
        });
      }
    } else {
      // merkleRoot가 없음 << 배열이 아닌 데이터가 입력되었다.
      this.hash = "";
      // 이후 오류 발생 여부 확인용
    }
    this.data = _data;
    console.log(this);
  }

  static createHash(_block) {
    let tempStr = "";
    // 블록의 정보를 임시로 합칠 string

    const keys = Object.keys(_block);
    // Object.keys => 객체의 키들을 배열로 가져온다(반환한다)
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === "hash" || keys[i] === "data") {
        continue; // for, while같은 반복문에서 아래의 코드를 건너뛴다. (여기선 i++로 간다)
      }
      tempStr += _block[keys[i]];
    }

    return SHA256(tempStr).toString().toUpperCase();
  }

  updateBlock(difficultyOptions) {
    // 난이도와 논스를 사용해서 문제를 푼다.
    // 여기서 문제는 difficulty 알고리즘 이라고 한다
    // difficulty 알고리즘 : 2진수로 변화하여 앞의 0의 개수와 difficulty와 비교하여 difficulty부다 0의 개수가 많으면 문제를 해결한 것이다.
    // Block에 암호화된 hash를 2진수로 바꾸고 제일 앞에서부터 연속되는 0의 개수가 difficulty보다 크면 해결한 것이고 아니면 해결하지 못한 것으로 처리한다.

    let hashBinary = hexToBinary(this.hash);
    // 현재 해시를 2진수로 변환한다.
    while (!hashBinary.startsWith("0".repeat(this.difficulty))) {
      // startWith : string의 메서드로 시작하는 문장을 확인해준다.
      this.nonce += 1;
      // hash가 변경될 수 있도록 nonce를 증가시킨다.
      this.setTimestamp();
      // 블록 생성 시간은 chain에 추가되는 시간이기 때문에 문제 풀이 시점을 생성 시간으로 재설정한다.
      this.getDifficulty(difficultyOptions);
      // 시간이 다시 설정됐기 때문에 기존 시간과 비교하여 난이도를 재설정한다.
      // difficultyOptions라고 변수를 넣은 이유는 updateBlock 메서드 또한 매개변수로 해당 정보를 받아와야하기 떄문이다.
      this.hash = Block.createHash(this);
      // 3

      hashBinary = hexToBinary(this.hash);
      // 2진수로 바꾸어 while의 조건문(문제 조건)에 해당하지 않는지 확인한다.
      // while의 조건문이 부정이기 때문에 해당하지 않으면 문제 해결이다.
    }
    console.log(hashBinary);
    console.log(hashBinary.slice(0, this.difficulty));
    // console.log(this);
  }

  static isValidBlock(_newBlock, _previousBlock) {
    // 생성된 블록이 정상인지 확인해보자
    if (_newBlock.height !== _previousBlock.height + 1) {
      return { isError: true, msg: "높이가 다르다" };
    }
    if (_newBlock.previousHash !== _previousBlock.hash) {
      return {
        isError: true,
        msg: "이전 블록의 hash와 새로운 블록의 hash가 다르다",
      };
    }
    if (_newBlock.hash !== Block.createHash(_newBlock)) {
      return { isError: true, msg: "hash 생성 중 오류 발생" };
    }
    return { isError: false, value: _newBlock };
  }
}

module.exports = Block;
