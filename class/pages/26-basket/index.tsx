import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

export default function basket() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  console.log(data, "data");
  const onClickBasket = (basketData) => () => {
    console.log(basketData);

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    let isExists = false;

    baskets.forEach((data) => {
      if (data._id === basketData._id) isExists = true;
    });
    if (isExists) return;

    baskets.push(basketData);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onclickLogin = () => {
    router.push("/26-basket-loggedin");
  };

  return (
    <div>
      <div>basket page!!</div>
      <div>
        {data?.fetchBoards.map((data, index) => (
          <div
            style={{
              backgroundColor: "bisque",
              width: "50%",
              textAlign: "center",
              margin: "auto",
              marginTop: "30px",
            }}
            key={data._id}
            id={data._id}
            onClick={onClickBasket(data)}
          >
            <div style={{ fontSize: "24px" }}>{index + 1}</div>
            <div>작성짜 : {data.writer}</div>
            <div>제 목 : {data.title}</div>
            <button>장바구니 담기</button>
            <div></div>
          </div>
        ))}
      </div>
      <div></div>
      <button onClick={onclickLogin}>로그인하기</button>
      <div></div>
    </div>
  );
}
