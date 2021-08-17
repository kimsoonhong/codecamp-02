import { useRouter } from "next/router";
import {
  CREATE_QUESTION_ANSWER,
  FETCH_QUESTION_ANSWER,
  UPDATE_QUESTION_ANSWER,
} from "./MarketRecomment.querise";

import MarketRecommentUI from "./MarketRecomment.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

export default function MarketRecomment(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_QUESTION_ANSWER, {
    variables: { useditemQuestionId: props.FetchQuestId },
  });
  const [createUseditemQuestionAnswer] = useMutation(CREATE_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation(UPDATE_QUESTION_ANSWER);
  const [contents, setContents] = useState();

  function onChangeRecommnet(event) {
    setContents(event.target.value);
  }
  console.log(data?.fetchUseditemQuestionAnswers[0]._id, "질문데이테!");
  async function onClickAnswer() {
    alert("등록연결됨");
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents: contents },
          useditemQuestionId: props.FetchQuestId,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTION_ANSWER,
            variables: { useditemQuestionId: props.FetchQuestId },
          },
        ],
      });

      alert("대댓글을 완료했습니다.");
      props.setIsRecomment(false);
    } catch (error) {
      alert(error.messagw);
    }
  }

  async function onClickUpdateAnswer(event) {
    // alert("수정연결됨");
    // props.setIsEditAnswer(false);

    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: "하드코딩입니다.",
          },
          useditemQuestionAnswerId: props.FetchQuestId,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTION_ANSWER,
            variables: { useditemQuestionId: router.query.useditemQuestionId },
          },
          // alert('리패치함')
        ],
      });
      props.setIsEditAnswer(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <MarketRecommentUI
      onClickAnswer={onClickAnswer}
      onClickUpdateAnswer={onClickUpdateAnswer}
      onChangeRecommnet={onChangeRecommnet}
      isEditAnswer={props.isEditAnswer}
    />
  );
}
