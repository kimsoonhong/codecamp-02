import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: ${(props) => (props.scrollY >= 376 ? "" : "sticky")};
  top: 62px;
  width: 100%;
  height: 64px;
  background-image: url(/images/gc/a.png);
  background-size: cover;

  /* background-color: #2a652f; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  color: white;
  margin-bottom: 90px;

  padding: 0 20%;
  z-index: 99;
`;

export const MenuItem = styled.div`
  /* cursor: pointer; */
  color: white;
  padding: 3px 24px;
  /* display: flex; */
  /* box-sizing: unset; */
  border: 2px solid transparent;

  /* width: 50%; */
  /* margin: auto; */
  /* justify-content: center; */
  /* border-bottom: 2px; */
  /* font-weight: ${(props) => (props.isClickd ? "bold" : "normal")}; */
  cursor: ${(props) => (props.isClickd ? "" : "pointer")};
  color: ${(props) => (props.isClickd ? "#84b96e" : "")};
  pointer-events: ${(props) => (props.isClickd ? "none" : "")};

  :hover {
    /* background-color: #142b1244; */
    border-bottom: 2px solid white;
    box-sizing: unset;
    transition: all 400ms ease;
    /* border-bottom-width: 20%; */
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
