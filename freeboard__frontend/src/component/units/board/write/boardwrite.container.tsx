import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./boradwrite.querise";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./boardwrite.presenter";
import { useRouter } from "next/router";
import { IBoardContainerProps, INewInputs } from "./boardWrite.types";

export const INPUTS_INIT = {
	writer: "",
	password: "",
	title: "",
	contents: "",
};
export default function BoardWrite(props: IBoardContainerProps) {
	const router = useRouter();
	const [active, setActive] = useState(true);
	const [inputs, setInputs] = useState(INPUTS_INIT);
	const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
	const [createBoard] = useMutation(CREATE_BOARD);
	const [updateBoard] = useMutation(UPDATE_BOARD);

	const [isopen_update, setIsopen_update] = useState(false);
	const [isopen_address, setIsopen_address] = useState(false);
	const [address, setAddress] = useState("");
	const [zonecode, setZonecode] = useState("");

	console.log("==========");
	console.log(inputs);
	console.log(address);
	console.log(zonecode);
	console.log("==========");

	function onChangeInputs(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		console.log(event.target.value);
		const newInputs = { ...inputs, [event.target.name]: event.target.value };
		setInputs(newInputs);
		setActive(Object.values(inputs).every((data) => !data));
		if (inputsErrors[event.target.name as keyof typeof INPUTS_INIT]) {
			setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
		}
	}

	async function onClickSubmit() {
		setInputsErrors({
			writer: inputs.writer ? "" : "작성자를 입력해주세요.",
			password: inputs.password ? "" : "비밀번호를 입력해주세요.",
			title: inputs.title ? "" : "제목을 입력해주세요.",
			contents: inputs.contents ? "" : "내용을 입력해주세요.",
		});
		if (Object.values(inputs).every((data) => data)) {
			try {
				const result = await createBoard({
					variables: { createBoardInput: { ...inputs } },
				});
				router.push(`/boards/board_input/${result.data.createBoard._id}`);
			} catch (error) {
				alert(error.message);
			}
		}
	}

	async function onClickUpdate() {
		const newInputs: INewInputs = {};
		if (inputs.title) newInputs.title = inputs.title;
		if (inputs.contents) newInputs.contents = inputs.contents;
		if (inputs.youtubeUrl) newInputs.youtubeUrl = inputs.youtubeUrl;

		setInputsErrors({
			writer: inputs.writer ? "" : "작성자를 입력해주세요.",
			password: inputs.password ? "" : "비밀번호를 입력해주세요.",
			title: inputs.title ? "" : "제목을 입력해주세요.",
			contents: inputs.contents ? "" : "내용을 입력해주세요.",
		});
		try {
			const result = await updateBoard({
				variables: {
					boardId: String(router.query.board_detail),
					password: inputs.password,
					updateBoardInput: { ...newInputs },
				},
			});
			alert("게시물이 성공적으로 수정되었습니다.");

			router.push(`/boards/board_input/${result.data.updateBoard._id}`);
		} catch (error) {
			alert(error.message);
		}
	}
	function onClickModal_update() {
		setIsopen_update(true);
	}

	function onClose_update() {
		setIsopen_update(false);
	}
	function onClickModal_address() {
		setIsopen_address(true);
	}

	function onClose_address() {
		setIsopen_address(false);
	}

	function onComplete(data) {
		setAddress(data.address);
		setZonecode(data.zonecode);
	}

	function onClickSubmit_address() {
		setIsopen_address(false);
	}

	return (
		<BoardWriteUI
			onClickUpdate={onClickUpdate}
			inputsErrors={inputsErrors}
			onClickSubmit={onClickSubmit}
			active={active}
			onChangeInputs={onChangeInputs}
			isEdit={props.isEdit}
			data={props.data}
			onClickModal_update={onClickModal_update}
			isopen_update={isopen_update}
			onClose_update={onClose_update}
			onClickModal_address={onClickModal_address}
			onClose_address={onClose_address}
			isopen_address={isopen_address}
			onComplete={onComplete}
			address={address}
			zonecode={zonecode}
			onClickSubmit_address={onClickSubmit_address}
		/>
	);
}
