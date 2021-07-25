import { useEffect, useState } from "react";
// import "./LandingPage";

import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  ShowPage,
  Mant,
  Banner,
  Title,
  InnerText,
  EnterBtn,
  Navigator,
  ShowLoginPage,
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
    // "너와 내가 닿아있는 곳,",
    // "당신의 흔적을 담는 곳,",
  ];
  const selectString = string[Math.floor(Math.random() * string.length)];
  const selectStringArr = selectString.split("");

  const txt = selectString;
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count + 1); // 개수 만큼 체크
    }, 200);
    if (Count === txt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  });

  const [isActive, setIsActive] = useState(true);
  function timer1() {
    if (isActive == true) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  useEffect(() => {
    const interval = setInterval(timer1, 800);
    return () => {
      clearInterval(interval);
    };
  });

  const [scrollY, setScrollY] = useState<number>(0);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  const [isOpen, setIsOpen] = useState(true);

  function onClickEnter(event) {
    setIsOpen(false);
  }

  return (
    <Wrapper>
      {/* <Navigator></Navigator> */}
      <LeftWrapper isOpen={isOpen} scrollY={scrollY}>
        <ShowPage>
          <Mant isActive={isActive}>{Text}</Mant>
          <Banner>중고마켓</Banner>
          <Title>ㅅㅜ ㅣ ㅁ </Title>
          <InnerText>
            <p />
            당신의 추억이 담긴 그 물건 말이예요.
            <p />
            이는 국가보훈처의 유권해석이다. <p />
            관련 법령만 없을 뿐이지 역사적으로도 한국을 상징하는 노래로 오랫동안
            쓰였고 <p />
            현재도 공식행사나 스포츠대회 등에서 국가가 필요하면 애국가를
            사용한다는 점에서 사실상 국가라고 볼 수 있다
            <p />
            진녹색 난로 '쉼'입니다.
            {scrollY}
          </InnerText>
          {/* <EnterBtn isOpen={isOpen} onClick={onClickEnter}> */}
          {/* 입장하기
          </EnterBtn> */}
        </ShowPage>
      </LeftWrapper>

      <RightWrapper scrollY={scrollY} isOpen={isOpen}>
        <ShowLoginPage>
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
        </ShowLoginPage>
      </RightWrapper>
    </Wrapper>
  );
}
