// useReducer << reducer를 사용하는 Hook
// reducer가 무엇인가? << 변수를 정의함에 있어서 선행작업 정도 되는 함수
// state / reducer / action / dispatch
// state : 상태값이다.
// action : 요청이다. (보통 함수가 아닌 객체이다.)
// dispatch : 요청을 받는 함수이다.
// reducer : 요청을 실행하는 함수이다.

import { useReducer, createContext } from "react";
// const cost = {"주민등록등본" : 500, }
export const OfficeContext = createContext();

const reducer = (state, action) => {
  // reducer : 작업해서 state에 저장
  console.log(state);
  console.log(action);
  //   const curCost = cost["주민등록등본"];
  switch (action.type) {
    case "주민등록등본":
      if (action.payload.pay.balance < 500) return "돈이 부족해";
      action.payload.pay.setBalance(action.payload.pay.balance - 500);
      return "주민등록등본이 발급되었습니다.";

    case "주민등록초본":
      if (action.payload.pay.balance < 300) return "돈이 부족해";
      action.payload.pay.setBalance(action.payload.pay.balance - 300);

      return "주민등록초본이 발급되었습니다.";

    case "건축물대장":
      if (action.payload.pay.balance < 200) return "돈이 부족해";
      action.payload.pay.setBalance(action.payload.pay.balance - 200);
      return "건축물대장이 발급되었습니다.";

    case "지방세납세증명":
      if (action.payload.pay.balance < 700) return "돈이 부족해";
      action.payload.pay.setBalance(action.payload.pay.balance - 700);
      return "지방세납세증명이 발급되었습니다.";

    case "운전면허 정보":
      if (action.payload.pay.balance < 100) return "돈이 부족해";
      action.payload.pay.setBalance(action.payload.pay.balance - 100);
      return "운전면허 정보가 발급되었습니다.";

    case "전입신고":
      if (action.payload.pay.balance < 900) return "돈이 부족해";
      action.payload.pay.setBalance(action.payload.pay.balance - 900);
      return "전입신고가 완료되었습니다.";
    case "코로나19 격리통지서":
      if (action.payload.pay.balance < 1900) return "돈이 부족해";
      action.payload.pay.setBalance(action.payload.pay.balance - 1900);
      return "코로나19 격리통지서가 발급되었습니다.";
    case "병적증명서":
      if (action.payload.pay.balance < 4800) return "돈이 부족해";
      action.payload.pay.setBalance(action.payload.pay.balance - 4800);
      return "병적증명서가 발급되었습니다.";
    default:
      return "요청이 없습니다.";
  }
};

export default function ReducerTest({ children }) {
  console.log(children);
  // children은 컴포넌트의 자식 컴포넌트(엘리먼트)이다.
  // 즉, App.js의 <ReducerTest> 안에있는 <Office>가 된다.
  const [result, requestDispatch] = useReducer(reducer, "요청이 없습니다.");
  //   const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <OfficeContext.Provider value={{ result, requestDispatch }}>
      {children}
    </OfficeContext.Provider>
  );
}
