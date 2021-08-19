import {
  DELETE_QUESTIONS,
  FETCH_QUESTIONS,
  FETCH_QUESTION_ANSWER,
} from "./questionList.querise";

import {
  RecommentWrapper,
  Avatar,
  Contents,
  DateString,
  FlexWrapper,
  ItemWrapper,
  MainWrapper,
  WriterWrapper,
  OptionWrapper,
  Writer,
  RecommentImg,
} from "./questionList.styles";
import { EditOutlined, CloseOutlined, FormOutlined } from "@ant-design/icons";
import QuestionWrite from "../questionWrite/questionWrite.container";
import AnswerWrite from "../answerWrite/answerWrite.container";
import AnswerList from "../answerList/answerList.container";
import { Modal } from "antd";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function questionListUIItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isRecomment, setIsRecomment] = useState(false);
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_QUESTIONS);

  function onClickOpenDeleteModal() {
    Modal.confirm({
      content: "삭제할꺼얌?",
      onCancel: () => {
        Modal.info({ content: "고맙다..." });
      },
      onOk: async () => {
        try {
          await deleteUseditemQuestion({
            variables: { useditemQuestionId: props.data?._id },
            refetchQueries: [
              {
                query: FETCH_QUESTIONS,
                variables: { useditemId: router.query.useditemId },
              },
            ],
          });
          Modal.info({ content: "삭제되었다.." });
        } catch (error) {
          Modal.error({ content: error.message });
        }
      },
    });
  }

  function onClickUpdate() {
    setIsEdit(true);
  }

  function onClickRecomment() {
    setIsRecomment(true);
  }

  return (
    <div>
      {!isEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar src="/images/avatar.png" />
            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.data.user.name}</Writer>
              </WriterWrapper>
              <Contents>{props.data.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <EditOutlined
                onClick={onClickUpdate}
                style={{ fontSize: "20px" }}
              />
              <CloseOutlined
                onClick={onClickOpenDeleteModal}
                style={{ fontSize: "20px" }}
              />
              <FormOutlined
                onClick={onClickRecomment}
                style={{ fontSize: "20px" }}
              />
            </OptionWrapper>
          </FlexWrapper>
          <DateString> {String(props.data.createdAt).slice(0, 10)}</DateString>
        </ItemWrapper>
      )}
      {isEdit && (
        <QuestionWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
      {isRecomment && (
        <AnswerWrite data={props.data} setIsRecomment={setIsRecomment} />
      )}

      <AnswerList data={props.data} />
    </div>
  );
}
