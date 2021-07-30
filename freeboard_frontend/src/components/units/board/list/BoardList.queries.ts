import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $aaa: Int) {
    fetchBoards(search: $search, page: $aaa) {
      _id
      writer
      title
      createdAt
    }
  }
`;
// console.log(fetchBoards);

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;
