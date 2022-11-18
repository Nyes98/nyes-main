import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./component/list";

function App() {
  const [boomup, setBoomup] = useState("0");
  const [boomup2, setBoomup2] = useState("0");
  const [boomup3, setBoomup3] = useState("0");
  const [boomdown, setBoomdown] = useState("0");
  const [boomdown2, setBoomdown2] = useState("0");
  const [boomdown3, setBoomdown3] = useState("0");
  const [title, setTitle] = useState(["내가", "망할", "것같아"]);

  return (
    <>
      <div className="List">
        <h3>
          {List.title[0]}{" "}
          <span
            onClick={() => {
              setBoomup(+boomup + 1);
            }}
          >
            👍
          </span>
          {boomup}{" "}
          <span
            onClick={() => {
              setBoomdown(+boomdown + 1);
            }}
          >
            👎
          </span>
          {boomdown}
        </h3>
        <p>11월 24일 발행</p>
        <hr />
      </div>
      <div className="List">
        <h3>
          {title[1]}{" "}
          <span
            onClick={() => {
              setBoomup2(+boomup2 + 1);
            }}
          >
            👍
          </span>
          {boomup2}{" "}
          <span
            onClick={() => {
              setBoomdown2(+boomdown2 + 1);
            }}
          >
            👎
          </span>
          {boomdown2}
        </h3>
        <p>11월 24일 발행</p>
        <hr />
      </div>
      <div className="List">
        <h3>
          {title[2]}{" "}
          <span
            onClick={() => {
              setBoomup3(+boomup3 + 1);
            }}
          >
            👍
          </span>
          {boomup3}{" "}
          <span
            onClick={() => {
              setBoomdown3(+boomdown3 + 1);
            }}
          >
            👎
          </span>
          {boomdown3}
        </h3>
        <p>11월 24일 발행</p>
        <hr />
      </div>
    </>
  );
}

export default App;
