import {
    Wrapper
    , Title
    , InnerWrapper
    , Box_big3
    , Photo_box
    , Left_div
    , Text, Small_input
    , Right_div
    , Index_div
    , Middle_input
    , Contents
    , Contents_input
    , Address_div
    , Address_inner_div
    , Search_address_div
    , Number_input
    , Search_button
    , Inner_div
    , Youtube
    , Photo_div
    , Photo_img
    , Option_div
    , Radio_button
    , Radio_text
    , Upload_div
    , Upload
    , Error 
    } from './boardwrite.styles'


    export default function BoardWriteUI (props){

        return(
            <Wrapper>
            <Title>게시물 등록</Title>
            <InnerWrapper>
                <Box_big3>
                    <Left_div>
                        <Text>작성자</Text>
                        <Small_input placeholder={'이름을 입력해 주세요.'} onChange={props.onChangeWriter}></Small_input>
                        <Error>{props.writerError}</Error>
                    </Left_div>
                    <Right_div>
                        <Text>비밀번호</Text>
                        <Small_input placeholder='비밀번호를 입력해 주세요' type='password' onChange={props.onChangePassword}></Small_input>
                        <Error>{props.passwordError}</Error>
                    </Right_div>
                </Box_big3>
                <Index_div>
                    <Text>제목</Text>
                    <Middle_input placeholder='제목을 입력해주세요' onChange={props.onChangeTitle}></Middle_input>
                    <Error>{props.titleError}</Error>
                </Index_div>
                <Contents>
                    <Text>내용</Text>
                    <Contents_input placeholder='내용을 입력해주세요' onChange={props.onChangeContents}></Contents_input>
                    <Error>{props.contentsError}</Error>
                </Contents>
                <Address_div>
                    <Text>주소</Text>
                    <Address_inner_div>
                        <Search_address_div>
                            <Number_input placeholder='09843'></Number_input>
                            <Search_button>우편번호 검색</Search_button>
                            </Search_address_div>
                            <Inner_div>
                                <Middle_input></Middle_input>
                                <Middle_input></Middle_input>
                                <Error>{props.addressError}</Error>
                            </Inner_div>
                    </Address_inner_div>
                </Address_div>
                <Youtube>
                    <Text>유뷰브</Text>
                    <Middle_input  placeholder='링크를 복사해 주세요.'></Middle_input>
                </Youtube>
                <Photo_div>
                    <Text>사진 첨부</Text>
                    <Photo_box>
                        <Photo_img >
                            <div>+</div>
                            <div>Upload</div>
                        </Photo_img>
                        <Photo_img>
                            <div>+</div>
                            <div>Upload</div>
                        </Photo_img>
                        <Photo_img >
                            <div>+</div>
                            <div>Upload</div>
                        </Photo_img>
                    </Photo_box>
                </Photo_div>
                <Option_div>
                    <Text>메인설정</Text>
                    <Radio_button type="radio" name='radio_button'></Radio_button>
                    <Radio_text>유튜브</Radio_text>
                    <Radio_button type="radio" name='radio_button'></Radio_button>
                    <Radio_text>사진</Radio_text>
                </Option_div>
                <Upload_div>
                <Upload onClick={props.onClick} active={props.active}>등록하기</Upload>
                </Upload_div>            
            </InnerWrapper>   
        </Wrapper>
        )
    }