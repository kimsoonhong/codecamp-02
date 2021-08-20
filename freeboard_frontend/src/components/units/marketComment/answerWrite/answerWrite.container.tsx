import { useState } from "react";
import { Modal } from "antd";
import AnswerWriteUI from "./answerWrite.presenter";
import {
  CREATE_QUESTION_ANSWER,
  FETCH_QUESTION_ANSWER,
  UPDATE_QUESTION_ANSWER,
} from "./answerWrite.querise";
import { useMutation, useQuery } from "@apollo/client";

export default function answerWrite(props) {
  const [contents, setContents] = useState();
  const [createUseditemQuestionAnswer] = useMutation(CREATE_QUESTION_ANSWER);
  const [updateUseditemQuestionAnswer] = useMutation(UPDATE_QUESTION_ANSWER);
  // const { data } = useQuery(FETCH_QUESTION_ANSWER, {
  //   variables: { useditemQuestionId: props.data_id },
  // });

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  async function onClickAnswerSubmit() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents: contents },
          useditemQuestionId: props.questionData,
        },

        refetchQueries: [
          {
            query: FETCH_QUESTION_ANSWER,
            variables: { useditemQuestionId: props.questionData },
          },
        ],
      });

      Modal.info({ content: "대댓글을 등록하였습니다." });
      props.setIsRecomment(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  async function onClickUpdateAnswer() {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: contents,
          },
          useditemQuestionAnswerId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTION_ANSWER,
            variables: { useditemQuestionId: props.questionData },
          },
        ],
      });
      Modal.info({ content: "대댓글을 수정하였습니다." });
      props.setIsEdit(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  return (
    <AnswerWriteUI
      onChangeContents={onChangeContents}
      onClickAnswerSubmit={onClickAnswerSubmit}
      onClickUpdateAnswer={onClickUpdateAnswer}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
