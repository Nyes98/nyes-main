import styled from "styled-components";

const AllBlocksComp = ({}) => {
  return (
    <Background>
      <TitleBox>
        <div>Blocks</div>
      </TitleBox>
      <ContentsBox>
        <InfoWrap>
          <div>Total of blocks</div>
          <div>(Showing blocks between # to #)</div>
          <TitleLine>
            <div>Block</div>
            <div>Age</div>
            <div>Txn</div>
            <div>Fee Recipient</div>
            <div>Gas Used</div>
            <div>Gas Limit</div>
            <div>Total Difficulty</div>
            <div>Size</div>
            <div>Hash</div>
          </TitleLine>
        </InfoWrap>
      </ContentsBox>
    </Background>
  );
};

export default AllBlocksComp;

const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Background = styled.div`
  background-color: lightgray;
  padding-bottom: 50px;
`;

const InfoWrap = styled.div`
  width: 100%;
  padding: 15px;
  margin: auto;

  & > div:nth-child(2) {
    font-size: 0.9rem;
    color: gray;
  }
`;

const ContentsBox = styled.div`
  margin: 30px auto;
  border: 1px solid gray;

  border-radius: 10px;
  max-width: 1400px;
  background-color: white;
`;

const TitleBox = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid gray;

  & > div:first-child {
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: 10px;
  }
`;
