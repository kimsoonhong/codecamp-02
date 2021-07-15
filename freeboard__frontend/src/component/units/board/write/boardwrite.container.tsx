import { useMutation } from '@apollo/client'
import {CREATE_BOARD, UPDATE_BOARD} from './boradwrite.querise'
import { ChangeEvent, useState } from 'react'
import BoardWriteUI from './boardwrite.presenter'
import { useRouter } from 'next/router';
import { IBoardContainerProps, INewInputs } from './boardWrite.types';


export const INPUTS_INIT = {
writer: '',
password: '',
title: '',
contents: ''
}

// export const inputsErrors ={
//     writer: 'asdf',
// password: 'asdf',
// title: 'adsf',
// contents: 'adsf'
// }



export default function BoardWrite(props: IBoardContainerProps){
    const router = useRouter()
    const [active, setActive] = useState(true)
    const [inputs, setInputs] = useState(INPUTS_INIT)
    const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT)

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    
    function onChangeInputs(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const newInputs = { ...inputs, [event.target.name]: event.target.value }
    setInputs(newInputs)
    setActive(Object.values(inputs).every(data => !data))
    if(inputsErrors[event.target.name as keyof typeof INPUTS_INIT]) {
        setInputsErrors({...inputsErrors, [event.target.name]: ""})
    }
    }

    async function onClickSubmit(){
    setInputsErrors({
        writer: inputs.writer ? "" : "작성자를 입력해주세요.",
        password: inputs.password ? "" : "비밀번호를 입력해주세요.",
        title: inputs.title ? "" : "제목을 입력해주세요.",
        contents: inputs.contents ? "" : "내용을 입력해주세요."
    })
    if(Object.values(inputs).every(data => data)){
        try {
        const result = await createBoard({
            variables: { createBoardInput: { ...inputs }}
        })
        alert('게시물이 성공적으로 등록되었습니다.')
        router.push(`/boards/board_input/${result.data.createBoard._id}`)
        } catch(error){
        alert(error.message)
        }
    }
    }

    async function onClickUpdate(){



const newInputs : INewInputs ={}
            if (inputs.title) newInputs.title = inputs.title
            if (inputs.contents) newInputs.contents = inputs.contents

    setInputsErrors({
        writer: inputs.writer ? "" : "작성자를 입력해주세요.",
        password: inputs.password ? "" : "비밀번호를 입력해주세요.",
        title: inputs.title ? "" : "제목을 입력해주세요.",
        contents: inputs.contents ? "" : "내용을 입력해주세요."
    })
        try {
        const result = await updateBoard({
            variables: { 
            boardId: String(router.query.board_detail),
            password: inputs.password,
            updateBoardInput: { ...newInputs}
            }
        })
        alert('게시물이 성공적으로 수정되었습니다.')
        
        router.push(`/boards/board_input/${result.data.updateBoard._id}`)   
        } catch(error){
        alert(error.message)
    }
}
return(
    <BoardWriteUI 
    onClickUpdate = {onClickUpdate}
    inputsErrors={inputsErrors}


    onClickSubmit = {onClickSubmit}
    active = {active}
    onChangeInputs = {onChangeInputs}
    isEdit = {props.isEdit}
    data = {props.data}
    
    / >
)
}