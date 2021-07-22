import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  background-image: url(/images/gc/a.png);
  background-size: cover;
  /* background-color: #2a652f; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  margin-bottom: 90px;
`;

export const MenuItem = styled.div`
  margin: 0px 150px;
  cursor: pointer;
  color: white;
  padding: 8px 24px;
  display: flex;
  box-sizing: unset;
  border: 2px solid transparent;
  /* width: 120px; */

  :hover {
    background-color: #142b1244;
    border-radius: 10%;
    border: 2px solid white;
    box-sizing: unset;
  }
`;
