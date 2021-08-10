import MarketWriteUI from "./MarketWrite.presenter";
import withAuth from "../../../commons/withAuth";

import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  CREATE_USED_ITEM,
  UPLOAD_FILE,
  UPDATE_USED_ITEM,
} from "./MarketWrite.queries";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSubmit } from "./MarketWrite.validation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

const marketWrite = (props) => {
  const [files, setFiles] = useState([]);
  const [uploadfile] = useMutation(UPLOAD_FILE);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaSubmit),
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [sendImg, setSendImg] = useState([]);
  const router = useRouter();

  async function onSubmit(data) {
    console.log("등록하기입니다.", data);

    if (!files.length) {
      alert("이미지를 최소 1개 이상 넣어주세요");
      return;
    }
    const resultFiles = await Promise.all(
      files.map((data) => {
        return uploadfile({ variables: { file: data } });
      })
    );
    const images = resultFiles.map((data) => {
      return data.data.uploadFile.url;
    });
    const { address, addressDetail, ...rest } = data;

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...rest,
            images: images,
            // useditemAddress: {
            //   address: address,
            //   addressDetail: addressDetail,
            // },
          },
        },
      });

      Modal.info({ content: "등록되었습니다." });
      router.push(`/market/${result.data?.createUseditem._id}`);
      // router.push(`/market/`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  // /
  // /
  // /
  // /
  // /
  // /

  async function onClickUpdate(data) {
    console.log("수정하기입니다.");

    const resultFiles = await Promise.all(
      files.map((data) => {
        return uploadfile({ variables: { file: data } });
      })
    );
    const images = resultFiles.map((data) => {
      return data.data.uploadFile.url;
    });
    const { address, addressDetail, ...rest } = data;

    try {
      const result = await updateUseditem({
        variables: {
          createUseditemInput: {
            ...rest,
            images: images,
          },
        },
      });
      Modal.info({ content: "수정되었습니다." });
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
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
        data={props.data}
        isEdit={props.isEdit}
        onClickUpdate={onClickUpdate}
      />
    </div>
  );
};

export default withAuth(marketWrite);
