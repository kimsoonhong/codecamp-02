import _ from "lodash";

import { useQuery } from "@apollo/client";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import MyPointUI from "./myPoint.presenter";

import {
  FETCH_TRANSACTIONS_ALL,
  FETCH_TRANSACTIONS_BUYING,
  FETCH_TRANSACTIONS_LOADING,
  FETCH_TRANSACTIONS_SELLING,
} from "./myPoint.queries";

export default function myPoint() {
  const { data: allData, refetch: allrefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactions">
  >(FETCH_TRANSACTIONS_ALL);
  const { data: BuyingData, refetch: buyrefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">
  >(FETCH_TRANSACTIONS_BUYING);
  const { data: LoadingData, refetch: loadrefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">
  >(FETCH_TRANSACTIONS_LOADING);
  const { data: SellingData, refetch: sellingrefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">
  >(FETCH_TRANSACTIONS_SELLING);

  const [activedPage, setActivedPage] = useState("allData");

  function onClickMenu(event: MouseEvent<HTMLDivElement>) {
    const activedPage = (event?.target as any).id;
    setActivedPage(activedPage);
  }

  // +++++++검색기능===+++++

  const [keyword, setKeyword] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  const getDebounce = _.debounce((data) => {
    allrefetch({ search: String(data) });
    buyrefetch({ search: String(data) });
    loadrefetch({ search: String(data) });
    sellingrefetch({ search: String(data) });
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <MyPointUI
      allData={allData}
      BuyingData={BuyingData}
      LoadingData={LoadingData}
      SellingData={SellingData}
      onClickMenu={onClickMenu}
      activedPage={activedPage}
      onChangeSearch={onChangeSearch}
      inputRef={inputRef}
      keyword={keyword}
    />
  );
}
