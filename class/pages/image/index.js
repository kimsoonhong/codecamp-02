import styled from '@emotion/styled'

const Myimg = styled.img`
width:100px;
height:100px;
background-color: black;
position:relative;
display: flex;
`

const Mydiv = styled.img`
width:100px;
height:100px;
background-image: url("/image/profile.png");
background-color: black;
`

const Myimg2 = styled.img`
width:50px;
height:50px;
background-color: blueviolet;
position:absolute;
top:0px;
left: 0px;
`


export default function ImagePage(){





    return(
    <>
    <Mydiv ></Mydiv>
        <Myimg src="/image/profile.png"></Myimg>
        
        <Myimg2 src="/image/icon.png"></Myimg2>
        
        <div>이미지 연습</div>











    </>
    )






}