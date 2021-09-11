// @ts-ignore
import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  padding-bottom: 60px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: darkolivegreen; */
`;

export const Avatar = styled.img`
  margin-right: 10px;
  width: 50%;
  height: 50%;
  margin: auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  font-size: 20px;
  padding-left: 20px;
`;

export const CreatedAt = styled.div`
  font-size: 16px;
  padding-left: 20px;
  /* background-color: cadetblue; */
  width: 150px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100px;
  /* background-color: darkblue; */
`;

export const LinkIcon = styled.img`
  color: darkblue;
`;

export const LocationIcon = styled.img``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const ImgWrapper = styled.img`
  background-color: red;
  width: 100%;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  background-color: #2a652f;
  border: 1px solid gray;
  margin: 0px 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: white;

  :hover {
    background-color: #142b12;
    border-color: white;
  }
`;

export const LikeWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: darkblue; */
  width: 180px;
  margin: auto;
`;

export const LikeIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 40px;
  color: #ffd600;
  margin-left: 0px;

  cursor: pointer;
  /* background-color: darkgray; */
`;

export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 40px;
  color: #828282;

  cursor: pointer;
  /* background-color: darkkhaki; */
`;

export const LikeCount = styled.div`
  font-size: 30px;
  margin: auto;
  /* background-color: darkmagenta; */
`;

export const DislikeCount = styled.div`
  font-size: 30px;
  margin: auto;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
