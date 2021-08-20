import { useEffect, useState } from "react";
import axios from "axios";

export default function OpenAPI() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get(
        "   https://www.genie.co.kr/chart/top200?ditc=D&ymd=20200403&hh=23&rtm=N&pg=1,headers=headers"
      );
    };
  }, []);

  function aaa(response) {
    let articles = response["articles"];
    for (let i = 0; i < articles.length; i++) {
      let article = articles[i];

    }
  }

  return (
    <div>
      <img></img>
      <div>ㅇㅇㅇ</div>
      <div></div>
      <div></div>
      <button onClick={aaa}></button>
    </div>
  );
}
