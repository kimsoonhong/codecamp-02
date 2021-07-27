import { ChangeEvent, useState } from "react";
import firebase from "firebase/app";

export default function firebasepage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  function onClickSubmit() {
    firebase.firestore().collection("blog").add({
      writer: writer,
      title: title,
      contents: contents,
    });
  }

  async function onClickFatch() {
    const result = await firebase.firestore().collection("blog").get();
    result.forEach((doc) => console.log(doc.data()));
    d;
  }

  return (
    <div>
      <div>파이어 베이스</div>
      <div>신기하구만</div>
      <div></div>
      작성자
      <input onChange={onChangeWriter} />
      제목
      <input onChange={onChangeTitle} type="text" />
      내용
      <input onChange={onChangeContents} type="text" />
      <button onClick={onClickSubmit}>ddd</button>
      <button onClick={onClickFatch}>불러오기</button>
      <div></div>
    </div>
  );
}
