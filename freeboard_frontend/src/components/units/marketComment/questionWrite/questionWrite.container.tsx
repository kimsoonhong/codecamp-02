import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

import { ChangeEvent, MouseEvent, useState } from "react";
import QuestionWriteUI from "./questionWrite.presenter";
import {
  CREATE_QUESTION,
  FETCH_QUESTIONS,
  UPDATE_QUESTION,
} from "./questionWrite.querise";

export default function questionWrite(props: any) {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_QUESTION);
  // const { data: questionData, refetch } = useQuery(FETCH_QUESTIONS, {
  //   variables: { useditemId: router.query.useditemId },
  // });
  const [updateUseditemQuestion] = useMutation(UPDATE_QUESTION);
  const [contents, setContents] = useState("");

  async function onClickWrite() {
    if (contents === "") {
      alert("댓글을 입력해주세요.");
      return;
    }

    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: contents,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });

      Modal.info({ content: "댓글을 등록하였습니다." });
      setContents("");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  async function onClickUpdateQuestion(event: MouseEvent<HTMLButtonElement>) {
    props.setIsEdit?.(false);
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: contents,
          },
          useditemQuestionId: (event.target as Element).id,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      Modal.info({ content: "댓글을 수정하였습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents((event.target as any).value);
  }

  return (
    <QuestionWriteUI
      onClickWrite={onClickWrite}
      onChangeContents={onChangeContents}
      onClickUpdateQuestion={onClickUpdateQuestion}
      data={props.data}
      isEdit={props.isEdit}
      contents={contents}
    />
  );
}
