import {
  Wrapper,
  Img,
  InputWrapper,
  ErrorTextDiv,
  EmailInput,
  NameInput,
  PasswordInput,
  TextDiv,
  KeepLonin,
  SignUpButton,
} from "./LoginSignUp.styles";

export default function LoginSignUpUI(props: any) {
  return (
    <Wrapper>
      <Img>ㅅㅜ ㅣ ㅁ </Img>
      <InputWrapper>
        <TextDiv>이메일</TextDiv>
        <EmailInput
          name="email"
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={props.onChangeInputs}
        />
        <ErrorTextDiv>{props.inputsErrors.email}</ErrorTextDiv>
        <TextDiv>이름</TextDiv>
        <NameInput
          name="name"
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={props.onChangeInputs}
        />
        <ErrorTextDiv>{props.inputsErrors.name}</ErrorTextDiv>
        <TextDiv>비밀번호</TextDiv>
        <PasswordInput
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={props.onChangeInputs}
        />
        <ErrorTextDiv>{props.inputsErrors.password}</ErrorTextDiv>
        <TextDiv>비밀번호확인</TextDiv>
        <PasswordInput type="password" placeholder="비밀번호를 확인해주세요" />
        <ErrorTextDiv> {props.inputsErrors.password}</ErrorTextDiv>
      </InputWrapper>
      <KeepLonin></KeepLonin>
      <SignUpButton onClick={props.onClickCreateUser}>
        회원가입하기
      </SignUpButton>
    </Wrapper>
  );
}
