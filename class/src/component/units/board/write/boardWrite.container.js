
import { useState } from 'react'
import {useMutation} from '@apollo/client'
import router from 'next/router' //페이지 이동에 쓰임
import Boardwriteui from './boardWrite.presenter' // presenter 참조시에 쓰임
import { CREATE_BOARD } from'./boradWrite.queries' //querie 참조시에 쓰임

export default function boardWrite () {

const [writer, setWriter] = useState('')
const [password, setPassword] = useState('')
const [title, setTitle] = useState('')
const [contents, setContents] = useState('')

const [active, setActive] = useState(false)

function onChangeWriter(event){
    setWriter(event.target.value)
    if(event.target.value !== "" && password !== "" && title !==""&& contents !==""){
        setActive(true)
    } else {
        setActive(false)
    }
}

function onChangePassword(event){
    setPassword(event.target.value)
    if(writer !== "" && event.target.value !== "" && title !==""&& contents !==""){
        setActive(true)
    } else {
        setActive(false)
    }
    
}

function onChangeTitle(event){
    setTitle(event.target.value)
    if(writer !== "" && password !== "" && event.target.value !==""&& contents !==""){
        setActive(true)
    } else {
        setActive(false)
    }
}

function onChangeContents(event){
    setContents(event.target.value)
    if(writer && password  && title && event.target.value ){
        setActive(true)
    } else {
        setActive(false)
    }
}

// function changecolor (){
//     if(writer !== "" && password !== "" && title !==""&& contents !==""){
//         setActive(true)
//     } else {
//         setActive(false)
//     }
// }



const [ createBoard ] = useMutation(CREATE_BOARD)


async function onClickSubmit(){

        try{
            const result = await createBoard({
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
        if(writer === ''){
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
        <Boardwriteui 
            aaa = {onChangeWriter}
            bbb = {onChangePassword}
            ccc = {onChangeTitle}
            ddd = {onChangeContents}
            eee = {onClickSubmit}
            fff = {active}
        />
    )
}