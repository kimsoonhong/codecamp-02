import { gql } from '@apollo/client';

export const FETCH_BOARD = gql`
        query fetchBoard($boardId: ID! ) {
            fetchBoard(boardId:$boardId) {
                createdAt
                writer
                title
                contents
                _id
            
            }
        }
    `


    export const DELETE_BOARD = gql`
    mutation deleteBoard($aaa    : ID!){
        deleteBoard(boardId : $aaa)
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



export const UPDATE_BOARD = gql`
    mutation updateboard($boardId: ID!, $password:String, $updateBoardInput: UpdateBoardInput!){
        updateBoard(boardId : $boardId, password : $password, updateBoardInput : $updateBoardInput){
            _id
        }
    }
`

