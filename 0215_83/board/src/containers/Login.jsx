import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { logIn } from "../api";
import LoginComponent from "../components/Login";
import RegistComponent from "../components/Regist";

const LoginContainer = ({ setUser }) => {
  const [logInData, setLoginData] = useState({
    id: "",
    pw: "",
  });
  const navigate = useNavigate();

  const changeId = (e) => {
    setLoginData((state) => ({ ...state, id: e.target.value }));
  };
  const changePw = (e) => {
    setLoginData((state) => ({ ...state, pw: e.target.value }));
  };

  const logInFunc = async () => {
    if (!logInData.id || !logInData.pw) return;
    const result = await logIn(logInData);
    if (!result.isError) {
      setUser({ name: result.user.name });
      navigate("/");
    }
  };

  return (
    <LoginComponent
      changeFuncs={{ changeId, changePw }}
      logIn={logInFunc}
    ></LoginComponent>
  );
};

export default LoginContainer;
