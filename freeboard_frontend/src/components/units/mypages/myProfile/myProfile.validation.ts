import * as yup from "yup";

export const schemaSubmit = yup.object().shape({
  password: yup
    .string()
    .min(8, "비밀번호는 8글자 이상이여야 합니다.")
    .max(15, "비밀번호는 15글자 이하여야 합니다.")
    .required("비밀번호는 필수 입력 입니다."),
});
