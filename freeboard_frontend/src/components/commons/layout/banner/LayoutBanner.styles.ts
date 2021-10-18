import styled from "@emotion/styled";


export const Wrapper = styled.div`
  display: block;
  padding-top: 100px;
  height: auto;
  width: 100%;
  margin-bottom: 34px;

`;

export const SliderItem = styled.img`
  width: 200vh;

  height: 400px;
  // @ts-ignore
  opacity: ${(props: any) => 1.2 - props.scrollY / 430};

  object-fit: cover;

  object-position: ${(props: any) => props.scrollY / 50}%;
`;
