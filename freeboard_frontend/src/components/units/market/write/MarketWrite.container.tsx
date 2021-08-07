import MarketWriteUI from "./MarketWrite.presenter";

import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./MarketWrite.queries";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSubmit } from "./MarketWrite.validation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

export default function marketList() {
  const [files, setFiles] = useState([]);
  const [uploadfile] = useMutation(UPLOAD_FILE);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaSubmit),
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [sendImg, setSendImg] = useState([]);
  const router = useRouter();

  async function onSubmit(data) {
    console.log("dsafadsf", data);

    const resultFiles = await Promise.all(
      files.map((data) => {
        return uploadfile({ variables: { file: data } });
      })
    );
    const images = resultFiles.map((data) => {
      return data.data.uploadFile.url;
    });

    delete data.address;
    delete data.addressDetail;

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: images,
            // useditemAddress: { ...data.address, ...data.addressDetail },
          },
        },
      });

      Modal.info({ content: "등록되었습니다." });
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  // const onChangeFile = (file, index) => {
  //   setFiles(file);
  // };

  return (
    <div>
      <MarketWriteUI
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isActive={formState.isValid}
        errors={formState.errors}
        setSendImg={setSendImg}
        setFiles={setFiles}
      />
    </div>
  );
}
