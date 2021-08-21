import WriteItemBtn from "../../../commons/Buttons/Button-small-02";
import PickCount from "../../../../components/commons/PickedCount/MarketPickedCount";
import InfiniteScroll from "react-infinite-scroller";

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
        <BestProduct>
          <BestProductText>베스트상품</BestProductText>

          <BestProductDiv>
            {props.bestItem?.fetchUseditemsOfTheBest.map(
              (data: any, index: number) => (
                <BestProductWrapper
                  key={data._id}
                  onClick={props.onClickMoveToDetail(data)}
                >
                  <BestProductPicture
                    src={`https://storage.googleapis.com/${data.images[0]}`}
                  />
                  <BestProductTextDiv>
                    <BestProductName>{data.name}</BestProductName>
                    <BestProductInformation>
                      <BestProductInformationDetail>
                        <BestProductSummary> {data.remarks}</BestProductSummary>
                        <BestProductPrice>{data.price}</BestProductPrice>
                      </BestProductInformationDetail>
                      <BestProductLikeWrapper>
                        <PickCount Count={data.pickedCount} />
                      </BestProductLikeWrapper>
                    </BestProductInformation>
                  </BestProductTextDiv>
                </BestProductWrapper>
              )
            )}
          </BestProductDiv>
        </BestProduct>

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

          <div style={{ height: "1000px", overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              useWindow={false}
              loadMore={props.onLoadMore}
              hasMore={props.hasMore}
              loader={
                <div className="loader" key={0}>
                  기다료봐아~
                </div>
              }
            >
              {props.data?.fetchUseditems.map((data: any, index: number) => (
                <ProductListbottomWrapper
                  key={data._id}
                  onClick={props.onClickMoveToDetail(data)}
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
                      <PickCount Count={data.pickedCount} />
                    </ProductListbottomFloorDiv>
                  </ProductListbottomDetail>
                  <ProductListbottomPrice>{data.price}</ProductListbottomPrice>
                </ProductListbottomWrapper>
              ))}
            </InfiniteScroll>
          </div>

          <ButtonWrapper>
            <WriteItemBtn
              buttonName="등록하기"
              onClick={props.onClickMoveToWrite}
              isActive={props.isActive}
            ></WriteItemBtn>
          </ButtonWrapper>
        </ProductListWrapper>
      </Wrapper>
      {/* -오늘본상품-? */}

      <TodayProductWrapper>
        <TodayProductText>오늘본상품</TodayProductText>
        {props?.baskets?.map((data: any, index: number) => (
          <TodayProductDiv
            key={data._id}
            onClick={props.onClickMoveToDetail(data)}
          >
            <TodayProductTop>
              <TodayProductPicture
                src={`https://storage.googleapis.com/${data.images[0]}`}
              />
              <PickCount Count={data.pickedCount} />
            </TodayProductTop>

            <TodayProductName>{data.name}</TodayProductName>
            <TodayProductSummary>{data.remarks}</TodayProductSummary>
            <TodayProductPrice>{data.price}원</TodayProductPrice>
            <TodayProductTag>{data.tags}</TodayProductTag>
          </TodayProductDiv>
        ))}
      </TodayProductWrapper>
    </div>
  );
}
