import HomeworkUI from "./homework.presenter";

// // container 부분
// export default function Container() {
//   return (
//     <>
//       <Presenter child="철수" />
//     </>
//   );
// }

export default function homework(event) {
  function onClickButton() {
    alert("aa");
  }

  return (
    <>
      {HomeworkUI({ age: 23, name: "토끼" })}
      {HomeworkUI({ name: "다람쥐" })}

      <HomeworkUI age="123" name={"토끼"} onClickButton={onClickButton} />
    </>
  );
}
