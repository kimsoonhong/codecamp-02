import { useState } from "react";

export default function state4() {
  const [state, setState] = useState(0);

  function onClickPrev() {
    setState((prev) => prev + 1);
    setState((prev) => prev + 2);
    setState((prev) => prev + 3);
  }

  function onClickState() {
    setState(state + 1);
    setState(state + 2);
    setState(state + 3);
  }

  return (
    <div>
      <div>{state}</div>
      <button onClick={onClickState}>스테이트 테스트하기</button>
    </div>
  );
}
