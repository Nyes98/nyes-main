import styeld from "styled-components";
import TopHeaderContainer from "./TopHeader/Container";
import LowerHeaderContainer from "./LowerHeader/Container";

const HeaderComponent = ({}) => {
  return (
    <HeaderLine>
      <TopHeaderContainer></TopHeaderContainer>
      <LowerHeaderContainer></LowerHeaderContainer>
    </HeaderLine>
  );
};

const HeaderLine = styeld.div``;

export default HeaderComponent;
