import AnswerListUI from "./answerList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_QUESTION_ANSWER } from "./answerList.querise";

export default function answerList(props: any) {
  const { data } = useQuery(FETCH_QUESTION_ANSWER, {
    variables: { useditemQuestionId: props.data._id },
  });

  return <AnswerListUI data={data} questionData={props.data._id} />;
}
