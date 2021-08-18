import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import {
  CREATE_ITEM_QUESTION,
  FETCH_QUESTIONS,
  UPDATE_QUESTION,
} from "./MarketCommentWrite.queries";

export default function MarketCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  const [contents, setContents] = useState();
  const [createUseditemQuestion] = useMutation(CREATE_ITEM_QUESTION);
  const { data: questionData } = useQuery(FETCH_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });
  const [updateUseditemQuestion] = useMutation(UPDATE_QUESTION);
  // const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  // console.log(contents);
  function onChangeContents(event) {
    setContents(event.target.value);
  }

  async function onClickWrite() {
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
      alert("댓글을 등록 하였습니다.");
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdateQuestion(event) {
    // alert("연결됨");
    // if (contents) props.data?.contents = contents;
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
          // alert('리패치함')
        ],
        
      });
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <MarketCommentWriteUI
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickUpdateQuestion={onClickUpdateQuestion}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
