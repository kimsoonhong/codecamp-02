import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function signupPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const router = useRouter();

  function onchangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function onchangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function onClicklogin() {
    // alert("sdf");
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      // await createUser({
      //   variables: {
      //     createUserInput: {
      //       email: email,
      //       password: password,
      //       name: name,
      //     },
      //   },
      // });
      setAccessToken(result.data?.loginUser.accessToken || "");
      // router.push("/22-loginSuccess");
      router.push("/23-hoc");

      console.log(result.data?.loginUser.accessToken);
    } catch (error) {
      alert(error.massage);
    }
  }

  return (
    <div>
      이메일<input type="text" onChange={onchangeEmail}></input>
      비밀번호<input type="text" onChange={onchangePassword}></input>
      <button onClick={onClicklogin}>로그인하기</button>
      <div></div>
      <div></div>
      <div>로그인페이지</div>
    </div>
  );
}
