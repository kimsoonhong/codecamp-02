import MarketDetailUI from "./MarketDetail.presenter";

import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { FETCH_USED_ITEM, FETCH_USER_LOGGED_IN } from "./MarketDetail.queries";
import withAuth from "../../../commons/withAuth";

const BoardDetail = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const resultUser = useQuery(FETCH_USER_LOGGED_IN);

  function onClickMoveToList() {
    router.push("/market");
  }

  function onClickMoveToEdit() {
    router.push(`/boards/${router.query.boardId}/edit`);
  }

  // async function onClickDelete() {
  //   try {
  //     await deleteBoard({ variables: { boardId: router.query.boardId } });
  //     alert("게시물이 삭제되었습니다.");
  //     router.push("/boards");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <MarketDetailUI
      data={data}
      resultUser={resultUser}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      // onClickDelete={onClickDelete}
    />
  );
};

export default withAuth(BoardDetail);
