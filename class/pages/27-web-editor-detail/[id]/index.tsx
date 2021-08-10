import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import DOMpurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;
export default function webEditerData() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <div>
      작성자 <div>{data?.fetchBoard.writer}</div>
      제목<div>{data?.fetchBoard.title}</div>
      내용
      <span
        dangerouslySetInnerHTML={{
          __html: DOMpurify.sanitize(data?.fetchBoard.contents),
        }}
      ></span>
      {/* <textarea value={data?.fetchBoard.contents} /> */}
    </div>
  );
}
