import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem(
    $createUseditemInput: CreateUseditemInput!
    $page: Int
  ) {
    createUseditem(createUseditemInput: $createUseditemInput, page: $page) {
      _id
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;
