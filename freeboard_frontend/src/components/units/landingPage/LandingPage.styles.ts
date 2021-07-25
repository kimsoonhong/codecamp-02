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
  transform: translate(0, -50%);
`;

export const Mant = styled.div`
  color: white;
  background-color: black;
  font-size: 40px;
  display: inline-block;
  position: relative;
  :after {
    content: "";
    display: block;
    position: absolute;
    bottom: 3px;
    right: -30px;
    height: 60px;
    width: 3px;
    border-radius: 15px;
    display: ${(props) => (props.isActive ? "block" : "none")};
    background-color: white;
`;
export const Banner = styled.div`
  color: white;
`;
export const Title = styled.div`
  color: white;
`;
export const InnerText = styled.div`
  color: white;
`;

export const Login = styled.div``;
export const LoginWrapper = styled.div``;
export const LoginInput = styled.input``;
export const LoginButton = styled.button``;
export const ButtonWrapper = styled.div``;
export const Image = styled.div``;

export const Active = styled.div``;
