import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: auto;
`;
export const Img = styled.div`
  font-size: 100px;
  font-weight: bold;
  color: #132b12;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  text-align: center;
`;
export const InputWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ErrorTextDiv = styled.div`
  background-color: red;
  /* display: none; */
  color: ${(props: any) => (props.isActive ? "red" : "blue")};
  padding-left: 20px;
  font-weight: bolder;
`;

export const TextDiv = styled.div`
  padding-top: 20px;
  padding-bottom: 12px;
  font-weight: bolder;
  /* background-color: red; */
  /* display: none; */
`;
export const EmailInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  padding-left: 20px;
`;

export const NameInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  padding-left: 20px;
`;

export const PasswordInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  padding-left: 20px;
`;
export const KeepLonin = styled.div`
  font-size: 16px;
  /* margin-top: 20px; */
  /* padding-left: 20px; */
`;
export const SignUpButton = styled.button`
  background-color: #2a652f;
  color: white;
  font-size: 20px;
  height: 64px;
  border-radius: 16px;
  margin: 60px 0px;
  font-weight: bolder;
  :hover {
    background-color: #142b12;
  }
`;
