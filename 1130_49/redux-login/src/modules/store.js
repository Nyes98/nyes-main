import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialize as userDBIni, reducer as userDBReducer } from "./userDB";
import {
  initialize as userInfoIni,
  reducer as userInfoReducer,
} from "./userInfo";

const store = createStore(
  combineReducers({ userInfo: userInfoReducer, userDB: userDBReducer }),
  { userInfo: userInfoIni, userDB: userDBIni },
  composeWithDevTools()
);

export default store;
