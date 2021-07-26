import { useState, useEffect, useRef } from "react";
import router from "next/router";

export default function exChangeFunction() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    console.log("마운트 됐습니다.");
    return () => {
      console.log("컴포넌트가 제거 됩니다.");
    };
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경되었습니다.");
  }, [count]);

  function onClickCounter() {
    setCount(count + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
