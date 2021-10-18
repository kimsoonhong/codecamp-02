import styled from "@emotion/styled";
import { getDate } from "../../../../commons/libraries/utils";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  Button,
  ColumnBasic,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnTitle,
  Footer,
  Row,
  TableBottom,
  TableTop,
  Wrapper,
  InnerWrapper,
  Page,
  WrapperList,
  SearchWrapper,
  SearchInput,
} from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

const Word = styled.span`
  font-weight: ${(props: { isMatched: boolean }) =>
    props.isMatched ? "bolder" : ""};
`;

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
    <Wrapper>
      <InnerWrapper>
        <SearchWrapper>
          <div style={{ width: "100%" }}></div>
          <SearchInput
            placeholder="  # 제목 검색하기  "
            type="text"
            onChange={props.onChangeSearch}
            ref={props.inputRef}
          />
        </SearchWrapper>
        <TableTop />
        <Row>
          <ColumnHeaderBasic>번호</ColumnHeaderBasic>
          <ColumnHeaderTitle>제목</ColumnHeaderTitle>
          <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
          <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
        </Row>
        {/* +
      +
      +
      +
      +
       */}
        {props.data?.fetchBoards.map((data: any, index: number) => (
          <Row key={data._id}>
            <ColumnBasic>{index + 1}</ColumnBasic>
            <ColumnTitle id={data._id} onClick={props.onClickMoveToBoardDetail}>
              {/* {data.title} */}
              {data.title

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
            </ColumnTitle>
            <ColumnBasic>{data.writer}</ColumnBasic>
            <ColumnBasic>{getDate(data.createdAt)}</ColumnBasic>
          </Row>
        ))}

        <TableBottom />
        <Footer>
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
                currentPage <= props.lastPage && (
                  <Page
                    key={currentPage}
                    onClick={props.onClickPage}
                    id={String(currentPage)}
                    // @ts-ignore
                    isActive={currentPage === props.activedPage}
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
          <Button onClick={props.onClickMoveToBoardNew}>
            <img src="/images/board/list/Vector.png" />
            게시물 등록하기
          </Button>
        </Footer>
      </InnerWrapper>
    </Wrapper>
    </>
  );
}
