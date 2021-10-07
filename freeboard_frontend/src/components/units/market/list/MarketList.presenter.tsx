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

  // ___제품상단?
  ProductListWrapper,
  ProductListTop,
  ProductListTopTextWrapper,
  ProductListTopText,
  ProductListTopSearchWrapper,
  Word,

  // ___제품하단?
  ProductListbottomWrapper,
  ProductListbottomPicture,
  ProductListbottomDetail,
  ProductListbottomDetailName,
  ProductListbottomDetailSummary,
  ProductListbottomDetailTag,
  ProductListbottomFloorDiv,
  ProductListbottomPrice,
  ButtonWrapper,
  WriteItemBtn,
  // ___오늘본상품?
  TodayProductWrapper,
  TodayProductText,
  TodayProductDiv,
  TodayProductTop,
  TodayProductPicture,
  TodayProductName,
  TodayProductSummary,
  TodayProductPrice,
  TodayProductTag,
} from "./MarketList.syles";
import { IMarketListUIProps } from "./MarketList.types";
import { SearchInput } from "../../board/list/BoardList.styles";

export default function marketListUI(props: IMarketListUIProps) {
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
              <ProductListTopText
                id="selling"
                // @ts-ignore
                onClick={props.onClickIsSoldout}
                isActive={props.isSoldout === "selling"}
              >
                판매중상품
              </ProductListTopText>
              <ProductListTopText
                id="soldout"
                // @ts-ignore
                onClick={props.onClickIsSoldout}
                isActive={props.isSoldout === "soldout"}
              >
                판매된상품
              </ProductListTopText>
            </ProductListTopTextWrapper>
            <ProductListTopSearchWrapper>
              <SearchInput
                placeholder="# 상품명 검색하기"
                onChange={props.onChangeSearch}
                ref={props.inputRef}
              />
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
                      {data.name
                        .replaceAll(props.keyword, `$!${props.keyword}$!`)
                        .split("$!")
                        .map((data2: any, index: any) => (
                          <Word
                            id={data._id}
                            key={index}
                            isMatched={props.keyword === data2}
                          >
                            {data2}
                          </Word>
                        ))}
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
                  <ProductListbottomPrice>
                    {data.price} 원
                  </ProductListbottomPrice>
                </ProductListbottomWrapper>
              ))}
            </InfiniteScroll>
          </div>

          <ButtonWrapper>
            <WriteItemBtn onClick={props.onClickMoveToWrite}>
              {" "}
              <img src="/images/board/list/Vector.png" />
              상품 등록하기
            </WriteItemBtn>
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
