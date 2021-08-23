import styled from "@emotion/styled";
const Label = styled.div`
  font-weight: bolder;
  font-size: 16px;
  padding-top: 40px;
  padding-bottom: 16px;
`;

const Input = styled.textarea`
  border: 1px solid gray;
  margin: 0px;

  width: 100%;
  height: 320px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export default function input180(props: any) {
  return (
    <div>
      <Label>{props.InputName}</Label>
      <Input {...props.register} />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </div>
  );
}
