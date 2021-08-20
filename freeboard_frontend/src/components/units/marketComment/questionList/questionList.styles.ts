import styled from "@emotion/styled";
import { Rate } from "antd";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 20px;
  /* height: 128px; */
  border-bottom: 1px solid lightgray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div`
  overflow: hidden;
  width: 100%;
  width: 1000px;
  border: none;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
  /* background-color: violet; */
`;

export const DateString = styled.div`
  color: lightgray;

  padding-left: 60px;
  margin-bottom: 20px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;

  display: block;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const RecommentWrapper = styled.div`
  width: 1200px;
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: auto;
  padding-top: 20px;
  /* border-bottom: 1px solid lightgray; */
  /* padding-left: 30px; */
`;

export const RecommentImg = styled.img`
  /* background-color: blue; */
  width: 20px;
  height: 20px;
`;
