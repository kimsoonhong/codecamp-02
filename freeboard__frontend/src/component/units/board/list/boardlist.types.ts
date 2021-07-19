import { ChangeEvent, MouseEvent } from "react";

export interface IBoardContainerProps {
	isEdit?: boolean;
}

export interface IBoardPresenterProps {
	data: any;
	onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
	onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
	onClickWrite: () => void;
}
