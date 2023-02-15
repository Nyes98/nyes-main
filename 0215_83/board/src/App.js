import { Route, Routes, Link } from "react-router-dom";
import AddBoardContainer from "./containers/AddBoard";
import styled from "styled-components";
import { BoardContainer } from "./containers/Board";
import RegistContainer from "./containers/Regist";
import LoginContainer from "./containers/Login";
import { useState } from "react";
import { UserContainer } from "./containers/User";

function App() {
  const [user, setUser] = useState({ name: "" });
  return (
    <div className="App">
      <LinkBox>
        <Link to={"/"}>Home</Link>
        {user.name ? (
          <>
            {" "}
            | <Link to={"/new"}>new Board</Link>
          </>
        ) : (
          <>
            {" "}
            | <Link to={"/user/sign"}>Sign In</Link> |
            <Link to={"/user/in"}> Log In</Link>
          </>
        )}
      </LinkBox>
      {user.name && (
        <UserContainer userName={user.name} setUser={setUser}></UserContainer>
      )}
      <Routes>
        <Route path="/" element={<BoardContainer />}></Route>
        <Route
          path="/new"
          element={<AddBoardContainer userName={user.name}></AddBoardContainer>}
        />
        <Route
          path="/user/sign"
          element={<RegistContainer></RegistContainer>}
        />
        <Route
          path="/user/in"
          element={<LoginContainer setUser={setUser}></LoginContainer>}
        />
      </Routes>
    </div>
  );
}

export default App;

const LinkBox = styled.div`
  margin: auto;
  width: 30%;
`;
