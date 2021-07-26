import { useEffect, useRef, useState } from "react";
import { useReducer } from "react";

export default function funcn() {
  const [count, setCount] = useState(0);
  const router = useReducer;
  const aaa = useRef();

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("마운트완료");
    aaa.current?.focus();
    return () => {
      console.log("잘가요 ㅠㅠ");
    };
  }, []);

  useEffect(() => {
    console.log("컴포넌트 변경됨!");
  });

  function onClickMove() {
    router.push("/");
  }

  return (
    <div>
      함수형 컴퍼넌트 입니다.
      <div>{count}</div>
      <button onClick={onClickCount}>+1</button>
      <button onClick={onClickMove}>나가기</button>
      <input type="text" ref={aaa}></input>
    </div>
  );
}
