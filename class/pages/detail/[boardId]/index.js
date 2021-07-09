
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
query fetchBoard (     $boardId: ID!    ) {
    fetchBoard(boardId:$boardId){
        writer
        title
        contents
    }
}
`


export default function Detailpage (){
    const router = useRouter()
    const { data } = useQuery (
        FETCH_BOARD,
        {variables:{boardId: router.query.boardId}}
    )

        console.log(data)


    return(
        
        <>

            <div>작성자 :{data ? data.fetchBoard.writer : '222'}</div>
            <div>글제목 :{data?.fetchBoard.title}</div>
            <div>글내용 :{data && data.fetchBoard.contents}</div>



        </>

    )
}