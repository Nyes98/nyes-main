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

  background: radial-gradient(
      circle closest-side at 60% 43%,

      #b03 26%,
      rgba(187, 0, 51, 0) 27%
    ),
    radial-gradient(
      circle closest-side at 40% 43%,
      #b03 26%,
      rgba(187, 0, 51, 0) 27%
    ),
    radial-gradient(
      circle closest-side at 40% 22%,
      #d35 45%,
      rgba(221, 51, 85, 0) 46%
    ),
    radial-gradient(
      circle closest-side at 60% 22%,
      #d35 45%,
      rgba(221, 51, 85, 0) 46%
    ),
    radial-gradient(
      circle closest-side at 50% 35%,
      #d35 30%,
      rgba(221, 51, 85, 0) 31%
    ),
    radial-gradient(
        circle closest-side at 60% 43%,
        #b03 26%,
        rgba(187, 0, 51, 0) 27%
      )
      50px 50px,
    radial-gradient(
        circle closest-side at 40% 43%,
        #b03 26%,
        rgba(187, 0, 51, 0) 27%
      )
      50px 50px,
    radial-gradient(
        circle closest-side at 40% 22%,
        #d35 45%,
        rgba(221, 51, 85, 0) 46%
      )
      50px 50px,
    radial-gradient(
        circle closest-side at 60% 22%,
        #d35 45%,
        rgba(221, 51, 85, 0) 46%
      )
      50px 50px,
    radial-gradient(
        circle closest-side at 50% 35%,
        #d35 30%,
        rgba(221, 51, 85, 0) 31%
      )
      50px 50px;
  background-color: #b03;
  background-size: 100px 100px;
`;
