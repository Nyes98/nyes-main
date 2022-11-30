import { useState } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const AddComponent = ({ onClick, board, curuser }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <AddComBox>
      <div>
        <input
          type="text"
          placeholder="Title"
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          cols={"30"}
          rows={"10"}
          placeholder="Contents"
          onInput={(e) => {
            setContents(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (!curuser) return;
            let date = new Date();
            onClick(
              title,
              contents,
              curuser,
              date.toLocaleString("ko-kr").slice(6, 21)
            );
          }}
        >
          Add
        </button>
      </div>
      <div>{board}</div>
    </AddComBox>
  );
};

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    board: state.board.map((item, index) => (
      <div key={index} className="board-line">
        title : {state.board[index].title} | contents :{"          "}
        {state.board[index].contents} | writer : {state.board[index].curuser} |
        time : {state.board[index].nowdate}
      </div>
    )),
    curuser: state.userInfo.userName,
  };
};

export default connect(mapStateToProps)(AddComponent);

const AddComBox = styled.div`
  textarea {
    resize: none;
    padding: 10px;
  }
  input {
    padding: 10px;
    margin-bottom: 10px;
    width: 225px;
  }
  .board-line {
    border: 1px solid black;
    padding: 2px;
    margin 2px
  }
`;
