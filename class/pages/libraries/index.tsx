import { FastBackwardOutlined, ShrinkOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const FastBackward = styled(FastBackwardOutlined)`
  color: aliceblue;
  font-size: 100px;
`;

export default function LibarariesPage() {
  function onclickIcon(event) {
    console.log(event.target.id);
  }
  return (
    <>
      <div>라이브러리 페이지</div>
      <FastBackward id="1234" onClick={onclickIcon} />
      <ShrinkOutlined />
    </>
  );
}
