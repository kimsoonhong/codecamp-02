import styled from "@emotion/styled";
const Label = styled.div`
  font-weight: bolder;
  font-size: 16px;
  padding-top: 40px;
  padding-bottom: 16px;
`;

const Input = styled.input`
  border: 1px solid gray;
  height: 52px;
  margin: 0px;
  width: 180px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export default function input180(props: any) {
  return (
    <div>
      <Label>인풋 스몰1</Label>
      <Input defaultValue={props.defaultValue} />
      <ErrorMessage>에러메시지</ErrorMessage>
    </div>
  );
}
