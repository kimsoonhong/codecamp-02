import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
} from "./myPoint.styles";

export default function myPointOfBuyingUI(props) {
  return (
    <RightWrapper>
      <RightWrapperBody>
        <RightWrapperTableTop>
          <RightWrapperDiv width={20}>거래일</RightWrapperDiv>
          <RightWrapperDiv width={25}>제목</RightWrapperDiv>
          <RightWrapperDiv width={20}>거래 내역</RightWrapperDiv>
          <RightWrapperDiv width={20}>거래 후 잔액</RightWrapperDiv>
          <RightWrapperDiv width={15}>판매자</RightWrapperDiv>
        </RightWrapperTableTop>
        {/* {=============하단=================} */}

        <>
          {props.BuyingData?.fetchPointTransactionsOfBuying
            .map((data, index) => (
              <RightWrapperTableBottom key={data._id}>
                <RightWrapperDiv width={20}>
                  {String(data.createdAt).slice(0, 10)}
                </RightWrapperDiv>
                <RightWrapperDiv width={25}>
                  {data.useditem.name}
                </RightWrapperDiv>
                <RightWrapperDiv width={20}>
                  {data.statusDetail}
                </RightWrapperDiv>
                <RightWrapperDiv width={20}>{data.amount}</RightWrapperDiv>
                <RightWrapperDiv width={15}>{data.balance}</RightWrapperDiv>
              </RightWrapperTableBottom>
            ))
            .reverse()}
        </>
      </RightWrapperBody>
    </RightWrapper>
  );
}