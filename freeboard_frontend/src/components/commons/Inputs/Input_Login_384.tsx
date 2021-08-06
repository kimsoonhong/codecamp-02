import styled from "@emotion/styled";

const Label = styled.div`
  font-weight: bolder;
  font-size: 16px;
  padding-top: 40px;
  padding-bottom: 16px;
`;

const Input = styled.input`
  border: 1px gray solid;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  margin: 0px;
  margin: 20px;
  padding-left: 20px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export default function LoginInput(props) {
  return (
    <div>
      {/* <Label>인풋 로그인</Label> */}
      <Input
        type={props.type}
        {...props.register}
        style={props.style}
        placeholder={props.placeholder}
      />
      <ErrorMessage>{props?.errorMessage}</ErrorMessage>
    </div>
  );
}
