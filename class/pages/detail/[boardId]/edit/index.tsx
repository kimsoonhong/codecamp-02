import { useQuery , gql } from '@apollo/client'
import {useRouter} from 'next/router'
import { IQuery } from '../../../../src/commons/types/generated/types'

import BoardWrite from '../../../../src/component/units/board/write/boardWrite.container'


 const FETCH_BOARD = gql`
        query fetchBoard($boardId: ID! ) {
            fetchBoard(boardId:$boardId) {

                writer
                title
                contents
                _id
            
            }
        }
    `





export default function editpage() {
    const isEdit = true
    const router = useRouter()

    const {data} = useQuery<IQuery>(FETCH_BOARD,{
        variables:{boardId: router.query.boardId}
    })
    
    return (
    <BoardWrite 
    data={data}
    isEdit = {isEdit}
    / >
        )
} 