import { useState } from 'react'
import {useMutation, gql} from '@apollo/client'
import router from 'next/router'


export default function apolloPage () {

const CREAT_BOARD = gql`
mutation createBoard ($createBoardInput: CreateBoardInput!  ){
    createBoard(createBoardInput:$createBoardInput ){
        _id
    }
}
`

const [writer, setWriter] = useState('')
const [password, setPassword] = useState('')
const [title, setTitle] = useState('')
const [contents, setContents] = useState('')

function onChangeWriter(event){
    setWriter(event.target.value)
}

function onChangePassword(event){
    setPassword(event.target.value)
}

function onChangeTitle(event){
    setTitle(event.target.value)
}

function onChangeContents(event){
    setContents(event.target.value)
}

const [reateBoard] = useMutation(CREAT_BOARD)


async function onClickSubmit(){

        try{
            const result = await reateBoard({
        variables:{
            createBoardInput:{
                writer:writer,
                password:password,
                title:title,
                contents:contents
            }
        }
    })

        setWriter('')
        setPassword('')
        setTitle('')
        setContents('')

        if(window === ''){
            alert('판매자 칸 빔')
        }
        if(password === ''){
            alert('이름')
        }
        if(title === ''){
            alert('명세')
        }
        if(contents === ''){
            alert('가격')
        }
        


        
        alert(result.data.createBoard._id)
        router.push(`/detail/${result.data.createBoard._id}`)

    }catch(error){
        alert(error.message)
    }
    
        }





    
    return(
        <>    
            <div>
            작성자:<input type='text' onChange={onChangeWriter} value={writer} />
            비밀번호:<input type='text' onChange={onChangePassword} value={password} />
            젬혹:<input type='text' onChange={onChangeTitle} value={title}/>
            내용:<input type='text' onChange={onChangeContents} value={contents}/> 
            </div>
            <button onClick={onClickSubmit}>데이터 입력하기</button>
        </>
        )
}