import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import BoardCommentList from "../../../src/components/units/marketComment/list/MarketCommentList.container";
import BoardCommentWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";

export default function BoardsDetailPage() {
  return (
    <>
      <MarketDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
