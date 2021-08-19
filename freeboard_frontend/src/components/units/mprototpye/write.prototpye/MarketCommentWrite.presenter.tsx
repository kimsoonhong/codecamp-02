import { FormOutlined } from "@ant-design/icons";

import {
  Title,
  BottomWrapper,
  Button,
  Contents,
  ContentsLength,
  ContentsWrapper,
  Input,
  InputWrapper,
  PencilIcon,
  Star,
  Wrapper,
} from "./MarketCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./MarketCommentWrite.types";

export default function MarketCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <Wrapper>
      {!props.isEdit && (
        <>
          <Title>
            {" "}
            <FormOutlined style={{ fontSize: "20px", marginRight: "10px" }} />
            문의하기
          </Title>
        </>
      )}

      <ContentsWrapper>
        <Contents
          name="contents"
          // value={props.inputs.contents || props.data?.contents}
          defaultValue={props.data?.contents}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <BottomWrapper>
          <ContentsLength>0/100</ContentsLength>
          <Button
            id={props.data?._id}
            onClick={
              props.isEdit ? props.onClickUpdateQuestion : props.onClickWrite
            }
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}
