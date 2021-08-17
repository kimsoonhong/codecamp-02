import Button01 from "../../../commons/Buttons/Button-Middle-01";
import Button02 from "../../../commons/Buttons/Button-Middle-02";
import PickCount from "../../../../components/commons/PickedCount/MarketPickedCount";
import Head from "next/head";
// import DOMpurify from "dompurify";

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
  BodyBottom,
  BodyButtonWrapper,
  SliderItem,
  StyleSlider,
} from "./MarketDetail.styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "@emotion/styled";
// import { baseUrl } from "./config";

export default function MarketDetailUI(props: IMarketDetailUIProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    speed: 2000,
    autoplaySpeed: 5000,
    autoplay: true,
  };

  // if (typeof window === "undefined") return <></>;
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
              title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
            >
              <AimOutlined style={{ fontSize: "30px" }} />
            </Tooltip>
          </HeaderIconWrapper>
        </Header>
        <Body>
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
              <StyleSlider {...settings}>
                {props.data?.fetchUseditem.images.map((date, index) => (
                  <BodyMiddleImgPreview
                    key={index}
                    src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[index]}`}
                  />
                ))}
              </StyleSlider>

              <BodyMiddleImgPreviewWrapper>
                {props.data?.fetchUseditem.images.map((date, index) => (
                  <SliderItem
                    key={index}
                    src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[index]}`}
                  />
                ))}
              </BodyMiddleImgPreviewWrapper>
            </BodyMiddleImgWrapper>

            <BodyMiddleContent
            // dangerouslySetInnerHTML={{
            //   __html: DOMpurify.sanitize(props.data?.fetchUseditem.contents),
            // }}
            >
              {props.data?.fetchUseditem.contents}
            </BodyMiddleContent>

            <BodyMiddleTags>{props.data?.fetchUseditem.tags}</BodyMiddleTags>
          </BodyMiddleWrapper>

          <BodyMapWrapper>
            <span style={{ marginTop: "20px" }}>
              {props.data?.fetchUseditem.useditemAddress?.address}
            </span>{" "}
            <br />
            <span>
              {props.data?.fetchUseditem.useditemAddress?.addressDetail}
            </span>
            <br />
            <BodyBottom id="map"></BodyBottom>
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
