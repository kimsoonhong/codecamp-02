import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyPointUI from "./myPoint.presenter";

import {
  FETCH_TRANSACTIONS_ALL,
  FETCH_TRANSACTIONS_BUYING,
  FETCH_TRANSACTIONS_LOADING,
  FETCH_TRANSACTIONS_SELLING,
} from "./myPoint.queries";

export default function myPoint() {
  const { data: allData } = useQuery(FETCH_TRANSACTIONS_ALL);
  const { data: BuyingData } = useQuery(FETCH_TRANSACTIONS_BUYING);
  const { data: LoadingData } = useQuery(FETCH_TRANSACTIONS_LOADING);
  const { data: SellingData } = useQuery(FETCH_TRANSACTIONS_SELLING);
  const [activedPage, setActivedPage] = useState("all");

  console.log(activedPage);

  function onClickMenu(event) {
    const activedPage = event?.target.id;
    setActivedPage(activedPage);
  }

  return (
    <MyPointUI
      allData={allData}
      BuyingData={BuyingData}
      LoadingData={LoadingData}
      SellingData={SellingData}
      onClickMenu={onClickMenu}
      activedPage={activedPage}
    />
  );
}
