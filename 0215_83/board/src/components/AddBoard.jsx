import styled from "styled-components";

const AddBoardComponent = ({ changeFuncs, upload }) => {
  return (
    <AddBoardBox>
      <label>
        Title :<input type="text" onInput={changeFuncs.changeTitle}></input>
      </label>
      <label>
        Text :<input type="text" onInput={changeFuncs.changeText}></input>
      </label>
      <button onClick={upload}>Upload</button>
    </AddBoardBox>
  );
};

export default AddBoardComponent;

const AddBoardBox = styled.div`
  width: 30%;
  margin: auto;
  label {
    display: block;
    input {
      margin-left: 0.5rem;
    }
  }
`;
