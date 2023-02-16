import ImsiContainer from "./components/imsi/Container";
import HeaderContainer from "./components/header/Container";
import MainContainer from "./components/main/Container";

function App() {
  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <ImsiContainer></ImsiContainer>
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;
