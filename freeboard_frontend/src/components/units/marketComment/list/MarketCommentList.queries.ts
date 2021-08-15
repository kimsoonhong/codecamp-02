import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchUseditemQuestions($boardId: ID!) {
    fetchUseditemQuestions(boardId: $boardId) {
      _id
      contents
      useditem{
        _id
        name
        remarks
        contents
        price
        tags
        images
        pickedCount
        buyer{
          email
          _id
          picture
          userPoint
          name
          createdAt
        }
        seller{
          _id
          name
          email
          picture
          userPoint
          createdAt
        }
      }
      user{
        _id
        email
        name
        picture
        userPoint
        createdAt
      }
      createdAt
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;




fetchBoardComments(
  page: Int
  boardId: ID!
  ): [BoardComment!]!

  fetchUseditemQuestions(
    page: Int
    useditemId: ID!
    ): [UseditemQuestion!]!