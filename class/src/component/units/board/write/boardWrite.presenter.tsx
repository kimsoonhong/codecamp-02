// import { from } from '@apollo/client'
import { Mybutton, MyInput } from './boradWrite.styles'
import {BoardwriteUI} from "../write/boardWrite.types"



export default function BoardwrteUI(props : BoardwriteUI){
    // improt {Mybutton} from
    
    return( 
        <>    
            <div>
                작성자:<MyInput type='text' name="writer" onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.writer} readOnly={props.data?.fetchBoard.writer} />
                비밀번호:<MyInput type='text' name="password" onChange={props.onChangeInputs} />
                제목:<MyInput type='text' name="title" onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.title}/>
                내용:<MyInput type='text' name="contents"onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.contents}/> 
                {!props.isEdit && <Mybutton onClick={props.onClickSubmit} active={props.active} > 데이터 입력하기</Mybutton>}
                {props.isEdit && <Mybutton onClick={props.onClickEdit} active={props.active} > 데이터 수정하기</Mybutton>}

            </div>
        </>
    )
}