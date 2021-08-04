export default function UI(props) {
  return (
    <div>
      아이디
      <input onChange={props.onChangeEmail} type="text" />
      비밀번호
      <input onChange={props.onChangePassword} type="text" />
      <button onClick={props.onClickToMain}>이동하기</button>
    </div>
  );
}
