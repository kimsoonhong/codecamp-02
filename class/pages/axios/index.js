import axios from 'axios'
import { useState } from 'react'


export default function AxiosPage(){



    const [data,setData] = useState(' ')
    const [data2,setData2] = useState(' ')

    const handleClickDate= async ()=>{
        const aaa = await axios.get('https://koreanjson.com/posts')
        // console.log(aaa.data)
        setData(aaa.data[5].title)
        setData2(aaa.data[5].content)
    }


    return(
    <>
        <div>{data}</div>
        <hr/>
        <div>{data2}</div>
        <hr/>
        <button onClick={handleClickDate}>데이터 불러오기</button>
    </>
    )
}



