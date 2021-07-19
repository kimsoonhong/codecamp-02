import CommentWriterUI from "./comment_write.presenter";
import { useMutation } from "@apollo/client";
import {
	CREATE_BOARD_COMMENT,
	FETCH_BOARD_COMMENTS,
} from "./comment_write.querise";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
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

export default function CommentWriteContainer() {
	const router = useRouter();
	const [inputs, setInputs] = useState(INPUTS_INIT);
	const [createBoardComment] = useMutation<
		IMutation,
		IMutationCreateBoardCommentArgs
	>(CREATE_BOARD_COMMENT);

	function onChangeInputs(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const newInputs = { ...inputs, [event.target.name]: event.target.value };
		setInputs(newInputs);
		console.log(newInputs);
	}

	async function onClickSubmit() {
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
			alert("게시물이 성공적으로 등록되었습니다.");
			setInputs(INPUTS_INIT);
		} catch (error) {
			alert(error.message);
		}
	}

	return (
		<CommentWriterUI
			inputs={inputs}
			onClickSubmit={onClickSubmit}
			onChangeInputs={onChangeInputs}
		/>
	);
}
