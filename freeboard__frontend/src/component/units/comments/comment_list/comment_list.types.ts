import { ChangeEvent, MouseEvent } from "react";

export interface IBoardContainerProps {
	isEdit?: boolean;
	data?: any;
}

export interface IBoardPresenterProps {
	inputsErrors: {
		writer: String;
		password: String;
		title: String;
		contents: String;
	};
	onClickUpdate: () => void;

	onClickSubmit: (
		event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => void;
	active: boolean;
	onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
	isEdit?: boolean;
	onClickEdit: () => void;
	commentsData: any;
}

export interface INewInputs {
	title?: string;
	contents?: string;
}
