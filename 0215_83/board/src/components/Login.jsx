import styled from "styled-components";

const LoginComponent = ({ changeFuncs, logIn }) => {
  return (
    <LoginBox>
      <label>
        ID :<input type="text" onInput={changeFuncs.changeId}></input>
      </label>
      <label>
        PW :<input type="text" onInput={changeFuncs.changePw}></input>
      </label>

      <button onClick={logIn}>Log in</button>
    </LoginBox>
  );
};

export default LoginComponent;

const LoginBox = styled.div`
  width: 30%;
  margin: auto;
  label {
    display: block;
    input {
      margin-left: 0.5rem;
    }
  }
`;
