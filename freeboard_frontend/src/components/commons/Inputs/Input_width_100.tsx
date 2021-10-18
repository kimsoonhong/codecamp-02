import styled from "@emotion/styled";

export const Label = styled.div`
  font-weight: bolder;
  font-size: 16px;
  padding-top: 40px;
  padding-bottom: 16px;
`;

const Input = styled.input`
  height: 52px;
  margin: 0px;
  width: 100%;
  border-radius: 0px;
  border: 1px solid gray;
  padding-left: 12px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export default function input100(props: any) {
  return (
    <>
      {props.InputName && <Label>{props?.InputName}</Label>}
      <Input
        type={props.type}
        {...props.register}
        style={props.style}
        defaultValue={props.defaultValue}
        readOnly={props.readOnly}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        value={props.value}
      >
        {props.message}
      </Input>
      <ErrorMessage>{props?.errorMessage}</ErrorMessage>
    </>
  );
}
