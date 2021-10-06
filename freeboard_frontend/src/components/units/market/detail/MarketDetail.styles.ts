import styled from "@emotion/styled";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  justify-content: end;
  width: 100px;
  /* background-color: darkblue; */
`;

// __
export const Body = styled.div`
  width: 100%;
`;

export const BodyTopWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

export const BodyTopTextWrapper = styled.div`
  /* background-color: blue; */
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
  padding-right: 10px;
  cursor: pointer;
  height: 80px;
`;

export const BodyTopPick = styled.div`
  /* background-color: brown; */
  width: 30px;
  height: 30px;
`;

export const BodyTopPickNumber = styled.div`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const BodyMiddleWrapper = styled.div`
  /* background-color: cadetblue; */
  padding-top: 80px;
  border-bottom: 1px solid grey;
  /* background-color: saddlebrown; */
`;

export const BodyMiddleImgWrapper = styled.div`
  /* background-color: chartreuse; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

export const BodyMiddleImgMain = styled.img`
  /* background-color: green; */
  margin: auto;
  width: 383px;
  height: 384px;
  padding: 44px;
`;

export const BodyMiddleImgPreviewWrapper = styled.div`
  width: 384px;
  /* background-color: orange; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 20px;
  margin: auto;
  padding-top: 50px;
  z-index: 1;
`;

export const BodyMiddleImgPreview = styled.img`
  width: 100%;
  height: 400px;
  z-index: 1;
  background-size: contain;

  /* background-color: red; */
`;

export const StyleSlider = styled(Slider)`
  z-index: 1;
  .slick-prev {
    display: none;
    /* position: fixed; */
  }

  .slick-next {
    display: none;
  }

  .slick-dots {
    display: none;
  }
  .slick-thumb {
    display: none;
  }
`;

export const BodyMiddleContent = styled.div`
  padding-top: 80px;
  /* background-color: gainsboro; */
  font-weight: 500;
  font-size: 18px;
`;

export const BodyMiddleTags = styled.div`
  margin: 40px 0px;
  /* background-color: blueviolet; */
  font-weight: 500;
  font-size: 16px;
  color: gray;
`;

export const BodyMapWrapper = styled.div`
  padding-bottom: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;

  /* background-color: gold; */
  border-bottom: 1px solid grey;
`;
export const BodyBottom = styled.div`
  /* background-color: honeydew; */
  z-index: 1;
  width: 100%;
  height: 360px;
`;

// __`
export const BodyButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 80px;
  margin: auto;
  /* background-color: orchid; */
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  /* background-color: #2a652f; */
  border: 1px solid gray;
  margin: 0px 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: white;

  :hover {
    /* background-color: #142b12; */
    border-color: white;
  }
`;
export const SliderItem = styled.img`
  /* background-color: red; */
  width: 80px;
  height: 80px;
  transition: ease-in-out all 200ms;
`;
