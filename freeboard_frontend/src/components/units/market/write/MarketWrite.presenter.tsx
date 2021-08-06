import Input100 from "../../../commons/Inputs/Input_width_100";
import InputTextarea from "../../../commons/Inputs/Input_Textarea_01";
import Button01 from "../../../commons/Buttons/Button-Middle-01";
import ImgFileUploads from "../../../../components/commons/ImgFile_Uploads01/Uploads01.container";

import {
  Wrapper,
  Header,
  HeaderText,
  Body,
  Label,
  MapWrapper,
  MapPositionWrapper,
  MapPosition,
  MapRightWrapper,
  GPSWrapper,
  LATDiv,
  PositionIcon,
  LNGDiv,
  AddressWrapper,
  ImgWrapper,
  ImgUpload,
  RadioButtonWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
} from "./MarketWrite.syles";

export default function marketWriteUI(props) {
  return (
    <form
      onSubmit={props.handleSubmit(props.onSubmit)}
      style={{ display: "flex" }}
    >
      <Wrapper>
        <Header>
          <HeaderText>상품 등록하기</HeaderText>
        </Header>
        <Body>
          <Input100
            InputName="상품명"
            type="text"
            register={{ ...props.register("name") }}
            errorMessage={props.errors.name?.message}
          ></Input100>
          <Input100
            InputName="한줄요약"
            type="text"
            register={{ ...props.register("remarks") }}
            errorMessage={props.errors.remarks?.message}
          ></Input100>
          <InputTextarea
            InputName="상품설명"
            type="text"
            register={{ ...props.register("contents") }}
            errorMessage={props.errors.contents?.message}
          ></InputTextarea>
          <Input100
            InputName="판매가격"
            type="text"
            register={{ ...props.register("price") }}
            errorMessage={props.errors.price?.message}
          ></Input100>

          <Input100
            InputName="태그입력"
            type="text"
            register={{ ...props.register("tags") }}
            errorMessage={props.errors.tags?.message}
          ></Input100>
          <MapWrapper>
            <MapPositionWrapper>
              <Label>거래위치</Label>
              <MapPosition>사진</MapPosition>
            </MapPositionWrapper>
            <MapRightWrapper>
              <Label>GPS</Label>
              <GPSWrapper>
                <LATDiv>위도</LATDiv>
                <PositionIcon>ㅁ</PositionIcon>
                <LNGDiv>경도</LNGDiv>
              </GPSWrapper>
              <AddressWrapper>
                <Input100
                  InputName="주소"
                  type="text"
                  register={{ ...props.register("address") }}
                ></Input100>
                <Input100
                  type="text"
                  register={{ ...props.register("addressDetail") }}
                  errorMessage={
                    props.errors.address?.message ||
                    props.errors.addressDetail?.message
                  }
                ></Input100>
              </AddressWrapper>
            </MapRightWrapper>
          </MapWrapper>
          <Label>사진첨부</Label>
          <ImgWrapper>
            {/* <ImgUpload>제품사진</ImgUpload>
            <ImgUpload>제품사진</ImgUpload> */}
            <ImgFileUploads size={180} number={3} setFiles={props.setFiles} />
          </ImgWrapper>
          <Label>메인 사진 설정</Label>
          <RadioButtonWrapper>
            <RadioButton />
            <RadioLabel htmlFor="youtube">사진1</RadioLabel>
            <RadioButton />
            <RadioLabel htmlFor="image">사진2</RadioLabel>
          </RadioButtonWrapper>
          <ButtonWrapper>
            <Button01
              buttonName="등록하기"
              type="submit"
              isActive={props.isActive}
            >
              등록하기
            </Button01>
          </ButtonWrapper>
        </Body>
      </Wrapper>
    </form>
  );
}
