import { useEffect, useState } from "react";

export default function useEffectPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    setCount((prev) => prev + 1);
  }

  console.log("시작합니다.");
  // useEffect(() => {
  //   console.log("업데이트 완료!");
  // }, [count]);

  //주의사항
  // useEffect(() => {
  //   setCount(1);
  // });

  // //주의사항2
  // useEffect(() => {
  //   // setCount((prev) => prev + 1);
  // });

  console.log("그리기 직전!");

  return (
    <div style={{ padding: "60px", backgroundColor: "lime" }}>
      <div>^^</div>
      <button onClick={onClickCount}>카운트 +1</button>
      <div>카운트 : {count}</div>
      <div></div>
      <div></div>
    </div>
  );
}
