import { useEffect, useRef, useState } from "react";

export default function imgpreload() {
  const divRef = useRef();
  // const [on, setOn] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setImage(img);
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(image);
  }

  return (
    <div>
      <button onClick={onClickButton}>보여주기</button>

      <div ref={divRef}>{image}</div>
    </div>
  );
}
