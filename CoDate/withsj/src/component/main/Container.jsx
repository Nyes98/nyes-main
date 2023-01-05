import { useEffect, useState } from "react";
import styled from "styled-components";
import MainComponent from "./Component";
import SHA256 from "crypto-js/sha256";

export default function MainContainer() {
  const [_data, setData] = useState("");
  const [level, setLevel] = useState(0);
  const [nonce, setNonce] = useState(0);
  const [header, setHeader] = useState([]);
  const [block, setBlock] = useState([]);
  const [auto, setAuto] = useState("false");
  const [event, setEvent] = useState("false");

  const nonceClick = () => {
    setEvent(!event);
  };

  // useEffect(() => {
  //   while (event) {
  //     setNonce(nonce + 1);
  //   }
  //   console.log(nonce);
  // }, [event]);

  // class Header {
  //   constructor(_height, _previousHash) {
  //     this.version = Header.getVersion();
  //     this.height = _height;
  //     this.timeStamp = Header.getTimeStamp();
  //     this.previousHash = _previousHash || "0".repeat(64);
  //     this.nonce = nonce;
  //   }

  //   static getVersion() {
  //     return "1.0.0";
  //   }
  //   static getTimeStamp() {
  //     return Date.now();
  //   }
  // }

  // class Block {
  //   constructor(_header, _data) {
  //     this.version = _header.version;
  //     this.height = _header.height;
  //     this.timeStamp = _header.timeStamp;
  //     this.previousHash = _header.previousHash;
  //     this.merkleRoot = Block.getMerkleRoot(_data);
  //     this.hash = Block.createBlockHash(header, Block.getMerkleRoot(_data));
  //     this.data = _data;
  //   }

  //   static getMerkleRoot(_data) {
  //     if (!Array.isArray(_data)) return "not Array";

  //     let merkleArr = _data.map((item) =>
  //       SHA256(item).toString().toUpperCase()
  //     );

  //     while (merkleArr.length > 1) {
  //       const tempArr = [];
  //       for (let i = 0; i < merkleArr.length; i += 2) {
  //         if (i + 1 === merkleArr.length) {
  //           tempArr.push(merkleArr[i]);
  //         } else {
  //           tempArr.push(
  //             SHA256(merkleArr[i] + merkleArr[i + 1])
  //               .toString()
  //               .toUpperCase()
  //           );
  //         }
  //       }
  //       merkleArr = tempArr;
  //     }
  //     return merkleArr[0];
  //   }

  //   static createBlockHash(_header, _merkleRoot) {
  //     const values = Object.values(_header);
  //     const data = values.join("") + _merkleRoot;
  //     // console.log(SHA256(data).toString().toUpperCase());
  //     return SHA256(data).toString().toUpperCase();
  //   }
  // }

  return (
    <MainComponent setData={setData} nonceClick={nonceClick} nonce={nonce} />
  );
}
