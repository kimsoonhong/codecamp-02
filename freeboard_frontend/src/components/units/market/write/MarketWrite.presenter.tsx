import {
  Wrapper,
  Header,
  HeaderText,
  Body,
  Label,
  Input_1,
  Textarea_1,
  MapWrapper,
  MapPosition,
  MapRightWrapper,
  GPSWrapper,
  LATDiv,
  PositionIcon,
  LNGDiv,
  AddressWrapper,
  Input_2,
  ImgWrapper,
  ImgUpload,
  RadioButtonWrapper,
  RadioButton,
  RadioLabel,
  SubmitButton,
} from "./MarketWrite.syles";

export default function marketWriteUI() {
  return (
    <div style={{ display: "flex" }}>
      <Wrapper>
        <Header>
          <HeaderText>상품 등록하기</HeaderText>
        </Header>
        <Body>
          <Label>상품명</Label>
          <Input_1></Input_1>
          <Label>한줄요약</Label>
          <Input_1></Input_1>
          <Label>상품설명</Label>
          <Textarea_1></Textarea_1>
          <Label>판매가격</Label>
          <Input_1></Input_1>
          <Label>태그입력</Label>
          <Input_1></Input_1>
          <MapWrapper>
            <MapWrapper>
              <Label>거래위치</Label>
              <MapPosition>사진</MapPosition>
            </MapWrapper>
            <MapRightWrapper>
              <GPSWrapper>
                <Label>GPS</Label>
                <LATDiv>위도</LATDiv>
                <PositionIcon></PositionIcon>
                <LNGDiv>경도</LNGDiv>
              </GPSWrapper>
              <AddressWrapper>
                <Label>주소</Label>
                <Input_2></Input_2>
                <Input_2></Input_2>
              </AddressWrapper>
            </MapRightWrapper>
            <ImgWrapper>
              <Label>사진첨부</Label>
              <ImgUpload>제품사진</ImgUpload>
            </ImgWrapper>
            <RadioButtonWrapper>
              <RadioButton />
              <RadioLabel htmlFor="youtube">사진1</RadioLabel>
              <RadioButton />
              <RadioLabel htmlFor="image">사진2</RadioLabel>
            </RadioButtonWrapper>
          </MapWrapper>
          <SubmitButton>등록하기</SubmitButton>
        </Body>
      </Wrapper>
    </div>
  );
}
