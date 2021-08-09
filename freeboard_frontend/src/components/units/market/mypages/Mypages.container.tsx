import { useEffect, useState } from "react";

export default function basketloggedin() {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(items);
  }, []);

  console.log("dd", baskets);

  return (
    <div>
      <div>로그드인페이지</div>
      {baskets &&
        baskets.map((data) => (
          <div
            key={data.fetchUseditem._id}
            style={{
              backgroundColor: "bisque",
              width: "50%",
              textAlign: "center",
              margin: "auto",
              marginTop: "30px",
            }}
          >
            <div>{data.fetchUseditem.name}</div>
            <div>{data.fetchUseditem.price}</div>
            <div></div>
            <div></div>
          </div>
        ))}
    </div>
  );
}
