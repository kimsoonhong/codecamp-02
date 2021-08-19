import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import QuestionList from "../../../src/components/units/marketComment/questionList/questionList.container";
import QuestionWrite from "../../../src/components/units/marketComment/questionWrite/questionWrite.container";

export default function BoardsDetailPage() {
  return (
    <>
      <MarketDetail />
      <QuestionWrite />
      <QuestionList />
    </>
  );
}
