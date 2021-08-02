export default function homeworkUI(aaa) {
  // // presenter 부분
  // export default function Presenter(props) {
  //   return <div>{props.child}</div>;
  // }

  return (
    <div>
      <div>--</div>
      <div>0번</div>
      {/* <div>{aaa.age}</div>
      <div>{aaa.name}</div> */}
      <div>
        {aaa.name}는 {aaa.age}살입니다.
      </div>
      <div>1번</div>
      <button onClick={aaa.onClickButton}>dd</button>
      <div>2번</div>
    </div>
  );
}
