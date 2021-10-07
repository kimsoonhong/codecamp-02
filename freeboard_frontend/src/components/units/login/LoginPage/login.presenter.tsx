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

export default function loginUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <Img>ㅅㅜ ㅣ ㅁ </Img>
        <InputWrapper>
          <LoginInput
            placeholder="이메일을 입력해주세요"
            type="text"
            register={{ ...props.register("email") }}
            errorMessage={props.errors.email?.message}
          />
          <ErrorText>이메일은 필수 입력 입니다.</ErrorText>
          <LoginInput
            register={{ ...props.register("password") }}
            errorMessage={props.errors.password?.message}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <ErrorText>비밀번호는 필수 입력 입니다.</ErrorText>

          <KeepLonin>
            <Checkbox style={{ color: "#142b12" }} />
            로그인 상태 유지
          </KeepLonin>
          <BouttonLogin
            buttonName="로그인하기"
            type="submit"
            isActive={props.ibsActive}
          />
          <FindWrapper>
            <Clickdiv onClick={props.onClickSignUp}>회원가입</Clickdiv>
          </FindWrapper>
        </InputWrapper>
        <div style={{ backgroundColor: "red", fontSize: "20px" }}>
          {" "}
          ID : i@i.i / PW : 123123123{" "}
        </div>
      
      </Wrapper>
    </form>
  );
}
