import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import Addcontainer from "./Add/Container";
import ListContainer from "./List/Container";
import BoardContainer from "./Board/Container";
import EditContainer from "./Edit/Container";

const FreeBoard = () => {
  return (
    <FreeboardBox>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Addcontainer />
              <ListContainer />
            </>
          }
        />
        <Route path="/board/:id" element={<BoardContainer />} />
        <Route path="/edit/:id" element={<EditContainer />} />
      </Routes>
    </FreeboardBox>
  );
};

export default FreeBoard;

const FreeboardBox = styled.div``;
