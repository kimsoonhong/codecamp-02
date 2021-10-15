import styled from "@emotion/styled";
import { UpCircleFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  padding-top: 20px;

  /* background-color: #2a652f; */
  background-image: url(/images/gc/a.png);
  background-size: cover;
  height: 260px;
`;

export const Title = styled.div`
  margin: auto;
  font-size: 50px;
  font-family: "live";
  font-weight: bold;
`;

export const Email = styled.div`
  margin: auto;
  font-size: 22px;
  padding: 20px 0px;
`;

export const Bottom = styled.div`
  margin: auto;
  font-size: 12px;
  padding: 20px 0px;
`;

export const ArrowUP = styled(UpCircleFilled)`
  position: fixed;
  font-size: 40px;
  bottom: 40px;
  right: 40px;

  opacity: ${(props: any) => props.scrollY - 530};
  pointer-events: ${(props: any) => (props.scrollY >= 477 ? "auto" : "none")};
  cursor: pointer;
  border-radius: 50%;
  border: none;
  transition: all 200ms ease-in;
`;
