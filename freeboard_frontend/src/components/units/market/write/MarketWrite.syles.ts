import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* background-color: bisque; */
  padding: 80px 120px;
  border: 2px gray solid;
  margin: auto;
  box-shadow: 0px 0px 10px gray;
`;
export const Header = styled.div`
  width: 100%;
  /* background-color: yellow; */
`;
export const HeaderText = styled.div`
  font-weight: bolder;
  font-size: 60px;
  text-align: center;
  font-family: "live";
`;
export const Body = styled.div`
  width: 100%;
  /* background-color: yellowgreen; */
`;
export const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
  padding-top: 40px;
  padding-bottom: 16px;
  /* background-color: grey; */
`;
export const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MapPositionWrapper = styled.div``;
export const MapPosition = styled.div`
  width: 400px;
  height: 500px;
  z-index: 1;
  /* background-color: hotpink; */
`;
export const MapRightWrapper = styled.div`
  /* background-color: white; */
  width: 100%;
  padding-left: 20px;
`;
export const GPSWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: yellowgreen; */
`;
export const LATDiv = styled.div`
  width: 108px;
  height: 52px;
  /* background-color: violet; */
`;
export const PositionIcon = styled.div`
  width: 30px;
  height: 30px;
  margin: 0px 20px;
  text-align: center;
  /* background-color: wheat; */
`;
export const LNGDiv = styled.div`
  width: 108px;
  height: 52px;
  /* background-color: violet; */
`;
export const AddressWrapper = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: beige; */
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  /* background-color: chocolate; */
  display: flex;
  flex-direction: row;
  padding-top: 16px;
`;
export const ImgUpload = styled.div`
  width: 180px;
  height: 180px;
  /* background-color: #bdbdbd; */
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  padding-top: 15px;
  position: relative;
`;

export const UploadImg = styled.img`
  width: 78px;
  height: 78px;

  opacity: 0.6;
  position: absolute;
  transform: translate(-40px, -15px);
`;
export const RadioButtonWrapper = styled.div`
  /* background-color: beige; */

  display: flex;
  flex-direction: row;
`;
export const RadioButton = styled.div`
  width: 30px;
  height: 30px;
  /* background-color: bisque; */
`;
export const RadioLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-right: 24px;
`;

export const ButtonWrapper = styled.button`
  width: 100%;
  margin-top: 80px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
