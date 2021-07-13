import { useQuery, useMutation} from '@apollo/client'
import { FETCH_BOARD, DELETE_BOARD, FETCH_BOARDS } from './boarddetail.querise'
import BoardDetailUI from './boarddetail.presenter'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function BoardDetailContainer() {

    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery(
        FETCH_BOARD,
        {variables:{boardId: router.query.board_detail}}
    )
    
    
    async function onClickDelete(event) {
        // alert('해당글삭제')
        try{

            // const result = await send_product({
            //     variables:{
            //         createBoardInput : {
            //             writer:writer,
            //             password:password,
            //             title:title,
            //             contents:contents
            //             // address:address
            //         }
            //     }
            // })

            await deleteBoard({
                variables : {aaa : event.target.id },
                refetchQueries:[{query:FETCH_BOARDS}]
                
            })

            router.push('/boards/noticeboard')
            // alert('삭제가 완료 되었니다.')
        } catch(error){
            alert(error.message)
        }
    }




    return(
        <BoardDetailUI
        data={data}
        onClickDelete = {onClickDelete}
/> 
    )
    
}