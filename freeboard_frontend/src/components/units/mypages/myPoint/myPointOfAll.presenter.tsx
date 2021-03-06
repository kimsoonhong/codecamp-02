import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
  Word,
} from "./myPoint.styles";
import { ImyPointUIProps } from "./myPoint.types";

export default function myPointOfAllUI(props: ImyPointUIProps) {
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
            .map((data: any, index: any) => (
              <RightWrapperTableBottom key={data._id}>
                <RightWrapperDiv width={25}>
                  {String(data.createdAt).slice(0, 10)}
                </RightWrapperDiv>
                <RightWrapperDiv width={25}>
                  {data.statusDetail
                    .replaceAll(props.keyword, `$!${props.keyword}$!`)
                    .split("$!")
                    .map((data2: any, index: any) => (
                      <Word
                        id={data._id}
                        key={index}
                        isMatched={props.keyword === data2}
                        onClick={props.onClickMoveToBoardDetail}
                      >
                        {data2}
                      </Word>
                    ))}
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
