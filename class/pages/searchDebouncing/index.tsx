import _ from "lodash";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      writer
      title
      createdAt
      _id
    }
  }
`;

const Column = styled.span`
  padding: 20px, 60px;
  width: 100%;
  margin: 0px 20px;
  text-align: center;
`;

const Page = styled.span`
  padding: 0px, 20px;
  margin: 0px 20px;
`;

export default function search() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const [search, setSearch] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({ search: data });
    setSearch(data);
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  // function onClickSearch() {
  //   refetch({ search: search });
  // }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    refetch({ search: search, page: Number((event?.target as Element).id) });
  }
  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.createdAt}</Column>
          <Column>{data.title}</Column>
          <Column>{data.title}</Column>
          <Column>{data.writer}</Column>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <Page key={index} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
