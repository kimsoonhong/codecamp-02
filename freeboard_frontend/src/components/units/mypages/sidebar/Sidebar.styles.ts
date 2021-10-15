import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: gray; */
  display: flex;
  flex-direction: row;
  justify-content: end;
  /* width: 1500px; */
  margin: auto;
  position: sticky;
  top: 120px;

  /* background-color: red; */
`;

export const LiftWrapper = styled.div`
  width: 200px;
  background-color: #1b521f14;
  text-align: center;
  margin-right: 40px;
  margin-left: 40px;
  padding-top: 20px;
  margin-top: 15px;

  border-radius: 20px;
  /* border: 2px gray solid; */
`;

export const LiftWrapperProfileWrapper = styled.div`
  /* background-color: blueviolet; */
`;

export const LiftWrapperMypage = styled.div`
  font-size: 24px;
  font-weight: 700;
  /* background-color: aqua; */
  padding-bottom: 10px;
  border-bottom: 2px gray solid;
`;

export const LiftWrapperAvatar = styled.img`
  width: 80px;
  height: 80px;
  background-color: burlywood;
  border-radius: 50%;
  margin-top: 48px;
`;

export const LiftWrapperUserName = styled.div`
  font-style: 24px;
  font-weight: 700;
  padding-top: 28px;
  /* background-color: chartreuse; */
`;

export const LiftWrapperUserPoint = styled.div`
  padding-top: 10px;
  /* background-color: coral; */
  font-style: 16px;
`;

export const LiftWrapperPageWrapper = styled.div`
  /* background-color: cornsilk; */
  padding-top: 20px;
`;

export const LiftWrapperMenu = styled.div`
  height: 30px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  transition: ease-in-out 200ms all;
  cursor: pointer;
  font-size: ${(props: any) => (props.isActive ? "20px" : "")};
  color: ${(props: any) => (props.isActive ? "#84b96e" : "")};

  :hover {
    font-size: 20px;
    transition: ease-in-out 200ms all;
  }
`;
