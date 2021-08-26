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
  ShowLoginPage,
  Login,
  LoginWrapper,
  LoginInput,
  LoginButton,
  ButtonWrapper,
  Image,
  BlockDiv,
  Footer,
  ShowFooter,
  InnerDiv,
  HiddenDiv,
  FooterTitle,
  FooterDivText,
} from "./LandingPage1.styles";

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

  // useEffect(() => {
  //   if (scrollY > 300) {
  //     window.scrollTo(0, 460);
  //   }
  // }, []);

  return (
    <Wrapper>
      {/* <Navigator></Navigator> */}
      <LeftWrapper isOpen={isOpen} scrollY={scrollY}>
        <ShowPage>
          <Mant scrollY={scrollY} isActive={isActive}>
            {Text}
          </Mant>
          <Banner scrollY={scrollY}>중고마켓</Banner>
          <Title>ㅅㅜ ㅣ ㅁ </Title>
          <InnerText scrollY={scrollY}>
            당신의 추억이 담긴 그 물건 말이예요.
            <p />
            당신의 추억이 담긴 그 물건 말이예요.
            <p />
            당신의 추억이 담긴 그 물건 말이예요.당신의 추억이 담긴 그 물건
            <p />
            진녹색 난로 '쉼'입니다.
            {scrollY}
          </InnerText>
        </ShowPage>
      </LeftWrapper>
      <Footer>
        <BlockDiv>
          <RightWrapper scrollY={scrollY} isOpen={isOpen}>
            <ShowLoginPage>
              <Login>
                <Image scrollY={scrollY} src="/images/icon/myicon.png" />
                <LoginWrapper>
                  <LoginInput placeholder="아이디 "></LoginInput>
                  <LoginInput placeholder="비밀번호"></LoginInput>
                </LoginWrapper>

                <ButtonWrapper>
                  <LoginButton>로그인하기</LoginButton>
                  <LoginButton>회원가입</LoginButton>
                  <LoginButton>비회원 로그인</LoginButton>
                </ButtonWrapper>
                <ButtonWrapper></ButtonWrapper>
              </Login>
            </ShowLoginPage>
          </RightWrapper>
        </BlockDiv>

        <ShowFooter>
          <InnerDiv>
            <HiddenDiv> 접속하기</HiddenDiv>
            <FooterTitle>자유게시판</FooterTitle>
            <FooterDivText>이러이러이러한 이야기를 나누어 보세요</FooterDivText>
          </InnerDiv>
          <InnerDiv>
            <HiddenDiv></HiddenDiv>
            <FooterTitle>중고 장터 </FooterTitle>
            <FooterDivText>이런 저런 물건을 팔아보세요</FooterDivText>
          </InnerDiv>
          <InnerDiv>
            <HiddenDiv></HiddenDiv>
            <FooterTitle></FooterTitle>
            <FooterDivText></FooterDivText>
          </InnerDiv>
        </ShowFooter>
      </Footer>
    </Wrapper>
  );
}
