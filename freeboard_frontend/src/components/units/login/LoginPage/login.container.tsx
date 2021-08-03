import { useRouter } from "next/router";
import LoginUI from "./login.presenter";
// import lls from "../SignUp/LoginSignUp.container";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./login.queries";
import { ChangeEvent, useContext, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { GlobalContext } from "../../../../../pages/_app";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // console.log(data?.fetchUserLoggedIn.name);

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const router = useRouter();

  function onClickSignUp() {
    router.push("/login/signUp");
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      setAccessToken(result.data?.loginUser.accessToken);
      console.log(result.data?.loginUser.accessToken, "login");
      // console.log(result.data?.loginUser.accessToken);
      alert(`${data?.fetchUserLoggedIn.name}님 환영함돠`);
      router.push("/boards");
    } catch (error) {
      alert(error.massage);
    }
  }
  return (
    <LoginUI
      onClickSignUp={onClickSignUp}
      onChangePassword={onChangePassword}
      onChangeEmail={onChangeEmail}
      onClickLogin={onClickLogin}
    />
  );
}
