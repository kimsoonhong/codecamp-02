
import Boardlist from './boardlist.presenter'
import {useQuery, useMutation} from '@apollo/client'
import { useRouter } from 'next/router';
// import { useState } from 'react'
// import router from 'next/router'
import {FETCH_BOARDS , DELETE_BOARD, CREATE_BOARD} from './boardlist.queries'
import {MouseEvent} from "react"

export default function boardlist() {
    const router = useRouter();
    const {data} = useQuery(
        FETCH_BOARDS,
        {variables:{boardId: router.query.board_detail}}
    )
    const [deleteBoard] = useMutation(DELETE_BOARD)
    // console.log(data)
    const [send_product] = useMutation(CREATE_BOARD)


    async function onClickDetail(event: MouseEvent<HTMLDivElement>) {
        // alert('dd')
            router.push(`/boards/board_input/${(event.target as Element).id}`)
            // console.log(event.target.id)
        }
    
        function onClickWrite() {
            router.push(`/boards/board_input/`)
        }

    async function onClickDelete(event: MouseEvent<HTMLButtonElement>) {
        // alert('해당글삭제')
        try{

            await deleteBoard({
                variables : {aaa : (event.target as Element).id },
                refetchQueries:[{query:FETCH_BOARDS}]
            })
            // alert('삭제가 완료 되었니다.')
        } catch(error){
            alert(error.message)
        }
    }

    return(
        <Boardlist 
        onClickDelete = {onClickDelete}
        data={data}
        onClickDetail = {onClickDetail}
        onClickWrite = {onClickWrite}

        />
    )
}