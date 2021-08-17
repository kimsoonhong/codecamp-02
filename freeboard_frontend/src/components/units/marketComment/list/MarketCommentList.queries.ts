import { gql } from "@apollo/client";

export const FETCH_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      contents
      _id
      createdAt
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
      _id
      contents
      createdAt
      user {
        name
        _id
      }
    }
  }
`;

export const DELETE_QUESTIONS = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const DELETE_QUESTIONS_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;
