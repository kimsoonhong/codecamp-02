import AnswerListUIItem from "./answerList.presenterItem";

export default function answerListUI(props: any) {
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((data: any) => (
        <AnswerListUIItem
          data={data}
          key={data._id}
          questionData={props.questionData}
        />
      ))}
    </>
  );
}
