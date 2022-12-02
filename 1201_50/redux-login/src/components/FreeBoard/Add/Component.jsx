import { useState } from "react";
import styled from "styled-components";

const AddComponent = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  return (
    <AddBox>
      <input
        type={"text"}
        value={title}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
        placeholder={"title"}
      />
      <textarea
        value={text}
        onInput={(e) => {
          setText(e.target.value);
        }}
        placeholder={"text"}
      />
      <button
        onClick={() => {
          onClick(title, text);
        }}
      >
        Add Board
      </button>
    </AddBox>
  );
};
export default AddComponent;

const AddBox = styled.div`
  textarea {
    resize: none;
  }
`;
