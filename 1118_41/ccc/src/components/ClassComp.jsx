import React from "react";

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    // Virtual DOM에 추가될 때 실행되는 함수
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    // state가 변경된 후에 실행되는 함수
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    // Virtual DOM에서 삭제될 때 실행되는 함수
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <>
        <div
          onClick={function (e) {
            e.stopPropagation();
            this.setState({ count: this.state.count + 1 });
          }.bind(this)}
        >
          {this.state.count}
        </div>
        <div
          onClick={function (e) {
            e.stopPropagation();
            this.props.setCount(this.props.count + 1);
          }.bind(this)}
        >
          {this.props.count}
        </div>
      </>
    );
  }
}

// yarn : React에 최적화하기 위해서 FaceBOok에서 만든 패키지 매니저, npm이랑 약간은 다르다
// 설치법 : npm i -g corepack
// yarn create react-app yarntest