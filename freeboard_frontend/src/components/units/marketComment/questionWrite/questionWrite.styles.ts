import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 40px;
  border-top: solid ghostwhite 4px;
`;

export const Title = styled.div`
  font-size: 20px;

  /* background-color: saddlebrown; */
  margin-bottom: 40px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
  margin: 0px;
  resize: none;
  /* background-color: royalblue; */
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
