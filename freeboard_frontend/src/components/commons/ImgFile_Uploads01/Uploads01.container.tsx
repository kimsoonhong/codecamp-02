import { ChangeEvent, useRef, useState } from "react";
import { imgFilesValidation } from "../../../commons/libraries/ImgFiles_validations";
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState(props.imgData ? props.imgData : []);
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
      fileURlArr.push(data.target.result);
      setFileUrl(fileURlArr);
      // props.onChangeFile(file, index)
      props.setFiles((prev) => {
        return [...prev, file];
      });
    };
  }

  function onClickDeleteImg(index) {
    const imgArr = [...fileUrl];
    imgArr.splice(index, 1);
    setFileUrl(imgArr);
  }

  // useEffect(() => {
  //   if (props.data?.fetchUseditem?.images?.length)
  //     setFileUrl(
  //       [...props.data?.fetchUseditem.images].map(
  //         (data) => `https://storage.googleapis.com/${data}`
  //       )
  //     );
  // }, [props.data?.fetchUseditem.images]);


  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onClickDeleteImg={onClickDeleteImg}
      number={props.number}
      width={props.width}
      height={props.height}
      fetchImg={props.fetchImg}
    />
  );
}
