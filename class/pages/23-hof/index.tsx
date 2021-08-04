export default function HofPagfe() {
  const onClickButton = (asdf) => (event) => {
    alert(asdf);
  };
  return (
    <div>
      <div></div>
      <button onClick={onClickButton("12355")}>저를 눌러주세요</button>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
