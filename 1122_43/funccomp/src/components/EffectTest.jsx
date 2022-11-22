import { useMemo, useCallback } from "react";
import { useEffect, useState, useRef } from "react";

function EffectTest() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [file, setFile] = useState({
    name: "asdf",
    ext: "png",
    type: "image/png",
  });

  useEffect(() => {
    console.log("이펙트훅 테스트 시작");
  }, []);

  useEffect(() => {
    console.log(`숫자가 ${num}으로 변경됐어`);
    setName(`${num}`);
    // setFile({ ...file, name: `${num}` });
    // => 먼저 ...(스프레드)로 객체를 펼쳐놓고 ',' 뒤에있는 키(name: `${num}`)를 덮어씌운다 그래서 내가 원하는 name만 바뀐다.
  }, [num]);

  useEffect(() => {
    console.log("이름이 " + name + "으로 변경됐어");
    setFile({ ...file, name: name });
  }, [name]);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const increase = () => {
    setNum(num + 1);
  };
  const increaseCallback = useCallback(() => {
    setNum(num + 1);
  }, [num]);
  // 가입 => ID, PW, 이름, 나이, 성별, 지역 << 각각은 state
  //   - input 함수를 만들어서 연결
  //   - ID가 바뀌었을 때 나머지에 대한 함수는 선언되는가? => const changeId() => {}
  //   ㄴ 해당 방법과 같이 Hook을 사용하지 않았을 경우 나머지 함수들도 전부 다시 선언된다.
  //   - 다시 선언하는 작업을 하지 않기 위해서 useCallback을 사용한다.
  //   - 최적화에 사용한다. << 최적화를 생각하지 않으면 쓸 필요는 없다.

  //   const tempNum = num + 10;
  const memoNum = useMemo(() => {
    return num + 10;
  }, [num]);

  const ref = useRef();

  return (
    <div>
      <button onClick={increaseCallback}>{memoNum}</button>
      <div
        ref={ref}
        onClick={() => {
          console.log(ref.current);
        }}
      >
        {name}
      </div>
      <div>{file.name + "." + file.ext}</div>
    </div>
  );
}

export default EffectTest;
