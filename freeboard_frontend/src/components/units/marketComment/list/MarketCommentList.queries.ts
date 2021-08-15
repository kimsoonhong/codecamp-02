import { gql } from "@apollo/client";

export const FETCH_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      contents
      _id
      updatedAt
      user {
        name
      }
    }
  }
`;

// fetchBoardComments(
//   page: Int
//   boardId: ID!
//   ): [BoardComment!]!

//   fetchUseditemQuestions(
//     page: Int
//     useditemId: ID!
//     ): [UseditemQuestion!]!

export const FETCH_QUESTION_ANSWER = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      contents
      createdAt
      _id
      user {
        name
      }
    }
  }
`;
