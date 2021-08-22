import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
} from "./myPoint.styles";

export default function myPointOfAllUI(props) {
  return (
    <RightWrapper>
      <RightWrapperBody>
        <RightWrapperTableTop>
          <RightWrapperDiv width={25}>날짜</RightWrapperDiv>
          <RightWrapperDiv width={25}>내용</RightWrapperDiv>
          <RightWrapperDiv width={25}>거래 및 충전 내역</RightWrapperDiv>
          <RightWrapperDiv width={25}>잔액</RightWrapperDiv>
        </RightWrapperTableTop>
        {/* {=============하단=================} */}

        <>
          {props.allData?.fetchPointTransactions
            .map((data, index) => (
              <RightWrapperTableBottom key={data._id}>
                <RightWrapperDiv width={25}>
                  {String(data.createdAt).slice(0, 10)}
                </RightWrapperDiv>
                <RightWrapperDiv width={25}>
                  {data.statusDetail}
                </RightWrapperDiv>
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
