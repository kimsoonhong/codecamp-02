import {useState} from 'react'
export default function StatePage(){


        const [count, setCount] = useState(0)

        function aaa(){
            setCount(count + 1)
        console.log(count)
        
    }

        const[hello,setHello] = useState("안녕하세요") 

        function bbb(){
            setHello('반갑습니다?')

        }



        const [num,setNum] = useState('000000')
        const [rrr,setRrr] = useState(false)
        
        function ccd(){
            setNum(String(Math.floor(Math.random()*1000000)).padStart(6,"0"))
            setRrr(true)
        }


    return (
        <div>
            <div >{count}</div>
            <button onClick={aaa}>+1</button>
        

        <div>{hello}</div>
        <button onClick={bbb}>클릭</button>

        <div>{num}</div>
        <button onClick={ccd} disabled={rrr}>   인증 </button>
        
</div>
    )
    
}