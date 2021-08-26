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

export default function mypage() {
  const [page, setPage] = useState("myprofile");

  return (
    <Wrapper>
      <div>
        <Sidebar setPage={setPage} />
      </div>
      {page === "myprofile" && <MyProfile />}
      {page === "myMarket" && <MyMarket />}
      {page === "myPoint" && <MyPoint />}
    </Wrapper>
  );
}
