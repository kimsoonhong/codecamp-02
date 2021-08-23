import {
  Wrapper,
  Title,
  BottomWrapper,
  Button,
  Contents,
  ContentsLength,
  ContentsWrapper,
} from "./questionWrite.styles";
import { FormOutlined } from "@ant-design/icons";
import { ChangeEvent, MouseEvent } from "react";

interface IQuestionWriteUIProps {
  isEdit: boolean;
  onClickWrite: () => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdateQuestion: (event: MouseEvent<HTMLDivElement>) => void;
  data: any;
}

export default function QuestionWriteUI(props: IQuestionWriteUIProps) {
  return (
    <Wrapper>
      {/* {!props.isEdit && ( */}
      <>
        <Title>
          {" "}
          <FormOutlined style={{ fontSize: "20px", marginRight: "10px" }} />
          {props.isEdit ? "수정하기" : "문의하기"}
        </Title>
      </>
      {/* )} */}

      <ContentsWrapper>
        <Contents
          name="contents"
          // defaultValue={props.data?.contents}
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
