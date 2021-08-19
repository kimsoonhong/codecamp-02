import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Sentry from "@sentry/nextjs";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function SafetyPage() {
  const { formState, handleSubmit } = useForm();

  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onchangeInput = (key) => (event) => {
    setInputs((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const onClickSubmit = async () => {
    // setIsSubmitting(true);

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
          },
        },
      });
      // setIsSubmitting(false);
      console.log(result);
      // throw new Error("애러입니다.");
    } catch (error) {
      Sentry.captureEvent(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div>
          작성자:<input type="text" onChange={onchangeInput("writer")}></input>
        </div>
        <div></div>
        <div>
          비밀번호:
          <input type="password" onChange={onchangeInput("password")}></input>
        </div>
        <div></div>
        <div>
          제목<input type="text" onChange={onchangeInput("title")}></input>
        </div>
        <div></div>
        <div>
          내용 :{" "}
          <input type="text" onChange={onchangeInput("contents")}></input>
        </div>
        <button disabled={formState.isSubmitting} onClick={onClickSubmit}>
          등록하기
        </button>
      </form>
    </div>
  );
}
