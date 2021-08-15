import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketCommentListUI from "./MarketCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./MarketCommentList.queries";

export default function MarketCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  return <MarketCommentListUI data={data} />;
}
