import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./MarketCommentList.types";

export default function MarketCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((data) => (
        <MarketCommentListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
