import { ChangeEvent, useState } from "react";
import {
	FETCH_BOARD_COMMENTS,
	DELETE_BOARD_COMMENTS,
	UPDATE_BOARD_COMMENTS,
} from "./boardcommentlistitem.querise";
import BoardCommentListItemUI from "./boardcommentlistitem.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export const INPUTS_INIT = {
	writer: "",
	password: "",
	contents: "",
	rating: 5,
};

export default function BoardCommentListItem(props) {
	const [isEdit, setIsEdit] = useState(false);
	const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENTS);
	const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENTS);
	const router = useRouter();
	const [inputs, setInputs] = useState(INPUTS_INIT);

	function onChangeInputs(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const newInputs = { ...inputs, [event.target.name]: event.target.value };
		setInputs(newInputs);
	}

	function onClickEditComment() {
		alert("dd");
		setIsEdit(true);
	}

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
		} catch (error) {
			alert(error.message);
		}
	}

	async function onClickUpdateComment(event) {
		console.log(event.target.id);

		const newInputs: INewInputs = {};
		if (inputs.contents) newInputs.contents = inputs.contents;
		try {
			const result = await updateBoardComment({
				variables: {
					boardCommentId: String(event.target.id),
					password: inputs.password,
					updateBoardCommentInput: { ...newInputs },
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.board_detail },
					},
				],
			});
			setIsEdit(false);
			alert("게시물이 성공적으로 수정되었습니다.");
		} catch (error) {
			alert(error.message);
		}
	}

	return (
		<BoardCommentListItemUI
			isEdit={isEdit}
			data={props.data}
			onClickEditComment={onClickEditComment}
			onClickDeleteComment={onClickDeleteComment}
			onClickUpdateComment={onClickUpdateComment}
			onChangeInputs={onChangeInputs}
		/>
	);
}
