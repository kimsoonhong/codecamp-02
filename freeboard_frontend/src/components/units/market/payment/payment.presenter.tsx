import { Checkbox } from "@material-ui/core";
import LoginInput from "../../../../components/commons/Inputs/Input_Login_384";
import BouttonLogin from "../../../../components/commons/Buttons/Button-Large-01";
import {
  Wrapper,
  Img,
  InputWrapper,
  ErrorText,
  KeepLonin,
  FindWrapper,
  Clickdiv,
} from "./login.styles";

export default function paymentUI() {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <Img>ㅅㅜ ㅣ ㅁ </Img>
        <InputWrapper>
          <LoginInput />
          <ErrorText>이메일은 필수 입력 입니다.</ErrorText>
          <LoginInput />
          <ErrorText>비밀번호는 필수 입력 입니다.</ErrorText>
        </InputWrapper>
        <KeepLonin>
          <Checkbox style={{ color: "#142b12" }} />
          로그인 상태 유지
        </KeepLonin>
        <BouttonLogin />
        <FindWrapper>
          <Clickdiv>이메일 찾기</Clickdiv>
          <>|</>
          <Clickdiv>비밀번호 찾기</Clickdiv>
          <>|</>
          <Clickdiv>회원가입</Clickdiv>
        </FindWrapper>
      </Wrapper>
    </form>
  );
}
