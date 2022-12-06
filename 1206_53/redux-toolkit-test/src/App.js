import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { action, counterThunk } from "./modules/couter";

function App() {
  const dispatch = useDispatch();
  const cococo = useSelector((state) => state.count1.value);
  const [inputCount, setCount] = useState(0);
  const isLoading = useSelector((state) => state.count1.isLoading);
  const [input, setInput] = useState(0);
  return (
    <div>
      <div>{cococo}</div>
      {!isLoading || <div>Now Loading</div>}
      <div>
        <input
          type={"number"}
          value={input}
          onInput={({ target: { value } }) => {
            setInput(+value);
            // setInput(value) 는 string으로 들어가기 때문에 다음 +,- 버튼을 누르면 1이 더해지는게 아니라 붙어져서 나온다. 그래서 +로 숫자로만들어준다.
          }}
          placeholder={"input Count"}
        />{" "}
        <button
          onClick={() => {
            dispatch(action.input({ count: input })); // 여러개를 보낼때
            // dispatch(action.input(input )); // 한개만 보낼때
            // input 메서드에 전달되는 input 매개변수는 payload 자체이다.
          }}
        >
          input Count
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(action.increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(action.decrement());
        }}
      >
        -
      </button>
      <div>
        <input
          type={"number"}
          value={inputCount}
          onInput={(e) => {
            setCount(e.target.value);
          }}
          placeholder={"count"}
        />

        <button
          onClick={() => {
            dispatch(counterThunk(inputCount));
            // counter에서 createAsyncThunk로 정의한 변수는 action함수처럼 사용할 수 있다.
          }}
        >
          set Count
        </button>
      </div>
    </div>
  );
}

export default App;
