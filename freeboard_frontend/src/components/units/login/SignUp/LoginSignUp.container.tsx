import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import SignUpUI from "./LoginSignUp.presenter";
import { CREATE_USER } from "./LoginSignUp.queries";

export const INPUTS_INIT = {
  email: "",
  password: "",
  name: "",
};

export default function signUp() {
  const [createUser] = useMutation(CREATE_USER);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [isActive, setIsActive] = useState(INPUTS_INIT);

  function onChangeInputs(event: ChangeEvent<HTMLInputElement>) {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
  }

  async function onClickCreateUser(event: ChangeEvent<HTMLInputElement>) {
    setIsActive({
      email: inputs.email ? "" : alert("작성자를 입력해주세요."),
      password: inputs.password ? "" : alert("비밀번호를 입력해주세요."),
      name: inputs.name ? "" : alert("제목을 입력해주세요."),
    });

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...inputs,
          },
        },
      });
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <SignUpUI
      onClickCreateUser={onClickCreateUser}
      onChangeInputs={onChangeInputs}
      isActive={isActive}
    />
  );
}
