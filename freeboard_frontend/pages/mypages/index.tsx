import styled from "@emotion/styled";

import Sidebar from "../../src/components/units/mypages/sidebar/Sidebar.container";
import MyPoint from "../../src/components/units/mypages/myPoint/myPoint.container";
import MyProfile from "../../src/components/units/mypages/myProfile/myProfile.container";
import MyMarket from "../../src/components/units/mypages/myMarket/myMarket.container";
import { useState } from "react";

const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  background-color: blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Body = styled.div``;

export default function mypage(props) {
  const [page, setPage] = useState("myMarket");

  return (
    <Wrapper>
      <Sidebar setPage={setPage} />
      {/* <MyMarket /> */}
      {/* <Body> */}
      {page == "myMarket" && <MyMarket />}
      {page == "myPoint" && <MyProfile />}
      {page == "myprofile" && <MyPoint />}
      {/* </Body> */}
    </Wrapper>
  );
}
