import { useEffect, useState } from "react";

export default function basketloggedin() {
  const [baskets, setBaskets] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(items);
  }, []);

  return (
    <div>
      <div>로그드인페이지</div>x
      {baskets &&
        baskets.map((data) => (
          <div
            key={data._id}
            style={{
              backgroundColor: "bisque",
              width: "50%",
              textAlign: "center",
              margin: "auto",
              marginTop: "30px",
            }}
          >
            <div>{data.writer}</div>
            <div>{data.title}</div>
            <div></div>
            <div></div>
          </div>
        ))}
    </div>
  );
}
