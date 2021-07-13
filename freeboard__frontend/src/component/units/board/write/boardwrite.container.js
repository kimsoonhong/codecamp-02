
import { useMutation , gql } from '@apollo/client'
import {CREATE_BOARD} from './boradwrite.querise'
import { useState } from 'react'
import router from 'next/router'
import BoardWriteUI from './boardwrite.presenter'


export default function boardWrite() {



    const [writer, setWriter] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    const [address, setAddress] = useState('')

    const [writerError, setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')
    const [addressError, setAddressError] = useState('')

    const [active, setActive] = useState(false)

    function onChangeWriter(event){
    setWriter(event.target.value)
    if(event.target.value !== ""){
        setWriterError("")
    }
    if(event.target.value !== "" && password !== "" && title !==""&& contents !==""){
        setActive(true)
    } else {
        setActive(false)
    }
    }

    function onChangePassword(event){
    setPassword(event.target.value)
    if(event.target.value !== ""){
        setPasswordError("")
    }
    if(writer !== "" && event.target.value !== "" && title !==""&& contents !==""){
        setActive(true)
    } else {
        setActive(false)
    }
    }

    function onChangeTitle(event){
    setTitle(event.target.value)
    if(event.target.value !== ""){
        setTitleError("")
    }
    if(writer !== "" && password !== "" && event.target.value  !==""&& contents !==""){
        setActive(true)
    } else {
        setActive(false)
    }
    }

    function onChangeContents(event){
    setContents(event.target.value)
    if(event.target.value !== ""){
        setContentsError("")
    }
    if(writer !== "" && password !== "" && title !==""&& event.target.value !==""){
        setActive(true)
    } else {
        setActive(false)
    }
    }

    function onChangeAddress(event){
    setAddress(event.target.value)
    if(event.target.value !== ""){
        setAddressError("")
    }

    }

    // function onClick_error(){
    // if(writer === ""){
    //     setWriterError("작성자를 입력해주세요.")
    // }
    // if(password === ""){
    //     setPasswordError("비밀번호를 입력해주세요.")
    // }
    // if(title === ""){
    //     setTitleError("제목을 입력해주세요.")
    // }
    // if(contents === ""){
    //     setContentsError("내용을 입력해주세요.")
    // }
    // if(address === ""){
    //     setAddressError("주소를 입력해주세요.")
    // }
    // if(writer !== "" && password !== "" && title !== "" && contents !== ""){
    //     alert('게시물을 등록합니다~!')
        
    // }
    // }

    const [send_product] = useMutation(CREATE_BOARD)
    

    async function onClick(){
        
    try{    
        const result = await send_product({
            variables:{
                createBoardInput : {
                    writer:writer,
                    password:password,
                    title:title,
                    contents:contents
                    // address:address
                }
            }
        })
        if(writer === ""){
        setWriterError("작성자를 입력해주세요.")
        }
        if(password === ""){
        setPasswordError("비밀번호를 입력해주세요.")
        }
        if(title === ""){
        setTitleError("제목을 입력해주세요.")
        }
        if(contents === ""){
        setContentsError("내용을 입력해주세요.")
        }
        if(address === ""){
        setAddressError("주소를 입력해주세요.")
        }
        if(writer !== "" && password !== "" && title !== "" && contents !== ""){
        alert('게시물을 등록합니다~')
        }
        // alert(result.data.createBoard._id)
        router.push(`/boards/board_input/${result.data.createBoard._id}`)
        
    }catch(error){

        alert(error.message)
    }
}


function onClick_error(){
    if(writer === ""){
        setWriterError("작성자를 입력해주세요.")
    }
    if(password === ""){
        setPasswordError("비밀번호를 입력해주세요.")
    }
    if(title === ""){
        setTitleError("제목을 입력해주세요.")
    }
    if(contents === ""){
        setContentsError("내용을 입력해주세요.")
    }
    if(address === ""){
        setAddressError("주소를 입력해주세요.")
    }
    if(writer !== "" && password !== "" && title !== "" && contents !== ""){
        alert('게시물을 등록합니다~')
        
    }
    }


return(
    <BoardWriteUI 
    onChangeWriter = {onChangeWriter}
    onChangePassword = {onChangePassword}
    onChangeTitle = {onChangeTitle}
    onChangeContents = {onChangeContents}
    onChangeAddress = {onChangeAddress}
    onClick_error = {onClick_error}
    onClick = {onClick}
    writerError = {writerError}
    passwordError = {passwordError}
    titleError = {titleError}
    contentsError = {contentsError}
    addressError = {addressError}
    active = {active}
    / >
)
}