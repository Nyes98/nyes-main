import styled from "styled-components";
import MordalContainer from "./LoginMordal/Container";
import MainLoginBoardComponent from "./MainLogin/Component";
import SolutionComponent from "./MainSolution/Component";
import ServiceQComponent from "./ServiceQ";

const MainComponent = ({ isClick, setIsClick }) => {
  return (
    <MainBox>
      <MainLoginBoardComponent
        setIsClick={setIsClick}
        isClick={isClick}
      ></MainLoginBoardComponent>
      {isClick ? <MordalContainer setIsClick={setIsClick} /> : <></>}
      <SolutionComponent></SolutionComponent>
      <ServiceQComponent></ServiceQComponent>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #f2f4f7;
`;

export default MainComponent;
