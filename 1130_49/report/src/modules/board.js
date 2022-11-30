const TYPE = {
  ADD: "board/add",
};

const add = (title, contents, curuser, nowdate) => {
  return {
    type: TYPE.ADD,
    payload: { title, contents, curuser, nowdate },
  };
};

export const action = { add };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.ADD:
      return [...state, payload];
    default:
      return state;
  }
};
