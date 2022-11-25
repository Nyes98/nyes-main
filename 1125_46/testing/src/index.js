import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// StrictMode
// - 안전하지 않은 생명 주기 메서드(ComponentDidMount, ComponentDidUpdate 등)를 체크해서 알려준다.
//    ㄴ componentWillMount << 과거의 잔재. 이런 것들을 확인해준다.
// - ref에 대한 경고를 해준다.
//    ㄴ 스트링 형식의 ref가 있었다. << 과거의 잔재
// - 메모리 누수 등의 부작용 검사를 해준다.
//    ㄴ 메모리가 삭제되지 않는 형상(메모리 누수) 등의 문제가 발생했을 때 알려준다.
// - 레거시 Context API에 대한 검사를 해준다.
//    ㄴ Context API만 남았으며 레거시 Context API가 없다. << 과거의 잔재
// 교수님 개인적 생각으론 지금은 없어도 상관 없다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
