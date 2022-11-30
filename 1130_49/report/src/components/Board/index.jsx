import styled from "styled-components";
import AddContainer from "./Add/Container";

const BoardComponent = ({}) => {
  return (
    <BoardBox>
      <AddContainer />
    </BoardBox>
  );
};

export default BoardComponent;

const BoardBox = styled.div`
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
`;
