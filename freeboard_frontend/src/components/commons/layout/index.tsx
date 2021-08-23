import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutFooter from "./Footer/LayoutFooter.container";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Wrapper = styled.div`
  /* background-image: url(/images/gc/1.jpeg); */
  /* background-repeat: no-repeat; */
  /* background-size: contain; */
  background-color: #f8fff552;
`;

const Body = styled.div``;

interface IProps {
  children: ReactNode;
}
export default function Layout(props: IProps) {
  return (
    <Wrapper>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
      <LayoutFooter />
    </Wrapper>
  );
}
