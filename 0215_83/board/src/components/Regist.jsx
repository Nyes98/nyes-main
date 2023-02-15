import styled from "styled-components";

const RegistComponent = ({ changeFuncs, regist }) => {
  return (
    <RegistBox>
      <label>
        ID :<input type="text" onInput={changeFuncs.changeId}></input>
      </label>
      <label>
        PW :<input type="text" onInput={changeFuncs.changePw}></input>
      </label>
      <label>
        NAME :<input type="text" onInput={changeFuncs.changeName}></input>
      </label>
      <button onClick={regist}>Sign in</button>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  width: 30%;
  margin: auto;
  label {
    display: block;
    input {
      margin-left: 0.5rem;
    }
  }
`;
