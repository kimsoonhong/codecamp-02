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
			boardAddress {
				zipcode
				address
				addressDetail
			}
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
		likeBoard(boardId: $boardId)
	}
`;

export const DIS_LIKE_BOARD = gql`
	mutation dislikeBoard($boardId: ID!) {
		dislikeBoard(boardId: $boardId)
	}
`;
