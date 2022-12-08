import { useState } from "react";
import styled from "styled-components";
import MordalContainer from "./LoginMordal/Container";
import MainLoginBoardComponent from "./MainLogin/Component";
import SolutionComponent from "./MainSolution/Component";
import ServiceQComponent from "./ServiceQ";
import ServiceModalContainer from "./ServiceQ/ServiceMordal/Container";

const MainComponent = ({ isClick, setIsClick }) => {
  const [mordalC, setMordalC] = useState(false);

  return (
    <MainBox>
      <MainLoginBoardComponent
        setIsClick={setIsClick}
        isClick={isClick}
      ></MainLoginBoardComponent>
      {isClick ? <MordalContainer setIsClick={setIsClick} /> : <></>}
      <SolutionComponent></SolutionComponent>
      {mordalC ? (
        <ServiceModalContainer setMordalC={setMordalC}></ServiceModalContainer>
      ) : (
        <></>
      )}
      <ServiceQComponent
        mordalC={mordalC}
        setMordalC={setMordalC}
      ></ServiceQComponent>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #f2f4f7;
`;

export default MainComponent;
