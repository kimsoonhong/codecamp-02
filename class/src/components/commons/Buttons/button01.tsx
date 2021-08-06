import styled from "@emotion/styled";

const MyBtn = styled.button`
  background-color: ${(props) => (props.isActive ? "aqua" : "")};
`;

export default function button01(props) {
  return (
    <MyBtn type={props.type} isActive={props.isActive}>
      {props.BtnName}
    </MyBtn>
  );
}
