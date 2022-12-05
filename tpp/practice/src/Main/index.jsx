import styled from "styled-components";
import MainLoginBoardComponent from "./MainLogin/Component";

const MainComponent = ({}) => {
  return (
    <MainBox>
      <MainLoginBoardComponent></MainLoginBoardComponent>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #f2f4f7;
`;

export default MainComponent;
