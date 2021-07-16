import IBoardPresenterProps from "./comment_write.presenter";
import { useMutation } from "@apollo/client";
import {
	CREATE_BOARD_COMMENT,
	FETCH_BOARD_COMMENTS,
} from "./comment_write.querise";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
// import { IBoardContainerProps, INewInputs } from "./comment_write.types";

import {} from "./comment_write.types";
import {
	IMutation,
	IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export const INPUTS_INIT = {
	writer: "",
	password: "",
	contents: "",
	rating: 5,
};

export default function CommentWRiteContainer() {
	const router = useRouter();
	// const [active, setActive] = useState(true);
	const [inputs, setInputs] = useState(INPUTS_INIT);
	// const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);

	const [createBoardComment] = useMutation<
		IMutation,
		IMutationCreateBoardCommentArgs
	>(CREATE_BOARD_COMMENT);
	// const [updateBoard] = useMutation(UPDATE_BOARD);

	function onChangeInputs(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const newInputs = { ...inputs, [event.target.name]: event.target.value };
		setInputs(newInputs);
		console.log(newInputs);
		// setActive(Object.values(inputs).every((data) => !data));
		// if (inputsErrors[event.target.name as keyof typeof INPUTS_INIT]) {
		// 	setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
		// }
	}

	async function onClickSubmit() {
		// setInputsErrors({
		// 	writer: inputs.writer ? "" : "작성자를 입력해주세요.",
		// 	password: inputs.password ? "" : "비밀번호를 입력해주세요.",
		// 	contents: inputs.contents ? "" : "내용을 입력해주세요.",
		// });
		// createBoardCommentInput
		// createBoardCommentInput
		try {
			const result = await createBoardComment({
				variables: {
					createBoardCommentInput: { ...inputs },
					boardId: String(router.query.board_detail),
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.board_detail },
					},
				],
			});
			alert("게시물이 백으로 잘 넘어갔습니다.");
			alert("게시물이 성공적으로 등록되었습니다.");
		} catch (error) {
			alert(error.message);
		}
	}

	// async function onClickUpdate() {
	// 	const newInputs: INewInputs = {};
	// 	if (inputs.contents) newInputs.contents = inputs.contents;

	// 	setInputsErrors({
	// 		writer: inputs.writer ? "" : "작성자를 입력해주세요.",
	// 		password: inputs.password ? "" : "비밀번호를 입력해주세요.",
	// 		contents: inputs.contents ? "" : "내용을 입력해주세요.",
	// 	});
	// 	try {
	// 		const result = await updateBoard({
	// 			variables: {
	// 				boardId: String(router.query.board_detail),
	// 				password: inputs.password,
	// 				updateBoardInput: { ...newInputs },
	// 			},
	// 		});
	// 		alert("게시물이 성공적으로 수정되었습니다.");

	// 		router.push(`/boards/board_input/${result.data.updateBoard._id}`);
	// 	} catch (error) {
	// 		alert(error.message);
	// 	}
	// }
	return (
		<IBoardPresenterProps
			// onClickUpdate={onClickUpdate}
			// inputsErrors={inputsErrors}
			onClickSubmit={onClickSubmit}
			// active={active}
			onChangeInputs={onChangeInputs}
			// isEdit={props.isEdit}
			// data={props.data}
		/>
	);
}
