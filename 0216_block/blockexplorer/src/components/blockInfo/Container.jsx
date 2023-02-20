import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { callBlockInfo } from "../../api";
import BlockInfoComp from "./Component";

const BlockInfoContainer = () => {
  const [blockInfo, setBlockInfo] = useState();
  const [ts, setTs] = useState();
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  const getBlockInfo = async () => {
    const result = await callBlockInfo(params.blockNumber);
    setBlockInfo(result.data.data);

    let agoDate = parseInt(
      Date.now() -
        (+result.data.data.timestamp * 1000 +
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

  const nextBlock = () => {
    console.log(params);
    navigate(`/blockInfo/${+params.blockNumber + 1}`);
  };

  const prevBlock = () => {
    console.log(params);
    navigate(`/blockInfo/${+params.blockNumber - 1}`);
  };

  useEffect(() => {
    getBlockInfo();
  }, [params.blockNumber]);

  return (
    <BlockInfoComp
      blockInfo={blockInfo}
      ts={ts}
      second={second}
      minute={minute}
      hour={hour}
      day={day}
      nextBlock={nextBlock}
      prevBlock={prevBlock}
    ></BlockInfoComp>
  );
};

export default BlockInfoContainer;
