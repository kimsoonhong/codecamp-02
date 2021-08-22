import { ChangeEvent, useEffect, useRef, useState } from "react";
import { imgFilesValidation } from "../../../commons/libraries/ImgFiles_validations";
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState([]);

  // const [file, setFile] = useState([]);
  // const [file, setFile] = useState([]);

  function onClickUpload() {
    fileRef.current?.click();
  }

  console.log("__________________________________________");
  console.log(fileUrl, "fileUrl");

  console.log("__________________________________________");

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file: any = event.target.files?.[0];

    if (!imgFilesValidation(file)) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      const fileURlArr = [...fileUrl];
      fileURlArr.push(data.target.result);
      setFileUrl(fileURlArr);

      // props.onChangeFile(fileUrl);
      // props.setSendImg(fileUrl);

      props.setFiles((prev) => {
        return [...prev, file];
      });
    };
  }

  function onClickDeleteImg(index) {
    const imgArr = [...fileUrl];
    imgArr.splice(index, 1);
    setFileUrl(imgArr);

    const DeleteUrlImg = [...props.sendImg];
    DeleteUrlImg.splice(index, 1);
    props.setSendImg(DeleteUrlImg);
  }
  // console.log(props.data?.fetchUseditem?.images, "<<<");
  useEffect(() => {
    if (props.data?.fetchUseditem?.images?.length)
      setFileUrl(
        [...props.data?.fetchUseditem.images].map(
          (data) => `https://storage.googleapis.com/${data}`
        )
      );
  }, [props.data?.fetchUseditem.images]);

  useEffect(() => {
    if (props.data?.fetchUseditem?.images?.length)
      props.setSendImg(
        [...props.data?.fetchUseditem.images].map((data) => `${data}`)
      );
  }, [props.data?.fetchUseditem.images]);

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      fetchImg={props.fetchImg}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onClickDeleteImg={onClickDeleteImg}
      number={props.number}
      width={props.width}
      height={props.height}
    />
  );
}
