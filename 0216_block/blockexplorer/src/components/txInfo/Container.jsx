import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { callTxInfo, callBlockInfo } from "../../api";
import TxInfoComp from "./Component";

const TxInfoContainer = () => {
  const [txInfo, setTxInfo] = useState();
  const [ts, setTs] = useState();
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  const getTxInfo = async () => {
    const result = await callTxInfo(params.txHash);
    setTxInfo(result.data.data);

    console.log();

    let agoDate = parseInt(
      Date.now() -
        (+result.data.data.Block.timestamp * 1000 +
          1000 * 60 * 60 * 24 * 3 +
          1000 * 60 * 60 * 3 +
          1000 * 60 * 3)
    );

    setSecond(parseInt(agoDate / 1000) % 60);
    setMinute(parseInt(agoDate / (60 * 1000)) % 60);
    setHour(parseInt(agoDate / (60 * 1000 * 60)));
    setDay(parseInt(agoDate / (60 * 1000 * 60 * 24)));

    let idate = new Date(
      +result.data.data.timestamp * 1000 +
        1000 * 60 * 60 * 24 * 3 +
        1000 * 60 * 60 * 3 +
        1000 * 60 * 3
    );
    setTs(idate.toString());
  };

  // const nextTx = () => {
  //   console.log(params);
  //   navigate(`/txInfo/${+params.txHash + 1}`);
  // };

  // const prevTx = () => {
  //   console.log(params);
  //   navigate(`/txInfo/${+params.txHash - 1}`);
  // };

  const moveTo = (blockNumber) => {
    navigate(`/blockInfo/${blockNumber}`);
  };

  useEffect(() => {
    getTxInfo();
  }, [params.txHash]);

  return (
    <TxInfoComp
      txInfo={txInfo}
      ts={ts}
      second={second}
      minute={minute}
      hour={hour}
      day={day}
      moveTo={moveTo}
      // nextBlock={nextBlock}
      // prevBlock={prevBlock}
    ></TxInfoComp>
  );
};

export default TxInfoContainer;
