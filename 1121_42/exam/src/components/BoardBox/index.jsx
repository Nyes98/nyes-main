import styled from "styled-components";
import AddBoard from "./AddBoard";
import List from "./List";
import { useEffect, useState } from "react";

export default function BoardBox({ users, setUsers, user, setUser }) {
  const [addinfo, setAddinfo] = useState([]);
  return (
    <BoardStyle>
      <AddBoard
        addinfo={addinfo}
        setAddinfo={setAddinfo}
        user={user}
        setUser={setUser}
      />
    </BoardStyle>
  );
}

const BoardStyle = styled.div``;
