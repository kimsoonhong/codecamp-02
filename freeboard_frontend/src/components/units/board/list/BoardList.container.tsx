import _ from "lodash";

import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_COUNT, FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent, useState, useRef, useEffect, ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

// import { IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [activedPage, setActivedPage] = useState(1);
  const [startpage, setStartpage] = useState(1);
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { aaa: startpage },
  });

  const { data: dataBoardCount, refetch: searchRefetch } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(Number(dataBoardCount?.fetchBoardsCount) / 10);
  const searchPage = isNaN(
    Math.ceil(Number(dataBoardCount?.fetchBoardsCount) / 10)
  )
    ? 1
    : Math.ceil(Number(dataBoardCount?.fetchBoardsCount) / 10);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/boards/${(event.target as Element).id}`);
  }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    refetch({ aaa: Number((event.target as Element).id) });

    const activedPage = Number((event.target as Element).id);
    setActivedPage(activedPage);
  }

  function onClickPrevPage(event: MouseEvent<HTMLDivElement>) {
    if (startpage <= 1) {
      return;
    }
    setStartpage((prev) => prev - 9);
  }
  function onClickNextPage() {
    if (startpage + 10 > lastPage) {
      return;
    }
    setStartpage(startpage + 9);
  }

  const getDebounce = _.debounce((data) => {
    // @ts-ignore
    refetch({ search: data });
    setSearch(data);
    searchRefetch({ search: data });
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <BoardListUI
      data={data}
      // @ts-ignore
      dataBoardCount={dataBoardCount}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      startpage={startpage}
      lastPage={lastPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickPage={onClickPage}
      activedPage={activedPage}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      inputRef={inputRef}
      searchPage={searchPage}
      search={search}
    />
  );
}
