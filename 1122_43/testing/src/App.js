// React의 구조
// Component란? << 기능적으로 최소 단위
// - 기능을 포함하는 HTML 구조 단위
// - 컴포넌트는 항상 HTML 구조를 return 해야한다.
// - 함수형에서는 함수 자체가 return 한다.
// - 클래스형에서는 render 메서드에서 return 한다.
// 컴포넌트(root)
// - App
// - UserBox
//  - Regist
//  - LogIn
//  - LogOut
// - BoardBox

import React, { useState } from "react";
import "./App.css";

function App() {
  let test = "테스팅";
  let bool = true;
  let srt = "문자열";
  let arr = [1, 2, 3, 4];
  let obj = { name: "객체" };
  let nul = null;
  let und = undefined;
  let arrDiv = [
    <div key={0}>1</div>,
    <div key={1}>2</div>,
    <div key={2}>3</div>,
    <div key={3}>4</div>,
  ];

  function arrFunc(arr) {
    const tempArr = [];
    arr.forEach((item, index) => {
      tempArr.push(<div key={index}>{item}</div>);
    });
    // forEach는 반환 값이 없기 때문에 내부에서 돌고 없어진다. 그래서 다른 외부 배열에 값을 넣어줘야한다.
    return tempArr;
  }

  // 값을 내보낸다, 가져온다 라고 얘기할 수 있는 것(변수, 함수)들과 if, for, while의 차이
  // if 조건문, for / while 반복문 << 문장일 뿐이다.

  const [num, setNum] = useState("1");

  function testing() {
    return "함수 테스팅";
  }

  return (
    <div className="App">
      <App1 />
      {/* <div onClick={increase}>{test}</div> */}
      <div>{num}</div>
      <div>{bool}</div>
      <div>{srt}</div>
      <div>{arr}</div>
      <div>{obj.name}</div>
      <div>{nul}</div>
      <div>{und}</div>
      <div>{bool ? "true" : "false"}</div>
      <div>{testing()}</div>
      <div>
        {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div> */}
        {arrDiv}
        {arrFunc(arr)}
        {arr.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      {/* {}는 값을 가져야만 출력할 수 있다.
      단, Object의 경우엔 출력 방법이 모호하기 때문에 출력하지 못한다. */}
    </div>
  );
  // HTML 태그 내에서 {}를 사용하여 변수를 출력할 수 있다.
}

export default App;

class App1 extends React.Component {
  // 우리가 컴포넌트를 만들 때 컴포넌트의 모든 코드를 알수없다. 그렇기 때문에 상속을 받도록 한다.
  // 여기서 정의한 것은 this의 프로퍼티로 추가된다.
  constructor(props) {
    // 클래스를 생성할 때 실행되는 코드
    super(props);
    // 상속을 받았을 때 부모의 해당 메서드를 실행한다. << 부모의 constructor 실행

    console.log("constructor");
    console.log(this);
    console.log(this.num);
    this.state = { name: "상태값", num: 0, classNames: ["app3"] };
  }

  divRef = React.createRef();
  // 컴포넌트가 아닌 엘리먼트에 접근하고 싶을 때 사용한다.
  // 접근해서 데이터를 바꾸는 것은 권장하지 않으며 잘 사용하지 않는다.

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log(this);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log(this);
  }

  increaseFunc() {
    console.log(this);
    // 여기서의 this는 increaseFunc 메서드이다.
    // 호출하는 곳에서 bind 메서드로 this를 App1로 전달해야한다.
  }

  increase = () => {
    // this.num = this.num + 1;
    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num);

    // 여기서의 this는 App1이 된다.
    // 호출하는 곳에서 bind 메서드를 적지 않아도 된다.
  };

  changeName = () => {
    // this.state.name = this.state.name + "1"; << 권장하지 않는다 (setState를 사용해서 변경할것을 권장)
    // '상태값' + '1' => '상태값1'
    this.setState({ name: this.state.name + "1" });
    console.log(this.state.name);
    console.log(this.divRef.current.div);
  };

  changeClass = () => {
    if (this.state.classNames.indexOf("app4") === -1)
      this.setState({ classNames: [...this.state.classNames, "app4"] });
    else this.setState({ classNames: [...this.state.classNames.slice(0, 1)] });
  };

  render() {
    console.log("render");
    console.log(this);
    return (
      <>
        <div onClick={this.increaseFunc.bind(this)}>{this.state.num}</div>
        <div onClick={this.increase}>{this.state.num}</div>
        <div ref={this.divRef} onClick={this.changeName}>
          {this.state.name}
        </div>
        <div
          className={this.state.classNames.join(" ")}
          onClick={this.changeClass}
        >
          클래스 이름 설정 테스트중
        </div>
      </>
    );
  }
}
