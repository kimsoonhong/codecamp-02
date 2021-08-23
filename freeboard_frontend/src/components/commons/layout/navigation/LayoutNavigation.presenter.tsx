import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { MouseEvent, useEffect } from "react";

interface ILayoutNavigationUIProps {
  EnterToMenu: (event: MouseEvent<HTMLDivElement>) => void;
  isClick: any;
}

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
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
      <MenuItem id="market/" onClick={props.EnterToMenu}>
        중고마켓
      </MenuItem>
      <>|</>
      <MenuItem id="mypages/" onClick={props.EnterToMenu}>
        마이페이지
      </MenuItem>
      {/* <div>{scrollY}</div> */}

      {/* <Testdiv scrollY={scrollY}>dd</Testdiv> */}
    </Wrapper>
  );
}
