import { ImyPointUIProps } from "./myPoint.types";
import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
} from "./myPoint.styles";

export default function myPointOfSellingUI(props: ImyPointUIProps) {
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
            .map((data: any, index: any) => (
              <RightWrapperTableBottom key={data._id}>
                <RightWrapperDiv width={25}>
                  {String(data.createdAt).slice(0, 10)}
                </RightWrapperDiv>
                <RightWrapperDiv width={25}>
                  {data.useditem.name}
                </RightWrapperDiv>
                <RightWrapperDiv width={25}>
                  {data.statusDetail}
                </RightWrapperDiv>
                <RightWrapperDiv width={25}>{data.balance}</RightWrapperDiv>
              </RightWrapperTableBottom>
            ))
            .reverse()}
        </>
      </RightWrapperBody>
    </RightWrapper>
  );
}
