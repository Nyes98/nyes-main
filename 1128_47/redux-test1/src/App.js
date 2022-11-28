import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { useState } from "react";

function App() {
  const [inputCount, setInput] = useState(0);
  const [inputText, setText] = useState("");
  const [inputText1, setText1] = useState("");
  const [trash, setTrash] = useState(1);

  return (
    <div className="App">
      <div>{store.getState().count1}</div>
      <div>{store.getState().count2}</div>
      <div>
        {store.getState().arr.map((item, index) => (
          <div key={index}>{item} </div>
        ))}
      </div>

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
          store.dispatch({
            type: "count1/plus",
            payload: { input: inputCount },
          });
          setTrash(-trash);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count1/minus",
            payload: { input: inputCount },
          });
          setTrash(-trash);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count2/plus",
          });
          setTrash(-trash);
        }}
      >
        2+
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count2/minus",
          });
          setTrash(-trash);
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
            setTrash(-trash);
          }}
        >
          추가
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: "arr/del", payload: { input: inputText } });
            setTrash(-trash);
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
              setTrash(-trash);
            }}
          >
            수정
          </button>
        </div>
      </div>
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
