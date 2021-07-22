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

const Page = styled.span`
  margin: 0px 10px;
  cursor: pointer;
`;

export default function paginationpage() {
  const [startpage, setStartpage] = useState(1);
  const { data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { aaa: startpage },
  });

  function onClickPage(event) {
    console.log(event.target.id);
    refetch({ aaa: Number(event.target.id) });
  }

  function onClickPrevPage(event) {
    setStartpage((prev) => prev - 9);
  }
  function onClickNextPage(event) {
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
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, index) => (
        <Page
          key={startpage + index}
          onClick={onClickPage}
          id={startpage + index}
        >
          {startpage + index}
        </Page>
      ))}
      <Page onClick={onClickNextPage}>다음</Page>
    </div>
  );
}
