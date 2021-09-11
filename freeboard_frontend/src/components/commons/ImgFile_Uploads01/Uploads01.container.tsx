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

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file: any = event.target.files?.[0];

    if (!imgFilesValidation(file)) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      const fileURlArr = [...fileUrl];
      // @ts-ignore
      fileURlArr.push(data.target.result);
      setFileUrl(fileURlArr);

      // props.onChangeFile(fileUrl);
      // props.setSendImg(fileUrl);
      // @ts-ignore
      props.setFiles((prev) => {
        return [...prev, file];
      });
    };
  }

  function onClickDeleteImg(index: any) {
    const imgArr = [...fileUrl];
    imgArr.splice(index, 1);
    setFileUrl(imgArr);
    // @ts-ignore
    const DeleteUrlImg = [...props.sendImg];
    DeleteUrlImg.splice(index, 1);
    // @ts-ignore
    props.setSendImg(DeleteUrlImg);
  }

  useEffect(() => {
    // @ts-ignore
    if (props.data?.fetchUseditem?.images?.length)
      setFileUrl(
        // @ts-ignore
        [...props.data?.fetchUseditem.images].map(
          (data) => `https://storage.googleapis.com/${data}`
        )
      );
    // @ts-ignore
  }, [props.data?.fetchUseditem.images]);

  useEffect(() => {
    // @ts-ignore
    if (props.data?.fetchUseditem?.images?.length)
      // @ts-ignore
      props.setSendImg(
        // @ts-ignore
        [...props.data?.fetchUseditem.images].map((data) => `${data}`)
      );
    // @ts-ignore
  }, [props.data?.fetchUseditem.images]);

  return (
    <Uploads01UI
      fileRef={fileRef}
      // @ts-ignore
      fileUrl={fileUrl}
      // @ts-ignore
      fetchImg={props.fetchImg}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onClickDeleteImg={onClickDeleteImg}
      // @ts-ignore
      number={props.number}
      // @ts-ignore
      width={props.width}
      // @ts-ignore
      height={props.height}
    />
  );
}
