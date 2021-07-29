import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function imageUpload() {
  const [uploadfile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [imgUrl, setImgUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [writer, setWriter] = useState("");
  const [password, setpassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  function onClickGreyBox() {
    fileRef.current?.click();
  }

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setpassword(event.target.value);
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  async function onclickSubmit(event: ChangeEvent) {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            images: [imgUrl],
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert("게시물이 등록 되었습니다");
    } catch (error) {
      alert(error.massage);
    }
  }
  return (
    <div>
      <button onClick={onclickSubmit}>게시물 등록하기</button>
      <input type="text" onChange={onChangeWriter}></input>
      <input type="text" onChange={onChangePassword}></input>
      <input type="text" onChange={onChangeTitle}></input>
      <input type="text" onChange={onChangeContents}></input>
      <input
        ref={fileRef}
        type="file"
        onChange={onChangeFile}
        multiple
        style={{ display: "none" }}
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      <div
        style={{ width: "100px", backgroundColor: "beige", height: "100px" }}
        onClick={onClickGreyBox}
      ></div>
    </div>
  );
}
