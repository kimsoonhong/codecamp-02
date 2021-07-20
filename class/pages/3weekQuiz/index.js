import { Rate, Space, DatePicker } from "antd";
import { useState } from "react";
// import ReactPlayer from "react-player";
import styled from "@emotion/styled";

export default function libraries2() {
  const desc = ["terrible", "bad", "경고", "good", "wonderful"];
  const [rate, setRate] = useState("0");
  const [dateString, setDateString] = useState("2021-00-00");
  const [month, setMonth] = useState("월");
  const [star, setStar] = useState("0");

  // const Youtube = styled(ReactPlayer)`
  //   border: 10px solid blue;
  // `;

  const Star_div = styled.img`
    width: 50px;
    height: 50px;
  `;

  function onchangestar(value) {
    console.log(value);
    setRate(value);

    if (value == 3) {
      alert("함정카드 발동");
      console.log(value);
    }
  }

  function onChangeDate(date, dateString) {
    // console.log(date, dateString);
    setDateString(dateString);
    // console.log("asdf", { ...date }._d);

    setMonth(String({ ...date }._d).slice(4, 7));
  }
  function onClickStar(event) {
    // console.log(event.target.id);
    setStar(event.target.id);

    // for (let i = 1; i <= event.target.id; i = i + 1) {
    //   const index = 0;

    //   index = i;

    //   console.log(index);
    // }
    if (event.target.id == 1) {
      document.getElementById("1").src = "../image/onstar.png";
      document.getElementById("2").src = "../image/offstar.png";
      document.getElementById("3").src = "../image/offstar.png";
      document.getElementById("4").src = "../image/offstar.png";
      document.getElementById("5").src = "../image/offstar.png";
    }
    if (event.target.id == 2) {
      document.getElementById("1").src = "../image/onstar.png";
      document.getElementById("2").src = "../image/onstar.png";
      document.getElementById("3").src = "../image/offstar.png";
      document.getElementById("4").src = "../image/offstar.png";
      document.getElementById("5").src = "../image/offstar.png";
    }
    if (event.target.id == 3) {
      document.getElementById("1").src = "../image/onstar.png";
      document.getElementById("2").src = "../image/onstar.png";
      document.getElementById("3").src = "../image/onstar.png";
      document.getElementById("4").src = "../image/offstar.png";
      document.getElementById("5").src = "../image/offstar.png";
    }
    if (event.target.id == 4) {
      document.getElementById("1").src = "../image/onstar.png";
      document.getElementById("2").src = "../image/onstar.png";
      document.getElementById("3").src = "../image/onstar.png";
      document.getElementById("4").src = "../image/onstar.png";
      document.getElementById("5").src = "../image/offstar.png";
    }
    if (event.target.id == 5) {
      document.getElementById("1").src = "../image/onstar.png";
      document.getElementById("2").src = "../image/onstar.png";
      document.getElementById("3").src = "../image/onstar.png";
      document.getElementById("4").src = "../image/onstar.png";
      document.getElementById("5").src = "../image/onstar.png";
    }
  }

  return (
    <>
      <div>3주차 퀴즈입니다.</div>
      <Rate tooltips={desc} onChange={onchangestar} />
      <div>{rate}점입니다.</div>
      <div>---</div>
      <Space direction="vertical">
        <DatePicker onChange={onChangeDate} />
        {dateString}
        <div>{month}</div>
      </Space>
      <div>---</div>

      {/* <Youtube
        url="https://www.youtube.com/watch?v=6VCStEpYQPg"
        playing={true}
        muted={true}
      /> */}

      <div>---</div>

      <Star_div
        id="1"
        src="../image/offstar.png"
        onClick={onClickStar}
      ></Star_div>
      <Star_div
        id="2"
        src="../image/offstar.png"
        onClick={onClickStar}
      ></Star_div>
      <Star_div
        id="3"
        src="../image/offstar.png"
        onClick={onClickStar}
      ></Star_div>
      <Star_div
        id="4"
        src="../image/offstar.png"
        onClick={onClickStar}
      ></Star_div>
      <Star_div
        id="5"
        src="../image/offstar.png"
        onClick={onClickStar}
      ></Star_div>

      <div>{star}점입니다.</div>
    </>
  );
}
