import SidebarUi from "./Sidebar.presenter";
import { FETCH_USER_LOGGED_IN } from "./Sidebar.queries";
import { useQuery } from "@apollo/client";

export default function Sidebar(props) {
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickMenu = (event) => {
    props.setPage(event.target.id);
  };

  return <SidebarUi loginData={loginData} onClickMenu={onClickMenu} />;
}
