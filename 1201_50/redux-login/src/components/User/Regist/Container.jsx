import store from "../../../modules/store";
import axios from "axios";

import RegistComponent from "./Component";
import { action } from "../../../modules/userDB";

const RegistContainer = () => {
  const onClick = (userId, userPw, userName) => {
    store.dispatch(action.regist(userId, userPw, userName));
    axios.post("http://localhost:8080/api/user/regist", {
      userId,
      userPw,
      userName,
    });
  };

  console.log("RegistContainer", onClick);
  return <RegistComponent onClick={onClick} />;
};
export default RegistContainer;
