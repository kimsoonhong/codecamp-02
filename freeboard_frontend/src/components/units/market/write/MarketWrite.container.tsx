import MarketWriteUI from "./MarketWrite.presenter";

import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { LOGIN_USER } from "./MarketWrite.queries";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSubmit } from "./MarketWrite.validation";
import { useRef } from "react";
import ImgFilesValidations from "../../../../commons/libraries/ImgFiles_validations";

export default function marketList() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaSubmit),
  });
  const [loginUser] = useMutation(LOGIN_USER);
  const fileRef = useRef<HTMLInputElement>(null);

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

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file: any = event.target.files?.[0];
    if (!ImgFilesValidations(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      const resultImgArr = [...resultImgUrl];
      resultImgArr.push(data.target.result);
      setResultimgUrl(resultImgArr);
    };
  }

  return (
    <div>
      <MarketWriteUI
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isActive={formState.isValid}
        errors={formState.errors}
        fileRef={fileRef}
        onChangeFile={onChangeFile}
      />
    </div>
  );
}
