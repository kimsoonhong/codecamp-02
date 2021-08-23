// @ts-ignore

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-image: url(/images/landingpage/main.png); */
  width: 100%;

  /* height: 1000px; */
  margin: 0;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  /* box-sizing: border-box; */
  /* position: relative; */
`;

export const LeftWrapper = styled.div`
  background-image: url(/images/landingpage/main.png);
  width: ${(props: any) =>
    props.scrollY > 350 ? 40 : 100 - props.scrollY / 5}%;
  min-width: 40%;
  /* min-width: 50%; */
  height: 100vh;
  position: fixed;
  max-height: 100vh;
  /* border-radius: 20px; */
  /* background-color: tomato; */
  /* box-sizing: border-box; */
  display: flex;
  align-items: center;
  padding-left: 200px;
  /* background-image: url(/images/landingpage/main.png); */
  background-position: center center;
  background-size: cover;
  /* opacity: 0.9; */
  /* transition: all 100ms ease-in; */
`;

export const ShowPage = styled.div`
  width: 100%;
  height: 75%;
  /* max-width: 800px; */
  text-align: center;
  position: relative;
  border-radius: 20px;
  padding: 50px 10px;
  z-index: 1;

  /* background-color: brown; */
  /* position: absolute;
  top: 50%;
  transform: translate(-50%); */

  :after {
    background-color: black;
    top: 0;
    left: 0;
    position: absolute;
    background-size: 100%;
    opacity: 0.5;
    padding: 0px 50%;
    z-index: -1;
    content: "";
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;
// 68
// props.scrollY > 350 ? 40 : 100 - props.scrollY / 5
export const Mant = styled.div`
  font-size: ${(props: any) => (props.scrollY > 200 ? 35 : 68)}px;
  text-align: center;
  font-family: "live";
  color: white;
  /* background-color: yellow; */
  font-weight: bolder;
  max-height: 94px;
  /* padding-right: 30px; */
  position: relative;
  margin: auto;
  display: inline-block;
  transition: all ease;
  width: 100%;
  overflow: hidden;
  transition: 100ms all ease-in;
  :after {
    /* animation: 0.5s; */
    content: "";
    display: block;
    position: absolute;
    bottom: 15px;
    right: -30px;
    height: 65px;
    width: 3px;
    border-radius: 15px;
    display: ${(props: any) => (props.isActive ? "block" : "none")};
    background-color: white;
    /* animation: 0.5s; */
    /* animation-iteration-count: infinite; */
  }
`;

// export const #active = styled.div`
//   display: none;
// `;

export const Banner = styled.div`
  padding-top: ${(props: any) => (props.scrollY > 200 ? 20 : 60)}px;
  font-size: 30px;
  color: white;
  /* background-color: violet; */
  font-family: "normal";
  text-align: center;
  transition: ease-in all 500ms;
`;
export const Title = styled.div`
  font-size: 82px;
  font-weight: bold;
  color: #132b12;
  cursor: pointer;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: white;
  /* background-color: beige; */
  text-align: center;
`;

export const InnerText = styled.p`
  text-align: end;
  margin: auto;
  color: white;
  /* width: 80%; */
  padding: 0 10%;
  opacity: ${(props: any) => -1.2 + props.scrollY / 130};
`;

export const EnterBtn = styled.button`
  width: 40px;
  height: 50px;
  background-color: tomato;
  margin-top: 100px;
  opacity: ${(props: any) => (props.isOpen ? "1" : "0")};
  pointer-events: ${(props: any) => (props.isOpen ? "" : "none")};
`;

// +
// +
// +
// +
// +
// +
// +
// +
export const BlockDiv = styled.div`
  /* background-color: red; */
  padding-right: 200px;

  height: 3000px;

  /* padding-bottom: 200px; */
  /* height: 300px; */
  /* position: fixed; */
  /* z-index: -1; */
  /* display: inline-block; */
`;
export const RightWrapper = styled.div`
  /* height: 100vh; */
  /* background-color: green; */
  /* width: 100%; */

  /* background-color: blue; */

  /* position: absolute; */
  /* display: flex; */
  /* align-items: center; */
  /* overflow: hidden; */
  position: fixed;
  width: 60%;
  padding-top: 10%;
  padding-top: ${(props: any) =>
    props.scrollY > 300 ? 10 : 50 - props.scrollY / 10}%;

  padding-top: ${(props: any) => (props.scrollY > 2200 ? 4 : "")}%;

  /* height: 2000px; */
  transition: 500ms all ease-out;
  margin-left: ${(props: any) => (props.scrollY > 2200 ? 55 : 40)}%;
  /* margin-bottom: 150px; */
  /* background-color: blue; */
  /* background-color: #f8fff552; */
  /* padding-top: 700px; */

  /* background-color: tomato; */
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  /* justify-content: end; */
  /* align-items: center; */

  /* padding-top: 20%; */
  opacity: ${(props: any) => -1.5 + props.scrollY / 200};
  width: ${(props: any) => (props.scrollY >= 2200 ? 40 : 70)}%;
  /* transition: ease-in 100ms all; */
`;
export const ShowLoginPage = styled.div`
  /* background-color: blue; */
  width: 70%;

  /* height: 2000px; */

  /* background-color: red; */
`;

export const Login = styled.div`
  width: 100%;
  /* background-color: wheat; */
  display: flex;
  flex-direction: column;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
`;

export const Image = styled.img`
  width: 200px;
  height: ${(props: any) => (props.scrollY > 2200 ? "0" : "200")}px;
  margin: auto;
  padding-bottom: 50px;

  transition: all ease-in 300ms;
`;

export const LoginInput = styled.input`
  border: none;

  height: 52px;
  border-bottom: 2px solid;

  margin: 20px 0px;
`;

export const ButtonWrapper = styled.div`
  /* background-color: honeydew; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

export const LoginButton = styled.button`
  width: 172px;
  height: 51px;
  background-color: #2a652f;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  margin: 0px 20px;

  :hover {
    background-color: #142b12;
    border-color: white;
  }
`;

// =
// =
// =
// =
// =   footer
// =
// =
// =
// =

export const Footer = styled.div`
  width: 100%;
`;
export const ShowFooter = styled.div`
  /* background-color: #84b96e; */
  /* background-color: #142b12; */
  background-image: url(/images/landingpage/landing.jpeg);
  margin-left: 40%;
  /* width: 100%; */
  /* z-index: 100; */
  height: 44vh;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const InnerDiv = styled.div`
  width: 100%;
  /* background-color: #142b12; */
  height: 66%;
  margin: 20px 20px;
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const HiddenDiv = styled.div`
  width: 15%;
  height: 33%;
  background-color: black;
  opacity: 0;
  font-size: 20px;
  text-align: center;
  padding-top: 150px;
  color: white;
  position: absolute;
  transform: translate(-10%, -10%);

  :hover {
    background-color: #142b12;
    /* border-color: white; */
    transform: translate(-5%, -3.5%);
    display: inline-block;
    opacity: 0.8;
    transition: all 250ms ease-in;
    cursor: pointer;
  }
`;
export const FooterTitle = styled.div`
  width: 100%;
  /* background-color: chocolate; */
  height: 30%;
  padding: 10px 30px;
  font-size: 50px;
  font-family: "normal";
  text-align: center;
  color: white;
`;
export const FooterDivText = styled.div`
  width: 100%;
  /* background-color: #142b12; */
  /* background-color: #84b96e; */
  height: 60%;
  padding: 30px;
  font-size: 15px;
  text-align: center;
  color: white;
`;
