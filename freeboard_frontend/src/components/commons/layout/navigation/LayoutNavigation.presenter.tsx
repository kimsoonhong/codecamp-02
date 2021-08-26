import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { MouseEvent } from "react";

interface ILayoutNavigationUIProps {
  EnterToMenu: (event: MouseEvent<HTMLDivElement>) => void;
  isClick: any;
}

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  // const [scrollY, setScrollY] = useState();
  // const listener = () => {
  //   setScrollY(window.pageYOffset);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listener);
  //   return () => {
  //     window.removeEventListener("scroll", listener);
  //   };
  // });

  return (
    <Wrapper>
      <MenuItem
        id="openAPI"
        onClick={props.EnterToMenu}
        isClick={"openAPI" === props.isClick}
      >
        Open API
      </MenuItem>
      <>|</>
      <MenuItem
        id="boards"
        onClick={props.EnterToMenu}
        isClick={"boards" === props.isClick}
      >
        자유게시판
      </MenuItem>
      <>|</>
      <MenuItem
        id="market"
        onClick={props.EnterToMenu}
        isClick={"market" === props.isClick}
      >
        중고마켓
      </MenuItem>
      <>|</>
      <MenuItem
        id="mypages"
        onClick={props.EnterToMenu}
        isClick={"mypages" === props.isClick}
      >
        마이페이지
      </MenuItem>
      {/* <div>{scrollY}</div> */}

      {/* <Testdiv scrollY={scrollY}>dd</Testdiv> */}
    </Wrapper>
  );
}
