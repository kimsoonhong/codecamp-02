import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import {
  CREATE_ITEM_QUESTION,
  FETCH_USED_ITEM,
  FETCH_QUESTIONS,
} from "./MarketCommentWrite.queries";

export default function MarketCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  const [contents, setContents] = useState();
  const [createUseditemQuestion] = useMutation(CREATE_ITEM_QUESTION);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  // const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("localUserData") || "[]");
    setUserData(user);
  }, []);
  // console.log(userData);
  function onChangeContents(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
      alert("df");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <MarketCommentWriteUI
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      // onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
