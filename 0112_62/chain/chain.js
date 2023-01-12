const Block = require("../block/block");

class Chain {
  // 체인은 배열로 만들 예정이다.
  #chain;
  //   아무 데이터, 정보 등을 체인에 넣지 못하도록 외부에서의 접근을 막기 위해 private로 설정
  // 난이도를 통해서 문제(퀴즈)를 풀게 되고 문제 해결된 블록을 체인에 추가하게 된다. << 문제 풀이 과정을 마이닝이라고 한다.
  // 문제 풀이를 하는 이유 : 블록의 생성 시간을 조절하기 위해서
  // 결국 난이도는 블록의 생성 시간을 조절하기 위해서 높아졌다가 낮아졌다가 하게된다.
  // 난이도 조절에 대한 조건들을 설정
  #DIFFICULTY_ADDJUSTMENT_INTERVAL = 10;
  // 난이도 조절을 결정하는 블록의 개수 (난이도 조절 단위 개수)
  // 블록이 10개 생성될 때마다 난이도를 조절한다
  #BLOCK_GENERATION_INTERVAL = 10;
  // 블록 (#DIFFICULTY_ADDJUSTMENT_INTERVAL)개 생성에 걸리는 시간
  #TIME_UNIT = 60 * 1000;
  // 시간 단위를 설정

  // 전부 대문자 적는 이유 : 상수다. 절대 변하지 않는 변수, 개발자들의 암묵적인 룰

  constructor() {
    this.#chain = [];
    const genesis = new Block([`Genesis Block ${new Date()}`]);
    this.#chain.push(genesis);
  }

  get chain() {
    return [...this.#chain];
    // 외부에서 #chain 접근 시 새로운 배열을 만들어서 준다. (반환한다)
  }

  get lastBlock() {
    return this.#chain[this.#chain.length - 1];
  }

  get config() {
    // 난이도 조절 관련 설정들을 한번에 가져가서 사용 할 수 있게 묶음
    return {
      DAI: this.#DIFFICULTY_ADDJUSTMENT_INTERVAL,
      // 난이도 조절 개수
      averageGenerationTime: this.#BLOCK_GENERATION_INTERVAL * this.#TIME_UNIT,
      // 10개 블록 생성 되는 시간
    };
  }

  get adjustmentBlock() {
    const length = this.#chain.length;
    // 현재 체인의 길이
    const interval = length - this.#DIFFICULTY_ADDJUSTMENT_INTERVAL;
    // 난이도 조절 단위 개수 전 index
    if (interval < 0) {
      return this.#chain[0];
    }
    return this.#chain[interval];
    // 현재 설정 기준
    // 0,1,2,3,4,5,6,7,8,9
    // 제네시스 블럭 후 9개의 블럭이 추가됐다. << 0
    // 10이 추가될 때 난이도를 수정하게 된다. << 1
    // 10, 11, .... , 19 <<< 1
    // 20이 추가될 때 10 index의 블럭과 비교해서 난이도를 조절
  }

  addBlock(_data) {
    const newBlock = new Block(
      _data,
      this.lastBlock,
      this.adjustmentBlock,
      this.config
    );
    return this.add2Chain(newBlock);
  }

  add2Chain(_newBlock) {
    const isValid = Block.isValidBlock(_newBlock, this.lastBlock);
    if (isValid.isError) {
      console.error(isValid.msg);
      return null;
    } else {
      this.#chain.push(_newBlock);
      return _newBlock;
    }
  }
}

const chain = new Chain();

// test용 블록 32개 추가
for (let i = 0; i < 32; i++) {
  chain.addBlock([`test block ${i}`]);
}

console.log(chain.chain);

module.exports = Chain;
