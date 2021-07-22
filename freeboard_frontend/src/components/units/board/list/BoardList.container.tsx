import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_COUNT, FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useState } from "react";

export default function BoardList() {
  const router = useRouter();
  const [startpage, setStartpage] = useState(1);
  const { data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { aaa: startpage },
  });
  const { data: dataBoardCount } = useQuery<IQuery>(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(Number(dataBoardCount?.fetchBoardsCount) / 10);

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/boards/${(event.target as Element).id}`);
  }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    refetch({ aaa: Number((event.target as Element).id) });
    console.log(event.target.id);
  }

  function onClickPrevPage(event) {
    if (startpage <= 1) {
      return;
    }
    setStartpage((prev) => prev - 9);
  }
  function onClickNextPage(event) {
    if (startpage + 10 > lastPage) {
      return;
    }
    setStartpage(startpage + 9);
  }
  return (
    <BoardListUI
      data={data}
      dataBoardCount={dataBoardCount}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      startpage={startpage}
      lastPage={lastPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickPage={onClickPage}
    />
  );
}
