import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
  Word,
  Page,
  WrapperList,
} from "./myPoint.styles";
import { ImyPointUIProps } from "./myPoint.types";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function myPointOfBuyingUI(props: ImyPointUIProps) {
  return (
    <>
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
                    {data.useditem?.name
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
                    {data.useditem?.name}
                  </RightWrapperDiv>
                </RightWrapperTableBottom>
              ))
              .reverse()}
          </>
        </RightWrapperBody>
      </RightWrapper>

      <WrapperList>
        <LeftOutlined
          // @ts-ignore
          onClick={props.onClickPrevPage}
          style={{ fontSize: "30px", marginRight: "30px" }}
        />
        {/* +
+
+
+
+${(props: Iprops) => (props.isMatched ? "props.searchPage" : "10 ")};
*/}
        {new Array(10).fill(1).map((_, index) => {
          // @ts-ignore
          const currentPage = props.startpage + index;
          return (
            currentPage <= props.buyinglastPage && (
              <Page
                key={currentPage}
                onClick={props.onClickPage}
                id={String(currentPage)}
                // @ts-ignore
                isActive={currentPage === props.activedPages}
              >
                {currentPage}
              </Page>
            )
          );
        })}

        <RightOutlined
          onClick={props.onClickNextPage}
          style={{ fontSize: "30px", marginLeft: "30px" }}
        />
      </WrapperList>
    </>
  );
}
