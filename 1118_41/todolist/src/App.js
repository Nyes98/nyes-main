import "./App.css";
import React, { useState } from "react";
import TodoBoard from "./component/TodoBoard";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };
  return (
    <main>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />
    </main>
  );
}
