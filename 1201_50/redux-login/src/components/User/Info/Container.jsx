import InfoComponent from "./Component";
import axios from "axios";

import { connect } from "react-redux";
import store from "../../../modules/store";
import { action } from "../../../modules/userInfo";

const InfoContainer = ({ userName, userId }) => {
  const onClick = () => {
    store.dispatch(action.logOut());
    axios.post("http://localhost:8080/api/user/logout", {
      userId,
    });
  };
  return <InfoComponent userName={userName} onClick={onClick} />;
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
    userId: state.userInfo.userId,
  };
};
export default connect(mapStateToProps)(InfoContainer);
