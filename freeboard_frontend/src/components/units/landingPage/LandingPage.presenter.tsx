import { Component, useState } from "react";
import "./LandingPage";

import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  ShowPage,
  Mant,
  Banner,
  Title,
  InnerText,
  Login,
  LoginWrapper,
  LoginInput,
  LoginButton,
  ButtonWrapper,
  Image,
  Active,
} from "./LandingPage.styles";

export default function LandingPageUI() {
  const string = [
    "우리의 추억을 나누는 곳,",
    "너와 내가 닿아있는 곳,",
    "당신의 흔적을 담는 곳,",
  ];
  const selectString = string[Math.floor(Math.random() * string.length)];
  // const selectStringArr = selectString.split("");

  // setInterval(runTyping, 1000);

  // const [typing, setTyping] = useState(runTyping(selectStringArr));

  // function runTyping(selectStringArr) {
  //   let bbb = "";
  //   for (let i = 0; i < selectStringArr.length; i++) {
  //     let bbb = selectStringArr[i];
  //   }
  // }

  // console.log(selectStringArr.length);

  return (
    <Wrapper className="ddd">
      <LeftWrapper>
        <ShowPage>
          <Mant>{selectString}</Mant>
          <Banner>중고마켓</Banner>
          <Title>ㅅㅜ ㅣ ㅁ </Title>
          <InnerText>
            <p />
            애국가를 대한민국의 국가로 지정한 전례나 직접 규정한 법률은 없다.
            <p />
            이는 국가보훈처의 유권해석이다. <p />
            관련 법령만 없을 뿐이지 역사적으로도 한국을 상징하는 노래로 오랫동안
            쓰였고 <p />
            현재도 공식행사나 스포츠대회 등에서 국가가 필요하면 애국가를
            사용한다는 점에서 사실상 국가라고 볼 수 있다
          </InnerText>
        </ShowPage>
      </LeftWrapper>
      <RightWrapper>
        <Login>
          <Image src="/images/icon/myicon.png" />
          <LoginWrapper>
            <LoginInput placeholder="아이디"></LoginInput>
            <LoginInput placeholder="비밀번호"></LoginInput>
          </LoginWrapper>

          <ButtonWrapper>
            <LoginButton>로그인하기</LoginButton>
            <LoginButton>회원가입</LoginButton>
          </ButtonWrapper>
        </Login>
      </RightWrapper>
    </Wrapper>
  );
}
