import {
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
} from "./myMarket.styles";

export default function myMarketUI(props) {
  return (
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

        {props.data?.fetchUseditemsISold.map((data) => (
          <RightWrapperTableBottom key={data._id}>
            <RightWrapperNumber>1</RightWrapperNumber>
            <RightWrapperTitle>{data.name}</RightWrapperTitle>
            <RightWrapperCondition>
              {data.buyer ? "있다" : "없어"}
            </RightWrapperCondition>
            <RightWrapperPrice>{data.price}</RightWrapperPrice>
            <RightWrapperDate>
              {String(data.createdAt).slice(0, 10)}
            </RightWrapperDate>
          </RightWrapperTableBottom>
        ))}
      </RightWrapperBody>
    </RightWrapper>
  );
}
