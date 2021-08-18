import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import { EditOutlined, CloseOutlined, FormOutlined } from "@ant-design/icons";
import {
  FETCH_QUESTION_ANSWER,
  DELETE_QUESTIONS,
  FETCH_QUESTIONS,
  DELETE_QUESTIONS_ANSWER,
} from "./MarketCommentList.queries";
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
} from "./MarketCommentList.styles";
import { IBoardCommentListUIItemProps } from "./MarketCommentList.types";
import RecommentUI from "../recomment/MarketRecomment.container";
import { useEffect } from "react";

export default function MarketCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const [recommentID, setRecommentID] = useState();
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isEditAnswer, setIsEditAnswer] = useState([]);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  useEffect(() => {
    setIsEditAnswer(
      new Array(recomment?.fetchUseditemQuestionAnswers.length).fill(false)
    );
  }, []);

  // const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [isRecomment, setIsRecomment] = useState(false);
  const { data: recomment } = useQuery(FETCH_QUESTION_ANSWER, {
    variables: { useditemQuestionId: props.data?._id },
  });
  const [deleteUseditemQuestion] = useMutation(DELETE_QUESTIONS);
  const [deleteUseditemQuestionAnswer] = useMutation(DELETE_QUESTIONS_ANSWER);

  // console.log(recomment, "리코맨트 데이터");
  function onClickUpdate() {
    setIsEdit(true);
  }

  const onClickUpdateAnswer = (index) => () => {
    const newIsEditAnswer = [...isEditAnswer];
    newIsEditAnswer[index] = true;
    setIsEditAnswer(newIsEditAnswer);
    // alert("d");
  };
  // console.log(props.data?._id, "대댓글에 사용되는 아이디 qid");
  // console.log(recomment?.fetchUseditemQuestionAnswers[0]?._id, "dd");
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

  function onClickOpenDeleteModalQuestAnswr(answerID) {
    Modal.confirm({
      content: "대댓글삭제할꺼얌?",
      onCancel: () => {
        Modal.info({ content: "고맙다..." });
      },
      onOk: async () => {
        try {
          await deleteUseditemQuestionAnswer({
            variables: { useditemQuestionAnswerId: answerID },
            refetchQueries: [
              {
                query: FETCH_QUESTION_ANSWER,
                variables: {
                  useditemQuestionId: props.data?._id,
                },
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

  function onClickRecomment() {
    setIsRecomment(true);
  }

  function onCancel() {
    setIsOpenDeleteModal(false);
  }

  // const isEditAnswer = [false, false, true, false];
  console.log("데이터", props.data.contents);
  return (
    <>
      <Contents>{props.data.contents}</Contents>
      {!isEdit && (
        <>
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
            <DateString>{getDate(props.data.createdAt)}</DateString>
          </ItemWrapper>
          {isRecomment && (
            <RecommentUI
              FetchQuestId={props.data?._id}
              setIsRecomment={setIsRecomment}
            />
          )}
          <>
            {recomment?.fetchUseditemQuestionAnswers.map((data, index) => (
              <>
                {isEditAnswer[index] && (
                  <RecommentUI
                    isEditAnswer={isEditAnswer}
                    setIsEditAnswer={setIsEditAnswer}
                    data={data}
                  />
                )}
                {!isEditAnswer[index] && (
                  <RecommentWrapper key={data._id}>
                    <RecommentImg src="/images/Recomment.png" />
                    <ItemWrapper
                      style={{
                        // backgroundColor: "green",
                        width: "1100px",
                      }}
                    >
                      <FlexWrapper>
                        <Avatar src="/images/avatar.png" />
                        <MainWrapper>
                          <WriterWrapper>
                            <Writer>{data.user.name}</Writer>
                          </WriterWrapper>
                          <Contents>{data.contents}</Contents>
                        </MainWrapper>
                        <OptionWrapper>
                          <EditOutlined
                            onClick={onClickUpdateAnswer(index)}
                            style={{ fontSize: "20px" }}
                          />
                          <CloseOutlined
                            onClick={() => {
                              onClickOpenDeleteModalQuestAnswr(data._id);
                            }}
                            style={{ fontSize: "20px" }}
                          />
                        </OptionWrapper>
                      </FlexWrapper>
                      <DateString>{getDate(data.createdAt)}</DateString>
                    </ItemWrapper>
                  </RecommentWrapper>
                )}
              </>
            ))}
          </>
        </>
      )}
      {isEdit && (
        <MarketCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
    </>
  );
}
