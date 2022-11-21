import styled from "styled-components";
import Regist from "./Regist";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import List from "../BoardBox/List";
import { useEffect, useState } from "react";

export default function UserBox({ users, setUsers, user, setUser }) {
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserStyled>
      <Regist users={users} setUsers={setUsers} />
      <LogIn users={users} setUser={setUser} />
      <LogOut user={user} setUser={setUser} />
    </UserStyled>
  );
}

const UserStyled = styled.div`
  border: 1px solid red;
  height: 200px;
`;
