import { GithubOutlined } from "@ant-design/icons";

import { Wrapper, Title, Email, Bottom } from "./LayoutHeader.styles";

export default function LayoutFooterUI() {
  return (
    <Wrapper>
      <Title>Let's talk</Title>
      <Email>shong1332@naver.com</Email>

      <GithubOutlined style={{ fontSize: "28px" }} />

      <Bottom>2021 shong - All rights reserved</Bottom>
    </Wrapper>
  );
}
