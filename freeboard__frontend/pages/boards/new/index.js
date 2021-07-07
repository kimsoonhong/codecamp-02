// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {
    Wrapper, 
    Title,
    InnerWrapper,
    Main_set, Box_big3, Photo_box, Left_div, Text, Small_input, Right_div, Index_div,Middle_input, Contents, Contents_input, Address_div, Address_inner_div, Search_address_div, Number_input, Search_button, Inner_div, Youtube, Photo_div, Photo_img ,Radio_div, Upload_div, Upload  
    } from '../../../styles/Home.styles'


export default function aaa() {


return (

    <Wrapper>
        <Title>게시물 등록</Title>
        <InnerWrapper>
            <Box_big3>
                <Left_div>
                    <Text>작성자</Text>
                    <Small_input placeholder='이름을 입력해주세요'></Small_input>
                </Left_div>
                <Right_div>
                    <Text>비밀번호</Text>
                    <Small_input placeholder='비밀번호를 입력해 주세요' type='password'></Small_input>
                </Right_div>
            </Box_big3>
            <Index_div>
                <Text>제목</Text>
                <Middle_input placeholder='제목을 입력해주세요'></Middle_input>
            </Index_div>
            <Contents>
                <Text>내용</Text>
                <Contents_input placeholder='내용을 입력해주세요'></Contents_input>
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
                    <Photo_img src="/new/photo.png">
                        
                    </Photo_img>
                    <Photo_img src="/new/photo.png"></Photo_img>
                    <Photo_img src="/new/photo.png"></Photo_img>
                </Photo_box>
            </Photo_div>
            <Main_set>
                <Text>메인설정</Text>
                <Radio_div itemType='radio'>dddd</Radio_div>

            </Main_set>

            <Upload_div>
            <Upload >등록하기</Upload>
            </Upload_div>            







        </InnerWrapper>   
    </Wrapper>

)
}