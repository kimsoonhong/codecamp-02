import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  margin: auto;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: #2a653f;
    background-color: whitesmoke;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: #2a653f;
    background-color: whitesmoke;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  border: 2px solid #142b12;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: whitesmoke;
    font-weight: bold;
    animation: all 3000ms ease-in;
  }
`;

export const WrapperList = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
`;

export const Page = styled.div`
  margin: 0px 15px;
  cursor: pointer;
  font-size: 22px;
  width: 20px;
  text-align: center;

  :hover {
    font-weight: bold;
    animation: all 3000ms ease-in;
  }
`;