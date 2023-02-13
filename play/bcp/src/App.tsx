import React, { useEffect } from "react";
import "./App.css";
import { useWeb3 } from "./hooks/useWeb3";

function App() {
  useWeb3();
  return (
    <div className="App">
      <h1>Hello CRA-TS!</h1>
      <div>
        <h3>Accounts Info</h3>
        <ul>
          <li>Account : kong</li>
          <li>Balance : 0 ETH</li>
        </ul>
      </div>
      <div>
        <h3>Transaction</h3>
        <form action="">
          <ul>
            <li>
              <input type="text" id="received" placeholder="받을 사람" />
            </li>
            <li>
              <input type="text" id="amount" placeholder="보낼 금액" />
            </li>
            <li>
              <button type="submit">전송!!</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;
