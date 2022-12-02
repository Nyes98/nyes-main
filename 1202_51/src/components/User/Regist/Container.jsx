import store from "../../../modules/store";
import RegistComponent from "./Component";
import { action } from "../../../modules/userDB";

const RegistContainer = () => {
  const onClick = (userId, userPw, userName) => {
    store.dispatch(action.regist(userId, userPw, userName));
  };

  return <RegistComponent onClick={onClick} />;
};
export default RegistContainer;
