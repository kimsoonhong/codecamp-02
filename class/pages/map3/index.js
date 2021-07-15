import {useQuery, gql, useMutation} from '@apollo/client'
import styled from '@emotion/styled'
import {getDate} from '../../src/commons/libraries/utils'



const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            contents
            createdAt
        }
    }
`



export const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            contents
            createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($aaa    : ID!){
        deleteBoard(boardId : $aaa)
    }
`

const Row = styled.div`
    border-bottom: 1px solid gray;
    height: 40px;
    line-height: 40px;
    display:flex;
    flex-direction: row;

    
`

const Column = styled.div`
    width : 20%;
    background-color: whitesmoke;
    text-align: center;

    :hover {
        background-color: blue;
    }
`

export default function map3page() {
    
    const {data} = useQuery(FETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD)
    console.log(data)

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
        <div>
            <Row>
                <Column><input type="checkbox"></input></Column>
                {/* <Column>번호</Column> */}
                <Column>작성자</Column>
                <Column>제목</Column>
                <Column>작성일</Column>
            </Row>

            {data?.fetchBoards.map((data, index) =>(
                <Row key={data._id}>
                    <Column><input type="checkbox" id={data._id} onClick={onClickDelete}></input></Column>
                    {/* <Column>{index}</Column> */}
                    <Column>{data.writer}</Column>
                    <Column>{data.title}</Column>
                    <Column>{getDate(data.createdAt)}</Column>
                    <Column><button id={data._id} onClick={onClickDelete}>삭제하기</button></Column>
                </Row>
            ))}

        </div>

    )
}