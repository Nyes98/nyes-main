import styled from "styled-components";
import { useState } from "react";

export default function AddBoard({ addinfo, setAddinfo, user }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  function AddList() {
    console.log(user);
    setAddinfo([...addinfo, { title, contents, user }]);
  }

  return (
    <AddBoardBox>
      <input
        type={"text"}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="제목"
        value={title}
      />
      <textarea
        placeholder="내용"
        onInput={(e) => {
          setContents(e.target.value);
        }}
        value={contents}
        cols="30"
        rows="10"
      ></textarea>
      <button
        onClick={() => {
          AddList();
        }}
      >
        등록
      </button>
    </AddBoardBox>
  );
}

const AddBoardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;

  input {
    width: 300px;
    margin-bottom: 20px;
  }

  textarea {
    margin-bottom: 20px;

    resize: none;
  }
`;
