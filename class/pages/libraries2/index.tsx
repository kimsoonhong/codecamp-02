import { DatePicker, Rate } from "antd";
import "antd/dist/antd.css";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const Youtube = styled(ReactPlayer)`
  width: 100px;
  height: 199px;
  border: 10px solid blue;
`;

export default function libraries2() {
  const desc = ["terrible", "bad", "normal", "good", "wwww"];

  function onchangestar(value) {
    console.log(value);
  }

  return (
    <>
      <div>라이브러리 2페이지 입니다.</div>
      <DatePicker />
      <Rate tooltips={desc} onChange={onchangestar} />
      <Youtube
        url="https://www.youtube.com/watch?v=6VCStEpYQPg"
        playing={true}
        muted={true}
      />
    </>
  );
}

// Render a YouTube video player
