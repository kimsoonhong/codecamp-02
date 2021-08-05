import styled from "@emotion/styled";

const Label = styled.div`
  font-weight: bolder;
  font-size: 16px;
  padding-top: 40px;
  padding-bottom: 16px;
`;

const Input = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  margin: 0px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export default function input384(props) {
  return (
    <div>
      <Label>인풋 로그인</Label>
      <Input />
      <ErrorMessage>에러메시지</ErrorMessage>
    </div>
  );
}
