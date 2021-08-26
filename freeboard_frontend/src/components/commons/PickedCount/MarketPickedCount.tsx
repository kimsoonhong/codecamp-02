import styled from "@emotion/styled";

const Wrapper = styled.div`
  /* background-color: black; */
  padding-right: 10px;
  cursor: pointer;

  margin: 0px;
`;

const PickImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px;
`;

const Count = styled.div`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  /* background-color: salmon; */
  margin: 0px;
`;

export default function MarKetPickedCount(props: any) {
  return (
    <>
      <Wrapper onClick={props.onClick}>
        <PickImg src="/images/market/pick.png" />
        <Count> {props.Count} </Count>
      </Wrapper>
    </>
  );
}
