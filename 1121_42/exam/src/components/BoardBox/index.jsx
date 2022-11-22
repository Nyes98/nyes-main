import styled from "styled-components";
import AddBoard from "./AddBoard";
import { useState } from "react";
import List from "./List";
export default function BoardBox({ users, user }) {
  const [addinfo, setAddinfo] = useState([]);
  return (
    <BoardStyle>
      <AddBoard addinfo={addinfo} setAddinfo={setAddinfo} user={user} />
      <List addinfo={addinfo}></List>
    </BoardStyle>
  );
}

const BoardStyle = styled.div``;
