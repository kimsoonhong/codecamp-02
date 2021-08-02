interface Iprops {
  count: number;
  school: string;
}

export default function functionalcomponentUI(aaa: Iprops) {
  return (
    <div>
      <div>컴포넌트 프리젠터 입니다...</div>
      <div>{aaa.count}</div>
      <div>{aaa.school}</div>
    </div>
  );
}
