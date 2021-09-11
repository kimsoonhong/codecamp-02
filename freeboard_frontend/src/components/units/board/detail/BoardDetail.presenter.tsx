import { Tooltip } from "antd";
import { AimOutlined } from "@ant-design/icons";
import {
  Avatar,
  AvatarWrapper,
  Body,
  Button,
  Contents,
  CreatedAt,
  BottomWrapper,
  Header,
  IconWrapper,
  Info,
  LikeIconWrapper,
  Title,
  Wrapper,
  Writer,
  CardWrapper,
  ImgWrapper,
  Youtube,
  LikeIcon,
  DislikeIcon,
  LikeWrapper,
  LikeCount,
  DislikeCount,
} from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="/images/avatar.png" />
            <Info>
              <Writer>{props.data?.fetchBoard.writer}</Writer>
              <CreatedAt>
                {String(props.data?.fetchBoard.createdAt).slice(0, 10)}
              </CreatedAt>
            </Info>
          </AvatarWrapper>
          <IconWrapper>
            {/* <LinkOutlined style={{ fontSize: "30px", display: "none" }} /> */}
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <AimOutlined style={{ fontSize: "30px" }} />
            </Tooltip>
          </IconWrapper>
        </Header>
        <Body>
          <Title>{props.data?.fetchBoard.title}</Title>
          <Contents>{props.data?.fetchBoard.contents}</Contents>

          {props.data?.fetchBoard.images.map((date: any, index: any) => (
            <ImgWrapper
              key={index}
              src={`https://storage.googleapis.com/${props.data?.fetchBoard?.images[index]}`}
            />
          ))}

          <Youtube
            url={props.data?.fetchBoard.youtubeUrl}
            width="486px"
            height="240px"
            muted
            playing
          />
          <LikeWrapper>
            <LikeIconWrapper>
              <LikeIcon onClick={props.onClickLike} />
              <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
            </LikeIconWrapper>
            <LikeIconWrapper>
              <DislikeIcon onClick={props.onClickDislike} />
              <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
            </LikeIconWrapper>
          </LikeWrapper>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button onClick={props.onClickMoveToList}>목록으로</Button>
        <Button onClick={props.onClickMoveToEdit}>수정하기</Button>
        <Button onClick={props.onClickDelete}>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
