import styled from "styled-components";

export default function MainComponent({ setData, nonceClick, nonce }) {
  return (
    <BackgroundBox>
      <CoinBox>
        <div>예성 코인</div>

        <Line>
          <input
            type="text"
            placeholder="Block의 Data"
            onInput={(e) => {
              setData(e.target.value);
            }}
          />
        </Line>
        <LineTwo>
          <input type="number" placeholder="Nonce" />
          <div onClick={nonceClick}>Fire</div>
        </LineTwo>
        <LineThree>
          <input type="number" />
          <div>Mine Block</div>
        </LineThree>
      </CoinBox>
      <BlockBox>
        <Title>Candidate Block</Title>
        <div>Previouse Hash:</div>
        <PreHashBox>이전해쉬지롱</PreHashBox>
        <div>Data:</div>
        <DataBox>데이타지롱</DataBox>
        <div>Hash:</div>
        <HashBox>해쉬지롱</HashBox>
      </BlockBox>
    </BackgroundBox>
  );
}

const Title = styled.div`
  font-size: 20px;
  padding: 10px;
`;
const BackgroundBox = styled.div`
  background-color: #1f2937;
  display: flex;
`;
const DataBox = styled.div`
  padding: 10px;
  background-color: #6b7280;
`;
const HashBox = styled.div`
  padding: 10px;
  background-color: #60a5fa;
`;
const PreHashBox = styled.div`
  padding: 10px;
  background-color: #10b981;
`;
const BlockBox = styled.div`
  width: 600px;
  background-color: white;
  margin-left: 100px;
`;
const CoinBox = styled.div``;
const Line = styled.div`
  display: flex;
  width: 400px;
  padding: 5px;
  input {
    width: 100%;
    border: 1px solid black;
    padding: 20px;
  }
`;

const LineTwo = styled.div`
  display: flex;
  padding: 5px;
  width: 400px;
  input {
    width: 80%;
    margin-right: 5px;
    padding: 20px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    border: 1px solid black;
    background-color: #8b5cf6;
  }
`;

const LineThree = styled.div`
  display: flex;
  padding: 5px;
  width: 400px;
  input {
    width: 10%;
    margin-right: 5px;
    padding: 20px;
  }
  div {
    border: 1px solid black;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6366f1;
  }
`;
