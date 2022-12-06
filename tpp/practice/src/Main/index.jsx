import styled from "styled-components";
import MainLoginBoardComponent from "./MainLogin/Component";
import SolutionComponent from "./MainSolution/Component";
import ServiceComponent from "./ServiceQ/Component";

const MainComponent = ({}) => {
  return (
    <MainBox>
      <MainLoginBoardComponent></MainLoginBoardComponent>
      <SolutionComponent></SolutionComponent>
      <ServiceComponent></ServiceComponent>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #f2f4f7;
`;

export default MainComponent;
