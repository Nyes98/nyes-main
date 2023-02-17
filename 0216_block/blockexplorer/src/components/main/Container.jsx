import { useEffect, useState } from "react";
import { callAllBlock, callRecentBlock } from "../../api";
import MainComp from "./Component";

const MainContainer = () => {
  const [blockInfo, setBlockInfo] = useState([]);
  const [transactionInfo, setTransactionInfo] = useState([]);

  const shortWords = (str, length = 30) => {
    let result = "";
    if (str.length > length) {
      result = str.substr(0, length - 2) + "...";
    } else {
      result = str;
    }
    return result;
  };

  const veryshortWords = (str, length = 15) => {
    let result = "";
    if (str.length > length) {
      result = str.substr(0, length - 2) + "...";
    } else {
      result = str;
    }
    return result;
  };
  const getAllBlock = async () => {
    const result = await callAllBlock();
    // console.log(result.data.data);
    // setBlockInfo(result.data.data);
    // console.log(blockInfo);
  };

  const getRecentBlock = async () => {
    const result = await callRecentBlock();
    console.log(result.data.trans);
    setBlockInfo(result.data.data);
    setTransactionInfo(result.data.trans);
  };

  useEffect(() => {
    // console.log(blockInfo);
    // if (blockInfo.length > 10) return;
    getAllBlock();
    getRecentBlock();
  }, []);

  return (
    <MainComp
      blockInfo={blockInfo}
      shortWords={shortWords}
      transactionInfo={transactionInfo}
      veryshortWords={veryshortWords}
    ></MainComp>
  );
};

export default MainContainer;
