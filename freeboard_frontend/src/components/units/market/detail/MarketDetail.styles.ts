import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 800px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const HeaderAvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: darkolivegreen; */
`;

export const HeaderAvatar = styled.img`
  margin-right: 10px;
  width: 50%;

  margin: auto;
`;

export const HeaderWirterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderWriter = styled.div`
  font-size: 20px;
  padding-left: 20px;
`;

export const HeaderCreatedAt = styled.div`
  font-size: 16px;
  padding-left: 20px;
  /* background-color: cadetblue; */
  width: 150px;
`;

export const HeaderIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  /* background-color: darkblue; */
`;

// __
export const Body = styled.div`
  width: 100%;
`;

export const BodyTopWrapper = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

export const BodyTopTextWrapper = styled.div`
  background-color: blue;
`;

export const BodyTopRemark = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: grey;
`;

export const BodyTopName = styled.div`
  padding-top: 4px;
  font-weight: bold;
  font-size: 24px;
`;

export const BodyTopPrice = styled.div`
  padding-top: 8px;
  font-weight: bold;
  font-size: 36px;
`;

export const BodyTopPickWrapper = styled.div`
  background-color: blue;
  padding-right: 10px;
`;

export const BodyTopPick = styled.div`
  background-color: brown;
  width: 30px;
  height: 30px;
`;

export const BodyTopPickNumber = styled.div`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const BodyMiddleWrapper = styled.div`
  background-color: cadetblue;
  padding-top: 80px;
  border-bottom: 1px solid grey;
`;

export const BodyMiddleImgWrapper = styled.div`
  background-color: chartreuse;
`;

export const BodyMiddleImgMain = styled.div`
  background-color: green;
  margin: auto;
  width: 383px;
  height: 384px;
  padding: 44px;
`;

export const BodyMiddleImgPreviewWrapper = styled.div`
  width: 100%;
  background-color: hotpink;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`;

export const BodyMiddleImgPreview = styled.div`
  width: 80px;
  height: 80px;
  background-color: honeydew;
`;

export const BodyMiddleContent = styled.div`
  padding-top: 80px;
  background-color: gainsboro;
  font-weight: 500;
  font-size: 18px;
`;

export const BodyMiddleTags = styled.div`
  margin: 40px 0px;
  background-color: blueviolet;
  font-weight: 500;
  font-size: 16px;
  color: gray;
`;

export const BodyMapWrapper = styled.div`
  padding: 80px 0px;
  width: 100%;

  background-color: gold;
  border-bottom: 1px solid grey;
`;
export const BodyBottomMap = styled.div`
  background-color: honeydew;

  width: 100%;
  height: 360px;
`;

// __
export const BodyButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  background-color: #2a652f;
  border: 1px solid gray;
  margin: 0px 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: white;

  :hover {
    background-color: #142b12;
    border-color: white;
  }
`;
