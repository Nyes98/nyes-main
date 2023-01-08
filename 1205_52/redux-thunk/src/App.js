// redux-thunk 의 역할
// - 비동기 처리를 사용하기 위해서 미들웨어로 쓰인다.

import { useSelector, useDispatch } from "react-redux";

import { action } from "./modules/count";
import promiseTime from "./modules/promiseTime";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(action.increment());
        }}
      >
        (구)+
      </button>
      <button
        onClick={() => {
          dispatch(action.decrement());
        }}
      >
        (구)-
      </button>

      <button
        onClick={() => {
          promiseTime(action.increment(), 1000).then((data) => {
            // then메서드를 사용하여 매개변수로 콜백함수를 전달한다.
            // 전달된 콜백함수는 매개변수로 Promise의 resolve 결과를 받는다.
            // promiseTime.js의 6번째 줄에서 전달하는 type 매개변수를 여기서 data 매개변수로 받는다.
            dispatch(data);
          });
        }}
      >
        (promise) +
      </button>
      <button
        onClick={async () => {
          const temp = await promiseTime(action.decrement(), 1000);
          // 1초간 기다린 후에 액션을 받아서
          dispatch(temp);
          // dispatch에 액션을 전달한다.
          // const temp = dispatch(await promiseTime(action.decrement(),1000)) << 와 같이 작성하면 오류 발생, dispact에 전달하는 매개변수는 기본적으로 객체 형식의 action만 가능하다.
          // action에서 비동기 처리를 할 수 있도록 중간 과정을 추가하는 것이 redux-thunk이다.
          // 중간 과정으로 Promise, axios 등을 처리할 수 있도록 async, await를 사용할 수 있게 추가한다.
        }}
      >
        (promise) -
      </button>

      <button
        onClick={() => {
          // 1. 사용자가 클릭한다. 클릭 시 dispatch를 호출하여 action의 asyncIncrement 메서드를 호출한다. 해당 메서드는 함수를 반환(return)한다.
          console.log("1. Button Click");
          dispatch(action.asyncIncrement());
        }}
      >
        (thunk)+
      </button>
      <button
        onClick={() => {
          dispatch(action.asyncDecrement());
        }}
      >
        (thunk)-
      </button>
    </div>
  );
}

export default App;