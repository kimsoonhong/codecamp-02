// import { useRouter } from "next/router";
// import { useQuery } from "@apollo/client";
// import BoardDetailUI from "./input1.presenter";
// import { FETCH_BOARD } from "./input1.queries";
import { createContext, useState } from 'react';
import Aaaa from "./writer.presenter";

osijfd={
writer=""
password=""

}
export const ButtonContext = createContext({})
export default function testpage() {

  const [title, setTitle]= useState(...)
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
function onchangeinput(event){
   setTitle([event.target.name]:event.target.value)
}
console.log(title)

function onsum(){

}
  
  return (
    <>
        <ButtonContext.Provider value={}>
          <Aaaa onchangeinput={onchangeinput} onsum={onsum}/>
        </ButtonContext.Provider>
    </>
  );
}
