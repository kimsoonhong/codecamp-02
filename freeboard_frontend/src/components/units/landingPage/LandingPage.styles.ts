// @ts-ignore

import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
`;

export const LeftWrapper = styled.div`
  width: 50%;
  /* background-color: tomato; */
  /* box-sizing: border-box; */
  display: flex;
  align-items: center;
  padding: 0px 100px;
  background-image: url(/images/gc/a.png);
`;

export const RightWrapper = styled.div`
  width: 50%;
  /* background-color: tomato; */
  /* box-sizing: border-box; */
  display: flex;
  align-items: center;
  padding: 0px 100px;
`;

export const ShowPage = styled.div`
  width: 100%;
  text-align: center;

  /* background-color: brown; */
  /* position: absolute;
  top: 50%;
  transform: translate(-50%); */
`;

export const Mant = styled.div`
  font-size: 68px;
  text-align: center;
  font-family: "live";
  color: white;
  /* background-color: yellow; */
  font-weight: bolder;
  padding-bottom: 60px;
  /* padding-right: 30px; */
  position: relative;
  margin: auto;
  display: inline-block;

  :after {
    /* animation: 0.5s; */
    content: "";
    display: block;
    position: absolute;
    top: 25px;
    right: -30px;
    height: 65px;
    width: 3px;
    border-radius: 15px;
    display: ${(props) => (props.isActive ? "block" : "none")};
    background-color: white;
    /* animation: 0.5s; */
    /* animation-iteration-count: infinite; */
  }
`;

// export const #active = styled.div`
//   display: none;
// `;

export const Banner = styled.div`
  font-size: 30px;
  color: white;
  /* background-color: violet; */
  font-family: "normal";
  text-align: center;
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

export const InnerText = styled.div`
  text-align: end;
  margin: auto;
  color: white;
  padding-right: 15%;
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
  margin: auto;
  padding-bottom: 50px;
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
