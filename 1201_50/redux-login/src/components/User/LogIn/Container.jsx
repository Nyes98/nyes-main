import LogInComponent from "./Component";
import { action } from "../../../modules/userInfo";
import store from "../../../modules/store";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LogInContainer = ({ userName }) => {
  const navigate = useNavigate(); // location.href 같은 훅이다.
  const onClick = (userId, userPw) => {
    store.dispatch(action.logIn(userId, userPw, store.getState().userDB));
    axios.post("http://localhost:8080/api/user/login", {
      userId,
      userPw,
    });
  };

  useEffect(() => {
    if (userName) navigate("/");
  }, [userName]);
  return <LogInComponent onClick={onClick} />;
};
const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
  };
};

export default connect(mapStateToProps)(LogInContainer);
