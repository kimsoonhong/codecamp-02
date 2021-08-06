import { useForm } from "react-hook-form";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../_app";
import { context } from "rc-image/lib/PreviewGroup";

const LOGIN_USER = gql`
  mutation loginUswer($email: String!, $password: String!) {
    LoginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      Email
      name
      picture
    }
  }
`;

export default function loginpage() {
  const { register, handleSubmit } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken, userInfo } = useContext(GlobalContext);
  const client = useApolloClient();

  const onClickLogin = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
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
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {userInfo?.email ? `${userInfo.name}님 환영합니다.` : "로그인해주세요"}
      <form onsubmit={handleSubmit(onClickLogin)}>
        이메일 : <input type="text" {...register("email")} />
        비밀벊 : <input type="password" {...register("password")} />
        <button>로그인하기</button>
      </form>
    </>
  );
}
