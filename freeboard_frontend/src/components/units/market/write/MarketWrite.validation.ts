import * as yup from "yup";

export const schemaSubmit = yup.object().shape({
  name: yup.string().required("상품명은 필수 입력 입니다."),
  // .matches(/[A-Z]+/, "대문자만 입력!")
  // .url("주소를 입력해주세요")
  // .matches(/\d{3}-\d{4}-\d{4}/, "에러메시지")

  remarks: yup.string().required("한줄요약은 필수 입력 입니다."),
  contents: yup.string().required("상품설명은 필수 입력 입니다."),
  price: yup
    .number()
    .typeError("숫자를 입력해 주세요.")
    .min(0, "ddd")
    .positive("가격은 양수로 적어주세요.")
    .integer("ss")
    .required("판매가격은 필수 입력 입니다."),
  tags: yup.string().required("태그는 필수 입력 입니다."),
  address: yup.string().required("주소는 필수 입력 입니다."),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 틀렸습니다.")
    .required("이메일은 필수 입력 입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 8글자 이상이여야 합니다.")
    .max(15, "비밀번호는 15글자 이하여야 합니다.")
    .required("비밀번호는 필수 입력 입니다."),
});
