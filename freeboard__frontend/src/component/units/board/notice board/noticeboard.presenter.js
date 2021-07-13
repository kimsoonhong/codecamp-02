import {getDate} from '../../../../commons/libraries/utils'

import{ 
Wapper
,Index_title
,Number_div
,Title_div
,Writer_div
,Date_div
,Delete_div
,Content_wapper
,Number_content
,Title_content
,Writer_content
,Date_content
,Delete_content
,Bottom_wapper
,Page_div
,Left_button
,Pages_num
,Right_button
,Upload_button
,Img_div
,Text_div
,Delete_button



} from './noticeboard.styles'



export default function Noticeboard(props) {
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
                    <Title_div onClick={props.onClick}>{data.title}</Title_div>
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
                    <Upload_button>
                        <Img_div src="/noticeboard/pan.png"></Img_div>
                        <Text_div>게시물 등록하기</Text_div>
                </Upload_button>
                </Page_div>                
            </Bottom_wapper>
        </div>

    )
    
}