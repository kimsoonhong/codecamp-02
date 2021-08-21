import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";

import { Modal } from "antd";

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

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const { userInfo } = useContext(GlobalContext);

  function onClickLogin() {
    router.push("/login");
  }

  function onClickSignUp() {
    router.push("/login/signUp");
  }

  const onClickOpenPayment = () => {
    setIsOpen(true);
  };

  function onClickPayment() {
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: `/28-payment-success`,
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          Modal.info({ content: "결제에 성공했습니다." });
          // router.push("/28-payment-success");
        } else {
          // 결제 실패 시 로직,
          Modal.error({ content: "결제에 실패하였습니다." });
        }
      }
    );
    setIsOpen(false);
  }

  function onChangeAmount(event) {
    setAmount(event.target.value);
  }

  function onClose() {
    setIsOpen(false);
  }
  return (
    <LayoutHeaderUI
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
      data={data}
      onClickOpenPayment={onClickOpenPayment}
      isOpen={isOpen}
      onClickPayment={onClickPayment}
      onChangeAmount={onChangeAmount}
      onClose={onClose}
    />
  );
}
