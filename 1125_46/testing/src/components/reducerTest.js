export function reducer(state, action) {
  console.log(action);
  console.log(action.type);
  switch (action.type) {
    case "plus":
      return state + 1;
    case "minus":
      return state - 1;
    case "divide":
      return state / 10;
    case "multi":
      return state * 10;

    default:
      return 0;
  }
}
