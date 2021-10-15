import {
  Wrapper,
  LiftWrapper,
  LiftWrapperProfileWrapper,
  LiftWrapperMypage,
  LiftWrapperPageWrapper,
  LiftWrapperMenu,
} from "./Sidebar.styles";

export default function mypageUi(props: any) {
  return (
    <Wrapper>
      {/* <InnerDiv> */}
      <LiftWrapper>
        <LiftWrapperProfileWrapper>
          <LiftWrapperMypage>My page</LiftWrapperMypage>
          {/* <LiftWrapperAvatar></LiftWrapperAvatar>
          <LiftWrapperUserName>
            {props.loginData?.fetchUserLoggedIn.name}
          </LiftWrapperUserName>
          <LiftWrapperUserPoint>
            {props.loginData?.fetchUserLoggedIn.userPoint.amount}
          </LiftWrapperUserPoint> */}
        </LiftWrapperProfileWrapper>

        <LiftWrapperPageWrapper>
          <LiftWrapperMenu
            id="myMarket"
            onClick={props.onClickMenu}
            // @ts-ignore
            isActive={props.activePage === "myMarket"}
          >
            내장터
          </LiftWrapperMenu>
          <LiftWrapperMenu
            id="myPoint"
            onClick={props.onClickMenu}
            // @ts-ignore
            isActive={props.activePage === "myPoint"}
          >
            내 포인트
          </LiftWrapperMenu>
          <LiftWrapperMenu
            id="myprofile"
            onClick={props.onClickMenu}
            // @ts-ignore
            isActive={props.activePage === "myprofile"}
          >
            내 프로필
          </LiftWrapperMenu>
        </LiftWrapperPageWrapper>
      </LiftWrapper>
    </Wrapper>
  );
}
