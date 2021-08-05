import styled from "@emotion/styled";

const MyBtn = styled.button`
  /* background-color: ${(props) => (props.isActive ? "aqua" : "")}; */
  width: 180px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: whitesmoke;
  margin: 0px;
  :hover {
    color: #2a653f;
    background-color: #84b96e;
    transition: ease-in 200ms all;
    font-weight: bold;
  }
`;

export default function button02(props) {
  return <MyBtn>버튼미들2</MyBtn>;
}
