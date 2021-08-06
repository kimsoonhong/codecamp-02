import FromPresenter from "./Form.presenter";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { LOGIN_USER } from "./Form.queries";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Form.validation";

export default function formContainer() {

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation(LOGIN_USER);

  async function onSubmit(data) {
    try {
      const result = await loginUser({
        variables: { ...data },
      });
      console.log(result.data.loginUser.accessToken);
      Modal.info({ content: "로그인" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  return (
    <FromPresenter
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
}
