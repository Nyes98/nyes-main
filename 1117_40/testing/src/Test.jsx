import { createElement } from "react";
import { useState } from "react";

export default function Test({ test1, children }) {
  //   let count = 0;
  const [tempList, settempList] = useState([]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  //   props는 상위 컴포넌트에서 설정한 값이다.
  //   props.children은 상위 컴포넌트에서 해당 컴포넌트의 자식으로 설정된 값
  const tempArr = [];
  const arr = [
    { title: "테스트 중입니다.", text: "아몰랑", userName: "kjk" },
    { title: "내가", text: "망할", userName: "것같아" },
  ];

  return (
    <>
      <div style={{ fontSize: "30px" }}>
        {test1}
        {children}
      </div>
      <div>
        <input
          onChange={onChangeTitle}
          style={{ width: "225px", marginBottom: "10px" }}
          placeholder="제목"
        />
        <textarea
          onChange={onChangeContents}
          cols="30"
          rows="10"
          style={{ resize: "none" }}
          placeholder="내용"
        ></textarea>
      </div>
      {/* <ul>
        {arr.map((item, index) => {
          return <li key={`test-${index}`}>{item.userName}</li>;
        })}
      </ul>
      <ul>
        {tempArr.map((item, index) => {
          return <li key={`test-${index}`}>{item}</li>;
        })}
      </ul> */}
      {/* <button
        onClick={function () {
          console.log(count1);
          setCount1(count1 + 1);
        }}
      >
        {count1}
      </button> */}
      <button
        onClick={function (e) {
          settempList([
            ...tempList,
            {
              title: title,
              contents: contents,
            },
          ]);
          console.log(tempList);
          // console.log(tempList[0].title, tempList[0].contents);
        }}
      >
        등록하기
      </button>

      <ul>
        {tempList.map((item, index) => {
          console.log(item);
          return (
            <li key={`test-${index}`}>
              제목 : {item.title} 내용 : {item.contents}
            </li>
          );
        })}
      </ul>
    </>

    //   HTML 태그의 형제 방식으로 return하지 못한다. << 하나로 구조를 묶어서 return 해야한다.
    //   HTML 문법 내에 Javascript 변수 / 함수 등등을 사용할 경우 {}로 묶어준다.
  );
}
// Component : 여러개의 함수들을 모아 하나의 특정한 기능을 수행할 수 있도록 구성한 작은 기능적 단위
// React는 View를 위한 라이브러리 >> Front End에 보여주기 위한 라이브러리 >> 랜더링이 주된 기능이다. >> 기능은 div 등등의 Element 구조로 많이 나뉘어진다.
