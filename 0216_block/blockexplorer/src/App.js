import BlockInfoContainer from "./components/blockInfo/Container";
import FooterContainer from "./components/footer/Container";
import HeaderContainer from "./components/header/Container";
import MainContainer from "./components/main/Container";
import { Route, Routes, Link } from "react-router-dom";
import TxInfoContainer from "./components/txInfo/Container";
import AllBlocksContainer from "./components/allBlocks/Container";

function App() {
  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>

      <Routes>
        <Route path="/" element={<MainContainer></MainContainer>}></Route>
        <Route
          path="/blockInfo/:blockNumber"
          element={<BlockInfoContainer></BlockInfoContainer>}
        ></Route>
        <Route
          path="/txInfo/:txHash"
          element={<TxInfoContainer></TxInfoContainer>}
        ></Route>
        <Route
          path="/allBlocks"
          element={<AllBlocksContainer></AllBlocksContainer>}
        ></Route>
      </Routes>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
