import styled from "styled-components";

const MainComp = ({}) => {
  return (
    <MainRoot>
      <MainBackgroud></MainBackgroud>
      <ContentsBox>
        <SearchBox>
          <div>The Optimism Explorer</div>
          <SearchLine>
            <input type="text" />
            <SearchBtnBox>
              <img src="/imgs/search.svg" alt="" />
            </SearchBtnBox>
          </SearchLine>
        </SearchBox>
        <InfoViewBox>
          <LatestBlocksBox>
            <InfoTitleBox>Latest Blocks</InfoTitleBox>
            <InfoContentsBox>
              <BlockHeight>
                <Icon>BK</Icon>
                <HeightTime>
                  <div>32090256</div>
                  <div>21 secs ago</div>
                </HeightTime>
              </BlockHeight>
              <ValidInfo>
                <MinerBox>
                  <div>Validated By</div>
                  <div>miner...</div>
                </MinerBox>
                <TxnsTime>
                  <div>2 txns</div>
                  <div>in 6 secs</div>
                </TxnsTime>
              </ValidInfo>
              <GasInfo>
                <div>UsedGas</div>
                <div>232323</div>
              </GasInfo>
            </InfoContentsBox>
            <InfoBtnBox>
              <div>Veiw All</div>
            </InfoBtnBox>
          </LatestBlocksBox>
          <LatestTransactionsBox></LatestTransactionsBox>
        </InfoViewBox>
      </ContentsBox>
    </MainRoot>
  );
};

export default MainComp;

const MainRoot = styled.div`
  display: flex;
  justify-content: center;
`;

const MainBackgroud = styled.div`
  position: absolute;
  background-color: purple;
  padding: 7rem;
  z-index: 0;
  width: 100%;
`;

const ContentsBox = styled.div`
  max-width: 1400px;
  width: 100%;
  position: absolute;
  top: 180px;
`;

const SearchBox = styled.div`
  font-size: 21px;
  color: white;
  width: 40%;
`;

const SearchBtnBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #8247e5;
  width: 50px;
  height: 50px;
  border-radius: 10px;

  img {
    width: 20px;
    filter: invert(100%) sepia(82%) saturate(48%) hue-rotate(229deg)
      brightness(114%) contrast(100%);
  }
`;

const SearchLine = styled.div`
  z-index: 2;
  display: flex;
  width: 100%;
  input {
    width: 90%;
    border-radius: 10px;
  }
  input:focus {
    outline: none;
  }
`;

const InfoViewBox = styled.div`
  display: flex;
`;

const LatestBlocksBox = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 45%;
  margin-top: 50px;
  border: 1px solid #e7eaf3;
`;
const LatestTransactionsBox = styled.div``;

const InfoTitleBox = styled.div`
  border-bottom: 1px solid #e7eaf3;
  font-weight: 700;
  padding: 10px;
`;
const InfoContentsBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;
const InfoBtnBox = styled.div`
  border-top: 1px solid #e7eaf3;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    background-color: #f2ecfc;
    margin: 10px auto;
    border-radius: 10px;
    height: 25px;
    font-size: 11px;
    color: #8247e5;
  }
`;

const BlockHeight = styled.div`
  display: flex;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: #f1f2f4;
  margin-right: 5px;
`;
const HeightTime = styled.div`
  margin-top: 3px;
  & > div:first-child {
    color: #8247e7;
  }

  & > div:nth-child(2) {
    font-size: 11px;
    color: gray;
  }
`;

const ValidInfo = styled.div``;
const MinerBox = styled.div`
  display: flex;
  & > :first-child {
    margin-right: 5px;
  }
  & > :nth-child(2) {
    color: #8247e7;
  }
`;
const TxnsTime = styled.div`
  display: flex;
  & > :first-child {
    margin-right: 5px;
    color: #8247e7;
  }
  & > :nth-child(2) {
    font-size: 11px;
    color: gray;
    margin-top: 5px;
  }
`;

const GasInfo = styled.div`
  & > :nth-child(2) {
    color: #8247e7;
  }
`;
