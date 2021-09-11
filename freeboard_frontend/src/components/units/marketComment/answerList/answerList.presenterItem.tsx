import { useMutation, useQuery } from "@apollo/client";
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
} from "./answerList.styles";
import { Modal } from "antd";

import { EditOutlined, CloseOutlined } from "@ant-design/icons";

import {
  FETCH_USER_LOGGED_IN,
  DELETE_QUESTIONS_ANSWER,
  FETCH_QUESTION_ANSWER,
} from "./answerList.querise";
import { useState } from "react";
import AnswerWrite from "../answerWrite/answerWrite.container";

export default function answerListUIItem(props: any) {
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteUseditemQuestionAnswer] = useMutation(DELETE_QUESTIONS_ANSWER);
  const [isEdit, setIsEdit] = useState(false);

  function onClickUpdateAnswer() {
    setIsEdit(true);
  }

  function onClickOpenDeleteModalQuestAnswr() {
    Modal.confirm({
      content: "대댓글을 삭제하시겠습니까??",
      onCancel: () => {
        Modal.info({ content: "취소되었습니다." });
      },
      onOk: async () => {
        try {
          await deleteUseditemQuestionAnswer({
            variables: { useditemQuestionAnswerId: props.data?._id },
            refetchQueries: [
              {
                query: FETCH_QUESTION_ANSWER,
                variables: {
                  useditemQuestionId: props.questionData,
                },
              },
            ],
          });
          Modal.info({ content: "대댓글이 삭제되었습니다." });
        } catch (error) {
          Modal.error({ content: error.message });
        }
      },
    });
  }

  return (
    <div>
      {!isEdit && (
        <RecommentWrapper>
          <RecommentImg src="/images/Recomment.png" />
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
                {props.data?.user._id !== userData?.fetchUserLoggedIn._id ? (
                  <></>
                ) : (
                  <>
                    <EditOutlined
                      onClick={onClickUpdateAnswer}
                      style={{ fontSize: "20px" }}
                    />
                    <CloseOutlined
                      onClick={onClickOpenDeleteModalQuestAnswr}
                      style={{ fontSize: "20px", color: "red" }}
                    />
                  </>
                )}
              </OptionWrapper>
            </FlexWrapper>
            <DateString>{String(props.data.createdAt).slice(0, 10)}</DateString>
          </ItemWrapper>
        </RecommentWrapper>
      )}

      {isEdit && (
        <AnswerWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
          questionData={props.questionData}
        />
      )}
    </div>
  );
}
