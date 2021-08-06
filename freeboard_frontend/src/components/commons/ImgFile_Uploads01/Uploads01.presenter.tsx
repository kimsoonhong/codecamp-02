import { Wrapper, UploadImg, ImgUpload } from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <Wrapper>
      {props.fileUrl.map((data, index) => (
        <ImgUpload
          onClick={() => props.onClickDeleteImg(index)}
          key={index}
          size={props.size}
          number={props.number}
        >
          <UploadImg
            src={`${props.fileUrl[index]}`}
            size={props.size}
            number={props.number}
          />
          <div style={{ paddingTop: "70px" }}>-</div>
          <div>Delete</div>
          <input type="file" multiple style={{ display: "none" }} />
        </ImgUpload>
      ))}

      {new Array(3 - props.fileUrl.length).fill(1).map((_, index) => {
        return (
          <ImgUpload size={props.size} number={props.number}>
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
                size={props.size}
                number={props.number}
              />
            </label>
          </ImgUpload>
        );
      })}
    </Wrapper>
  );
}
