import { useQuery, useMutation} from '@apollo/client'
import { FETCH_BOARD, DELETE_BOARD, FETCH_BOARDS, UPDATE_BOARD } from './boarddetail.querise'
import BoardDetailUI from './boarddetail.presenter'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function BoardDetailContainer() {

    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD)
    // const [updateBoard] = useMutation(UPDATE_BOARD)
    const { data } = useQuery(
        FETCH_BOARD,
        {variables:{boardId: router.query.board_detail}}
    )
    
    
    async function onClickDelete(event) {
        // alert('해당글삭제')
        try{
            await deleteBoard({
                variables : {aaa : event.target.id },
                refetchQueries:[{query:FETCH_BOARDS}]
                
            })
            router.push('/boards/')
            // alert('삭제가 완료 되었니다.')
        } catch(error){
            alert(error.message)
        }
    }

    function onClickList() {
        router.push('/boards/')
    }

    async function onClickEdit() {
        router.push(`/boards/board_input/${router.query.board_detail}/edit`)   }







    return(
        <BoardDetailUI
        data={data}
        onClickDelete = {onClickDelete}
        onClickList = {onClickList}
        onClickEdit = {onClickEdit}
        
/> 
    )
    
}