import { useQuery, gql } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($aaa: Int) {
    fetchBoards(page: $aaa) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Page = styled.span`
  margin: 0px 10px;
  cursor: pointer;
`;

export default function paginationpage() {
  const [startpage, setStartpage] = useState(1);
  const { data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { aaa: startpage },
  });
  const { data: dataBoardCount } = useQuery<IQuery>(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(Number(dataBoardCount?.fetchBoardsCount) / 10);

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    console.log(event.target.id);
    refetch({ aaa: Number((event.target as Element).id) });
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
    <div>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <span>{data.writer}</span>
          <span>{data.title}</span>
        </div>
      ))}

      <Page onClick={onClickPrevPage}>이전</Page>

      {new Array(10).fill(1).map((_, index) => {
        const currentPage = startpage + index;
        return (
          currentPage <= lastPage && (
            <Page
              key={currentPage}
              onClick={onClickPage}
              id={String(currentPage)}
            >
              {currentPage}
            </Page>
          )
        );
      })}

      <Page onClick={onClickNextPage}>다음</Page>
    </div>
  );
}
