import styled from "styled-components";
import store from "../../../modules/store";
import AddComponent from "./Component";
import { action } from "../../../modules/board";

const AddContainer = () => {
  const onClick = (title, contents, curuser, nowdate) => {
    store.dispatch(action.add(title, contents, curuser, nowdate));
  };
  return <AddComponent onClick={onClick} />;
};

export default AddContainer;
