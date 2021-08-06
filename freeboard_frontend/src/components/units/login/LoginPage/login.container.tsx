import LoginUI from "./login.presenter";
import { useContext } from "react";
import { useRouter } from "next/router";
import { schemaLogin } from "./login.validation";

import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./login.queries";
import { useMutation, useQuery, useApolloClient } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";

import { GlobalContext } from "../../../../../pages/_app";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "antd";

export default function login() {
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  // const { fetchUserLoggedIn } = useQuery(FETCH_USER_LOGGED_IN);
  const client = useApolloClient();
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaLogin),
  });

  function onClickSignUp() {
    router.push("/login/signUp");
  }

  const onSubmit = async (data) => {
    try {
      const result = await loginUser({
        variables: { ...data },
      });
      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      setUserInfo(resultUser.data?.fetchUserLoggedIn);
      setAccessToken(result.data?.loginUser.accessToken);
      Modal.info({
        content: `${resultUser.data?.fetchUserLoggedIn.name}님 환영합니다`,
      });
      alert("sdf");
      router.push("/market/new");
    } catch (error) {
      // Modal.error({ content: error.massage });
      alert(error.message);
    }
  };
  return (
    <LoginUI
      onClickSignUp={onClickSignUp}
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
}
