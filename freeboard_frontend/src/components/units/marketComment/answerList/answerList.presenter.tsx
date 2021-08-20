import AnswerListUIItem from "./answerList.presenterItem";

export default function answerListUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((data) => (
        <AnswerListUIItem
          data={data}
          key={data._id}
          questionData={props.questionData}
        />
      ))}
    </>
  );
}
