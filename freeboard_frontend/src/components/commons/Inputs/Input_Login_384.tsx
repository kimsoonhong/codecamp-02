import styled from "@emotion/styled";

const Input = styled.input`
  border: 1px gray solid;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  margin: 0px;
  margin: 20px 0;
  padding-left: 20px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export default function LoginInput(props: any) {
  return (
    <div>
      {/* <Label>인풋 로그인</Label> */}
      <Input
        type={props.type}
        {...props.register}
        style={props.style}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
      <ErrorMessage>{props?.errorMessage}</ErrorMessage>
    </div>
  );
}
