import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

import BoardWrite from "../../../../../src/component/units/board/write/boardwrite.container";

const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			writer
			title
			contents
			_id
			youtubeUrl
		}
	}
`;

export default function Editboard() {
	const isEdit = true;
	const router = useRouter();
	const { data } = useQuery(FETCH_BOARD, {
		variables: { boardId: router.query.board_detail },
	});

	return <BoardWrite isEdit={isEdit} data={data} />;
}
