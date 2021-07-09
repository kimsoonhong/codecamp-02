// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import {
Wrapper
,Top_wrapper
,Writer_wrapper
,Writer_img
,Writer_div
,Writer_name
,Writer_date
,Top_right_wrapper
,Link_img
,Address_img
,Board_body_wrapper
,Title_div
,Img_div
,Contents_div
,YoutubeUrl
,Like_button
,Like_div
,UP
,Down
    } from '../../../../styles/board_detail.styles'


export default function borad_detail_page(){

const router=useRouter()
console.log(router.query)
const { data } = useQuery (
    gql`
        query fetchBoard($boardId: ID! ) {
            fetchBoard(boardId:$boardId) {
                createdAt
                writer
                title
                contents
            
            }
        }
    `,
    {variables:{boardId: router.query.board_detail}}
)





return (
<>
<Wrapper>
    <Top_wrapper>
        <Writer_wrapper>
                <Writer_img src="/favicon.ico"/>
            <Writer_div>
                <Writer_name>{data?.fetchBoard.writer}</Writer_name>
                <Writer_date>Date: {data?.fetchBoard.createdAt.slice(0, 10)}</Writer_date>
            </Writer_div>
        </Writer_wrapper>
        <Top_right_wrapper>
            <Link_img src="/detail/link.png"></Link_img>
            <Address_img src="/detail/point.png"></Address_img>
        </Top_right_wrapper>
    </Top_wrapper>


    <Board_body_wrapper>
        <Title_div>{data?.fetchBoard.title}</Title_div>
        <Img_div></Img_div>
        <Contents_div>{data && data.fetchBoard.contents}</Contents_div>
        <YoutubeUrl src="/detail/video.png"></YoutubeUrl>
        <Like_button>
            <Like_div>
                <UP src="/detail/up.png"></UP>
                <Down src="/detail/down.png"></Down>
            </Like_div>
        </Like_button>
    </Board_body_wrapper>
</Wrapper>
</>
)
}
