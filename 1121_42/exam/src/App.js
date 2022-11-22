import styled from "styled-components";
import BoardBox from "./components/BoardBox";
import UserBox from "./components/UserBox";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  return (
    <AppBox>
      <UserBox
        users={users}
        setUsers={setUsers}
        user={user}
        setUser={setUser}
      />
      <BoardBox users={users} user={user} />
    </AppBox>
  );
}

const AppBox = styled.div``;
export default App;
