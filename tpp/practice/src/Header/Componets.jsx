import styled from "styled-components";
import VerticalMode from "./Carousel/Carousel";

const HeaderComponent = ({}) => {
  return (
    <>
      <HeaderBox>
        <div>
          <div>JOBKOREA</div>
          <div>
            <div>회원가입</div>
            <div>고객센터</div>
            <div>로그인</div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src="img/3bar.svg" />
            </div>
            <div>홈</div>
            <div>공고등록</div>
            <div>공고지원자 관리</div>
            <div>인재검색</div>
            <div>헤드헌팅 의뢰</div>
          </div>
          <div>
            <div>기업라운지</div>
            <div>서비스안내</div>
          </div>
        </div>
      </HeaderBox>
      <LowHeaderBox>
        <VerticalMode />
      </LowHeaderBox>
    </>
  );
};

const HeaderBox = styled.div`
  height: 136px;
  background-color: #323743;

  & > div {
    color: white;
    margin: auto;
    width: 64%;
    display: flex;
    justify-content: space-between;
    padding: 12px;
  }

  & > div > div {
    display: flex;
    align-items: center;
  }

  & > div > div:nth-child(1) {
    font-size: 24px;
    font-weight: 700;
  }

  & > div > div:nth-child(2) > div {
    margin: 0 10px;
    font-size: 13px;
  }

  & > div:nth-child(2) > div:nth-child(1) {
    font-size: 17px;
    font-weight: 600;
  }
  & > div:nth-child(2) > div:nth-child(1) > div {
    padding: 0 20px;
    margin-top: 25px;
  }

  & > div:nth-child(2) > div:nth-child(1) > div:first-child {
    padding: 0 20px 0 0;
  }

  & > div:nth-child(2) > div:nth-child(1) > div:first-child > img {
    width: 18px;
    filter: invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg)
      brightness(105%) contrast(105%);
    margin-top: 5px;
  }

  & > div:nth-child(2) > div:nth-child(2) {
    margin-top: 25px;
  }

  & > div:nth-child(2) > div:nth-child(2) > div {
    font-size: 15px;
  }
`;

const LowHeaderBox = styled.div`
  height: 65px;
  overflow: hidden;
`;

export default HeaderComponent;
