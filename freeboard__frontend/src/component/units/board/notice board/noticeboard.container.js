
import Noticeboard from './noticeboard.presenter'
import {useQuery, useMutation} from '@apollo/client'
import { useRouter } from 'next/router';
// import { useState } from 'react'
// import router from 'next/router'
import {FETCH_BOARDS , DELETE_BOARD, CREATE_BOARD} from './noticeboard.queries'

export default function noticeboard() {
    const router = useRouter();
    const {data} = useQuery(
        FETCH_BOARD,
        {variables:{boardId: router.query.board_detail}}
    )
    const [deleteBoard] = useMutation(DELETE_BOARD)
    console.log(data)
    const [send_product] = useMutation(CREATE_BOARD)


    async function onClick(event) {
        try{    
            const result = await send_product({
                // variables:{
                //     createBoardInput : {
                //         writer:writer,
                //         password:password,
                //         title:title,
                //         contents:contents
                //         // address:address
                        boardId: router.query.board_detail
                    }
                
            )
            
            router.push(`/boards/board_input/${result.data.fetchBoards._id}`)
            
        }catch(error){
    
            alert(error.message)
        }
    }

        
    




    async function onClickDelete(event) {
        // alert('해당글삭제')
        try{

            await deleteBoard({
                variables : {aaa : event.target.id },
                refetchQueries:[{query:FETCH_BOARDS}]
            })
            // alert('삭제가 완료 되었니다.')
        } catch(error){
            alert(error.message)
        }
    }

    return(
        <Noticeboard 
        onClickDelete = {onClickDelete}
        data={data}
        onClick = {onClick}

        />
    )
}