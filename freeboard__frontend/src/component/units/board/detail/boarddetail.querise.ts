import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			createdAt
			writer
			contents
			_id
			youtubeUrl
			likeCount
			dislikeCount
		}
	}
`;

export const DELETE_BOARD = gql`
	mutation deleteBoard($aaa: ID!) {
		deleteBoard(boardId: $aaa)
	}
`;

export const LIKE_BOARD = gql`
	mutation likeBoard($boardId: ID!) {
		likeBoard(boardId: $boardId) {
			scalar
		}
	}
`;
