import { useState } from "react";
import { useContext } from "react";
import { OfficeContext } from "./ReducerTest.jsx";

export default function Office() {
  const { result, requestDispatch } = useContext(OfficeContext);
  const [balance, setBalance] = useState(10000);
  // 발급받을 때마다 돈이 줄어들도록
  // 발급 금액도 달라야한다.
  return (
    <>
      <div>현재 남은 돈 : {balance}</div>
      <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "주민등록등본",
            //   어떠한 작업을 할 것인가?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: { balance, setBalance },
            },
          });
        }}
      >
        주민등록등본 발급 : 500
      </div>
      <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "주민등록초본",
            //   어떠한 작업을 할 것인가?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: { balance, setBalance },
            },
          });
        }}
      >
        주민등록초본 발급 : 300
      </div>
      <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "건축물대장",
            //   어떠한 작업을 할 것인가?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: { balance, setBalance },
            },
          });
        }}
      >
        건축물대장 발급 : 200
      </div>
      <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "지방세납세증명",
            //   어떠한 작업을 할 것인가?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: { balance, setBalance },
            },
          });
        }}
      >
        지방세납세증명 발급 : 700
      </div>
      <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "운전면허 정보",
            //   어떠한 작업을 할 것인가?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: { balance, setBalance },
            },
          });
        }}
      >
        운전면허 정보 발급 : 100
      </div>
      <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "전입신고",
            //   어떠한 작업을 할 것인가?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: { balance, setBalance },
            },
          });
        }}
      >
        전입신고 발급 : 900
      </div>
      <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "코로나19 격리통지서",
            //   어떠한 작업을 할 것인가?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: { balance, setBalance },
            },
          });
        }}
      >
        코로나19 격리통지서 발급 : 1900
      </div>
      <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "병적증명서",
            //   어떠한 작업을 할 것인가?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: { balance, setBalance },
            },
          });
        }}
      >
        병적증명서 발급 : 4800
      </div>

      <div>{result}</div>
    </>
  );
}
