import { Tooltip } from "antd";
import { LinkOutlined, AimOutlined } from "@ant-design/icons";
import {
  Wrapper,
  Header,
  HeaderAvatarWrapper,
  HeaderAvatar,
  HeaderWirterWrapper,
  HeaderWriter,
  HeaderCreatedAt,
  HeaderIconWrapper,

  // __
  Body,
  BodyTopWrapper,
  BodyTopTextWrapper,
  BodyTopRemark,
  BodyTopName,
  BodyTopPrice,
  BodyTopPickWrapper,
  BodyTopPick,
  BodyTopPickNumber,
  BodyMiddleWrapper,
  BodyMiddleImgWrapper,
  BodyMiddleImgMain,
  BodyMiddleImgPreviewWrapper,
  BodyMiddleImgPreview,
  BodyMiddleContent,
  BodyMiddleTags,
  BodyMapWrapper,
  BodyBottomMap,
  BodyButtonWrapper,
  Button,
} from "./MarketDetail.styles";

export default function MarketDetailUI(props) {
  return (
    <Wrapper>
      <Header>
        <HeaderAvatarWrapper>
          <HeaderAvatar src="/images/avatar.png" />
          <HeaderWirterWrapper>
            <HeaderWriter>김순홍</HeaderWriter>
            <HeaderCreatedAt>
              {String(props.data?.fetchBoard.createdAt).slice(0, 10)}
            </HeaderCreatedAt>
          </HeaderWirterWrapper>
        </HeaderAvatarWrapper>
        <HeaderIconWrapper>
          <LinkOutlined style={{ fontSize: "30px" }} />
          <Tooltip
            placement="topRight"
            title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
          >
            <AimOutlined style={{ fontSize: "30px" }} />
          </Tooltip>
        </HeaderIconWrapper>
      </Header>
      <Body>
        {/* -- */}
        <BodyTopWrapper>
          <BodyTopTextWrapper>
            <BodyTopRemark> 2018 lte</BodyTopRemark>
            <BodyTopName>겔럭시텝 10.1</BodyTopName>
            <BodyTopPrice>123,345원</BodyTopPrice>
          </BodyTopTextWrapper>

          <BodyTopPickWrapper>
            <BodyTopPick>하트</BodyTopPick>
            <BodyTopPickNumber>20</BodyTopPickNumber>
          </BodyTopPickWrapper>
        </BodyTopWrapper>

        <BodyMiddleWrapper>
          <BodyMiddleImgWrapper>
            <BodyMiddleImgMain>메인사진</BodyMiddleImgMain>
            <BodyMiddleImgPreviewWrapper>
              <BodyMiddleImgPreview>미리보기 4장</BodyMiddleImgPreview>
            </BodyMiddleImgPreviewWrapper>
          </BodyMiddleImgWrapper>

          <BodyMiddleContent>
            액정에 잔기스랑 주변부 스크레치있습니다만 예민하신분아니면 전혀
            신경쓰이지않을정도입니다 박스 보관중입니다 메모용과
            넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을 못느꼈네요
            잘 안써서 싸게넘깁니다 택배거래안합니다
          </BodyMiddleContent>

          <BodyMiddleTags>#삼성전자 #갓성비</BodyMiddleTags>
        </BodyMiddleWrapper>

        <BodyMapWrapper>
          <BodyBottomMap>지도사진입ㄴ디ㅏ.</BodyBottomMap>
        </BodyMapWrapper>

        <BodyButtonWrapper>
          <Button>목록으로</Button>
          <Button>구매하기</Button>
        </BodyButtonWrapper>
      </Body>
    </Wrapper>
  );
}
