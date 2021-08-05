import { ChangeEvent, useEffect, useRef, useState } from "react";
import { imgFilesValidation } from "../../../commons/libraries/ImgFiles_validations";
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState([]);

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file: any = event.target.files?.[0];
    if (!imgFilesValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      const fileURlArr = [...fileUrl];
      fileURlArr.push(data.target.result);
      setFileUrl(fileURlArr);
    };
  }
  console.log(fileUrl);

  function onClickDeleteImg(index) {
    const imgArr = [...fileUrl];
    imgArr.splice(index, 1);
    setFileUrl(imgArr);
  }

  useEffect(() => {
    if (props.data?.fetchBoard?.images?.length)
      setResultimgUrl(
        [...props.data?.fetchBoard.images].map(
          (data) => `https://storage.googleapis.com/${data}`
        )
      );
  }, [props.data?.fetchBoard.images]);
  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onClickDeleteImg={onClickDeleteImg}
    />
  );
}
