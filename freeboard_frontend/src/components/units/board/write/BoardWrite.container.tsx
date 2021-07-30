import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { IBoardWriteProps } from "./BoardWrite.types";
import { Modal } from "antd";
import { useRef } from "react";
import { tuple } from "antd/lib/_util/type";

export const INPUTS_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: "",
};

export default function BoardWrite(props: IBoardWriteProps) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const [active, setActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadfile] = useMutation(UPLOAD_FILE);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [isUpload, setIsUpload] = useState(true);
  const [resultImgUrl, setResultimgUrl] = useState([]);
  const [file, setFile] = useState([]);

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }
  // console.log(imgUrl);

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

  function onClickSubmit() {
    Modal.confirm({
      content: "게시물이 성공적으로 등록되었습니다.",
      onOk: async () => {
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

        const resultFiles = await Promise.all(
          file.map((data) => {
            // console.log(data);
            return uploadfile({ variables: { file: data } });
          })

          //   [
          //   uploadfile({
          //     variables: {
          //       file: file,
          //     },
          //   }),
          // ]
        );

        // const realImg = [...file];
        // realImg.push(fileInfo);
        // setFile(realImg);

        const aa = resultFiles.map((data) => {
          return data.data.uploadFile.url;
        }); // ["https://123123", "https://3343434"]

        // try {
        //   const result = await uploadfile({
        //     variables: {
        //       file: file,
        //     },
        //   });
        // console.log(result.data.uploadFile.url);
        // setImgUrl(result.data.uploadFile.url);

        //   const imageArr = [...imgUrl];
        //   imageArr.push(result?.data?.uploadFile.url);
        //   setImgUrl(imageArr);
        //   console.log(imageArr);
        // } catch (error) {
        //   alert(error.massage);
        // }

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
                  images: aa, //["https://2111", "https://22222"],
                },
              },
            });

            router.push(`/boards/${result.data.createBoard._id}`);
          } catch (error) {
            alert(error.message);
          }
        }
      },
      onCancel: () => setVisible(false),
    });
  }

  async function onClickUpdate() {
    const resultFiles = await Promise.all(
      file.map((data) => {
        // console.log(data);
        return uploadfile({ variables: { file: data } });
      })
    );

    const aa = resultFiles.map((data) => {
      return data.data.uploadFile.url;
    });

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: inputs.password,
          updateBoardInput: {
            title: inputs.title || props.data?.title,
            contents: inputs.contents || props.data?.contents,
            boardAddress: { zipcode, address, addressDetail },
            image: aa,
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

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const fileInfo = event.target.files?.[0];
    setIsUpload(false);
    // console.log(event.target.files?.[0]);
    if (!fileInfo?.size) {
      alert("파이리 없습니다.");
      return;
    }
    if (fileInfo?.size > 5 * 1024 * 1024) {
      alert("파일 사이즈가 5mb보다 큽니다.");
      return;
    }
    if (!fileInfo?.type.includes("png") && !fileInfo?.type.includes("jpeg")) {
      alert("png또는 jpeg 파일만 전송 가능합니다.");
      return;
    }

    // try {
    //   const result = await uploadfile({
    //     variables: {
    //       file: file,
    //     },
    //   });
    //   // console.log(result.data.uploadFile.url);
    //   // setImgUrl(result.data.uploadFile.url);

    //   const imageArr = [...imgUrl];
    //   imageArr.push(result?.data?.uploadFile.url);
    //   setImgUrl(imageArr);
    //   console.log(imageArr);
    // } catch (error) {
    //   alert(error.massage);
    // }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileInfo);
    fileReader.onload = (data) => {
      // console.log(data.target.result);
      // data >읽힌 결과물

      const resultImgArr = [...resultImgUrl];
      resultImgArr.push(data.target.result);
      setResultimgUrl(resultImgArr); // 임시주소

      const realImg = [...file];
      realImg.push(fileInfo);
      setFile(realImg);
    };
  }

  // console.log(file);

  function onClickGreyBox(event) {
    // console.log(event.target?.children);
    event.target?.children[2]?.click();
    // fileRef.current?.click();
  }

  function onClickDeleteImg(index) {
    const imgArr = [...resultImgUrl];
    imgArr.splice(index, 1);
    // imgUrl.splice(index, 1);
    // console.log(imgUrl);

    setResultimgUrl(imgArr);
    // setImgUrl([""]);
  }
  // resultImgUrl, setResultimgUrl;
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
      onChangeFile={onChangeFile}
      imgUrl={imgUrl}
      onClickGreyBox={onClickGreyBox}
      fileRef={fileRef}
      setImgUrl={setImgUrl}
      isUpload={isUpload}
      onClickDeleteImg={onClickDeleteImg}
      resultImgUrl={resultImgUrl}
    />
  );
}
