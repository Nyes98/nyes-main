import { useState } from "react";
import styled from "styled-components";

export default function ReRiRo({ user, setUser, users, setUsers }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");

  function onRegist() {
    if (users.find((item) => item.userId === userId)) return;
    setUsers([...users, { userId, userPw }]);
  }

  function onLogIn() {
    const tempUser = users.find((item) => item.userId === userId);
    if (tempUser && tempUser.userPw === userPw) setUser(tempUser.userId);
  }

  function onLogOut() {
    setUser("");
  }

  return (
    <ReRiRoBox>
      <InputBox>
        <input
          onInput={(e) => {
            setId(e.target.value);
          }}
          placeholder="ID"
        ></input>
        <input
          type={"password"}
          onInput={(e) => {
            setPw(e.target.value);
          }}
          placeholder="PW"
        ></input>
      </InputBox>
      <RLLBtnBox>
        <button
          onClick={() => {
            onLogIn();
          }}
        >
          로그인
        </button>
        <button
          onClick={() => {
            onLogOut();
          }}
        >
          로그아웃
        </button>
        <button
          onClick={() => {
            console.log(users);
            onRegist();
          }}
        >
          회원가입
        </button>
      </RLLBtnBox>
      <WelcomeBox>{!user || `${user} 등장`}</WelcomeBox>
    </ReRiRoBox>
  );
}

const ReRiRoBox = styled.div``;

const InputBox = styled.div`
  text-align: center;

  & > input {
    height: 40px;
    text-align: center;
    margin: 10px;
  }
`;

const RLLBtnBox = styled.div`
  text-align: center;

  & > button {
    margin: 10px;
    width: 10%;
  }
`;

const WelcomeBox = styled.div`
  text-align: center;
`;
