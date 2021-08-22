import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
} from "./myPoint.styles";

export default function myPointOfLoadingUI(props) {
  return (
    <RightWrapper>
      <RightWrapperBody>
        <RightWrapperTableTop>
          <RightWrapperDiv width={25}>충전일</RightWrapperDiv>
          <RightWrapperDiv width={25}>결제 ID</RightWrapperDiv>
          <RightWrapperDiv width={25}>충전 내역</RightWrapperDiv>
          <RightWrapperDiv width={25}>충전 후 잔액</RightWrapperDiv>
        </RightWrapperTableTop>
        {/* {=============하단=================} */}

        <>
          {props.LoadingData?.fetchPointTransactionsOfLoading
            .map((data, index) => (
              <RightWrapperTableBottom key={data._id}>
                <RightWrapperDiv width={25}>
                  {String(data.createdAt).slice(0, 10)}
                </RightWrapperDiv>
                <RightWrapperDiv width={25}>{data.impUid}</RightWrapperDiv>
                <RightWrapperDiv width={25}>{data.amount}</RightWrapperDiv>
                <RightWrapperDiv width={25}>{data.balance}</RightWrapperDiv>
              </RightWrapperTableBottom>
            ))
            .reverse()}
        </>
      </RightWrapperBody>
    </RightWrapper>
  );
}
