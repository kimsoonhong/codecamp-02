import styled from "@emotion/styled";

export const RightWrapper = styled.div`
  width: 980px;
  /* background-color: blanchedalmond; ; */
`;

export const RightWrapperHead = styled.div`
  /* background-color: greenyellow; */
  width: 100%;
  height: 52px;
  text-align: end;
  font-size: 16px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  line-height: 52px;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

interface IProps {
  isMyItem: boolean;
}
export const TopTextMyItem = styled.div`
  font-weight: ${(props: IProps) => (props.isMyItem ? "bold" : "")};
  color: ${(props: IProps) => (props.isMyItem ? "#84b96e" : "")};
  height: 20px;
  width: 100px;
  text-align: center;
  transition: ease-in-out 200ms all;
  :hover {
    font-weight: bold;
    cursor: pointer;
    font-size: 18px;
    transition: ease-in-out 200ms all;
  }
`;

export const TopTextMyPick = styled.div`
  font-weight: ${(props: IProps) => (props.isMyItem ? "" : "bold")};
  color: ${(props: IProps) => (props.isMyItem ? "" : "#84b96e")};
  height: 20px;
  width: 100px;
  text-align: center;
  transition: ease-in-out 200ms all;
  :hover {
    font-weight: bold;
    cursor: pointer;
    font-size: 18px;
    transition: ease-in-out 200ms all;
  }
`;
export const RightWrapperBody = styled.div`
  /* background-color: gold; */
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
`;

export const RightWrapperTableTop = styled.div`
  /* background-color: hotpink; */
  display: flex;
  flex-direction: row;
  text-align: center;
  line-height: 52px;
  font-size: 18px;
  font-weight: 400px;
  padding-left: 20px;
`;

export const RightWrapperNumber = styled.div`
  /* background-color: indigo; */
  width: 5%;
`;

export const RightWrapperTitle = styled.div`
  /* background-color: khaki; */
  width: 55%;
  padding-right: 90px;
`;

export const RightWrapperTitleSold = styled.div`
  /* background-color: gray; */
  width: 45%;
  position: relative;
`;

export const RightWrapperCondition = styled.div`
  /* background-color: lavender; */
  width: 10%;
  color: red;
  /* position: absolute; */
`;

export const RightWrapperPrice = styled.div`
  /* background-color: lemonchiffon; */
  width: 20%;
`;

export const RightWrapperDate = styled.div`
  /* background-color: lightcoral; */
  width: 20%;
`;

export const RightWrapperTableBottom = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  border-top: 1px solid gray;
  height: 52px;
  font-size: 18px;
  line-height: 52px;
  padding-left: 20px;

  /* background-color: green; */
`;
