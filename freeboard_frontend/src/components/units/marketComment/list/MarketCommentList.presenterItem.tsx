import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import BoardCommentWrite from "../write/MarketCommentWrite.container";
import { EditOutlined, CloseOutlined, FormOutlined } from "@ant-design/icons";
import { FETCH_QUESTION_ANSWER } from "./MarketCommentList.queries";
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

export default function MarketCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  // const [fetchUseditemQuestions] = useQuery(FETCH_QUESTIONS, {
  //   variables,
  // });
  const [recommentID, setRecommentID] = useState();
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  // const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [isRecomment, setIsRecomment] = useState(false);
  const { data: recomment } = useQuery(FETCH_QUESTION_ANSWER, {
    variables: { useditemQuestionId: props.data?._id },
  });

  // console.log(recomment, "리코맨트 데이터");
  function onClickUpdate() {
    setIsEdit(true);
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  function onClickRecomment() {
    setIsRecomment(true);
  }

  function onCancel() {
    setIsOpenDeleteModal(false);
  }

  return (
    <>
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
              commentId={props.data?._id}
              setIsRecomment={setIsRecomment}
            />
          )}
          <>
            {recomment?.fetchUseditemQuestionAnswers.map((data) => (
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
                    <OptionWrapper></OptionWrapper>
                  </FlexWrapper>
                  <DateString>{getDate(data.createdAt)}</DateString>
                </ItemWrapper>
              </RecommentWrapper>
            ))}
          </>
        </>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
      {/* {isRecomment && } */}
    </>
  );
}
