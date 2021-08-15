import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./MarketCommentList.types";

export default function MarketCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((data) => (
        <MarketCommentListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
