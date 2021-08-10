import { gql, useMutation } from "@apollo/client";
// import ReactQuill from "react-quill";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function webEditorPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const { handleSubmit, register, setValue, trigger } = useForm();
  const router = useRouter();

  const onClickButton = async (data) => {
    console.log("data");
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: String(data.contents),
          },
        },
      });
      router.push(`/27-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeContents = (value) => {
    setValue("contents", value);
    trigger("contents");
  };

  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자: <input type="text" {...register("writer")}></input> <br />
      비밀번호: <input type="password" {...register("password")}></input>
      <br />
      제목: <input type="text" {...register("title")}></input>
      <br />
      {/* 내용:<input type="text" {...register("contnets")}></input> */}
      <ReactQuill onChange={onChangeContents} />
      <br />
      <button type="submit">게시물 등록하기</button>
      <br />
      <div></div>
    </form>
  );
}
