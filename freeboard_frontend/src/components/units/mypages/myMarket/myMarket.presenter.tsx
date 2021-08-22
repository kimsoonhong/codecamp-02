import {
  RightWrapper,
  RightWrapperHead,
  TopTextMyItem,
  TopTextMyPick,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperNumber,
  RightWrapperTitle,
  RightWrapperTitleSold,
  RightWrapperCondition,
  RightWrapperPrice,
  RightWrapperDate,
  RightWrapperTableBottom,
} from "./myMarket.styles";

export default function myMarketUI(props) {
  return (
    <RightWrapper>
      <RightWrapperHead>
        <TopTextMyItem isMyItem={props.isMyItem} onClick={props.onClickMyItem}>
          나의상품
        </TopTextMyItem>
        |
        <TopTextMyPick isMyItem={props.isMyItem} onClick={props.onClickMyPick}>
          마이찜
        </TopTextMyPick>
      </RightWrapperHead>
      <RightWrapperBody>
        <RightWrapperTableTop>
          <RightWrapperNumber>번호</RightWrapperNumber>
          <RightWrapperTitle>제목</RightWrapperTitle>

          <RightWrapperPrice>판매가격</RightWrapperPrice>
          <RightWrapperDate>날짜</RightWrapperDate>
        </RightWrapperTableTop>
        {/* {=====나의상품=====} */}
        {props.isMyItem && (
          <>
            {props.data?.fetchUseditemsISold
              .map((data, index) => (
                <RightWrapperTableBottom
                  key={data._id}
                  onClick={props.onClickItem(data)}
                >
                  <RightWrapperNumber>{index + 1}</RightWrapperNumber>

                  {!data.buyer ? (
                    <RightWrapperTitle>{data.name}</RightWrapperTitle>
                  ) : (
                    <>
                      <RightWrapperTitleSold>{data.name}</RightWrapperTitleSold>
                      <RightWrapperCondition>판매완료</RightWrapperCondition>
                    </>
                  )}

                  <RightWrapperPrice>{data.price}</RightWrapperPrice>
                  <RightWrapperDate>
                    {String(data.createdAt).slice(0, 10)}
                  </RightWrapperDate>
                </RightWrapperTableBottom>
              ))
              .reverse()}
          </>
        )}

        {/* {=====나의찜=====} */}
        {!props.isMyItem && (
          <>
            {props.pickData?.fetchUseditemsIPicked
              .map((data, index) => (
                <RightWrapperTableBottom
                  key={data._id}
                  onClick={props.onClickItem(data)}
                >
                  <RightWrapperNumber>{index + 1}</RightWrapperNumber>

                  {!data.buyer ? (
                    <RightWrapperTitle>{data.name}</RightWrapperTitle>
                  ) : (
                    <>
                      <RightWrapperTitleSold>{data.name}</RightWrapperTitleSold>
                      <RightWrapperCondition>판매완료</RightWrapperCondition>
                    </>
                  )}

                  <RightWrapperPrice>{data.price}</RightWrapperPrice>
                  <RightWrapperDate>
                    {String(data.createdAt).slice(0, 10)}
                  </RightWrapperDate>
                </RightWrapperTableBottom>
              ))
              .reverse()}
          </>
        )}
      </RightWrapperBody>
    </RightWrapper>
  );
}
