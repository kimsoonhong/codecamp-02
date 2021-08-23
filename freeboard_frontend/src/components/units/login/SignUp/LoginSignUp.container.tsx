import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
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
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const router = useRouter();

  function onChangeInputs(event: ChangeEvent<HTMLInputElement>) {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
  }

  async function onClickCreateUser() {
    const newInputsErrors = {
      email: /\w+@\w+\.\w+/.test(inputs.email) ? "" : "이메일을 확인해주세요",
      password:
        /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
          inputs.password
        )
          ? ""
          : "비밀번호 입력해주세요",
      name: inputs.name ? "" : "이름을 입력해주세요",
    };
    setInputsErrors(newInputsErrors);

    if (Object.values(newInputsErrors).every((data) => !data)) {
      try {
        await createUser({
          variables: {
            createUserInput: {
              email: inputs.email,
              password: inputs.password,
              name: inputs.name,
            },
          },
        });

        router.push("/login");
        alert("회원가입");
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <SignUpUI
      onClickCreateUser={onClickCreateUser}
      onChangeInputs={onChangeInputs}
      inputsErrors={inputsErrors}
    />
  );
}
