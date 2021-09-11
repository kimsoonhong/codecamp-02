import { FormOutlined } from "@ant-design/icons";

import {
  BottomWrapper,
  Button,
  Contents,
  ContentsWrapper,
  Input,
  InputWrapper,
  Star,
  Wrapper,
} from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <Wrapper>
      {!props.isEdit && (
        <>
          <FormOutlined style={{ fontSize: "20px" }} />
          <span style={{ fontSize: "20px" }}>댓글</span>
        </>
      )}
      <InputWrapper>
        <Input
          name="writer"
          placeholder="작성자"
          value={props.inputsWriter || props.data?.writer || ""}
          readOnly={Boolean(props.data?.writer)}
          onChange={props.onChangeWriter}
        />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={props.inputsPassword}
          onChange={props.onChangePassword}
        />
        <Star
          onChange={props.onChangeRating}
          defaultValue={props.inputsRating || props.data?.rating}
          // style={{ color: "white", backgroundColor: "white" }}
        />
      </InputWrapper>
      <ContentsWrapper>
        <Contents
          name="contents"
          value={props.inputsContents || props.data?.contents}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <BottomWrapper>
          {/* <ContentsLength>0/100</ContentsLength> */}
          <Button
            id={props.data?._id}
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
    //  function onChangeStar(value: number) {
    //   setInputs({ ...inputs, rating: value });
    // }
  );
}
