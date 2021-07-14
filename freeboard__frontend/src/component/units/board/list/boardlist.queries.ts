import {gql} from '@apollo/client'




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

export const DELETE_BOARD = gql`
    mutation deleteBoard($aaa    : ID!){
        deleteBoard(boardId : $aaa)
    }
`

export const CREATE_BOARD = gql`
mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
    _id
    writer
    title
    contents
    
    }
}
`


export const UPDATE_BOARD = gql`
    mutation updateboard($boardId: ID!, $password:String, $updateBoardInput: UpdateBoardInput!){
        updateBoard(boardId : $boardId, password : $password, updateBoardInput : $updateBoardInput){
            _id
        }
    }
`

