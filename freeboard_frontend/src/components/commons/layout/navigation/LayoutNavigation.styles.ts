import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: ${(props) => (props.scrollY >= 376 ? "" : "sticky")};
  top: 64px;

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
  width: 100%;
`;

export const MenuItem = styled.div`
  margin: 0px 150px;
  cursor: pointer;
  color: white;
  padding: 6px 24px;
  display: flex;
  box-sizing: unset;
  border: 2px solid transparent;
  /* width: 120px; */

  :hover {
    /* background-color: #142b1244; */
    border-bottom: 2px solid white;
    box-sizing: unset;
    transition: all 400ms ease;
  }
`;

// const Testdiv = styled.div`
//   color: ${Number(scrollY) > 200 ? "blue" : "green"};
// `;

export const Testdiv = styled.div`
  color: ${(props) => (props.scrollY < 200 ? "blue" : "red")};
  /* position: ${(props) => (props.scrollY > 340 ? "static" : "fixed")}; */
  /* position: ; */
`;
