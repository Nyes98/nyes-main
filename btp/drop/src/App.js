import React from "react";
import "./App.css";
import Dropdown from "./components/Drowdown";
import { useState } from "react";

const App = (props) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  return (
    <div id="app">
      <button onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
        {dropdownVisibility ? "Close" : "Open"}
      </button>
      <Dropdown visibility={dropdownVisibility}>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </Dropdown>
    </div>
  );
};

export default App;
