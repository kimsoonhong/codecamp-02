import { ChangeEvent, useEffect, useState } from "react";

import Head from "next/head";
import { gql, useMutation, useQuery } from "@apollo/client";

declare const window: typeof globalThis & {
  IMP: any;
};

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

export default function payment() {
  const [baskets, setBaskets] = useState([]);
  const [localUserData, setLocalUserData] = useState({});

  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    const UserData = JSON.parse(localStorage.getItem("localUserData") || "");

    setBaskets(items);
    setLocalUserData(UserData);
  }, []);

  const [amount, setAmount] = useState("");
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  function onChangeAmount(event: ChangeEvent<HTMLInputElement>) {
    setAmount(event.target.value);
  }
  function onClickPayment() {
    window.IMP.init("imp49910675");
    window.IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: amount,
        // @ts-ignore
        buyer_email: localUserData.email,
        // @ts-ignore
        buyer_name: localUserData.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: `/28-payment-success`,
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          alert("결제에 성공하셨습니다");
          // router.push("/28-payment-success");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패하셨습니다");
        }
      }
    );
  }

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      <div>로그드인페이지</div>
      {baskets &&
        baskets.map((data) => (
          <div
            // @ts-ignore
            key={data.fetchUseditem._id}
            style={{
              backgroundColor: "bisque",
              width: "50%",
              textAlign: "center",
              margin: "auto",
              marginTop: "30px",
            }}
          >
            {/* @ts-ignore */}
            <div>{data.fetchUseditem.name}</div>
            {/* @ts-ignore */}
            <div>{data.fetchUseditem.price}</div>1<div></div>
            <div></div>
          </div>
        ))}
      <div>보유 포인트 :{loginData?.fetchUserLoggedIn.userPoint.amount}원</div>
      결제금액:
      <input type="text" onChange={onChangeAmount} />
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
}
