import styled from "@emotion/styled";

const MyBtn = styled.button`
  background-color: ${(props) => (props.isActive ? "aqua" : "")};
  width: 90px;
  height: 52px;
  background-color: #2a652f;
  color: white;
  font-weight: bolder;
  margin: 0px;
  font-size: 16px;
  font-weight: 500;

  :hover {
    cursor: pointer;
    background-color: #142b12;
    transition: ease-in 200ms all;
  }
`;

export default function button01(props) {
  return (
    <MyBtn type={props.type} isActive={props.isActive} onClick={props.onClick}>
      {props.buttonName}
    </MyBtn>
  );
}