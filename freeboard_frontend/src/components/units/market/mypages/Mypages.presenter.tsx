import {
  Wrapper,
  LiftWrapper,
  LiftWrapperProfileWrapper,
  LiftWrapperMypage,
  LiftWrapperAvatar,
  LiftWrapperUserName,
  LiftWrapperUserPoint,
  LiftWrapperPageWrapper,
  LiftWrapperMyItem,
  LiftWrapperMyPoint,
  LiftWrapperMyProflie,
  RightWrapper,
  RightWrapperHead,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperNumber,
  RightWrapperTitle,
  RightWrapperCondition,
  RightWrapperPrice,
  RightWrapperDate,
  RightWrapperTableBottom,
  Page,
} from "./Mypages.styles";

export default function mypageUi() {
  return (
    <Wrapper>
      {/* <InnerDiv> */}
      <LiftWrapper>
        <LiftWrapperProfileWrapper>
          <LiftWrapperMypage>My page</LiftWrapperMypage>
          <LiftWrapperAvatar></LiftWrapperAvatar>
          <LiftWrapperUserName>김순홍</LiftWrapperUserName>
          <LiftWrapperUserPoint>100,000</LiftWrapperUserPoint>
        </LiftWrapperProfileWrapper>
        <LiftWrapperPageWrapper>
          <LiftWrapperMyItem>내장터</LiftWrapperMyItem>
          <LiftWrapperMyPoint>내 포인트</LiftWrapperMyPoint>
          <LiftWrapperMyProflie>내 프로필</LiftWrapperMyProflie>
        </LiftWrapperPageWrapper>
      </LiftWrapper>
      <RightWrapper>
        <RightWrapperHead>나의상품 | 마이찜</RightWrapperHead>
        <RightWrapperBody>
          <RightWrapperTableTop>
            <RightWrapperNumber>번호</RightWrapperNumber>
            <RightWrapperTitle>제목</RightWrapperTitle>
            <RightWrapperCondition>-</RightWrapperCondition>
            <RightWrapperPrice>판매가격</RightWrapperPrice>
            <RightWrapperDate>날짜</RightWrapperDate>
          </RightWrapperTableTop>
          <RightWrapperTableBottom>
            <RightWrapperNumber>1</RightWrapperNumber>
            <RightWrapperTitle>가나다라</RightWrapperTitle>
            <RightWrapperCondition>판매완료</RightWrapperCondition>
            <RightWrapperPrice>2,000</RightWrapperPrice>
            <RightWrapperDate>2020.09.23</RightWrapperDate>
          </RightWrapperTableBottom>
        </RightWrapperBody>
        <Page> ( 1 / 2 / 3 )</Page>
      </RightWrapper>
      {/* </InnerDiv> */}
    </Wrapper>
  );
}
