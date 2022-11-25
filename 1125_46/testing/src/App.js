import "./App.css";
import PropsTest from "./components/PropsTest";
import ContextTest from "./components/ContextTest";
import ReducerTest from "./components/ReducerTest.jsx";
import Office from "./components/Office";
import ReducerTest2 from "./components/ReducerTest2";

function App() {
  return (
    <div className="App">
      <PropsTest />
      <ContextTest />
      <ReducerTest2 />
      <ReducerTest>
        <Office />
      </ReducerTest>
    </div>
  );
}

export default App;
