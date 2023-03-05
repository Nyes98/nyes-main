import styled from "styled-components";

const MainComp = () => {
  return (
    <Root>
      <Header>
        <LogoBox>
          <img src="./imgs/logo.svg"></img>
        </LogoBox>
        <SearchBox>
          <div>
            <img src="./imgs/search.svg" />
            <input type="text" placeholder="지역, 구장 이름으로 찾기" />
          </div>
          <img src="./imgs/user.svg"></img>
          <img src="./imgs/3dot.svg"></img>
        </SearchBox>
      </Header>

      <MenuBox>
        <div>소셜 매치</div>
        <div>구장 예약</div>
        <div>
          팀<div>신규</div>
        </div>
      </MenuBox>

      <IconBox>
        <div>
          <div>
            <img src="./imgs/explore_earlybird.svg" />
          </div>
          <div>얼리버드</div>
        </div>{" "}
        <div>
          <div>
            <img src="./imgs/explore_dribbler.svg" />
          </div>

          <div>여자 매치</div>
        </div>{" "}
        <div>
          <div>
            <img src="./imgs/explore_seeding.svg" />
          </div>

          <div>스타터</div>
        </div>{" "}
        <div>
          <div>
            <img src="./imgs/explore_fire.svg" />
          </div>

          <div>챌린지</div>
        </div>{" "}
        <div>
          <div>
            <img src="./imgs/explore_heart.svg" />
          </div>

          <div>시작하기</div>
        </div>
      </IconBox>
      <BackgroundBox></BackgroundBox>

      <CarouselBox>
        <img src="./imgs/banner-manner_pc.png" />
      </CarouselBox>

      <DayBox>
        <Btn>&lt;</Btn>
        <Day>
          <div>5</div>
          <div>일</div>
        </Day>{" "}
        <Day>
          <div>6</div>
          <div>월</div>
        </Day>{" "}
        <Day>
          <div>7</div>
          <div>화</div>
        </Day>{" "}
        <Day>
          <div>8</div>
          <div>수</div>
        </Day>{" "}
        <Day>
          <div>9</div>
          <div>목</div>
        </Day>{" "}
        <Day>
          <div>10</div>
          <div>금</div>
        </Day>{" "}
        <Day>
          <div>11</div>
          <div>토</div>
        </Day>
        <Btn>&gt;</Btn>
      </DayBox>
    </Root>
  );
};

export default MainComp;

const Day = styled.div`
  background-color: blue;
  padding: 10px 0;
  color: white;
  width: 120px;
  border-radius: 40px;
`;

const DayBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 20px 0;
  align-items: center;
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-radius: 20px;
  width: 20px;
  height: 20px;
  color: white;
  font-weight: 900;
`;

const BackgroundBox = styled.div`
  width: 100vw;
  height: 380px;
  position: absolute;
  left: 0;
  background-color: #f2f5f7;
  z-index: -1;
`;
const CarouselBox = styled.div`
  margin: 30px auto;

  img {
    border-radius: 10px;
    width: 940px;
    margin-left: 20px;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  div {
    width: 70px;
    text-align: center;
  }

  div > div:first-child {
  }
`;
const MenuBox = styled.div`
  display: flex;
  font-size: 17px;
  padding: 15px 0;

  & > div:first-child {
    font-weight: 700;
  }

  & > div:last-child {
    display: flex;
    align-items: center;

    & > div {
      display: flex;
      margin: 2px;
      justify-content: center;
      align-items: center;
      background-color: blue;
      color: white;
      font-size: 10px;
      border-radius: 5px;
      width: 30px;
      height: 18px;
    }
  }

  div {
    margin-right: 20px;
  }
`;
const Root = styled.div`
  margin: 10px auto;
  width: 60%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 60px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  div {
    display: flex;
    width: 400px;
    padding: 5px;
    border-radius: 5px;
    background-color: lightgray;

    input {
      border: none;
      width: 90%;
      padding: 10px;
      background-color: lightgray;
    }
  }

  img {
    margin: 5px;
    width: 30px;
  }
`;
