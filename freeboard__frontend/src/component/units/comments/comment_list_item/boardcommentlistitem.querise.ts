import { gql } from "@apollo/client";

export const DELETE_BOARD_COMMENTS = gql`
	mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
		deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
	}
`;

export const FETCH_BOARD_COMMENTS = gql`
	query fetchBoardComments($boardId: ID!) {
		fetchBoardComments(boardId: $boardId) {
			_id
			writer
			contents
			createdAt
			updatedAt
		}
	}
`;

export const UPDATE_BOARD_COMMENTS = gql`
	mutation updateBoardComment(
		$boardCommentId: ID!
		$password: String
		$updateBoardCommentInput: UpdateBoardCommentInput!
	) {
		updateBoardComment(
			boardCommentId: $boardCommentId
			password: $password
			updateBoardCommentInput: $updateBoardCommentInput
		) {
			_id
			writer
			contents
			rating
		}
	}
`;
