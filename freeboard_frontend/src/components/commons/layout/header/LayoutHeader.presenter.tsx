import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import { useState } from "react";
import { useEffect } from "react";

export default function LayoutHeaderUI(props) {
  const [scrollY, setScrollY] = useState<number>(0);
  const listener = () => {
    setScrollY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <Wrapper id="wrapper" scrollY={scrollY}>
      <InnerWrapper>
        <InnerLogo>ㅅㅜ ㅣ ㅁ</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickLogin}>로그인</InnerButton>
          <InnerButton>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
