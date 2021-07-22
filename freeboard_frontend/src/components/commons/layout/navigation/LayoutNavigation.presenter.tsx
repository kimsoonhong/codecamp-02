import { MenuItem, Wrapper } from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props) {
  return (
    <Wrapper id="wrapper">
      <MenuItem>자유게시판</MenuItem>
      <>|</>
      <MenuItem>중고마켓</MenuItem>
      <>|</>
      <MenuItem>마이페이지</MenuItem>
    </Wrapper>
  );
}
