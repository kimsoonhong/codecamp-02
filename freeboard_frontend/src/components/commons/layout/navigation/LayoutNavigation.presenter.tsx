import { MenuItem, Wrapper, Ber } from "./LayoutNavigation.styles";
import { MouseEvent } from "react";

interface ILayoutNavigationUIProps {
  EnterToMenu: (event: MouseEvent<HTMLDivElement>) => void;
  isClick: any;
}

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <MenuItem
        id="proflie"
        onClick={props.EnterToMenu}
        //  @ts-ignore
        isClick={props.isClick === "proflie"}
      >
        자기소개서
      </MenuItem>
      <Ber>|</Ber>
      <MenuItem
        id="boards"
        onClick={props.EnterToMenu}
        //  @ts-ignore
        isClick={props.isClick === "boards"}
      >
        자유게시판
      </MenuItem>
      <Ber>|</Ber>
      <MenuItem
        id="market"
        onClick={props.EnterToMenu}
        isClick={props.isClick === "market"}
      >
        중고마켓
      </MenuItem>
      <Ber>|</Ber>
      <MenuItem
        id="mypages"
        onClick={props.EnterToMenu}
        isClick={props.isClick === "mypages"}
      >
        마이페이지
      </MenuItem>
    </Wrapper>
  );
}
