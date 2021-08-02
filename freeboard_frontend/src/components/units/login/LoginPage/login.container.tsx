import { useRouter } from "next/router";
import LoginUI from "./login.presenter";
import lls from "../SignUp/LoginSignUp.container";
import { useState } from "react";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const router = useRouter();

  function onClickSignUp() {
    router.push("/login/signUp");
    console.log("dd");
  }
  return (
    <LoginUI
      onClickSignUp={onClickSignUp}
      onChangePassword={onChangePassword}
      onChangeEmail={onChangeEmail}
    />
  );
}
