import { useEffect, useState } from "react";
import { callAllBlock, callRecentBlock } from "../../api";
import { useNavigate } from "react-router-dom";

import MainComp from "./Component";

const MainContainer = () => {
  const [blockInfo, setBlockInfo] = useState([]);
  const [txInfo, setTxInfo] = useState([]);
  const [search, setSearch] = useState();
  const [latestBlock, setLatestBlock] = useState();
  const navigate = useNavigate();

  const moveToAddress = (address) => {
    navigate(`/address/${address}`);
  };

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

  const moveBlockTxns = (blockNumber) => {
    navigate(`/blockTxs/${blockNumber}`);
  };

  const doSearch = () => {
    console.log(latestBlock);
    console.log(search.length);
    if (search <= latestBlock) navigate(`/blockInfo/${search}`);
    else if (search.length == 42) navigate(`/address/${search}`);
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
  };

  const getRecentBlock = async () => {
    const result = await callRecentBlock();
    setBlockInfo(result.data.data);
    setTxInfo(result.data.trans);
    setLatestBlock(result.data.data[0].number);
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
      moveToAddress={moveToAddress}
      moveBlockTxns={moveBlockTxns}
      setSearch={setSearch}
      search={search}
      doSearch={doSearch}
    ></MainComp>
  );
};

export default MainContainer;
