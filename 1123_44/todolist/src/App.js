import "./App.css";
import Title from "./components/Title";
import Addtask from "./components/Addtask";
import Todoboard from "./components/Todoboard";

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
