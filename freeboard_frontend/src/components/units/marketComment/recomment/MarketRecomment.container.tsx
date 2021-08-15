import {
  CREATE_QUESTION_ANSWER,
  FETCH_QUESTION_ANSWER,
} from "./MarketRecomment.querise";

import MarketRecommentUI from "./MarketRecomment.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";

export default function MarketRecomment(props) {
  const [createUseditemQuestionAnswer] = useMutation(CREATE_QUESTION_ANSWER);
  const [contents, setContents] = useState();

  function onChangeRecommnet(event) {
    setContents(event.target.value);
  }
  console.log("대댓글 ID", props.commentId);
  async function onClickAnswer() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents: contents },
          useditemQuestionId: props.commentId,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTION_ANSWER,
            variables: { useditemQuestionId: props.commentId },
          },
        ],
      });

      alert("대댓글을 완료했습니다.");
      props.setIsRecomment(false);
    } catch (error) {
      alert(error.messagw);
    }
  }

  return (
    <MarketRecommentUI
      onClickAnswer={onClickAnswer}
      onChangeRecommnet={onChangeRecommnet}
    />
  );
}
