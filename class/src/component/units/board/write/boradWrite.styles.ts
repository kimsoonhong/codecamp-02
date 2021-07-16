import styled from "@emotion/styled";
// import styled from '@emotion/styled/types/base';

interface IProps {
  active: boolean;
}

export const MyInput = styled.input``;

export const Mybutton = styled.button`
  color: ${(props: IProps) => (props.active ? "red" : "green")};
`;
