import {
  Wrapper,
  FilterColor,
  BackgroundImg,
  MainWrapper,
  LiftWrapper,
  MainText,
  Contack,
  ContackText,
  Email,
  IconDiv,
  Git,
  Blog,
  RightWrapper,
  ProjectImg,
  ProjectTitle,
  ProjectContent,
  ProjectStack,
  EnterToProJect,
  SideWrapper,
  Project1,
  Project2,
  Project3,
  Project4,
} from "./LandingPage.styles";

export default function LandingPageUI() {
  return (
    <Wrapper>
      <FilterColor> </FilterColor>
      <BackgroundImg src="/images/landingpage/landingPage.jpeg" />

      <MainWrapper>
        <LiftWrapper>
          <MainText>
            Let's Talk <br />
            about 'ME'
          </MainText>
          <Contack>
            <ContackText>Contack Me</ContackText>
            <Email>shong1332@naver.com</Email>
            <IconDiv>
              <Git>d</Git>
              <Blog>d</Blog>
            </IconDiv>
          </Contack>
        </LiftWrapper>

        <RightWrapper>
          <ProjectImg>d</ProjectImg>
          <ProjectTitle>shong Portfolio</ProjectTitle>
          <ProjectContent>
            처음으로 코딩을 독학하기 시작하며 만들어본 portfolio Page입니다.
            드림코딩 엘리의 수업을 들으며 따라치기 바빳던 기억이 있지만 이때
            배운 마크업과 css 기초는 어쩌고 저쩌고 어쩌고 저쩌고어쩌고
            저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
            저쩌고어쩌고 저쩌고어쩌고 저쩌고
          </ProjectContent>
          <ProjectStack>
            사용스텍 <br />
            리엑트 <br />
            gql
            <br />
            기타 <br />
            등등 <br />
          </ProjectStack>
          <EnterToProJect>자세히 보기</EnterToProJect>
        </RightWrapper>
        <SideWrapper>
          <Project1>d</Project1>
          <Project2>4</Project2>
          <Project3>5</Project3>
          <Project4>6</Project4>
        </SideWrapper>
      </MainWrapper>
    </Wrapper>
  );
}
