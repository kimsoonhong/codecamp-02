import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/MarketCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/MarketCommentWrite.container";

export default function BoardsDetailPage() {
  return (
    <>
      <MarketDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
