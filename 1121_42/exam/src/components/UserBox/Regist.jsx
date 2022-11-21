import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Regist({ users, setUsers }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [ableId, setAbleId] = useState(false);
  const [ablePw, setAblePw] = useState(false);

  useEffect(() => {
    console.log(userId);
    setId(userId.length ? userId.match(/[a-z]/gi)?.join("") : "");
    // a~z , A~Z 까지만 입력 가능하도록 한다.
    if (userId.length < 5) {
      setAbleId(false);
    } else {
      setAbleId(true);
      // ID 길이에 대한 예외처리
    }
  }, [userId]);

  useEffect(() => {
    if (userPw.length < 5) {
      setAblePw(false);
    } else {
      setAblePw(true);
    }
  }, [userPw]);

  function onRegist() {
    console.log(users);
    if (users.find((item) => item.userId === userId)) return;
    setUsers([...users, { userId, userPw }]);
    // setUsers([...StaticRange, { userId, userPw }]);
    // users.push({ userId, userPw }); << 적용은 되나 절대적으로 권장되지 않는 방식이다.
    // setUsers(users);
  }

  return (
    <RegistBox>
      <input
        type={"text"}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder="ID"
        value={userId}
      />
      <input
        type={"password"}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder="PW"
        value={userPw}
      />
      <button
        onClick={() => {
          if (!(ableId && ablePw)) return;
          onRegist();
        }}
      >
        Regist
      </button>
    </RegistBox>
  );
}

const RegistBox = styled.div``;
