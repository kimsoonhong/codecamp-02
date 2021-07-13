import {useState} from 'react'
import {} from '../../styles/aaa'
import { 
    Wrapper 
    ,Top
    ,Point_img
    ,Center
    ,Inner_text
    ,Input_idpw
    ,E_mail_div
    ,E_mail
    ,Cancel
    ,Inner_line
    ,Id_error
    ,Password_div
    ,Password
    ,Password_error
    ,Login
    ,Finding_div
    ,Finding_text
    ,Finding_line
    ,Kakao_div
    ,Kakao_img
    ,Kakao_text
    ,E_mial_input
    ,Password_input


} from '../../styles/aaa'
export default function aaa() {

    const [input_email, setInput_email] = useState("")
    const [input_password, setInput_password] = useState("비밀번호를 입력해 주세요")
    const [Email_error, setEmil_error] = useState('')

    function on_login(){
        if(input_email===""){
            setEmil_error('이메ㅇㅇ일을 입력해주세요')
        } else {
            setEmil_error('')
            alert('dd')
        }
    }


    


    return(

        <Wrapper>
            <Top></Top>
            <Center>
            <Point_img></Point_img>
            <Inner_text>잇츠로드</Inner_text>
            </Center>
            
            <Input_idpw>
            <E_mail_div>
                <E_mail>
                    <E_mial_input placeholder='이메일을 입력해 주세요'></E_mial_input>
                </E_mail>
                <Cancel></Cancel>                
            </E_mail_div>
            <Inner_line></Inner_line>
            <Id_error>{Email_error}</Id_error>
            <Password_div>
                <Password >
                    <Password_input placeholder={input_password}></Password_input>
                </Password>
                <Cancel></Cancel>
            </Password_div>
            <Inner_line></Inner_line>
            <Password_error></Password_error>
            </Input_idpw>
            <Login onClick={on_login}>로그인</Login>
            <Finding_div>
                <Finding_text>아이디 찾기</Finding_text>
                <Finding_line></Finding_line>
                <Finding_text>비밀번호 찾기</Finding_text>
                <Finding_line></Finding_line>
                <Finding_text>회원가입</Finding_text>
            </Finding_div>

            <Kakao_div>
                <Kakao_img></Kakao_img>
                <Kakao_text onClick={on_login}>카카오톡으로 로그인</Kakao_text>
            </Kakao_div>






        </Wrapper>
    )
}