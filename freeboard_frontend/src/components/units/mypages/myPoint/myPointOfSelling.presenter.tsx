import { ImyPointUIProps } from "./myPoint.types";
import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
  Word,
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
