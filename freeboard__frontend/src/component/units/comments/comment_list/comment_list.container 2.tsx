import { useQuery, useMutation } from "@apollo/client";
import {
	FETCH_BOARD_COMMENTS,
	DELETE_BOARD_COMMENTS,
} from "./comment_list.querise";
import { useRouter } from "next/router";
import CommentListUI from "./comment_list.presenter";
import { IBoardContainerProps } from "./comment_list.types";

export default function CommentListContainer(props: IBoardContainerProps) {
	const router = useRouter();
	const { data: commentsData } = useQuery(FETCH_BOARD_COMMENTS, {
		variables: { boardId: router.query.board_detail },
	});
	const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENTS);

	async function onClickDeleteComment(event) {
		const password = prompt("비밀번호를 입력하세요");
		alert(event.target.id);
		try {
			await deleteBoardComment({
				variables: { boardCommentId: (event.target as Element).id, password },
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.board_detail },
					},
				],
			});
			alert("게시물이 삭제되었습니다.");
			// router.push("/boards");
		} catch (error) {
			alert(error.message);
		}
	}

	async function onClickEditComment() {
		router.push(
			`../comment_write/comment_write.presenter${router.query.board_detail}`
		);
	}

	return (
		<CommentListUI
			commentsData={commentsData}
			onClickDeleteComment={onClickDeleteComment}
			onClickEditComment={onClickEditComment}
			isEdit={props.isEdit}
			data={props.data}
		/>
	);
}
