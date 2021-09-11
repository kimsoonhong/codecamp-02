import { ImyPointUIProps } from "./myPoint.types";
import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
  Word,
  WrapperList,
  Page,
} from "./myPoint.styles";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function myPointOfSellingUI(props: ImyPointUIProps) {
  return (
    <>
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
            {props.SellingData?.fetchPointTransactionsOfSelling.map(
              (data: any, index: any) => (
                <RightWrapperTableBottom key={data._id}>
                  <RightWrapperDiv width={25}>
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
                  <RightWrapperDiv width={25}>
                    {data.statusDetail}
                  </RightWrapperDiv>
                  <RightWrapperDiv width={25}>{data.balance}</RightWrapperDiv>
                </RightWrapperTableBottom>
              )
            )}
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
            currentPage <= props.sellinglastPage && (
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
