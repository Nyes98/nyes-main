const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

class Header {
  constructor(_height, _previousHash) {
    this.version = Header.getVersion();
    this.height = _height;
    this.timeStamp = Header.getTimeStamp();
    this.previousHash = _previousHash || "0".repeat(64);
  }

  static getVersion() {
    return "1.0.0";
  }
  static getTimeStamp() {
    return Date.now();
  }
}

class Block {
  constructor(_header, _data) {
    this.version = _header.version;
    this.height = _header.height;
    this.timeStamp = _header.timeStamp;
    this.previousHash = _header.previousHash;
    this.merkleRoot = Block.getMerkleRoot(_data);
    this.hash = Block.createBlockHash(_header, Block.getMerkleRoot(_data));
    this.data = _data;
  }

  static getMerkleRoot(_data) {
    const merkleRoot = merkle("sha256").sync(_data).root();
    return merkleRoot;
  }

  static createBlockHash(_header, _merkleRoot) {
    const values = Object.values(_header);
    const data = values.join("") + _merkleRoot;
    return SHA256(data).toString().toUpperCase();
  }
}

const data = [
  "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",
];

const header = new Header(0);
const block = new Block(header, data);
const 안녕ㅁㄴㅇㄹ = new Block(header, data);

console.log("ㅎㅇ", 안녕ㅁㄴㅇㄹ);

const secondHeader = new Header(1, block.hash);
const secondBlock = new Block(secondHeader, ["난 두번째 블록"]);

module.exports = { block, secondBlock };
