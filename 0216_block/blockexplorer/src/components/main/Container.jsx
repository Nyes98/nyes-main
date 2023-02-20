import { useEffect, useState } from "react";
import { callAllBlock, callRecentBlock } from "../../api";
import { useNavigate } from "react-router-dom";

import MainComp from "./Component";

const MainContainer = () => {
  const [blockInfo, setBlockInfo] = useState([]);
  const [txInfo, setTxInfo] = useState([]);
  const navigate = useNavigate();

  const moveBlockInfo = (params) => {
    navigate(`/blockInfo/${params}`);
  };

  const moveTransactionInfo = (params) => {
    navigate(`/txInfo/${params}`);
  };

  const moveAllBlockInfo = () => {
    navigate(`/allBlocks`);
  };

  const moveAllTxInfo = () => {
    navigate(`/allTxs`);
  };

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
    console.log(result.data.data);
    // setBlockInfo(result.data.data);
    // console.log(blockInfo);
  };

  const getRecentBlock = async () => {
    const result = await callRecentBlock();
    console.log(result.data);
    setBlockInfo(result.data.data);
    setTxInfo(result.data.trans);
  };

  useEffect(() => {
    console.log(blockInfo);
    if (blockInfo.length > 10) return;
    getAllBlock();
    getRecentBlock();
  }, []);

  return (
    <MainComp
      blockInfo={blockInfo}
      txInfo={txInfo}
      shortWords={shortWords}
      veryshortWords={veryshortWords}
      moveBlockInfo={moveBlockInfo}
      moveTransactionInfo={moveTransactionInfo}
      moveAllBlockInfo={moveAllBlockInfo}
      moveAllTxInfo={moveAllTxInfo}
    ></MainComp>
  );
};

export default MainContainer;
