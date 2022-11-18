// import logo from "./logo.svg";
// import "./App.css";
// import ClassComp from "./components/ClassComp";
// import { useState } from "react";

// function App() {
//   const [isMount, setMount] = useState(true);
//   function changeMount() {
//     setMount(!isMount);
//   }
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App" onClick={changeMount}>
//       {isMount ? <ClassComp count={count} setCount={setCount} /> : <></>}
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

import React from "react";
import "./App.css";
import BtnComp from "./components/BtnComp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: undefined,
      secondNum: undefined,
      result: undefined,
    };
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  selNum(num) {
    if (this.state.firstNum == undefined) {
      this.setState({ ...this.state, firstNum: num });
      console.log(this.state);
    } else if (this.state.secondNum == undefined) {
      this.setState({ ...this.state, secondNum: num });
    }
  }

  render() {
    // 클래스 컴포넌트의 필수이다. (Virtual DOM에 그려지는 HTML 태그 문법)
    // 클래스 컴포넌트에서만 render()사용 / 함수형 컴포넌트에서는 return으로 바로 사용
    return (
      <div className="calculator">
        <div className="row">
          <BtnComp
            item="7"
            // onClick={function (e) {
            //   if (this.state.firstNum == undefined) {
            //     this.setState({ ...this.state, firstNum: 7 });
            //     console.log(this.state);
            //   } else if (this.state.secondNum == undefined) {
            //     this.setState({ ...this.state, secondNum: 7 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp item="8" onClick={this.selNum.bind(this)} />
          <BtnComp item="9" onClick={this.selNum.bind(this)} />
          <BtnComp
            item="+"
            onClick={function (e) {
              if (
                this.state.firstNum != undefined &&
                this.state.secondNum != undefined
              ) {
                this.setState({
                  ...this.state,
                  result: this.state.firstNum + this.state.secondNum,
                  firstNum: undefined,
                  secondNum: undefined,
                });
              }
            }.bind(this)}
          />
        </div>
        <div className="row">
          <BtnComp item="4" onClick={this.selNum.bind(this)} />
          <BtnComp item="5" onClick={this.selNum.bind(this)} />
          <BtnComp item="6" onClick={this.selNum.bind(this)} />
          <BtnComp
            item="/"
            onClick={function (e) {
              if (
                this.state.firstNum != undefined &&
                this.state.secondNum != undefined
              ) {
                this.setState({
                  ...this.state,
                  result: (this.state.firstNum / this.state.secondNum).toFixed(
                    3
                  ),
                  firstNum: undefined,
                  secondNum: undefined,
                });
              }
            }.bind(this)}
          />
        </div>
        <div className="row">
          <BtnComp item="1" onClick={this.selNum.bind(this)} />
          <BtnComp item="2" onClick={this.selNum.bind(this)} />
          <BtnComp item="3" onClick={this.selNum.bind(this)} />
          <BtnComp
            item="*"
            onClick={function (e) {
              if (
                this.state.firstNum != undefined &&
                this.state.secondNum != undefined
              ) {
                this.setState({
                  ...this.state,
                  result: this.state.firstNum * this.state.secondNum,
                  firstNum: undefined,
                  secondNum: undefined,
                });
              }
            }.bind(this)}
          />
        </div>
        <div className="row">
          <BtnComp item={this.state.result} />
          <BtnComp item="0" onClick={this.selNum.bind(this)} />
          <BtnComp
            item="C"
            onClick={function (e) {
              {
                this.setState({
                  ...this.state,
                  firstNum: undefined,
                  secondNum: undefined,
                  result: undefined,
                });
              }
            }.bind(this)}
          />
          <BtnComp
            item="-"
            onClick={function (e) {
              if (
                this.state.firstNum != undefined &&
                this.state.secondNum != undefined
              ) {
                this.setState({
                  ...this.state,
                  result: this.state.firstNum - this.state.secondNum,
                  firstNum: undefined,
                  secondNum: undefined,
                });
              }
            }.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
