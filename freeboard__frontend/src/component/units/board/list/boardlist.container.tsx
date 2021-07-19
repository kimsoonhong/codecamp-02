import Boardlist from "./boardlist.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./boardlist.queries";
import { MouseEvent } from "react";

export default function boardlist() {
	const router = useRouter();
	const { data } = useQuery(FETCH_BOARDS, {
		variables: { boardId: router.query.board_detail },
	});

	async function onClickDetail(event: MouseEvent<HTMLDivElement>) {
		router.push(`/boards/board_input/${(event.target as Element).id}`);
	}

	function onClickWrite() {
		router.push(`/boards/board_input/`);
	}

	return (
		<Boardlist
			data={data}
			onClickDetail={onClickDetail}
			onClickWrite={onClickWrite}
		/>
	);
}
