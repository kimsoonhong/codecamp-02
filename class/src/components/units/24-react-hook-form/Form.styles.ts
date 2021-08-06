import styled from "@emotion/styled";

export const MyBtn = styled.button`
  background-color: ${(props) => (props.isActive ? "aqua" : "")};
`;
