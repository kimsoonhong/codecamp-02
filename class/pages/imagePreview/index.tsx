import { ChangeEvent, useState } from "react";
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

export default function imagePreviewPage() {
  // console.log("asdfasdf");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadfile] = useMutation(UPLOAD_FILE);
  const [rimgUrl, setRimgUrl] = useState("");
  const [file, setFile] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setpassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

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

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file?.size) {
      alert("파이리 없습니다.");
      setImgUrl("");
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      alert("파일 사이즈가 5mb보다 큽니다.");

      return;
    }
    if (!file?.type.includes("png") && !file?.type.includes("jpeg")) {
      alert("png또는 jpeg 파일만 전송 가능합니다.");

      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      // data >읽힌 결과물
      setRimgUrl(data.target.result); // 임시주소
      setFile(file);
    };
  }

  async function onclickSubmit(event: ChangeEvent) {
    try {
      // const start = performance.now();

      const resultFiles = await Promise.all([
        uploadfile({
          variables: {
            file: file1,
          },
        }),
        uploadfile({
          variables: {
            file: file2,
          },
        }),
        uploadfile({
          variables: {
            file: file3,
          },
        }),
      ]);

      const imgs = resultFiles.map((data) => data.data.uploadFile.url);

      const resultFile1 = await uploadfile({
        variables: {
          file: file1,
        },
      });
      // console.log(resultFile.data.uploadFile.url);
      const imgs1 = resultFile1.data.uploadFile.url;
      setImgUrl(resultFile1.data.uploadFile.url);

      const resultFile2 = await uploadfile({
        variables: {
          file: file2,
        },
      });
      // console.log(resultFile.data.uploadFile.url);
      const imgs2 = resultFile2.data.uploadFile.url;
      setImgUrl(resultFile2.data.uploadFile.url);

      const resultFile3 = await uploadfile({
        variables: {
          file: file3,
        },
      });
      // console.log(resultFile.data.uploadFile.url);
      const imgs3 = resultFile3.data.uploadFile.url;
      setImgUrl(resultFile3.data.uploadFile.url);

      // const end = performance.now();
      // console.log(end - start);

      // ==
      // =
      // =
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            images: [imgs],
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert("게시물이 등록 되었습니다");
    } catch (error) {
      alert(error.massage);
    }
    // setImgUrl("");
  }
  return (
    <div>
      <img src={rimgUrl}></img>
      <input type="file" onChange={onChangeFile}></input>

      <button onClick={onclickSubmit}>게시물 등록하기</button>
      <input type="text" onChange={onChangeWriter}></input>
      <input type="text" onChange={onChangePassword}></input>
      <input type="text" onChange={onChangeTitle}></input>
      <input type="text" onChange={onChangeContents}></input>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
