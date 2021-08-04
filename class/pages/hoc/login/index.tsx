import { useRouter } from "next/router";
import WithAuth from "../withAuth";
import UI from "./presenter";
import { gql, useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { GlobalContext } from "../../_app";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function onClickToMain() {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      setAccessToken(result.data?.loginUser.accessToken);
      console.log(result.data?.loginUser.accessToken);
      router.push("/hoc/main");
    } catch (error) {
      alert(error.massage);
    }
  }

  //  --------온클릭----------?

  const onClickTest = () => (event) => {
    console.log("클릭되었습니다1111.");
  };
  // function onClickTest(event) {
  //   console.log("클릭되었습니다2222.");
  // }

  // ----------온 체인지----------?
  const [test, setTest] = useState();
  console.log(test);

  const onChangeTest = () => (event) => {
    setTest(event.target.value);
  };

  // function onChangeTest(event) {
  //   setTest(event.target.value);
  // }

  return (
    <div>
      <UI
        onClickToMain={onClickToMain}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
      />
      <button onClick={onClickTest()}>테스트</button>
      테스트
      <input onChange={onChangeTest()} />
    </div>
  );
};

export default WithAuth(login);
