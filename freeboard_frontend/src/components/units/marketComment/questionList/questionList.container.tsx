import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import QuestionListUI from "./questionList.presenter";
import { FETCH_QUESTIONS } from "./questionList.querise";

export default function QuestionList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });

  return (
    <>
      {/* {data?.fetchUseditemQuestions.map((data) => (
        <QuestionListUIItem key={data._id} data={data} />
      ))} */}
      <QuestionListUI data={data} />
    </>
  );
}
