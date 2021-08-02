import { useState } from "react";

export default function statePage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3);

    setCount((aaa) => aaa + 1);
    setCount((aaa) => aaa + 2);
    setCount((aaa) => aaa + 3);
  }

  return (
    <div style={{ padding: "50px" }}>
      <button onClick={onClickCount}> +1</button>
      <div>{count}</div>
      <div></div>
      <div></div>
    </div>
  );
}
