import {
  RightWrapper,
  RightWrapperBody,
  RightWrapperTableTop,
  RightWrapperDiv,
  RightWrapperTableBottom,
  WrapperList,
  Page,
} from "./myPoint.styles";
import { ImyPointUIProps } from "./myPoint.types";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function myPointOfLoadingUI(props: ImyPointUIProps) {
  return (
    <>
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
              .map((data: any, index: any) => (
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
            currentPage <= props.loadinglastPage && (
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
