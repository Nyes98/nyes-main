import styled from "styled-components";

const FooterComp = ({}) => {
  return (
    <FooterLine>
      <ContentsBox>
        <HighBox>
          <div>
            <img src="/imgs/opti-logo.svg" />
            Powered by Polygon Chain
          </div>
        </HighBox>
      </ContentsBox>
    </FooterLine>
  );
};

export default FooterComp;

const FooterLine = styled.div`
  background-color: purple;
  margin-top: 100px;
  height: 200px;
  width: 100%;
`;

const ContentsBox = styled.div`
  max-width: 1400px;
  width: 100%;
`;

const HighBox = styled.div`
  display: flex;
  img {
    width: 30px;
  }
`;
