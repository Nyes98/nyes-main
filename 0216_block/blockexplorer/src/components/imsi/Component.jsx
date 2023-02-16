import styled from "styled-components";

const ImsiComp = ({ accounts, onclick, balance, getTrans, getBlock }) => {
  return (
    <>
      {accounts.map((item, index) => {
        return <div key={`accounts-${index}`}>{item}</div>;
      })}
      <button onClick={onclick}>보내기</button>
      <button onClick={balance}>잔액</button>
      <button onClick={getTrans}>트랭</button>
      <button onClick={getBlock}>겟블록</button>
    </>
  );
};

export default ImsiComp;
