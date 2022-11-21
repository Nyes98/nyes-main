import styled from "styled-components";
import BoardBox from "./components/BoardBox";
import UserBox from "./components/UserBox";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  return (
    <AppBox>
      <UserBox users={users} setUsers={setUsers} />
      <BoardBox users={users} setUsers={setUsers} />
    </AppBox>
  );
}

const AppBox = styled.div``;
export default App;
