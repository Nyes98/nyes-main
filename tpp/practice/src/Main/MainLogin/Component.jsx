import styled from "styled-components";

const MainLoginBoardComponent = ({}) => {
  return (
    <MainLoginBoardBox>
      <div className="temp"></div>
      <div className="MainBoard">
        <div className="text-box">
          지금,
          <div>
            <span className="our">우리기업의 채용</span>을
          </div>
          시작해 보세요
        </div>
        <div className="flex button-box">
          <div>로그인</div>
          <div>회원가입</div>
        </div>
      </div>
      <div className="temp"></div>
    </MainLoginBoardBox>
  );
};

const MainLoginBoardBox = styled.div`
  width: 66%;
  margin: auto;

  .MainBoard {
    border-radius: 10px;
    background-color: #ffffff;
  }

  .text-box {
    font-size: 44px;
    padding: 50px;
  }

  .temp {
    height: 60px;
    background-color: #f2f4f7;
  }

  .our {
    font-weight: 600;
  }

  .flex {
    display: flex;
  }

  .button-box {
    font-size: 20px;
    font-weight: 700;
    padding: 0 50px 40px 50px;
  }

  .button-box > div:first-child {
    color: white;
    background-color: #3399ff;
  }

  .button-box > div {
    border: 1px solid black;
    border-radius: 8px;
    width: 180px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`;

export default MainLoginBoardComponent;
