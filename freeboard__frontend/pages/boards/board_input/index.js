// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import router from 'next/router'

import {
    Wrapper
    , Title
    , InnerWrapper
    , Box_big3
    , Photo_box
    , Left_div
    , Text, Small_input
    , Right_div
    , Index_div
    , Middle_input
    , Contents
    , Contents_input
    , Address_div
    , Address_inner_div
    , Search_address_div
    , Number_input
    , Search_button
    , Inner_div
    , Youtube
    , Photo_div
    , Photo_img
    , Option_div
    , Radio_button
    , Radio_text
    , Upload_div
    , Upload
    ,Error 
    } from '../../../styles/board_input.styles'


export default function aaa() {


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



    function onChangeWriter(event){
    setWriter(event.target.value)
    if(event.target.value !== ""){
        setWriterError("")
    }
    }

    function onChangePassword(event){
    setPassword(event.target.value)
    if(event.target.value !== ""){
        setPasswordError("")
    }
    }

    function onChangeTitle(event){
    setTitle(event.target.value)
    if(event.target.value !== ""){
        setTitleError("")
    }
    }

    function onChangeContents(event){
    setContents(event.target.value)
    if(event.target.value !== ""){
        setContentsError("")
    }
    }

    function onChangeAddress(event){
    setAddress(event.target.value)
    if(event.target.value !== ""){
        setAddressError("")
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

    const [send_product] = useMutation(
        gql`
        mutation createBoard($createBoardInput: CreateBoardInput!) {
            createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            
            title
            contents
            
            }
        }
        `
    )
    
    // const [ test ] = useMutation(
    //     gql`
    //         mutation createUseditem($createUseditemInput : CreateUseditemInput!) {
    //             createUseditem(createUseditemInput : $createUseditemInput) {
    //                 _id
    //             }
    //         }
    //     `
    // )

    // function testCreate() {
    //     test({
    //         variables : {
    //             createUseditemInput : {
    //                 name : "111",
    //                 remarks : "222",
    //                 contents : "333",
    //                 price : 222
    //             }
    //         }
    //     })
    // }
    


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
        alert(result.data.createBoard._id)
        router.push(`/boards/board_input/${result.data.createBoard._id}`)
        
    }catch(error){
        alert(error.message)
    }
}



return (
    <Wrapper>
        <Title>게시물 등록</Title>
        <InnerWrapper>
            <Box_big3>
                <Left_div>
                    <Text>작성자</Text>
                    <Small_input placeholder={'이름을 입력해 주세요.'} onChange={onChangeWriter}></Small_input>
                    <Error>{writerError}</Error>
                </Left_div>
                <Right_div>
                    <Text>비밀번호</Text>
                    <Small_input placeholder='비밀번호를 입력해 주세요' type='password' onChange={onChangePassword}></Small_input>
                    <Error>{passwordError}</Error>
                </Right_div>
            </Box_big3>
            <Index_div>
                <Text>제목</Text>
                <Middle_input placeholder='제목을 입력해주세요' onChange={onChangeTitle}></Middle_input>
                <Error>{titleError}</Error>
            </Index_div>
            <Contents>
                <Text>내용</Text>
                <Contents_input placeholder='내용을 입력해주세요' onChange={onChangeContents}></Contents_input>
                <Error>{contentsError}</Error>
            </Contents>
            <Address_div>
                <Text>주소</Text>
                <Address_inner_div>
                    <Search_address_div>
                        <Number_input placeholder='09843'></Number_input>
                        <Search_button>우편번호 검색</Search_button>
                        </Search_address_div>
                        <Inner_div>
                            <Middle_input></Middle_input>
                            <Middle_input></Middle_input>
                            <Error>{addressError}</Error>
                        </Inner_div>
                </Address_inner_div>
            </Address_div>
            <Youtube>
                <Text>유뷰브</Text>
                <Middle_input  placeholder='링크를 복사해 주세요.'></Middle_input>
            </Youtube>
            <Photo_div>
                <Text>사진 첨부</Text>
                <Photo_box>
                    <Photo_img >
                        <div>+</div>
                        <div>Upload</div>
                    </Photo_img>
                    <Photo_img>
                        <div>+</div>
                        <div>Upload</div>
                    </Photo_img>
                    <Photo_img >
                        <div>+</div>
                        <div>Upload</div>
                    </Photo_img>
                </Photo_box>
            </Photo_div>
            <Option_div>
                <Text>메인설정</Text>
                <Radio_button type="radio" name='radio_button'></Radio_button>
                <Radio_text>유튜브</Radio_text>
                <Radio_button type="radio" name='radio_button'></Radio_button>
                <Radio_text>사진</Radio_text>
            </Option_div>
            <Upload_div>
            <Upload onClick={onClick}>등록하기</Upload>
            </Upload_div>            
        </InnerWrapper>   
    </Wrapper>
)
}