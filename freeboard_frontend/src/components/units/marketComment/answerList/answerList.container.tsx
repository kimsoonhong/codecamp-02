import AnswerListUI from "./answerList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_QUESTION_ANSWER } from "./answerList.querise";

export default function answerList(props) {
  const { data } = useQuery(FETCH_QUESTION_ANSWER, {
    variables: { useditemQuestionId: props.data._id },
  });
  // console.log(data, "7&&");
  return <AnswerListUI data={data} />;
}
