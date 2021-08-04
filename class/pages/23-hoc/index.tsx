import withAuth from "../../src/components/commons/withAuth";

function ExamplePage() {
  return (
    <div>
      <div></div>
      <div>접근에 성공했습니다.</div>
      <div></div>ㅇㅇ
      <div></div>dd
      <div></div>
    </div>
  );
}

export default withAuth(ExamplePage);
