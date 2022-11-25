import { useState } from "react";
import styled from "styled-components";
import Todo from "./components/Todo";
import ReLiLo from "./components/User";

export default function App() {
  const [user, setUser] = useState(""); // 오늘의 과제
  const [users, setUsers] = useState([]);

  return (
    <Appbox>
      <ReLiLo
        users={users}
        setUsers={setUsers}
        user={user}
        setUser={setUser}
      ></ReLiLo>
      <Todo user={user}></Todo>
    </Appbox>
  );
}

const Appbox = styled.div`
  max-width: 1300px;
  margin: auto;

  &.test {
    background-color: gray;
    height: 100px;
  }

  @media only screen and (max-width: 1400px) {
    max-width: 1000px;
  }

  @media only screen and (max-width: 1100px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 700px) {
    max-width: 300px;
  }
`;
