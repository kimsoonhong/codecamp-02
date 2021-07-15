
import { useState } from 'react'
import {useMutation} from '@apollo/client'
import router from 'next/router' //페이지 이동에 쓰임
import Boardwriteui from './boardWrite.presenter' // presenter 참조시에 쓰임
import { CREATE_BOARD, UPDATE_BOARD } from'./boradWrite.queries' //querie 참조시에 쓰임


const inputsInit = {
    writer:"",
    password:"",
    title:"",
    contents:""
}

interface IProps {
    isEdit? : boolean
    data? : IQuery
}

interface INewInputs {
    title?: string 
    contents?:string
}

export default function boardWrite (props: IProps) {

    const [inputs, setInputs] = useState(inputsInit)
    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    const [active, setActive] = useState(false)
    const [inputsError, setInputsError] = useState(inputsInit)

    function onChangeInputs(event) {
        const newInputs = {
            ...inputs,
            [event.target.name]:event.target.value,
            }
        setInputs(newInputs)
        if(Object.values(newInputs).every(data => data))setActive(true)
    }

    async function onClickSubmit(){
        try{
            const result = await createBoard({
            variables:{createBoardInput:{...inputs}}
            })
        alert(result.data.createBoard._id)
        router.push(`/detail/${result.data.createBoard._id}`)
        }catch(error){
        alert(error.message)
        }
    }

    
    async function onClickEdit() {

        const newInputs : INewInputs ={}
            if (inputs.title) newInputs.title = inputs.title
            if (inputs.contents) newInputs.contents = inputs.contents
        
        console.log(inputs.title)
        console.log(inputs.contents)

        try{
            const result = await updateBoard({
            variables:{ 
                    boardId:String(router.query.boardId),
                    password:inputs.password,
                    updateBoardInput:{...newInputs}
            }
        })            
            // alert(result.data.updateboard._id)
            router.push(`/detail/${result.data.updateBoard._id}`)           
        }catch(error){
            alert(error.message)
        }
    }

        
    
    return(
        <Boardwriteui 
            onClickSubmit = {onClickSubmit}
            active = {active}
            onChangeInputs = {onChangeInputs}
            isEdit = {props.isEdit}
            onClickEdit = {onClickEdit}
            data = {props.data}
        />
    )
}