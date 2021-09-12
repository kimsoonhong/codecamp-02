import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  const [inputsWriter, setInputsWriter] = useState("");
  const [inputsPassword, setInputsPassword] = useState("");
  const [inputsContents, setInputsContents] = useState("");
  const [inputsRating, setInputsRating] = useState(0);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  function onChangeWriter(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputsWriter(event.target.value);
  }
  function onChangePassword(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputsPassword(event.target.value);
  }
  function onChangeContents(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputsContents(event.target.value);
  }
  function onChangeRating(value: number) {
    setInputsRating(value);
  }

  async function onClickWrite() {
    if (inputsWriter === "") {
      alert("작성자를 입력해주세요.");
      return;
    }
    if (inputsContents === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    if (inputsPassword === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: inputsWriter,
            contents: inputsContents,
            rating: inputsRating,
            password: inputsPassword,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setInputsWriter("");
      setInputsPassword("");
      setInputsContents("");
      setInputsRating(0);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate(event: MouseEvent<HTMLButtonElement>) {
    if (inputsPassword === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    // const newInputs: INewInputs = {};
    // if (inputs.contents) newInputs.contents = inputs.contents;
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: inputsContents || props.data?.contents,
            rating: inputsRating || props.data?.rating,
          },
          password: inputsPassword,
          boardCommentId: (event.target as Element).id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setInputsWriter("");
      setInputsPassword("");
      setInputsContents("");
      setInputsRating(0);
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      inputsWriter={inputsWriter}
      inputsContents={inputsContents}
      inputsRating={inputsRating}
      inputsPassword={inputsPassword}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
