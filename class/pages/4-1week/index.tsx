import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function ApolloPage() {
  const [text, setText] = useState("뭐라도 적어주세요.");
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();
  const inputRef = useRef();

  function onChangeText(event) {
    setText(event.target.value);
  }

  function onClickIsChange() {
    if (isChange === false) {
      setIsChange(true);
    }
    if (isChange === true) {
      setIsChange(false);
    }
  }

  function onClickUseRouter(event) {
    router.push("/apollo");
  }

  useEffect(() => {
    alert("Rendered!");
    inputRef.current?.focus();
    return () => {
      alert("bye..");
    };
  }, [isChange]);

  useEffect(() => {
    alert("Changed!");
  }, [isChange]);

  return (
    <div style={{ padding: "100px" }}>
      <div>{text}</div>
      <button onClick={onClickIsChange}>변경</button>
      <button onClick={onClickUseRouter}>이동</button>
      <input onChange={onChangeText} ref={inputRef}></input>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
