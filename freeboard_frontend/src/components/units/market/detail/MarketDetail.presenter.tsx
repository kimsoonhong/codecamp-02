import Button01 from "../../../commons/Buttons/Button-Middle-01";
import Button02 from "../../../commons/Buttons/Button-Middle-02";
import PickCount from "../../../../components/commons/PickedCount/MarketPickedCount";
import Head from "next/head";

import { Tooltip } from "antd";
import { IMarketDetailUIProps } from "./MarketDetail.types";
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
} from "./MarketDetail.styles";

export default function MarketDetailUI(props: IMarketDetailUIProps) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      <Wrapper>
        <Header>
          <HeaderAvatarWrapper>
            <HeaderAvatar src="/images/avatar.png" />
            <HeaderWirterWrapper>
              <HeaderWriter>
                {props.data?.fetchUseditem.seller.name}
              </HeaderWriter>
              <HeaderCreatedAt>
                {String(props.data?.fetchUseditem.createdAt).slice(0, 10)}
              </HeaderCreatedAt>
            </HeaderWirterWrapper>
          </HeaderAvatarWrapper>
          <HeaderIconWrapper>
            <LinkOutlined style={{ fontSize: "30px" }} />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchUseditem.boardAddress?.address} ${props.data?.fetchUseditem.boardAddress?.addressDetail}`}
            >
              <AimOutlined style={{ fontSize: "30px" }} />
            </Tooltip>
          </HeaderIconWrapper>
        </Header>
        <Body>
          {/* -- */}
          <BodyTopWrapper>
            <BodyTopTextWrapper>
              <BodyTopRemark>
                {" "}
                {props.data?.fetchUseditem.remarks}
              </BodyTopRemark>
              <BodyTopName>{props.data?.fetchUseditem.name}</BodyTopName>
              <BodyTopPrice>{props.data?.fetchUseditem.price}</BodyTopPrice>
            </BodyTopTextWrapper>

            <BodyTopPickWrapper>
              <PickCount
                onClick={props.onclickPick}
                Count={props.data?.fetchUseditem.pickedCount}
              />
            </BodyTopPickWrapper>
          </BodyTopWrapper>

          <BodyMiddleWrapper>
            <BodyMiddleImgWrapper>
              <BodyMiddleImgMain
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[0]} `}
              />

              {/* <BodyMiddleImgMain /> */}
              <BodyMiddleImgPreviewWrapper>
                {props.data?.fetchUseditem.images.map((date, index) => (
                  <BodyMiddleImgPreview
                    key={index}
                    src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[index]}`}
                  />
                ))}

                {/* <BodyMiddleImgPreview>미리보기 4장</BodyMiddleImgPreview> */}
              </BodyMiddleImgPreviewWrapper>
            </BodyMiddleImgWrapper>

            <BodyMiddleContent>
              {props.data?.fetchUseditem.contents}
            </BodyMiddleContent>

            <BodyMiddleTags>{props.data?.fetchUseditem.tags}</BodyMiddleTags>
          </BodyMiddleWrapper>

          <BodyMapWrapper>
            <BodyBottomMap>지도사진ㄴ디ㅏ.</BodyBottomMap>
          </BodyMapWrapper>

          <BodyButtonWrapper>
            {props.isSetItem && (
              <Button02
                buttonName="장바구니 넣기"
                isActive={props.isActive}
                onClick={props.onClickBasket(props.data)}
              ></Button02>
            )}

            {!props.isSetItem && (
              <Button02
                buttonName="장바구니 빼기"
                isActive={props.isActive}
                onClick={props.onClickDeleteBasket(props.data)}
              ></Button02>
            )}

            <Button02
              buttonName="목록으로"
              isActive={props.isActive}
              onClick={props.onClickMoveToList}
            >
              목록으로
            </Button02>
            <Button01
              buttonName="구매하기"
              type="submit"
              isActive={props.isActive}
            >
              구매하기
            </Button01>
            <Button01
              buttonName="수정하기"
              onClick={props.onClickMoveToEdit}
              isActive={props.isActive}
            />
          </BodyButtonWrapper>
        </Body>
      </Wrapper>
    </>
  );
}
