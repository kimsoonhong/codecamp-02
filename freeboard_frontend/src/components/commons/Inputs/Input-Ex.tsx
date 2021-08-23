import styled from "@emotion/styled";

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

const Input = styled.input`
  border: green 2px solid;
  background-color: yellow;
`;

export default function input01(props: any) {
  return (
    <div>
      <div>{props.inputName}</div>
      <Input {...props.register} type={props.type} />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </div>
  );
}
