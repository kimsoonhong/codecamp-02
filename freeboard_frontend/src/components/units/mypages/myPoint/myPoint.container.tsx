import _ from "lodash";

import { useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import MyPointUI from "./myPoint.presenter";

import {
  FETCH_TRANSACTIONS_ALL,
  FETCH_TRANSACTIONS_BUYING,
  FETCH_TRANSACTIONS_LOADING,
  FETCH_TRANSACTIONS_SELLING,
  FETCH_BUYING_COUNT,
  FETCH_LOADING_COUNT,
  FETCH_SELLING_COUNT,
} from "./myPoint.queries";

export default function myPoint() {
  const [activedPages, setActivedPages] = useState(1);
  const [startpage, setStartpage] = useState(1);
  const { data: buyingCount, refetch: buyingsearchRefetchCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BUYING_COUNT);

  const { data: loadingCount, refetch: loadingsearchRefetchCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_LOADING_COUNT);

  const { data: sellingCount, refetch: sellingsearchRefetchCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_SELLING_COUNT);

  const { data: allData, refetch: allrefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactions">
  >(FETCH_TRANSACTIONS_ALL, {
    variables: { page: startpage },
  });
  const { data: BuyingData, refetch: buyrefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">
  >(FETCH_TRANSACTIONS_BUYING, {
    variables: { page: activedPages },
  });
  const { data: LoadingData, refetch: loadrefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">
  >(FETCH_TRANSACTIONS_LOADING, {
    variables: { page: activedPages },
  });
  const { data: SellingData, refetch: sellingrefetch } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">
  >(FETCH_TRANSACTIONS_SELLING, {
    variables: { page: activedPages },
  });

  const buyinglastPage = Math.ceil(
    // @ts-ignore
    Number(buyingCount?.fetchPointTransactionsCountOfBuying) / 10
  );

  const loadinglastPage = Math.ceil(
    // @ts-ignore
    Number(loadingCount?.fetchPointTransactionsCountOfLoading) / 10
  );

  const sellinglastPage = Math.ceil(
    // @ts-ignore
    Number(sellingCount?.fetchPointTransactionsCountOfSelling) / 10
  );

  const buyingsearchPage = isNaN(
    // @ts-ignore
    Math.ceil(Number(buyingCount?.fetchPointTransactionsCountOfBuying) / 10)
  )
    ? 1
    : // @ts-ignore
      Math.ceil(Number(buyingCount?.fetchPointTransactionsCountOfBuying) / 10);

  const loadingsearchPage = isNaN(
    // @ts-ignore
    Math.ceil(Number(loadingCount?.fetchPointTransactionsCountOfLoading) / 10)
  )
    ? 1
    : Math.ceil(
        // @ts-ignore
        Number(loadingCount?.fetchPointTransactionsCountOfLoading) / 10
      );

  const sellingsearchPage = isNaN(
    Math.ceil(
      // @ts-ignore
      Number(sellinglastPage?.fetchPointTransactionsCountOfSelling) / 10
    )
  )
    ? 1
    : Math.ceil(
        // @ts-ignore
        Number(sellinglastPage?.fetchPointTransactionsCountOfSelling) / 10
      );

  const [activedPage, setActivedPage] = useState("all");

  function onClickMenu(event: MouseEvent<HTMLDivElement>) {
    setStartpage(1);
    setActivedPages(1);
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
    buyingsearchRefetchCount({ search: String(data) });
    loadingsearchRefetchCount({ search: String(data) });
    sellingsearchRefetchCount({ search: String(data) });
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
    setKeyword(event.target.value);
  }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    allrefetch({ page: Number((event.target as Element).id) });
    buyrefetch({ page: Number((event.target as Element).id) });
    loadrefetch({ page: Number((event.target as Element).id) });
    sellingrefetch({ page: Number((event.target as Element).id) });

    const activedPages = Number((event.target as Element).id);
    setActivedPages(activedPages);
  }

  function onClickPrevPage() {
    if (startpage <= 1) {
      return;
    }
    setStartpage((prev) => prev - 9);
  }
  function onClickNextPage() {
    if (startpage + 10 > buyinglastPage) {
      return;
    }
    if (startpage + 10 > loadinglastPage) {
      return;
    }
    if (startpage + 10 > sellinglastPage) {
      return;
    }
    setStartpage(startpage + 9);
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
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startpage={startpage}
      activedPages={activedPages}
      buyinglastPage={buyinglastPage}
      loadinglastPage={loadinglastPage}
      sellinglastPage={sellinglastPage}
      buyingsearchPage={buyingsearchPage}
      loadingsearchPage={loadingsearchPage}
      sellingsearchPage={sellingsearchPage}
    />
  );
}
