import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps } from "./BoardWrite.types";
import { Modal } from "antd";

export const INPUTS_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [active, setActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    setActive(Object.values(inputs).every((data) => !data));
    if (inputsErrors[event.target.name as keyof typeof INPUTS_INIT]) {
      setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
    }
  }

  async function onClickSubmit() {
    // setInputsErrors({
    //   writer: inputs.writer ? "" : "작성자를 입력해주세요.",
    //   password: inputs.password ? "" : "비밀번호를 입력해주세요.",
    //   title: inputs.title ? "" : "제목을 입력해주세요.",
    //   contents: inputs.contents ? "" : "내용을 입력해주세요.",
    // });
    setInputsErrors({
      writer: inputs.writer ? "" : alert("작성자를 입력해주세요."),
      password: inputs.password ? "" : alert("비밀번호를 입력해주세요."),
      title: inputs.title ? "" : alert("제목을 입력해주세요."),
      contents: inputs.contents ? "" : alert("내용을 입력해주세요."),
    });

    const isEvery = Object.values(inputs)
      .filter((data) => data !== "yourubeUrl")
      .every((data) => data);
    if (isEvery) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              boardAddress: { zipcode, address, addressDetail },
            },
          },
        });
        Modal.confirm({
          content: "게시물이 성공적으로 등록되었습니다.",
          onOk: () => router.push(`/boards/${result.data.createBoard._id}`),
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }

  async function onClickUpdate() {
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: inputs.password,
          updateBoardInput: {
            title: inputs.title || props.data?.title,
            contents: inputs.contents || props.data?.contents,
            boardAddress: { zipcode, address, addressDetail },
          },
        },
      });
      Modal.confirm({
        content: "게시물이 성공적으로 수정되었습니다.",
        onOk: () => router.push(`/boards/${result.data.updateBoard._id}`),
      });
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickMoveToList() {
    router.push("/boards");
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }

  function onCancel() {
    setIsOpen(false);
  }

  return (
    <BoardWriteUI
      isOpen={isOpen}
      isEdit={props.isEdit}
      data={props.data}
      active={active}
      zipcode={zipcode}
      address={address}
      inputsErrors={inputsErrors}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeAddressDetail={onChangeAddressDetail}
      inputs={inputs}
      onCancel={onCancel}
      onClickMoveToList={onClickMoveToList}
    />
  );
}
