import { legacy_createStore as createStore } from "redux";
//예승아 줄 그어지는거 불~편해서 지워놓았다. from 줄리엔강. 이거머임;

// createStore는 이름 그대로 store 만드는 함수, Deprecated 됐다.
//  - Deprecated : 중요도가 떨어져 더이상 사용되지 않고 앞으로는 사라지게 될 (컴퓨터 시스템 기능 등)
//  - ex) img 태그의 width 속성(attribute) << style로 사용해야 한다.
// createStore를 대신하는 함수가 @reduxjs/toolkit 라이브러리의 configureStore 메서드이다.
// createStore가 다시 사용되는 이유 : 수정해야할 기존의 코드들이 너무 많기 때문이다.
import { composeWithDevTools } from "redux-devtools-extension";
// 브라우저의 Redux DevTool과 연결해준다. 함수이다.

import reducer from "./reducer";

const store = createStore(
  // store를 생성한다.
  reducer, // 첫번째 매개 변수로 reducer를 전달한다.
  { test: "testing", test2: 2 }, // 두번째 매개 변수로 초기 상태를 전달한다. initialize() / initalizeState
  composeWithDevTools() // 세번째 옵션으로 devtool에 연결한다.
);

export default store;

// export default function store(){
//     return createStore(
//         reducer,
//         { test: "testing", test2: 2 },
//         composeWithDevTools()
//       )
// }
