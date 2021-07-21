import { ChangeEvent, useState } from "react";
import {
	FETCH_BOARD_COMMENTS,
	DELETE_BOARD_COMMENTS,
	UPDATE_BOARD_COMMENTS,
} from "./boardcommentlistitem.querise";
import BoardCommentListItemUI from "./boardcommentlistitem.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Password from "antd/lib/input/Password";

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
	const [isopen_delete, setIsopen_delete] = useState(false);
	const [password_input, setPassword_input] = useState("");

	// console.log(inputs);
	// console.log(password_input);

	function onChangeInputs(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		// console.log(event.target.value);
		const newInputs = { ...inputs, [event.target.name]: event.target.value };
		setInputs(newInputs);
	}

	function onClickEditComment() {
		alert("dd");
		setIsEdit(true);
	}

	async function onClickDeleteComment(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
		// 	commentId: string
	) {
		// console.log("delete 실행!!");
		// console.log(inputs.password);
		try {
			await deleteBoardComment({
				variables: {
					boardCommentId: props.data?._id,
					password: password_input,
				},
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

	function onClickModal_delete(event) {
		setIsopen_delete(true);
		// console.log(event.target.id);
	}

	function onClose_delete() {
		setIsopen_delete(false);
	}
	function onChange_password(event) {
		setPassword_input(event.target.value);
	}

	async function onClickUpdateComment(event) {
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
			isopen_delete={isopen_delete}
			onClickModal_delete={onClickModal_delete}
			onClose_delete={onClose_delete}
			onChange_password={onChange_password}
		/>
	);
}
