import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
export default function LayoutHeaderUI(props) {
  const [scrollY, setScrollY] = useState<number>(0);
  const listener = () => {
    setScrollY(window.pageYOffset);
  };
  const { accessToken } = useContext(GlobalContext);
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
          <InnerButton onClick={props.onClickLogin}>
            {accessToken ? "아바타였던것" : "로그인하기"}
          </InnerButton>
          <InnerButton onClick={props.onClickSignUp}>
            {accessToken ? "마이페이지였던것" : "회원가입하기"}
          </InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
