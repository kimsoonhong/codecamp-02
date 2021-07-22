import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 16px; */
  /* position: fixed; */
  width: 100%;

  /* transition: 350ms all ease-in-out; */
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  line-height: 100px;
`;

export const InnerLogo = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #132b12;
  cursor: pointer;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
`;

export const InnerButton = styled.span`
  margin: 18px;
  color: #142b12;
  cursor: pointer;

  font-family: "normal";
  font-style: italic;
  font-size: 25px;
`;
