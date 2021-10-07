import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  /* background-color: green; */
`;
// ___베스트상품
export const BestProduct = styled.div`
  width: 100%;
  /* background-color: greenyellow; */
  display: flex;
  flex-direction: column;
`;

export const BestProductText = styled.div`
  text-align: center;
  font-family: "live";
  font-size: 60px;
  font-weight: bolder;
  /* background-color: violet; */
`;

export const BestProductDiv = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: auto;
`;

export const BestProductWrapper = styled.div`
  width: 282px;
  /* background-color: red; */
  padding: 20px;
`;

export const BestProductPicture = styled.img`
  width: 100%;
  /* background-color: beige; */
  height: 242px;
`;

export const BestProductTextDiv = styled.div`
  width: 100%;
  padding-top: 20px;
  /* background-color: bisque; */
`;

export const BestProductName = styled.div`
  font-weight: bolder;
  font-size: 14px;
  font-weight: 500;

  /* background-color: blanchedalmond; */
`;

export const BestProductInformation = styled.div`
  width: 100%;
  padding-top: 4px;
  font-size: 12px;
  /* background-color: darkgreen; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BestProductInformationDetail = styled.div`
  width: 80%;
  /* background-color: darkkhaki; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BestProductSummary = styled.div`
  /* background-color: gold; */
`;

export const BestProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  /* background-color: pink; */
`;

export const BestProductLikeWrapper = styled.div`
  width: 20%;
  /* background-color: darkslategray; */
  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const BestProductLikeImg = styled.div`
  width: 30px;
  height: 30px;
  /* background-color: plum; */
  margin: auto;
`;

export const BestProductLikeNumber = styled.div`
  font-size: 24px;
`;

// ___제품상단?

export const ProductListWrapper = styled.div`
  width: 100%;
  /* background-color: brown; */
`;

export const ProductListTop = styled.div`
  width: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 40px;
`;

export const Word = styled.span`
  font-weight: ${(props: { isMatched: boolean }) =>
    props.isMatched ? "bolder" : ""};
`;

export const ProductListTopTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: greenyellow; */
  width: 185px;
`;

export const ProductListTopText = styled.div`
  font-size: 18px;
  line-height: 52px;
  cursor: pointer;
  font-weight: ${(props: any) => (props.isActive ? "bold" : "")};
  color: ${(props: any) => (props.isActive ? "#84b96e" : "")};
`;

export const ProductListTopSearchWrapper = styled.div`
  /* background-color: hotpink; */
  display: flex;
  flex-direction: row;
  /* width: ; */
`;

export const ProductListTopSearchInput = styled.input`
  width: 282px;
  height: 52px;
`;

export const ProductListTopSearchDate = styled.div`
  width: 282px;
  /* background-color: lavender; */
  margin: 0px 20px;
`;

export const ProductListTopSearchButton = styled.div`
  width: 78px;
  /* background-color: khaki; */
`;

// ___제품하단?

export const ProductListbottomWrapper = styled.div`
  /* background-color: red; */
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
`;

export const ProductListbottomPicture = styled.img`
  width: 160px;
  height: 160px;
  /* background-color: burlywood; */
`;

export const ProductListbottomDetail = styled.div`
  /* background-color: cadetblue; */
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductListbottomDetailName = styled.div`
  font-size: 24px;
  font-weight: 500;
  /* background-color: chartreuse; */
`;

export const ProductListbottomDetailSummary = styled.div`
  font-weight: 500;
  font-size: 16px;
  /* background-color: red; */
`;

export const ProductListbottomDetailTag = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: grey;
  /* background-color: blue; */
`;

export const ProductListbottomFloorDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: hotpink; */
  padding-top: 20px;
`;
export const ProductListbottomFloorAvatar = styled.div`
  /* background-color: honeydew; */
  width: 20px;
  height: 20px;
`;

export const ProductListbottomFloorSeller = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const ProductListbottomFloorLike = styled.div`
  margin-left: 25px;
  /* background-color: honeydew; */
  width: 20px;
  height: 20px;
`;

export const ProductListbottomFloorLikeNumber = styled.div`
  font-size: 16px;
`;

export const ProductListbottomPrice = styled.div`
  width: 150px;
  font-weight: bold;
  font-size: 24px;
  text-align: end;
  padding-right: 10px;
  /* background-color: blueviolet; */
`;

export const ButtonWrapper = styled.div`
  /* background-color: bisque; */
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const WriteItemBtn = styled.button`
  width: 171px;
  height: 52px;
  border: 2px solid #142b12;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: whitesmoke;
    font-weight: bold;
    animation: all 3000ms ease-in;
  }
`;
// ___오늘본상품?

export const TodayProductWrapper = styled.div`
  width: 200px;
  min-width: 200px;
  /* background-color: red; */
  padding: 20px;
  border: 1px solid gray;
  height: fit-content;
  position: sticky;
  top: 125px;
  margin-right: 20px;
`;

export const TodayProductText = styled.div`
  width: 100%;
  /* background-color: rosybrown; */
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const TodayProductDiv = styled.div`
  /* background-color: royalblue; */
  margin-top: 20px;
  border: 1px solid gray;
  padding: 10px;
`;

export const TodayProductTop = styled.div`
  /* background-color: gray; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const TodayProductLike = styled.div`
  width: 15px;
  height: 15px;
  /* background-color: greenyellow; */
`;

export const TodayProductLikeNumber = styled.div`
  font-weight: 500;
  font-size: 12px;
  /* background-color: hotpink; */
  padding-left: 6px;
`;

export const TodayProductPicture = styled.img`
  padding-top: 4px;
  width: 60px;
  height: 60px;
  /* background-color: indianred; */
  margin: auto;
`;

export const TodayProductName = styled.div`
  padding-top: 12px;
  /* background-color: indigo; */
  font-weight: 500;
  font-size: 12px;
`;

export const TodayProductSummary = styled.div`
  font-size: 12px;
  color: grey;
  /* background-color: indianred; */
`;

export const TodayProductPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding-top: 4px;
`;

export const TodayProductTag = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: grey;
`;
