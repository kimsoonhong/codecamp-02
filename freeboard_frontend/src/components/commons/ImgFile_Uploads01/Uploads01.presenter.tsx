import { Wrapper, UploadImg, ImgUpload } from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <Wrapper>
      {props.fileUrl.map((data, index) => (
        <ImgUpload
          onClick={() => props.onClickDeleteImg(index)}
          key={index}
          width={props.width}
          height={props.height}
          number={props.number}
        >
          <UploadImg
            src={`${props.fileUrl[index]}`}
            width={props.width}
            height={props.height}
            number={props.number}
          />
          <div style={{ paddingTop: "70px" }}>-</div>
          <div>Delete</div>
          <input type="file" multiple style={{ display: "none" }} />
        </ImgUpload>
      ))}

      {new Array(props.number - props.fileUrl.length)
        .fill(1)
        .map((_, index) => {
          return (
            <ImgUpload width={props.width} height={props.height}>
              <label htmlFor={index}>
                <div style={{ paddingTop: "40%" }}>+</div>
                <div>Upload</div>

                <input
                  id={index}
                  ref={props.fileRef}
                  type="file"
                  onChange={props.onChangeFile}
                  multiple
                  style={{ display: "none" }}
                  width={props.width}
                  height={props.height}
                  number={props.number}
                />
              </label>
            </ImgUpload>
          );
        })}
    </Wrapper>
  );
}
