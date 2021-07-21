import { Modal } from "antd";
import { useState } from "react";

export default function li3() {
  const [isopen, setIsopen] = useState(false);

  function onClickSubmit() {
    setIsopen(true);
  }

  function OnClose() {
    setIsopen(false);
  }
  return (
    <div>
      <Modal
        title="게시글 등록"
        visible={isopen}
        onOk={OnClose}
        onCancel={OnClose}
      >
        <p>게시물이 정상적으로 등록되었습니다.</p>
      </Modal>

      <button onClick={onClickSubmit}>게시물 등록</button>
    </div>
  );
}
