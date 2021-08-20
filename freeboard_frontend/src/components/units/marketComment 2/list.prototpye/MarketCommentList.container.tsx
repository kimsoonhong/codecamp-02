import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketCommentListUI from "./MarketCommentList.presenter";
import { FETCH_QUESTIONS } from "./MarketCommentList.queries";

export default function MarketCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });


  return <MarketCommentListUI data={data} />;
}
