import SidebarUi from "./Sidebar.presenter";
import { FETCH_USER_LOGGED_IN } from "./Sidebar.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function Sidebar(props) {
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const [activePage, setActivePage] = useState("myMarket");

  const onClickMenu = (event) => {
    props.setPage(event.target.id);

    const activePage = event.target.id;
    setActivePage(activePage);
  };

  return (
    <SidebarUi
      loginData={loginData}
      onClickMenu={onClickMenu}
      activePage={activePage}
    />
  );
}
