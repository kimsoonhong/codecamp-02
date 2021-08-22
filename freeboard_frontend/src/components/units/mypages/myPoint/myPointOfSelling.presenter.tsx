import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
} from "./myPoint.styles";

export default function myPointOfSellingUI(props) {
  return (
    <RightWrapper>
      <RightWrapperBody>
        <RightWrapperTableTop>
          <RightWrapperDiv width={25}>거래일</RightWrapperDiv>
          <RightWrapperDiv width={25}>제목</RightWrapperDiv>
          <RightWrapperDiv width={25}>거래내역</RightWrapperDiv>
          <RightWrapperDiv width={25}>거래 후 잔액</RightWrapperDiv>
        </RightWrapperTableTop>
        {/* {=============하단=================} */}

        <>
          {props.SellingData?.fetchPointTransactionsOfSelling
            .map((data, index) => (
              <RightWrapperTableBottom key={data._id}>
                <RightWrapperDiv>
                  {String(data.createdAt).slice(0, 10)}
                </RightWrapperDiv>
                <RightWrapperDiv> {data.useditem.name}</RightWrapperDiv>
                <RightWrapperDiv> {data.statusDetail}</RightWrapperDiv>
                <RightWrapperDiv>{data.balance}</RightWrapperDiv>
              </RightWrapperTableBottom>
            ))
            .reverse()}
        </>
      </RightWrapperBody>
    </RightWrapper>
  );
}
