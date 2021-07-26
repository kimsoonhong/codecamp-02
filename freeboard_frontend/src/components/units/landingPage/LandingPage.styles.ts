import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-image: url(/images/landingpage/main.png);
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const LeftWrapper = styled.div`
  background-image: url(/images/layout/no_3.jpg);
  width: 40%;
  height: 100vh;
`;
export const ShowPage = styled.div`
  width: 30%;
  height: 70%;
  position: absolute;
  top: 50%;
  right: 60%;
  transform: translate(0, -50%);
  background: none;
  z-index: 1;
  background-color: red;
  padding: 60px;
  padding-top: 5%;
`;
export const RightWrapper = styled.div`
  background-color: green;
  width: 60%;
  height: 100vh;
`;
export const ShowLoginPage = styled.div`
  background-color: gray;
  width: 50%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 40%;
  padding: 60px;
  padding-top: 5%;
  transform: translate(0, -50%);
`;

export const Mant = styled.div`
  color: white;
  background-color: black;
  font-size: 40px;
  display: inline-block;
  position: relative;
  margin: auto;
  font-family: "live";
  font-weight: bolder;
  text-align: center;
  /* width: 70%; */

  :after {
    content: "";
    display: block;
    position: absolute;
    bottom: 2px;
    right: -20px;
    height: 60px;
    width: 3px;
    border-radius: 15px;
    display: ${(props) => (props.isActive ? "block" : "none")};
    background-color: white;
  }
`;

export const Banner = styled.div`
  padding-top: 10%;
  color: white;
  background-color: blueviolet;
  text-align: center;
  font-family: "normal";
  font-size: 25px;
`;
export const Title = styled.div`
  color: white;
  width: 100%;
  background-color: brown;
  font-family: "live";
  text-align: center;
  font-size: 80px;
`;
export const InnerText = styled.div`
  color: white;
  background-color: cadetblue;
  text-align: end;
`;

export const Login = styled.div`
  width: 100%;
  height: 100%;
  background-color: lemonchiffon;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 200px;
  margin: auto;
  padding-bottom: 50px;
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 130px;
  margin: auto;
  background-color: lightblue;
`;
export const LoginInput = styled.input`
  border: none;
  height: 52px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  width: 70%;
  background-color: violet;
`;
export const LoginButton = styled.button`
  width: 102px;
  height: 52px;
  background-color: #2a652f;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 2px;
`;

export const Div = styled.div``;
