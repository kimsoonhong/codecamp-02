import { request, gql } from "graphql-request";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
import Head from "next/head";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

export default function BoardsDetailPage(props: any) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchBoard.title} />
        <meta property="og:contents" content={props.fetchBoard.contents} />
        <meta
          property="og:images"
          content={`https://storage.googleapis.com/${props.fetchBoard.images[0]}`}
        />
      </Head>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend02.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    {
      boardId: context.query.boardId,
    }
  );

  return { props: { fetchBoard: result.fetchBoard } };
};
