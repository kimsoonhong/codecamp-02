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
  InnerWraaper,
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
            {"Let's Talk"} <br />
            {"about 'ME'"}
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
          <InnerWraaper>
            <div
              style={{ width: "100%", height: "100%", backgroundColor: "red" }}
            >
              dddddddddd dddddddddd dddddddddd dddddddddd
            </div>
          </InnerWraaper>
          <InnerWraaper>
            {" "}
            <div
              style={{ width: "100%", height: "100%", backgroundColor: "red" }}
            >
              {" "}
              f dddddddddd dddddddddd dddddddddd
            </div>
          </InnerWraaper>
          <InnerWraaper>
            <div
              style={{ width: "100%", height: "100%", backgroundColor: "red" }}
            >
              {" "}
              f dddddddddd dddddddddd dddddddddd dddddddddd
            </div>
          </InnerWraaper>
        </RightWrapper>
        <SideWrapper>
          <Project1>d</Project1>
          <Project1>4</Project1>
          <Project1>5</Project1>
        </SideWrapper>
      </MainWrapper>
    </Wrapper>
  );
}
