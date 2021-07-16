// import { from } from '@apollo/client'
import { Mybutton, MyInput } from './boradWrite.styles'

export default function Boardwriteui(props){
// improt {Mybutton} from
    return(
        <>    
            <div>
                작성자:<MyInput type='text' onChange={props.aaa} />
                비밀번호:<MyInput type='text' onChange={props.bbb} />
                제목:<MyInput type='text' onChange={props.ccc} />
                내용:<MyInput type='text' onChange={props.ddd} /> 
                <Mybutton onClick={props.eee} active={props.fff} >데이터 입력하기</Mybutton>
            </div>
        </>
    )
}