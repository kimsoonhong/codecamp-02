import SidebarUi from "./Sidebar.presenter";
import { FETCH_USER_LOGGED_IN } from "./Sidebar.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function Sidebar(props: any) {
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const [activePage, setActivePage] = useState("myMarket");

  const onClickMenu = (event: MouseEvent) => {
    props.setPage((event.target as any).id);

    const activePage = (event.target as any).id;
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
