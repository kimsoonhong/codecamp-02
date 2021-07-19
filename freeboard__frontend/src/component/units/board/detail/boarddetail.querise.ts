import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			createdAt
			writer
			contents
			_id
		}
	}
`;

export const DELETE_BOARD = gql`
	mutation deleteBoard($aaa: ID!) {
		deleteBoard(boardId: $aaa)
	}
`;
