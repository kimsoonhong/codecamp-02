import { ChangeEvent, MouseEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: (value: boolean) => void;
  data?: IBoardComment;
}

export interface IBoardCommentWriteUIProps {
  onClickWrite: () => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;

  onChangeWriter: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangePassword: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeContents: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeRating: (value: number) => void;

  inputsWriter: string;
  inputsContents: string;
  inputsRating: number;
  inputsPassword: string;

  isEdit?: boolean;
  data?: IBoardComment;
}
