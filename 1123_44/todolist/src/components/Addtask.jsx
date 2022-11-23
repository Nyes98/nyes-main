import styled from "styled-components";
import { useState } from "react";
import Todoboard from "./Todoboard";

export default function Addtask() {
  const [dolist, setDolist] = useState("");
  const [boardlist, setBoardlist] = useState([]);

  function addlist() {
    setBoardlist([...boardlist, { dolist }]);
    console.log(boardlist);
  }
  return (
    <AddtaskBox>
      <input
        type={"text"}
        onInput={(e) => {
          setDolist(e.target.value);
          console.log(dolist);
        }}
      ></input>
      <button
        onClick={() => {
          addlist();
        }}
      >
        Add Task
      </button>
      <Todoboard boardlist={boardlist} />
    </AddtaskBox>
  );
}

const AddtaskBox = styled.div``;
