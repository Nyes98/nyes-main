export const COUNT2 = {
  PLUS: "count2/plus",
  MINUS: "count2/minus",
};

const plus = (input) => ({
  type: COUNT2.PLUS,
  payload: { input },
});

const minus = (input) => ({
  type: COUNT2.MINUS,
  payload: { input },
});
export const actions = { plus, minus };
