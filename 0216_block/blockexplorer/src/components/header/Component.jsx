import styled from "styled-components";

const HeaderComp = ({}) => {
  return (
    <HeaderLine>
      <ContentsBox>
        <LogoBox>
          <img src="/imgs/logo-ether.svg"></img>{" "}
        </LogoBox>
        <DropContents>
          <div>Home</div>
          <div>Blockchain</div>
          <div>Tokens</div>
          <div>Misc</div>
        </DropContents>
      </ContentsBox>
    </HeaderLine>
  );
};

export default HeaderComp;

const HeaderLine = styled.div`
  background-color: purple;
`;
const LogoBox = styled.div`
  img {
    width: 150px;
    margin: 10px 0;
  }
`;
const ContentsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: auto;
`;

const DropContents = styled.div`
  display: flex;
  div {
    padding: 17px 15px;
  }
`;
