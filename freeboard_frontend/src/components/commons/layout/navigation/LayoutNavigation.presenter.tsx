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
  const openAPIs = "openAPI";
  const boardss = "boards";

  return (
    <Wrapper>
      <MenuItem
        id="openAPI"
        onClick={props.EnterToMenu}
        isClickd={openAPIs === props.isClick}
      >
        Open API
      </MenuItem>
      <>|</>
      <MenuItem
        id="boards"
        onClick={props.EnterToMenu}
        isClickd={boardss === props.isClick}
      >
        자유게시판
      </MenuItem>
      <>|</>
      <MenuItem id="products">중고마켓</MenuItem>
      <>|</>
      <MenuItem id="mypages">마이페이지</MenuItem>
      {/* <div>{scrollY}</div> */}

      {/* <Testdiv scrollY={scrollY}>dd</Testdiv> */}
    </Wrapper>
  );
}
