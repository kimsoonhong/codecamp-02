import {gql} from '@apollo/client'

export const CREATE_BOARD = gql`
    mutation createBoard ($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput:$createBoardInput ){
            _id
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

