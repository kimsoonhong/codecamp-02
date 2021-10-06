import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
`;

export const ImgUpload = styled.div`
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  position: relative;
  /* background-color: beige; */
  width: ${(props: any) => props.width}px;
  height: ${(props: any) => props.height}px;
`;

export const UploadImg = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  opacity: 0.6;
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, 0%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
