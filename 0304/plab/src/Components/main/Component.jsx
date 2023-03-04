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
    </Root>
  );
};

export default MainComp;

const MenuBox = styled.div`
  display: flex;
  font-size: 17px;

  & > div:first-child {
    font-weight: 700;
  }

  & > div:last-child {
    display: flex;
    background-color: blue;
    color: white;
    font-size: 10px;
  }

  div {
    margin-right: 20px;
  }
`;
const Root = styled.div`
  margin: 10px auto;
  width: 70%;
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
