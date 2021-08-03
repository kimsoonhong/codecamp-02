import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export default function signupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  function onchangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function onchangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function onchangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  async function onClickSignup() {
    // alert("sdf");
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: email,
            password: password,
            name: name,
          },
        },
      });
      alert("가입완료");
    } catch (error) {
      alert(error.massage);
    }
  }

  return (
    <div>
      이메일<input type="text" onChange={onchangeEmail}></input>
      비밀번호<input type="text" onChange={onchangePassword}></input>
      이름<input type="text" onChange={onchangeName}></input>
      <button onClick={onClickSignup}>가입하기</button>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
