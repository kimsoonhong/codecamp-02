import WriteItemBtn from "../../../commons/Buttons/Button-small-02";

import {
  Wrapper,
  // ___베스트상품
  BestProduct,
  BestProductText,
  BestProductDiv,
  BestProductWrapper,
  BestProductPicture,
  BestProductTextDiv,
  BestProductName,
  BestProductInformation,
  BestProductInformationDetail,
  BestProductSummary,
  BestProductPrice,
  BestProductLikeWrapper,
  BestProductLikeImg,
  BestProductLikeNumber,
  // ___제품상단?
  ProductListWrapper,
  ProductListTop,
  ProductListTopTextWrapper,
  ProductListTopSaleText,
  ProductListTopSoldText,
  ProductListTopSearchWrapper,
  ProductListTopSearchInput,
  ProductListTopSearchDate,
  ProductListTopSearchButton,
  // ___제품하단?
  ProductListbottomWrapper,
  ProductListbottomPicture,
  ProductListbottomDetail,
  ProductListbottomDetailName,
  ProductListbottomDetailSummary,
  ProductListbottomDetailTag,
  ProductListbottomFloorDiv,
  ProductListbottomFloorAvatar,
  ProductListbottomFloorSeller,
  ProductListbottomFloorLike,
  ProductListbottomFloorLikeNumber,
  ProductListbottomPrice,
  ButtonWrapper,
  // ___오늘본상품?
  TodayProductWrapper,
  TodayProductText,
  TodayProductDiv,
  TodayProductLike,
  TodayProductLikeNumber,
  TodayProductTop,
  TodayProductPicture,
  TodayProductName,
  TodayProductSummary,
  TodayProductPrice,
  TodayProductTag,
} from "./MarketList.syles";

export default function marketListUI(props) {
  return (
    <div style={{ display: "flex" }}>
      <Wrapper>
        {/* -베스트상품-? */}
        <BestProduct>
          <BestProductText>베스트상품</BestProductText>
          <BestProductDiv>
            <BestProductWrapper>
              <BestProductPicture>사진</BestProductPicture>
              <BestProductTextDiv>
                <BestProductName>삼성전자 겔럭시 탭</BestProductName>
                <BestProductInformation>
                  <BestProductInformationDetail>
                    <BestProductSummary>2018 모델</BestProductSummary>
                    <BestProductPrice>298,234원</BestProductPrice>
                  </BestProductInformationDetail>
                  <BestProductLikeWrapper>
                    <BestProductLikeImg>하트</BestProductLikeImg>
                    <BestProductLikeNumber>20</BestProductLikeNumber>
                  </BestProductLikeWrapper>
                </BestProductInformation>
              </BestProductTextDiv>
            </BestProductWrapper>
          </BestProductDiv>
        </BestProduct>
        {/* -제품 상단-? */}
        <ProductListWrapper>
          <ProductListTop>
            <ProductListTopTextWrapper>
              <ProductListTopSaleText>판매중상품</ProductListTopSaleText>
              <ProductListTopSoldText>판매된상품</ProductListTopSoldText>
            </ProductListTopTextWrapper>
            <ProductListTopSearchWrapper>
              <ProductListTopSearchInput></ProductListTopSearchInput>
              <ProductListTopSearchDate>d</ProductListTopSearchDate>
              <ProductListTopSearchButton>d</ProductListTopSearchButton>
            </ProductListTopSearchWrapper>
          </ProductListTop>
          {/* -제품 하단-? */}
          {props.data?.fetchUseditems.map((data: any, index: number) => (
            <ProductListbottomWrapper
              // id={data._id}
              key={data._id}
              onClick={props.onClickMoveToBoardDetail(data._id)}
            >
              <ProductListbottomPicture
                src={`https://storage.googleapis.com/${data.images[0]}`}
              />
              <ProductListbottomDetail>
                <ProductListbottomDetailName>
                  {data.name}
                </ProductListbottomDetailName>
                <ProductListbottomDetailSummary>
                  {data.remarks}
                </ProductListbottomDetailSummary>
                <ProductListbottomDetailTag>
                  {data.tags}
                </ProductListbottomDetailTag>
                <ProductListbottomFloorDiv>
                  <ProductListbottomFloorAvatar>
                    사진
                  </ProductListbottomFloorAvatar>
                  <ProductListbottomFloorSeller>
                    {data.seller.name}
                  </ProductListbottomFloorSeller>
                  <ProductListbottomFloorLike>하트</ProductListbottomFloorLike>
                  <ProductListbottomFloorLikeNumber>
                    93
                  </ProductListbottomFloorLikeNumber>
                </ProductListbottomFloorDiv>
              </ProductListbottomDetail>
              <ProductListbottomPrice>{data.price}</ProductListbottomPrice>
            </ProductListbottomWrapper>
          ))}
          <ButtonWrapper>
            <WriteItemBtn
              buttonName="등록하기"
              type="submit"
              isActive={props.isActive}
            ></WriteItemBtn>
          </ButtonWrapper>
        </ProductListWrapper>
      </Wrapper>
      {/* -오늘본상품-? */}
      <TodayProductWrapper>
        <TodayProductText>오늘본상품</TodayProductText>
        <TodayProductDiv>
          <TodayProductTop>
            <TodayProductLike>하트</TodayProductLike>
            <TodayProductLikeNumber>20</TodayProductLikeNumber>
          </TodayProductTop>
          <TodayProductPicture />
          <TodayProductName>삼성겔럭시 텝</TodayProductName>
          <TodayProductSummary>3923년 엘티이</TodayProductSummary>
          <TodayProductPrice>320,234원</TodayProductPrice>
          <TodayProductTag>테그</TodayProductTag>
        </TodayProductDiv>
      </TodayProductWrapper>
    </div>
  );
}
