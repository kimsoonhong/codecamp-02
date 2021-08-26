import styled from "@emotion/styled";

const buttonStyles = {
  1: "#2a652f",
  2: "yellow",
  3: "red",
};

const MyBtn = styled.button`
  background-color: ${(props) => (props.isActive ? "aqua" : "")};
  width: 380px;

  background-color: ${(props) => buttonStyles[props.buttonStyles]};
  color: white;
  font-weight: bolder;
  margin: 0px;
  height: 64px;
  font-weight: 500;
  font-size: 20px;
  border-radius: 16px;

  :hover {
    cursor: pointer;
    background-color: #142b12;
    transition: ease-in 200ms all;
  }
`;

const ssss = styled.button``;

export default function button01(props) {
  return (
    <MyBtn isActive={props.isActive} buttonStyles={props.buttonStyles}>
      로그인버튼
    </MyBtn>
  );
}
