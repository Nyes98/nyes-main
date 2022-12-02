const TYPE = {
  REGIST: "userDB/regist",
};

const regist = (userId, userPw, userName) => {
  return {
    type: TYPE.REGIST,
    payload: { userId, userPw, userName },
  };
};

export const action = { regist };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.REGIST:
      if (state.find((item) => item.userId === payload.userId)) return state;
      else if (state.find((item) => item.userName === payload.userName))
        return state;
      else return [...state, payload];

    default:
      return state;
  }
};
