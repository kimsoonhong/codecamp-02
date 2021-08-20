import {
  Wrapper,
  LiftWrapper,
  LiftWrapperProfileWrapper,
  LiftWrapperMypage,
  LiftWrapperAvatar,
  LiftWrapperUserName,
  LiftWrapperUserPoint,
  LiftWrapperPageWrapper,
  LiftWrapperMyItem,
  LiftWrapperMyPoint,
  LiftWrapperMyProflie,
} from "./Sidebar.styles";

export default function mypageUi(props) {

  return (
    <Wrapper>
      {/* <InnerDiv> */}
      <LiftWrapper>
        <LiftWrapperProfileWrapper>
          <LiftWrapperMypage>My page</LiftWrapperMypage>
          <LiftWrapperAvatar></LiftWrapperAvatar>
          <LiftWrapperUserName>
            {props.loginData?.fetchUserLoggedIn.name}
          </LiftWrapperUserName>
          <LiftWrapperUserPoint>
            {props.loginData?.fetchUserLoggedIn.userPoint.amount}
          </LiftWrapperUserPoint>
        </LiftWrapperProfileWrapper>
        <LiftWrapperPageWrapper>
          <LiftWrapperMyItem id="myMarket" onClick={props.onClickMenu}>
            내장터
          </LiftWrapperMyItem>
          <LiftWrapperMyPoint id="myPoint" onClick={props.onClickMenu}>
            내 포인트
          </LiftWrapperMyPoint>
          <LiftWrapperMyProflie id="myprofile" onClick={props.onClickMenu}>
            내 프로필
          </LiftWrapperMyProflie>
        </LiftWrapperPageWrapper>
      </LiftWrapper>
    </Wrapper>
  );
}
