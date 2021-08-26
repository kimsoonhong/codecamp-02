import { gql } from "@apollo/client";

// export const CREATE_BOARD_COMMENT = gql`
//   mutation createBoardComment(
//     $createBoardCommentInput: CreateBoardCommentInput!
//     $boardId: ID!
//   ) {
//     createBoardComment(
//       createBoardCommentInput: $createBoardCommentInput
//       boardId: $boardId
//     ) {
//       _id
//     }
//   }
// `;

export const CREATE_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export const FETCH_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      contents
      _id
      updatedAt
    }
  }
`;

export const UPDATE_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput

      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;
