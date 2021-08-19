import QuestionListUIItem from "./questionList.presenterItem";

export default function questionListUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((data) => (
        <QuestionListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
