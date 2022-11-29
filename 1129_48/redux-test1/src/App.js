import "./App.css";
import store from "./store";
import { useState } from "react";
import { COUNT1, actions as count1Actions } from "./action/count1";
import { COUNT2, actions as count2Actions } from "./action/count2";

function App() {
  const [inputCount, setInput] = useState(0);
  const [inputText, setText] = useState("");
  const [inputText1, setText1] = useState("");
  const [_, setRender] = useState(false);
  // '_' 란 보통 사용하지 않을 변수의 이름으로 설정한다. (일종의 관례)
  // '_'(lowbar) 라는 라이브러리도 있다. << 주의사항

  return (
    <div className="App">
      <div>{store.getState().count1}</div>
      {/* store.getState()는 store를 가져온다. */}
      {/* store.getState()로 받아온 store의 객체는 React의 랜더링에 관여하지 않는다. 그래서 Class 컴포넌트에서는 forceupdate()를 사용해서 강제로 랜더링을 해준다. */}
      {/* Function 컴포넌트에서는 state를 하나 만들어서 setState를 통해 랜더링을 강제한다. */}
      <div>{store.getState().count2}</div>

      <input
        value={inputCount}
        type="number"
        onInput={(e) => {
          setInput(+e.target.value);
        }}
        placeholder="number"
      ></input>
      <button
        onClick={() => {
          store.dispatch(count1Actions.plus(inputCount));
          setRender((state) => !state);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch(count1Actions.minus(inputCount));
          setRender((state) => !state);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          store.dispatch(count2Actions.plus());
          setRender((state) => !state);
        }}
      >
        2+
      </button>
      <button
        onClick={() => {
          store.dispatch(count2Actions.minus());
          setRender((state) => !state);
        }}
      >
        2-
      </button>
      <div>
        <input
          value={inputText}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            store.dispatch({
              type: "arr/add",
              payload: { input: inputText },
            });
            setRender((state) => !state);
          }}
        >
          추가
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: "arr/del", payload: { input: inputText } });
            setRender((state) => !state);
          }}
        >
          삭제
        </button>
        <div>
          <input
            onInput={(e) => {
              setText1(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              store.dispatch({
                type: "arr/edit",
                payload: { input: inputText, input1: inputText1 },
              });
              setRender((state) => !state);
            }}
          >
            수정
          </button>
        </div>
        <div>
          {store.getState().arr.map((item, index) => (
            <div key={index}>{item} </div>
          ))}
        </div>
      </div>
      {/* <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header> */}
    </div>
  );
}

export default App;
