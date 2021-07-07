import {useState} from 'react'
export default function StatePage(){



    const [id,setId] = useState("")
    const [password,setPassword] = useState(' ')
    const [idError, setIdError] = useState(' ')
    const [passwordError, setPasswordError] = useState(' ')

    function aaa(event){
        setId(event.target.value)
        // setId()
    }

    function bbb(event){
        setPassword(event.target.value)
        // setPassword()
    }

    function ccc(){

        if(id === ""){
            setIdError('아이디를 입력해주세요')
            
        } if(password === " "){
            setPasswordError('비밀번호를 입력')
        } else{
            setIdError(' '),setPasswordError(' ')
            alert('dd')
        }
        
    }

    return (
    <div>
            <h1>로그인dd</h1>
            <div>아이디</div>
            <input type= 'text' onChange={aaa}></input>
            <div style={{'color':'red','fontSize':'5px'}}>{idError}</div>
            <div>비밀번호</div>
            <input type='password' onChange={bbb}></input>
            <div style={{'color':'red','fontSize':'5px'}}>{passwordError}</div>
            <button onClick={ccc}>로그인하기</button>

    </div>

    )
}