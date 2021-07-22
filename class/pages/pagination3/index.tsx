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
  const { data: pagecount } = useQuery<IQuery>(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(Number(pagecount?.fetchBoardsCount) / 10);

  function onClickPage(event) {
    console.log(event.target.id);
    refetch({ aaa: Number(event.target.id) });
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
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
        (data, index) =>
          startpage + index <= lastPage && (
            <Page
              key={startpage + index}
              onClick={onClickPage}
              id={startpage + index}
            >
              {startpage + index}
            </Page>
          )
      )}
      <Page onClick={onClickNextPage}>다음</Page>
    </div>
  );
}
