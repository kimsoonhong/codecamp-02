import styled from "@emotion/styled";

const MyBtn = styled.button`
  width: 90px;
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

export default function button01(props) {
  return <MyBtn>스몰버튼2</MyBtn>;
}
