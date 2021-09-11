import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 40px;
  border-top: solid ghostwhite 4px;
`;

export const PencilIcon = styled.img``;

export const Star = styled(Rate)`
  /* background-color: white;
  color: white; */
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
  margin: 0px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: #2a652f;
  color: white;
  cursor: pointer;
  border: none;

  :hover {
    background-color: #142b12;
    border-color: white;
  }
`;
