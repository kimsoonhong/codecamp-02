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
  addressDetail: yup.string().required("상세주소는 필수 입력 입니다."),
  // image: yup.string().required("이미지를 넣어주세요"),
});
