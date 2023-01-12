const Block = require("../block/block");

class Chain {
  // 체인은 배열로 만들 예정이다.
  #chain;
  //   아무 데이터, 정보 등을 체인에 넣지 못하도록 외부에서의 접근을 막기 위해 private로 설정

  constructor() {
    this.#chain = [];
    const genesis = new Block([`Genesis Block ${new Date()}`]);
    console.log(new Date());
    this.#chain.push(genesis);
  }

  get chain() {
    return [...this.#chain];
    // 외부에서 #chain 접근 시 새로운 배열을 만들어서 준다. (반환한다)
  }

  get lastBlock() {
    return this.#chain[this.#chain.length - 1];
  }

  addBlock(_data) {
    const newBlock = new Block(_data, this.lastBlock);
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

// const chain = new Chain();
// console.log(chain.chain);

// chain.addBlock(["asdf"]);
// chain.addBlock(["asdf2"]);
// chain.addBlock(["asd"]);
// const block = new Block(["qwer"], chain.lastBlock);

// chain.add2Chain(block);

// console.log(chain.chain);

module.exports = Chain;
