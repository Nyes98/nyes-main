import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/board";
import AddComponent from "./Component";

const AddContainer = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userInfo.userName);
  // connect가 필요가 없다

  // Add에는 title,text,userName 가 필요하다. title, text는 매개변수로 받아오기때문에 userName만 찾아오면된다.(useSelector 사용)
  const onClick = (title, text) => {
    dispatch(action.add(title, text, userName));
  };
  return !userName || <AddComponent onClick={onClick} />;
};
export default AddContainer;
