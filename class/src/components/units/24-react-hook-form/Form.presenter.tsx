import Btn01 from "../../../components/commons/Buttons/button01";
import Input01 from "../../../components/commons/inputs/input01";

export default function FromPresenterUI(props) {
  return (
    <form
      onSubmit={props.handleSubmit(props.onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "auto",
        padding: "80px 5px",
      }}
    >
      <div style={{ fontSize: "24px", textAlign: "center" }}>
        폼 화면입니다.
      </div>

      <Input01
        inputName="이메일"
        type="text"
        register={{ ...props.register("email") }}
        errorMessage={props.errors.email?.message}
      />

      <Input01
        inputName="비밀번호"
        type="password"
        errorMessage={props.errors.password?.message}
        register={{ ...props.register("password") }}
      />

      <Btn01 BtnName="로그인하기" type="submit" isActive={props.isActive}>
        로그인하기
      </Btn01>
    </form>
  );
}
