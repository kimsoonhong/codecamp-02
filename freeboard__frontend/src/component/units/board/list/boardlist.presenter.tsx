import {getDate} from '../../../../commons/libraries/utils'
import {BoardwriteUI} from "./boardWrite.types"
import{ 
Wapper
,Index_title
,Number_div
,Title_div
,Writer_div
,Date_div
,Delete_div
,Content_wapper
,Bottom_wapper
,Page_div
,Left_button
,Pages_num
,Right_button
,Upload_button
,Delete_button



} from './boardlist.styles'



export default function Noticeboard(props : BoardwriteUI) {
console.log(props.data)

    return(
        <div>
            <Wapper>
                <Index_title>
                    <Number_div>번호</Number_div>
                    <Title_div>제목</Title_div>
                    <Writer_div>작성자</Writer_div>
                    <Date_div>날짜</Date_div>
                    <Delete_div>삭제하기</Delete_div>
                </Index_title>
                {props.data?.fetchBoards.map((data, index) => (
                <Content_wapper key = {data._id}>
                    <Number_div>{index+1}</Number_div>
                    <Title_div id = {data._id}onClick={props.onClick}>{data.title}</Title_div>
                    <Writer_div>{data.writer}</Writer_div>
                    <Date_div>{getDate(data.createdAt)}</Date_div>
                    <Delete_div><Delete_button id={data._id} onClick={props.onClickDelete}>삭제하기</Delete_button></Delete_div>
                </Content_wapper>))}
            </Wapper>
            <Bottom_wapper>              
                <Page_div >
                    <Left_button>왼쪽</Left_button>
                    <Pages_num >1  2</Pages_num>
                    <Right_button>오른쪽</Right_button>
                    <Upload_button onClick={props.onClikWrite}>
                        <img src="/noticeboard/pan.png"/>게시물 등록하기
                    </Upload_button>
                </Page_div>                
            </Bottom_wapper>
        </div>

    )
    
}