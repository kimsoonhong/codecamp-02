import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  UploadImg,
} from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {/* {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={props.fileUrl} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+++</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      /> */}

      {props.fileUrl.map((data, index) => (
        <UploadButton onClick={() => props.onClickDeleteImg(index)} key={index}>
          <UploadImg
            src={
              // props.isEdit
              //   ? props.data?.fetchBoard.images[index]
              `${props.fileUrl[index]}`
            }
          />
          <div>-</div>
          <div>Delete</div>
          <input type="file" multiple style={{ display: "none" }} />
        </UploadButton>
      ))}

      {new Array(3 - props.fileUrl.length).fill(1).map((_, index) => {
        return (
          <UploadButton>
            <label htmlFor={index}>
              <div>
                <div>+</div>
                <div>Upload</div>
              </div>

              <input
                id={index}
                ref={props.fileRef}
                type="file"
                onChange={props.onChangeFile}
                multiple
                style={{ display: "none" }}
              />
            </label>
          </UploadButton>
        );
      })}
    </>
  );
}
