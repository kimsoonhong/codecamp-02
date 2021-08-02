import { useContext } from "react";
import { aaaContext } from "../../../../pages/21-contextAPI";

export default function contextAPIUI(props) {
  const { isEdit, onClickEdit } = useContext(aaaContext);
  return (
    <div>
      <div>{isEdit ? "수정하기" : "등록하기"}</div>
      <div>ddd</div>
      <button onClick={onClickEdit}>ddd</button>
      <div></div>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>123</div>
      <div>123</div>
    </div>
  );
}
