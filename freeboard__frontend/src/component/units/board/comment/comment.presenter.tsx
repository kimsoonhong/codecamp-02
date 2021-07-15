


import {
    Wrapper
    ,Title
    ,Title_img
    ,Title_text
    ,Top_wrapper
    ,Writer_input
    ,Password_input
    ,Star_input
    ,Star_view
    ,Edit_wrapper
    ,Edit_text
    ,Edit_bottom
    ,Space_div
    ,Text_count
    ,Uploed_Button
    ,Comment_wrapper
    ,Photo
    ,Comment_box
    ,Comment_top
    ,Writer
    ,Comment_middle
    ,Comment_date
    ,Right_Wrapper
    ,Edit_button
    ,Delete_button



    } from './comment.styles'





export default function commentpresenter() {

    return(
        <div>
            <Wrapper>
                <Title>
                    <Title_img></Title_img>
                    <Title_text>댓글</Title_text>
                </Title>
                <Top_wrapper>
                    <Writer_input></Writer_input>
                    <Password_input></Password_input>
                    <Star_input>
                        <Star_view>*</Star_view>
                        <Star_view>*</Star_view>
                        <Star_view>*</Star_view>
                        <Star_view>*</Star_view>
                        <Star_view>*</Star_view>
                    </Star_input>
                </Top_wrapper>
                <Edit_wrapper>
                    <Edit_text>개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.</Edit_text>
                    <Edit_bottom>
                        <Text_count>0/100</Text_count>
                        <Uploed_Button>등록하기</Uploed_Button>
                    </Edit_bottom>
                </Edit_wrapper>
                <Space_div></Space_div>
                <Comment_wrapper>
                    <Photo>O</Photo>
                    <Comment_box>
                        <Comment_top>
                            <Writer>김순ddd홍</Writer>
                            <Star_input>
                                <Star_view>*</Star_view>
                                <Star_view>*</Star_view>
                                <Star_view>*</Star_view>
                                <Star_view>*</Star_view>
                                <Star_view>*</Star_view>
                            </Star_input>
                        </Comment_top>
                        <Comment_middle>좋으네요</Comment_middle>
                        <Comment_date>2021.03.21</Comment_date>
                    </Comment_box>
                    <Right_Wrapper>
                        <Edit_button></Edit_button>
                        <Delete_button></Delete_button>
                    </Right_Wrapper>
                </Comment_wrapper>
            </Wrapper>









        </div>

    )
    
}