import { useContext } from "react";
import { editContext } from "../../../../pages/example/context/edit/index";

export default function writePageUI() {
  const { isEdit } = useContext(editContext);
  return (
    <div>
      <div>{isEdit ? "수정하기" : "등록하기"}</div>
      <div>ddd</div>
    </div>
  );
}
