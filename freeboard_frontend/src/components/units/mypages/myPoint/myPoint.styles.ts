import styled from "@emotion/styled";

export const RightWrapper = styled.div`
  width: 980px;
  background-color: blanchedalmond; ;
`;

export const RightWrapperHead = styled.div`
  background-color: greenyellow;
  width: 100%;
  height: 52px;
  text-align: end;
  font-size: 16px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  line-height: 52px;
  margin-bottom: 20px;
`;

export const TopText = styled.div`
  font-weight: ${(props: any) => (props.isActive ? "bold" : "")};
  color: ${(props: any) => (props.isActive ? "#84b96e" : "")};
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
  background-color: gold;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
`;

export const RightWrapperTableTop = styled.div`
  background-color: hotpink;
  display: flex;
  flex-direction: row;
  text-align: center;
  line-height: 52px;
  font-size: 18px;
  font-weight: 400px;
`;

export const RightWrapperDiv = styled.div`
  width: ${(props: any) => props.width}%;
  text-align: center;
`;

export const RightWrapperTableBottom = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  border-top: 1px solid gray;
  height: 52px;
  font-size: 18px;
  line-height: 52px;
`;

export const SerachInput = styled.input`
  height: 52px;
  border: none;
  padding-left: 20px;
`;
