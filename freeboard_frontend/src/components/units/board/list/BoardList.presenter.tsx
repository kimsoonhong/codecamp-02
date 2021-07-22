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
  Page,
  WrapperList,
} from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <Wrapper>
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((data: any, index: number) => (
        <Row key={data._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle id={data._id} onClick={props.onClickMoveToBoardDetail}>
            {data.title}
          </ColumnTitle>
          <ColumnBasic>{data.writer}</ColumnBasic>
          <ColumnBasic>{getDate(data.createdAt)}</ColumnBasic>
        </Row>
      ))}

      <TableBottom />
      <Footer>
        <WrapperList>
          <LeftOutlined
            onClick={props.onClickPrevPage}
            style={{ fontSize: "30px", marginRight: "30px" }}
          />

          {new Array(10).fill(1).map((_, index) => {
            const currentPage = props.startpage + index;
            return (
              currentPage <= props.lastPage && (
                <Page
                  key={currentPage}
                  onClick={props.onClickPage}
                  id={String(currentPage)}
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
    </Wrapper>
  );
}
