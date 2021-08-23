import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import MyPointUI from "./myPoint.presenter";

import {
  FETCH_TRANSACTIONS_ALL,
  FETCH_TRANSACTIONS_BUYING,
  FETCH_TRANSACTIONS_LOADING,
  FETCH_TRANSACTIONS_SELLING,
} from "./myPoint.queries";

export default function myPoint() {
  const { data: allData } = useQuery<Pick<IQuery, "fetchPointTransactions">>(
    FETCH_TRANSACTIONS_ALL
  );
  const { data: BuyingData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">
  >(FETCH_TRANSACTIONS_BUYING);
  const { data: LoadingData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">
  >(FETCH_TRANSACTIONS_LOADING);
  const { data: SellingData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">
  >(FETCH_TRANSACTIONS_SELLING);
  const [activedPage, setActivedPage] = useState("all");

  console.log(activedPage);

  function onClickMenu(event: MouseEvent<HTMLDivElement>) {
    const activedPage = (event?.target as any).id;
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
