import { useEffect, useRef, useState } from "react";

export default function useRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div style={{ padding: "60px", backgroundColor: "lime" }}>
      <div>^^</div>

      <input ref={inputRef} type="password"></input>
      <button>등록하기</button>
    </div>
  );
}
