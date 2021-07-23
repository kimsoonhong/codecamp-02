import { MenuItem, Wrapper, Testdiv } from "./LayoutNavigation.styles";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

export default function LayoutNavigationUI(props) {
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
    <Wrapper>
      <MenuItem>자유게시판</MenuItem>
      <>|</>
      <MenuItem>중고마켓</MenuItem>
      <>|</>
      <MenuItem>마이페이지</MenuItem>
      <div>{scrollY}</div>

      <Testdiv scrollY={scrollY}>dd</Testdiv>
    </Wrapper>
  );
}
