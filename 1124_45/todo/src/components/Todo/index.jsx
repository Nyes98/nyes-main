import styled from "styled-components";
import { TodoBtn } from "../setting";
import { Link, Routes, Route } from "react-router-dom";
import List from "./List";
import TodoModal from "./TodoModal";
import { useState } from "react";

// export시 default를 쓰지 않으면 {}를 사용해 구조분해할당 형식으로 가져와야한다.

export default function Todo({ user, users }) {
  const [list, setList] = useState([
    {
      taskName: "11",
      status: 0,
      writer: "테스트1",
    },
    {
      taskName: "2222",
      status: 1,
      writer: "테스트2",
    },
    {
      taskName: "33333",
      status: 2,
      writer: "테스트3",
    },
  ]);
  return (
    <div>
      <h1>Todo List</h1>
      <AddBtnBox>
        <Link to={"add"}>
          <TodoBtn className="sky">Add Task </TodoBtn>
        </Link>
      </AddBtnBox>
      <List list={list} setList={setList} users={users} user={user} />
      <Routes>
        <Route
          path={"add"}
          element={<TodoModal setList={setList} func={"Add"} user={user} />}
        ></Route>
        <Route
          path={"edit"}
          element={<TodoModal setList={setList} func={"Edit"} />}
        ></Route>
      </Routes>
    </div>
  );
}

const AddBtnBox = styled.div`
  text-align: right;
`;
