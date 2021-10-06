import { Wrapper, UploadImg, ImgUpload } from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <Wrapper>
      {/* @ts-ignore */}
      {props.fileUrl.map((data: any, index: any) => (
        <ImgUpload
          // @ts-ignore
          onClick={() => props.onClickDeleteImg(index)}
          key={index}
          // @ts-ignore
          width={props.width}
          // @ts-ignore
          height={props.height}
        >
          <UploadImg
            src={`${props.fileUrl[index]}`}
            // @ts-ignore
            width={props.width}
            // @ts-ignore
            height={props.height}
          />
          <div style={{ paddingTop: "70px" }}>-</div>
          <div>Delete</div>
          <input type="file" multiple style={{ display: "none" }} />
        </ImgUpload>
      ))}
      {/* @ts-ignore */}
      {new Array(props.number - props.fileUrl.length)
        .fill(1)
        .map((_, index) => {
          return (
            // @ts-ignore
            <ImgUpload key={_} width={props.width} height={props.height}>
              {/* @ts-ignore */}
              <label htmlFor={index}>
                <div style={{ paddingTop: "40%" }}>+</div>
                <div>Upload</div>

                <input
                  // @ts-ignore
                  id={index}
                  ref={props.fileRef}
                  type="file"
                  onChange={props.onChangeFile}
                  multiple
                  style={{ display: "none", cursor: "pointer" }}
                />
              </label>
            </ImgUpload>
          );
        })}
    </Wrapper>
  );
}
