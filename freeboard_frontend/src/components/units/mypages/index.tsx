import Sidebar from "./sidebar/Sidebar.container";
import MyMarket from "./myMarket/myMarket.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  background-color: blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Body = styled.div``;

export default function mypage(props) {
  return (
    <Wrapper>
      <Sidebar />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}