import logo from "./logo.svg"; // 이미지를 불러온다.
import "./App.css"; // CSS 파일을 불러온다.
import Test from "./Test";

function App() {
  // 파스칼 표기법을 사용한다, Component이다.
  return (
    <div className="App">
      <Test test1="게시판 입">니다</Test>
      {/* <Test test="테스트 중입니다." Component의 예시이다. */}
      {/* react 에서는 class가 아닌 className 이라고 한다 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
