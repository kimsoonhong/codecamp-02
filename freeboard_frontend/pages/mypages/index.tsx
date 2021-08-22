import styled from "@emotion/styled";

import Sidebar from "../../src/components/units/mypages/sidebar/Sidebar.container";
import MyPoint from "../../src/components/units/mypages/myPoint/myPoint.container";
import MyProfile from "../../src/components/units/mypages/myProfile/myProfile.container";
import MyMarket from "../../src/components/units/mypages/myMarket/myMarket.container";
import { useState } from "react";

const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Body = styled.div``;

export default function mypage(props) {
  const [page, setPage] = useState("myPoint");

  return (
    <Wrapper>
      <div>
        <Sidebar setPage={setPage} />
      </div>
      {/* <MyMarket /> */}
      {/* <Body> */}
      {page == "myMarket" && <MyMarket />}
      {page == "myPoint" && <MyPoint />}
      {page == "myprofile" && <MyProfile />}
      {/* </Body> */}
    </Wrapper>
  );
}
