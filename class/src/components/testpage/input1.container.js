// import { useRouter } from "next/router";
// import { useQuery } from "@apollo/client";
// import BoardDetailUI from "./input1.presenter";
// import { FETCH_BOARD } from "./input1.queries";
import { useState } from 'react';
import TestpageUI from "./input1.presenter";

export default function testpage(props) {


  // const router = useRouter();
  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: { boardId: router.query.boardId },
  // });

  // const { data: dataBoardComments } = useQuery(
  //     FETCH_BOARD_COMMENTS,
  //     { variables: { boardId: router.query.boardId } }
  // )

  // aaaaa.data.fetchBoardComments

  // function onClickEdit() {
  //   router.push(`/detail/${router.query.boardId}/edit`);
  // }



  return (
    <>
      <TestpageUI onchangeinput={props.onchangeinput}/>;
    </>
  );
}
