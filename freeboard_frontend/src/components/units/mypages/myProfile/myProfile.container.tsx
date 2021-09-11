import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { schemaSubmit } from "./myProfile.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/dist/client/router";

import MyProfileUI from "./myProfile.presenter";
import { RESET_PASSWORD } from "./myProfile.queries";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";

export default function myProfile() {
  const router = useRouter();
  const [resetUserPassword] = useMutation(RESET_PASSWORD);
  const [password, setPassword] = useState();

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaSubmit),
  });

  function onChangePasswordCheck(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // @ts-ignore
    setPassword(event.target.value);
  }

  async function onSubmit(data: any) {
    if (password !== data.password) {
      return Modal.error({ content: "비밀번호를 확인해주세요" });
    }

    try {
      await resetUserPassword({
        variables: {
          password: String(data.password),
        },
      });
      Modal.info({ content: "바뀐 비밀번호로 로그인 해주세요." });
      Modal.info({ content: "비밀번호 변경에 성공하였습니다." });
      router.push("/login");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  return (
    <MyProfileUI
      register={register}
      handleSubmit={handleSubmit}
      errors={formState.errors}
      onSubmit={onSubmit}
      onChangePasswordCheck={onChangePasswordCheck}
    />
  );
}
