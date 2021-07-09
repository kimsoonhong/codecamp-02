import {useRouter} from 'next/router'
import { useReducer } from 'react'

export default function Routerpage(){

    const router = useRouter()

    function onclick_move(){
        router.push('/detail/6')
    }


    return(

        <button onClick={onclick_move}>이동하기</button>

    )
}


