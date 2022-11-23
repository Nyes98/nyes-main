import "./App.css";
import Title from "./components/Title";
import Addtask from "./components/Addtask";

function App() {
  return (
    <div className="App">
      <Title />
      <Addtask />
      <Todoboard />
    </div>
  );
}

export default App;
