import { useEffect, useState } from "react";

const reducer = (state = "", action) => {
  console.log(state, action);

  // let tempArr = [...state];
  // tempArr.pop();
  // return tempArr;

  // return [...state].map((item)=>item === payload.input ? undefined : item);

  // return [...state.slice(0, tempNum ) , ...state.slice(tempNum+1)]
  const { type, payload } = action;

  switch (type) {
    case "arr/add":
      return [...state, payload.input];

    case "arr/del":
      let tempNum = 0;
      [...state].map((item, index) =>
        item === payload.input ? (tempNum = index) : item
      );
      return [...state.slice(0, tempNum), ...state.slice(tempNum + 1)];

    case "arr/edit":
      return [...state].map((item) =>
        item === payload.input ? payload.input1 : item
      );
    // return [
    //   ...state.slice(0, tempNum1),
    //   payload.input1,
    //   ...state.slice(tempNum1 + 1),
    // ];
    default:
      return state;
  }
};

export default reducer;
