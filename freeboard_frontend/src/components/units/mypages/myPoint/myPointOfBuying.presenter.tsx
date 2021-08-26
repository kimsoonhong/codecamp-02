import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
  Word,
} from "./myPoint.styles";
import { ImyPointUIProps } from "./myPoint.types";

export default function myPointOfBuyingUI(props: ImyPointUIProps) {
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
            .map((data: any, index: any) => (
              <RightWrapperTableBottom key={data._id}>
                <RightWrapperDiv width={20}>
                  {String(data.createdAt).slice(0, 10)}
                </RightWrapperDiv>
                <RightWrapperDiv width={25}>
                  {data.useditem.name
                    .replaceAll(props.keyword, `$!${props.keyword}$!`)
                    .split("$!")
                    .map((data2: any, index: any) => (
                      <Word
                        id={data._id}
                        key={index}
                        isMatched={props.keyword === data2}
                        // onClick={props.onClickMoveToBoardDetail}
                      >
                        {data2}
                      </Word>
                    ))}
                </RightWrapperDiv>
                <RightWrapperDiv width={20}>{data.amount}</RightWrapperDiv>
                <RightWrapperDiv width={20}>{data.balance}</RightWrapperDiv>
                <RightWrapperDiv width={15}>
                  {data.useditem.name}
                </RightWrapperDiv>
              </RightWrapperTableBottom>
            ))
            .reverse()}
        </>
      </RightWrapperBody>
    </RightWrapper>
  );
}
