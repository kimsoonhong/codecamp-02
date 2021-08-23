import QuestionListUIItem from "./questionList.presenterItem";

export default function questionListUI(props: any) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((data: any) => (
        <QuestionListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
