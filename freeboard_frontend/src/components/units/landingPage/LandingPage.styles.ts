import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  /* background-color: red; */
  z-index: 99;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const FilterColor = styled.div`
  /* background-color: #6d8fff; */
  opacity: 0.05;

  position: fixed;
  width: 100%;
  height: 100%;
`;

export const BackgroundImg = styled.img`
  width: 100vh;
  height: 100vh;
  margin: auto;
`;

export const MainWrapper = styled.div`
  width: 1366px;
  height: 768px;

  display: flex;
  background-color: blanchedalmond;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const LiftWrapper = styled.div`
  width: 40%;
  padding: 40px;
  /* background-color: #edebf8;
  opacity: 0.2; */
  /* backdrop-filter: brightness(1.1); */
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
`;
export const MainText = styled.div`
  color: #2c2942;
  /* color: black; */
  font-size: 70px;
  font-weight: bolder;
  text-align: center;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 2px solid black;
  height: 40%;
`;
export const Contack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: blueviolet;
  height: 60%;
`;
export const ContackText = styled.div`
  /* border-top: 2px solid black; */
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 40px;
  text-align: center;
`;
export const Email = styled.div`
  font-size: 30px;
  text-align: center;
  /* font-weight: bolder; */
`;

export const IconDiv = styled.div`
  padding-top: 40px;

  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* background-color: lavender; */
`;

export const Git = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: khaki;
`;
export const Blog = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: khaki;
`;
export const RightWrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);

  width: 80%;
  background-color: blueviolet;
  overflow: scroll;
  scroll-snap-type: y mandatory;
  /* overflow: scroll; */
`;

export const InnerWraaper = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  padding: 40px;
  scroll-snap-align: start;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const ProjectImg = styled.div`
  width: 100%;
  background-color: green;
  height: 70%;
`;
export const ProjectTitle = styled.div`
  width: 100%;
  height: 15%;
  background-color: greenyellow;
  text-align: center;
  font-size: 80px;
`;
export const ProjectContent = styled.div`
  height: 40%;
  padding: 40px;
  background-color: hotpink;
  font-size: 30px;
`;
export const ProjectStack = styled.div`
  padding: 40px;
  height: 30%;
  font-size: 30px;
  background-color: blue;
`;

export const EnterToProJect = styled.div`
  padding-top: 40px;
  height: 15%;
  background-color: ivory;
  font-size: 30px;
  text-align: center;
  padding: 40px;
`;
export const SideWrapper = styled.div`
  width: 3%;

  /* padding: 5px; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Project1 = styled.div`
  width: 100%;
  height: 30%;
  background-color: violet;

  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
`;
