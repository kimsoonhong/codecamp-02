import styled from "@emotion/styled";


interface IProps {
  scrollY: any;
}

export const Wrapper = styled.div`
  height: ${(props: IProps) => (props.scrollY > 50 ? 64 : 100)}px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  width: 100%;
  z-index: 12;
  position: fixed;

  /* animation: 200ms ease-in all; */
  transition: ease-in 200ms all;
  min-width: 600px;
  /* transition: 350ms all ease-in-out; */

`;

export const InnerWrapper = styled.div`
  width: 1400px;
  padding: 0px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  line-height: 100px;

`;

export const InnerLogo = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #132b12;
  cursor: pointer;
  font-weight: bold;
  font-family: "live";
  font-style: italic;

`;

export const InnerButton = styled.span`
  margin: 18px;
  color: #142b12;
  cursor: pointer;

  font-family: "normal";
  font-weight: bolder;
  font-size: 25px;
`;

export const Menu1 = styled.div`
  height: 100px;
  font-size: 20px;
  border-bottom: 2px gray solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  :hover {
    font-weight: bolder;
    cursor: pointer;
    background-color: whitesmoke;
  }
`;

export const Menu3 = styled.div`
  height: 75px;
  font-size: 20px;
  text-align: center;
  line-height: 75px;
  border-bottom: 2px gray solid;
  :hover {
    font-weight: bolder;
    cursor: pointer;
    background-color: whitesmoke;
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const LiftWrapper = styled.div`
  width: 50%;
  /* background-color: whitesmoke; */
  text-align: center;
`;
export const LiftWrapperImg = styled.img`
  width: 120px;
  height: 120px;
  background-color: green;
  border-radius: 50%;
`;

export const LiftWrapperUserName = styled.div`
  padding-top: 20px;
  font-size: 30px;
  font-weight: bolder;
`;
export const LiftWrapperAmountText = styled.div`
  padding-top: 20px;
  font-size: 16px;
`;

export const RightWrapper = styled.div`
  width: 50%;
  /* background-color: gray; */
  text-align: center;
  border-left: 2px whitesmoke solid;
`;
export const RightWrapperText = styled.div`
  padding-top: 30px;
`;
export const RightWrapperInput = styled.input`
  width: 50%;
  height: 52px;
  line-height: 52px;
  font-size: 16px;
  border: none;
  text-align: center;
  margin-bottom: 24px;
`;
export const RightWrapperButton = styled.button`
  width: 90%;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: whitesmoke;
  margin: 0px;
  :hover {
    color: #2a653f;
    background-color: #84b96e;
    transition: ease-in 200ms all;
    font-weight: bold;
  }
`;
