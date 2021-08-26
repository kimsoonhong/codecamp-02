import {
  Wrapper,
  BottomWrapper,
  Button,
  Contents,
  ContentsLength,
  ContentsWrapper,
} from "./MarketRecomment.styles";

import { FormOutlined } from "@ant-design/icons";

export default function MarketRecommentUI(props) {
  return (
    <div>
      {/* {props.data?.} */}
      <Wrapper>
        <FormOutlined style={{ fontSize: "20px", marginRight: "25px" }} />
        <ContentsWrapper>
          <Contents
            name="contents"
            defaultValue={"dd"}
            onChange={props.onChangeRecommnet}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <BottomWrapper>
            <ContentsLength>0/100</ContentsLength>
            <Button
              onClick={
                props.isEditAnswer
                  ? props.onClickUpdateAnswer
                  : props.onClickAnswer
              }
            >
              {props.isEditAnswer ? "답글수정" : "답글등록"}
            </Button>
          </BottomWrapper>
        </ContentsWrapper>
      </Wrapper>
    </div>
  );
}
