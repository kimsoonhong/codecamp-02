import { GithubOutlined } from "@ant-design/icons";
import { useState, useEffect, MouseEvent } from "react";
import { Wrapper, Title, Email, Bottom, ArrowUP } from "./LayoutHeader.styles";

export default function LayoutFooterUI() {
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

  function scrollToTop(event: MouseEvent) {
    window.scrollTo(0, 1);
  }

  return (
    <Wrapper>
      <Title>{`Let's talk`}</Title>
      <Email>shong1332@naver.com</Email>

      <GithubOutlined style={{ fontSize: "28px" }} />

      <Bottom>2021 shong - All rights reserved</Bottom>
      {/* @ts-ignore */}
      <ArrowUP scrollY={scrollY} onClick={scrollToTop} />
    </Wrapper>
  );
}
