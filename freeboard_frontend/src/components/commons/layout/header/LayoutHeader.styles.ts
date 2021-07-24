import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: ${(props) => (props.scrollY > 50 ? 64 : 100)}px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  width: 100%;
  z-index: 1;
  position: fixed;
  /* opacity: ${(props) => 1 - props.scrollY / 350}; */
  /* animation: 200ms ease-in all; */
  transition: ease-in 200ms all;
  /* transition: 350ms all ease-in-out; */
`;

export const InnerWrapper = styled.div`
  width: 1400px;
  padding: 0px 100px;
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
