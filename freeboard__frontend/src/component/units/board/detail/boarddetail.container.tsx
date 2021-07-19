import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD } from "./boarddetail.querise";
import IBoardPresenterProps from "./boarddetail.presenter";
import { useRouter } from "next/router";

export default function BoardDetailContainer() {
	const router = useRouter();
	const [deleteBoard] = useMutation(DELETE_BOARD);
	const { data } = useQuery(FETCH_BOARD, {
		variables: { boardId: router.query.board_detail },
	});

	async function onClickDelete(event) {
		try {
			await deleteBoard({
				variables: { aaa: (event.target as Element).id },
			});
			alert("게시물이 삭제되었습니다.");
			router.push("/boards");
		} catch (error) {
			alert(error.message);
		}
	}

	function onClickList() {
		router.push("/boards/");
	}

	async function onClickEdit() {
		router.push(`/boards/board_input/${router.query.board_detail}/edit`);
	}

	return (
		<IBoardPresenterProps
			data={data}
			onClickDelete={onClickDelete}
			onClickList={onClickList}
			onClickEdit={onClickEdit}
		/>
	);
}
