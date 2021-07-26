import { useEffect, useState } from "react";
import axios from "axios";

export default function useEffectAxioxPage() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImgUrl(result.data.message);
    };
    getImg();
  }, []);

  return (
    <div>
      <img src={imgUrl}></img>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
