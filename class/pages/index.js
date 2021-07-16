// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Title, Name, Wrapper, Myinput } from "../styles/Home.styles";

export default function aaa() {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Name>아이디</Name>
      <Myinput placeholder="아이디를 입력하세요"></Myinput>
      <Name>비밀번호</Name>

      <Myinput type="password" placeholder="비밀번호를 입력해줘"></Myinput>
    </Wrapper>
  );
}
