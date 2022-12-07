import { useState } from "react";
import HeaderContainer from "./Header/Container";
import MainComponent from "./Main";

function App() {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <HeaderContainer
        isClick={isClick}
        setIsClick={setIsClick}
      ></HeaderContainer>
      <MainComponent isClick={isClick} setIsClick={setIsClick}></MainComponent>
    </>
  );
}

export default App;
